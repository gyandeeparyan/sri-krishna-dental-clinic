import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, MapPin, ShieldCheck, SmilePlus, Stethoscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { clinic, heroGallery, visitingHours } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: SmilePlus,
    title: "Friendly patient communication",
    text: "The clinic experience is positioned around simple explanations, reduced anxiety, and a welcoming tone for families.",
  },
  {
    icon: ShieldCheck,
    title: "Trust built through clarity",
    text: "Patients can now see services, hygiene guidance, and direct contact options without relying on unclear promotional language.",
  },
  {
    icon: HeartPulse,
    title: "Long-term oral health",
    text: "The clinic message balances treatment, prevention, and better home-care habits for children and adults alike.",
  },
];

export const metadata = {
  title: "About | Sri Krishna Dental Clinic",
  description:
    "Learn about the care philosophy, patient experience, and local dental approach at Sri Krishna Dental Clinic.",
};

export default function AboutPage() {
  return (
    <main className="page-frame">
      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        <section className="hero-grid gap-8">
          <div className="space-y-5">
            <Badge variant="secondary">About the clinic</Badge>
            <p className="editorial-kicker">Practice story</p>
            <h1 className="editorial-display max-w-4xl">
              A local practice presented with more calm, more structure, and more seriousness.
            </h1>
            <p className="section-subtitle">
              The clinic story now feels closer to the in-person experience: measured, practical, and patient-first.
              This page is less about promotion and more about tone, trust, and what care feels like before treatment begins.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="feature-card-bordered">
                <p className="editorial-kicker">Lead doctor</p>
                <p className="mt-4 font-ui text-2xl font-medium text-foreground">{clinic.doctor}</p>
                <p className="mt-3 body-copy">
                  Leading the practice with a focus on comfort, straightforward explanations, and dependable care.
                </p>
              </div>
              <div className="feature-card-bordered">
                <p className="editorial-kicker">Location</p>
                <p className="mt-4 font-ui text-2xl font-medium text-foreground">{clinic.address}</p>
                <p className="mt-3 body-copy">
                  Positioned for local families who want a clinic presence that feels reachable and clear.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card p-8">
            <p className="editorial-kicker">What this page does</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <SmilePlus className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Introduces the clinic personality before a patient books or calls.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Signals that treatment information and communication are handled with care.</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-(--ash)" />
                <p className="body-copy">Keeps the clinic grounded in place, hours, and local accessibility.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-glow" style={{ "--section-glow": "var(--accent-blue-glow)" }}>
          <div className="max-w-3xl space-y-4">
            <p className="editorial-kicker">Values</p>
            <h2 className="editorial-section-title">The clinic voice is built around comfort, clarity, and steadiness.</h2>
          </div>
          <div className="feature-grid mt-10">
          {values.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="bg-card py-5">
              <CardHeader className="space-y-3">
                <span className="flex size-12 items-center justify-center rounded-full border border-input bg-secondary text-(--ash)">
                  <Icon className="size-5" />
                </span>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
          </div>
        </section>

        <section className="story-split">
          <div className="space-y-5">
            <p className="editorial-kicker">What patients can expect</p>
            <h2 className="editorial-section-title">A cleaner patient journey, online and in person.</h2>
            <div className="grid gap-4">
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <Stethoscope className="mt-1 size-5 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">Straightforward service information</p>
                    <p className="mt-2 body-copy">The website now helps patients understand care options before they call or visit.</p>
                  </div>
                </div>
              </div>
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 size-5 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">Accessible local contact points</p>
                    <p className="mt-2 body-copy">Patients can call, email, message on WhatsApp, or open directions in one step.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-elevated p-6">
              <p className="font-ui text-lg font-medium text-foreground">Typical clinic hours</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-(--body-text)">
                {visitingHours.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-fit px-4")}>
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            <article className="cover-frame relative aspect-4/5 overflow-hidden">
              <Image
                src={heroGallery[0].src}
                alt={heroGallery[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/25 to-transparent p-5">
                <p className="font-ui text-sm leading-6 text-white/86">{heroGallery[0].caption}</p>
              </div>
            </article>

            <article className="surface-elevated p-6">
              <p className="editorial-kicker">Practice character</p>
              <p className="mt-4 body-copy">
                Patients should feel the clinic is grounded, local, and approachable. The imagery supports that by
                showing real consultation energy rather than abstract placeholders or technical metaphors.
              </p>
              <div className="mt-5 overflow-hidden rounded-lg border border-(--hairline-strong)">
                <div className="relative aspect-16/10">
                  <Image
                    src={heroGallery[1].src}
                    alt={heroGallery[1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}