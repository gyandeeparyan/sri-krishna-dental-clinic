"use client";

import { useState } from "react";

import { LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  concern: "",
  website: "",
};

export function LeadForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    setErrors({});

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const payload = await response.json();

    if (!response.ok) {
      setErrors(payload.errors ?? {});
      setStatus({
        type: "error",
        message:
          payload.message ?? "We could not send your request. Please review the form and try again.",
      });
      setIsSubmitting(false);
      return;
    }

    setFormData(initialForm);
    setStatus({
      type: "success",
      message: payload.message ?? "Thanks. The clinic team can review your request and contact you back.",
    });
    setIsSubmitting(false);
  }

  return (
    <Card className="surface-card py-6">
      <CardHeader>
        <p className="editorial-kicker">Inquiry form</p>
        <CardTitle className="text-3xl text-(--ink)">Request a callback</CardTitle>
        <CardDescription className="text-sm leading-7 text-(--charcoal)">
          Share a few details and the clinic can follow up with the right next step for consultation, pain relief,
          or a routine check-up.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="ui-label" htmlFor="fullName">
                Full name
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Patient or parent name"
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName ? <p className="text-sm text-destructive">{errors.fullName}</p> : null}
            </div>

            <div className="space-y-2">
              <label className="ui-label" htmlFor="phone">
                Phone number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Preferred callback number"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? <p className="text-sm text-destructive">{errors.phone}</p> : null}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="ui-label" htmlFor="email">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Optional"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
            </div>

            <div className="space-y-2">
              <label className="ui-label" htmlFor="preferredDate">
                Preferred date
              </label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="ui-label" htmlFor="concern">
              Dental concern
            </label>
            <Textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              placeholder="Tell the clinic what you need help with"
              className="min-h-32"
              aria-invalid={Boolean(errors.concern)}
            />
            {errors.concern ? <p className="text-sm text-destructive">{errors.concern}</p> : null}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-fit px-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Sending request...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Submit inquiry
              </>
            )}
          </Button>

          {status.message ? (
            <p
              className={status.type === "success" ? "text-sm text-(--accent-green)" : "text-sm text-destructive"}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}