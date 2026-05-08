import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock3, HeartPulse, ShieldCheck, SmilePlus, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { heroGallery, hygieneTips } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const routines = [
  {
    title: "Morning essentials",
    points: [
      "Brush gently for two minutes with a soft-bristle brush.",
      "Clean along the gumline instead of rushing through the front teeth only.",
      "Choose water after sugary tea, snacks, or biscuits when possible.",
    ],
  },
  {
    title: "Night routine",
    points: [
      "Never skip brushing before bed, especially after sweet foods or sticky snacks.",
      "Use floss or an interdental cleaner where teeth trap food repeatedly.",
      "Watch for bleeding gums, pain, or sensitivity and consult the clinic early.",
    ],
  },
];

const tipIcons = [SmilePlus, Clock3, ShieldCheck, Sparkles, HeartPulse, CheckCircle2];

export const metadata = {
  title: "Dental Hygiene Tips | Sri Krishna Dental Clinic",
  description:
    "Dental hygiene tips for families, children, and adults from Sri Krishna Dental Clinic.",
};

export default function HygienePage() {
  return (
    <main className="page-frame">
      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        <section className="hero-grid gap-8">
          <div className="space-y-5">
            <Badge variant="secondary">Dental hygiene tips</Badge>
            <p className="editorial-kicker">Between appointments</p>
            <h1 className="editorial-display max-w-4xl">
              Good hygiene guidance should feel helpful, practical, and easy to follow.
            </h1>
            <p className="section-subtitle">
              This page gives the website educational value for real users. It helps families understand the small
              daily habits that protect teeth, gums, and long-term smile health between clinic visits.
            </p>
          </div>

          <div className="surface-card p-8">
            <p className="editorial-kicker">Small habits, real effect</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Twice-daily brushing and early check-ups prevent many avoidable problems.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Clear guidance makes a clinic feel useful even when a patient is not in treatment.</p>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Early attention to bleeding gums, sensitivity, or pain is always easier than delay.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-glow" style={{ "--section-glow": "var(--accent-green-glow)" }}>
          <div className="max-w-3xl space-y-4">
            <p className="editorial-kicker">Key guidance</p>
            <h2 className="editorial-section-title">Patients trust clinics that help them between visits too.</h2>
          </div>
          <div className="feature-grid mt-10">
          {hygieneTips.map((tip, index) => {
            const Icon = tipIcons[index % tipIcons.length];

            return (
              <Card key={tip.title} className="bg-card py-5">
                <CardHeader className="space-y-3">
                  <span className="flex size-12 items-center justify-center rounded-full border border-input bg-secondary text-(--ash)">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle>{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
          </div>
        </section>

        <section className="story-split">
          <div className="space-y-5">
            <p className="editorial-kicker">Simple routines that matter</p>
            <h2 className="editorial-section-title">Small daily steps create the real long-term gains.</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {routines.map((routine) => (
                <div key={routine.title} className="feature-card-bordered">
                  <p className="font-ui text-lg font-medium text-foreground">{routine.title}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-(--body-text)">
                    {routine.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit px-4")}>
              Ask the clinic a question
            </Link>
          </div>

          <div className="grid gap-4">
            <article className="cover-frame relative aspect-4/5 overflow-hidden">
              <Image
                src={heroGallery[3].src}
                alt={heroGallery[3].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/25 to-transparent p-5">
                <p className="font-ui text-sm leading-6 text-white/86">{heroGallery[3].caption}</p>
              </div>
            </article>

            <article className="surface-elevated overflow-hidden p-0">
              <div className="relative aspect-16/10">
                <Image
                  src={heroGallery[4].src}
                  alt={heroGallery[4].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="editorial-kicker">Why it matters</p>
                <p className="mt-3 body-copy">
                  Visual guidance for models, brushing habits, and child-focused care makes this page feel useful in a
                  practical way, not just decorative.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}