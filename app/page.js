import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { clinic, heroGallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    icon: MessageCircle,
    label: "WhatsApp first",
    value: clinic.phoneDisplay,
    href: clinic.whatsappHref,
  },
  {
    icon: PhoneCall,
    label: "Call the clinic",
    value: clinic.phoneDisplay,
    href: clinic.phoneHref,
  },
  {
    icon: Mail,
    label: "Email care desk",
    value: clinic.email,
    href: clinic.emailHref,
  },
  {
    icon: MapPin,
    label: "Visit Peterwar",
    value: clinic.address,
    href: clinic.mapsHref,
  },
];

export const metadata = {
  title: "Sri Krishna Dental & Aesthetic Clinic",
  description:
    "Home page for Sri Krishna Dental & Aesthetic Clinic featuring modern dental care, family-friendly treatment guidance, and quick patient contact options.",
};

export default function Home() {
  return (
    <main className="page-frame">
      <section className="section-glow flex min-h-[calc(100svh-4rem)] items-center" style={{ "--section-glow": "var(--accent-orange-glow)" }}>
        <div className="shell py-8 sm:py-10 lg:py-12">
          {/* Mobile-first layout: show images first on small screens */}
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* Hero image - mobile first */}
            <div className="order-1 lg:order-2">
              <article className="cover-frame relative min-h-[240px] overflow-hidden sm:min-h-[280px] lg:min-h-[460px]">
                <Image
                  src={heroGallery[0].src}
                  alt={heroGallery[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent p-6">
                  <p className="mt-2 max-w-xs font-ui text-base font-medium leading-6 text-white">
                    Warm, direct care with a serious clinical presence.
                  </p>
                </div>
              </article>
            </div>

            {/* Content section - below image on mobile */}
            <div className="max-w-3xl space-y-7 order-2 lg:order-1">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="surface-elevated flex size-18 items-center justify-center rounded-3xl p-3 sm:size-20">
                    <Image
                      src="/brand-mark.png"
                      alt={clinic.name}
                      width={72}
                      height={72}
                      priority
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="editorial-kicker">Peterwar, Jharkhand</p>
                    <Badge variant="secondary">{clinic.doctor}</Badge>
                  </div>
                </div>

                <h1 className="max-w-5xl  editorial-display text-[clamp(2.6rem,7vw,5.25rem)] leading-[0.94] tracking-[-0.055em] text-(--ink) text-balance">
                  <span className="block">Sri Krishna</span>
                  <span className="block">Dental &amp; Aesthetic Clinic</span>
                </h1>

                <p className="max-w-3xl text-[1.05rem] leading-8 text-(--body-text) sm:text-[1.2rem]">
                  Dental care for families, with clarity from the first glance.
                </p>
                <p className="fine-copy max-w-2xl text-sm sm:text-base">
                  Warm, direct care with a serious clinical presence and treatment explanations that feel easy to follow.
                </p>
              </div>

              <div className="flex  gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-fit px-4")}>
                  Book inquiry
                </Link>
                <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit px-4")}>
                  Explore services
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 ">
                {contactCards.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="surface-card hover-rise min-w-0 p-5"
                  >
                    <Icon className="size-5 dark:text-(--ash)" />
                    <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.22em] dark:text-(--ash)">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop-only additional images */}
            <div className="hidden lg:grid gap-4 order-3">
              {[heroGallery[1], heroGallery[2]].map((image, index) => (
                <article key={image.src} className={cn("cover-frame relative overflow-hidden", index === 0 ? "aspect-4/5" : "aspect-[5/4]")}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/25 to-transparent p-5">
                    <p className="font-ui text-sm leading-6 text-white/86">{image.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}