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
  title: "Services | Sri Krishna Dental Clinic",
  description:
    "Browse the core services offered by Sri Krishna Dental Clinic, from preventive check-ups to restorative and family dental care.",
};

export default function ServicesPage() {
  return (
    <main className="page-frame">
      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        <section className="hero-grid gap-8">
          <div className="space-y-5">
            <Badge variant="secondary">Services</Badge>
            <p className="editorial-kicker">Treatment scope</p>
            <h1 className="editorial-display max-w-4xl">Dental care explained in patient-friendly language.</h1>
            <p className="section-subtitle">
              Instead of making patients guess what the clinic offers, this page lays out the major treatment areas
              in a way that feels practical, local, and easy to understand.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="feature-card-bordered p-5">
                  <Icon className="size-5 text-(--ash)" />
                  <p className="mt-3 font-ui text-lg font-medium text-foreground">{title}</p>
                  <p className="mt-2 body-copy">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-8">
            <p className="editorial-kicker">Care emphasis</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 text-(--accent-green)" />
                <p className="body-copy">Routine and restorative work are both visible instead of buried.</p>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="mt-1 size-5 text-(--accent-green)" />
                <p className="body-copy">Urgent pain and sensitivity are named clearly so patients know they can reach out.</p>
              </div>
              <div className="flex items-start gap-3">
                <CalendarClock className="mt-1 size-5 text-(--accent-green)" />
                <p className="body-copy">The path from reading to inquiry stays close, direct, and low-friction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-glow" style={{ "--section-glow": "var(--accent-red-glow)" }}>
          <div className="max-w-3xl space-y-4">
            <p className="editorial-kicker">Available today</p>
            <h2 className="editorial-section-title">Treatment categories now sit in a clear, comparable grid.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
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

        <section className="story-split">
          <div className="space-y-5">
            <p className="editorial-kicker">How treatment is framed</p>
            <h2 className="editorial-section-title">The services page answers the first questions patients usually have.</h2>
            <div className="grid gap-4">
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <HeartPulse className="mt-1 size-5 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">What if I have pain right now?</p>
                    <p className="mt-2 body-copy">The copy now clearly supports urgent concerns like tooth pain, sensitivity, and restorative needs.</p>
                  </div>
                </div>
              </div>
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <CalendarClock className="mt-1 size-5 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">What happens next?</p>
                    <p className="mt-2 body-copy">Patients can move from services to contact without losing context, which feels more natural and trustworthy.</p>
                  </div>
                </div>
              </div>
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">Why separate pages help</p>
                    <p className="mt-2 body-copy">Navigation now feels modern and intentional, instead of compressing the entire clinic into a single scroll-heavy page.</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-fit px-4")}>
              Ask about treatment
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            <article className="cover-frame relative aspect-4/5 overflow-hidden">
              <Image
                src={heroGallery[5].src}
                alt={heroGallery[5].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/25 to-transparent p-5">
                <p className="font-ui text-sm leading-6 text-white/86">{heroGallery[5].caption}</p>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {[heroGallery[2], heroGallery[6]].map((image) => (
                <article key={image.src} className="cover-frame relative aspect-4/5 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 18vw"
                    className="object-cover"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}