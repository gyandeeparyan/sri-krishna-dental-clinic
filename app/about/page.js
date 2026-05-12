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
        <section className="story-split">
          <div className="space-y-5">
            <p className="editorial-kicker">What patients can expect</p>
            <h2 className="editorial-section-title">Your comfort and care come first</h2>
            <div className="grid gap-4">
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <Stethoscope className="-mt-1.5 size-10 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">Gentle, pain-free treatment</p>
                    <p className="mt-2 body-copy">We use the latest techniques and take time to explain every step. Your comfort is our priority, and we ensure a calm, relaxed experience for every patient.</p>
                  </div>
                </div>
              </div>
              <div className="feature-card-bordered">
                <div className="flex items-start gap-3">
                  <MapPin className="-mt-1.5 size-10 text-(--accent-green)" />
                  <div>
                    <p className="font-ui text-lg font-medium text-foreground">Trusted local care, whenever you need it</p>
                    <p className="mt-2 body-copy">Right here in your community. Easy to reach by phone, email, or WhatsApp—and we're always ready to answer your questions about dental health.</p>
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
                We're a trusted neighborhood clinic where you're never just a patient number. Dr. Abhijeet Prakash and the team take time to listen, understand your concerns, and build real relationships with families in our community. Every visit is personal—we remember your history and your goals for your family's oral health.
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