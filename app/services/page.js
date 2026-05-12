import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, HeartPulse, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { heroGallery, serviceCategories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Stethoscope,
    title: "Relief-focused treatment",
    text: "Support for pain, sensitivity, and immediate dental concerns with a clear next-step plan.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive support",
    text: "Guidance that helps patients stay ahead of decay, gum issues, and avoidable discomfort.",
  },
  {
    icon: Sparkles,
    title: "Smile confidence",
    text: "Care options that help restore function while improving confidence in the look of the smile.",
  },
];

export const metadata = {
  title: "Services | Sri Krishna Dental & Aesthetic Clinic",
  description:
    "Browse the core services offered by Sri Krishna Dental Clinic, from preventive check-ups to restorative and family dental care.",
};

export default function ServicesPage() {
  return (
    <main className="page-frame">
      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        <Badge variant="secondary">Services Available today</Badge>
        <section className="section-glow" style={{ "--section-glow": "var(--accent-red-glow)" }}>
          <div className=" grid gap-5 lg:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Card key={service.title} className="bg-card py-5">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full border border-input bg-secondary font-ui text-sm font-medium text-foreground">
                    0{index + 1}
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}