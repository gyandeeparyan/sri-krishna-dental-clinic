import Link from "next/link";
import {
  CalendarClock,
  HeartPulse,
  Leaf,
  MapPin,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: HeartPulse,
    title: "Gentle, family-first dental care",
    text: "A calm, reassuring experience designed for children, adults, and seniors alike.",
  },
  {
    icon: ShieldCheck,
    title: "Modern preventive approach",
    text: "Clear treatment plans with a focus on prevention, hygiene, and long-term oral health.",
  },
  {
    icon: Sparkles,
    title: "Aesthetic smile confidence",
    text: "Cosmetic consultations and smile-enhancing treatments shaped around natural-looking results.",
  },
];

const services = [
  "Routine dental check-ups and cleanings",
  "Tooth-colored fillings and restorative care",
  "Smile design and cosmetic consultations",
  "Root canal support and pain relief planning",
  "Kids and family dental guidance",
  "Crowns, bridges, and replacement planning",
];

const journey = [
  {
    step: "01",
    title: "Share your concern",
    text: "Tell the clinic what you need, your preferred timing, and how best to reach you.",
  },
  {
    step: "02",
    title: "Get a callback",
    text: "The team can review your request and guide you toward the right consultation path.",
  },
  {
    step: "03",
    title: "Book with confidence",
    text: "The current flow supports inquiries now and is ready to grow into full online booking later.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-24">
        <div className="shell">
          <div className="glass-card rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(224,245,247,0.86),rgba(230,244,239,0.9))] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3 rounded-full border border-primary/15 bg-white/70 px-4 py-2 shadow-sm">
                      <span className="flex size-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#8fd6ea,#3c7fca)] text-white shadow-lg shadow-cyan-200/50">
                        <SmilePlus className="size-5" />
                      </span>
                      <div>
                        <p className="font-heading text-xl leading-none text-foreground">
                          SrikRISHNA DENTAL CLINC
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-primary/80">
                          Calm care. Trusted smiles.
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/20 bg-white/60 px-3 py-1 text-primary">
                      Future-ready for online appointment booking
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
                      Promotional website and inquiry intake
                    </p>
                    <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-7xl">
                      A softer, trusted dental experience with a polished digital front door.
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                      SrikRISHNA DENTAL CLINC presents a welcoming clinic identity built around gentle care,
                      preventive treatment, and clear patient communication. Visitors can learn about the
                      clinic, explore services, and submit their details for a callback in one smooth flow.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="#inquiry"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-full px-6 text-sm shadow-lg shadow-cyan-200/60"
                      )}
                    >
                      Request a callback
                    </Link>
                    <Link
                      href="#services"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 rounded-full border-primary/20 bg-white/70 px-6 text-sm text-primary hover:bg-primary/5"
                      )}
                    >
                      Explore services
                    </Link>
                  </div>
                </div>

                <Card className="w-full max-w-md border-primary/10 bg-white/75 shadow-[0_25px_60px_-35px_rgba(15,84,137,0.45)]">
                  <CardHeader>
                    <CardTitle className="text-3xl text-slate-900">
                      Patient-first at every step
                    </CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-600">
                      Designed to inspire trust today and expand naturally into scheduled online bookings tomorrow.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-700">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-primary/10 bg-cyan-50/80 p-4">
                        <p className="text-3xl font-semibold text-primary">6+</p>
                        <p className="mt-1 text-sm">Core dental service highlights</p>
                      </div>
                      <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/80 p-4">
                        <p className="text-3xl font-semibold text-emerald-700">1</p>
                        <p className="mt-1 text-sm">Simple inquiry flow ready now</p>
                      </div>
                    </div>
                    <Separator className="bg-primary/10" />
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Leaf className="mt-0.5 size-4 text-emerald-600" />
                        <p>Soft traditional typography, calming gradients, and clinic-friendly visual cues.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CalendarClock className="mt-0.5 size-4 text-primary" />
                        <p>Inquiry capture now, with a clear content path toward future appointment automation.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Stethoscope className="mt-0.5 size-4 text-cyan-700" />
                        <p>Ideal for awareness campaigns, local promotion, and consultation-driven conversions.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="shell grid gap-6 md:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="glass-card border-primary/10 bg-white/75 py-5">
              <CardHeader className="space-y-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 text-primary shadow-inner">
                  <Icon className="size-6" />
                </span>
                <CardTitle className="text-2xl text-slate-900">{title}</CardTitle>
                <CardDescription className="leading-7 text-slate-600">{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="pb-16 sm:pb-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-900">
              Services and positioning
            </Badge>
            <h2 className="section-title max-w-2xl text-slate-900">
              Built to present the clinic as modern, caring, and deeply approachable.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              The homepage balances reassurance with professionalism. It highlights key treatments, a patient-focused
              care philosophy, and a direct inquiry path for visitors who want to hear back from the clinic.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-[1.5rem] border border-primary/10 bg-white/70 px-5 py-4 text-sm leading-7 text-slate-700 shadow-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-card border-primary/10 bg-white/80 py-6">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-900">Why this structure works</CardTitle>
              <CardDescription className="leading-7 text-slate-600">
                The experience is intentionally organized around trust, clarity, and conversion.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {journey.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 font-semibold text-primary">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="shell">
          <Card className="overflow-hidden border-primary/10 bg-[linear-gradient(135deg,rgba(48,98,171,0.96),rgba(66,160,182,0.94),rgba(73,173,140,0.93))] py-0 text-white shadow-[0_30px_80px_-35px_rgba(28,84,123,0.65)]">
            <CardContent className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-12">
              <div className="space-y-4">
                <Badge className="bg-white/14 text-white">Future expansion path</Badge>
                <h2 className="section-title max-w-2xl text-white">
                  Ready for the next phase: complete online appointment booking.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-cyan-50/95 sm:text-lg">
                  The current site already creates the right content flow for booking. When you are ready, the inquiry
                  form can evolve into date selection, time slots, doctor availability, and appointment confirmation
                  without redesigning the site from scratch.
                </p>
              </div>
              <div className="grid gap-4 rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <CalendarClock className="mt-0.5 size-5 text-cyan-100" />
                  <div>
                    <p className="font-medium">Slot-based appointment calendar</p>
                    <p className="mt-1 text-sm leading-6 text-cyan-50/85">Integrate availability rules when the clinic is ready.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="mt-0.5 size-5 text-cyan-100" />
                  <div>
                    <p className="font-medium">Confirmed patient intake</p>
                    <p className="mt-1 text-sm leading-6 text-cyan-50/85">Add reminders, confirmations, and admin review flows later.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <MapPin className="mt-0.5 size-5 text-cyan-100" />
                  <div>
                    <p className="font-medium">Local promotion ready</p>
                    <p className="mt-1 text-sm leading-6 text-cyan-50/85">Use the current site for awareness campaigns and local search visibility.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="inquiry" className="pb-20 sm:pb-28">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="outline" className="border-primary/20 bg-white/60 text-primary">
              Inquiry collection
            </Badge>
            <h2 className="section-title max-w-xl text-slate-900">
              Let visitors leave their details for a consultation callback.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              This form collects essential patient details and sends them to a server endpoint. It is ready for Vercel,
              and it can optionally forward submissions to a webhook when you decide where leads should be stored.
            </p>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-primary/10 bg-white/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">What it captures</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Full name, phone number, optional email, preferred date, and the visitor&apos;s dental concern.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-emerald-200/60 bg-emerald-50/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Deployment note</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  If you set a <span className="font-semibold">LEAD_WEBHOOK_URL</span> environment variable, the site will forward each submission automatically.
                </p>
              </div>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  );
}
