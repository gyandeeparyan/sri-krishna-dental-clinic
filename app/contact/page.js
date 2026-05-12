import Image from "next/image";
import { Clock3, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinic, heroGallery, visitingHours } from "@/lib/site-data";

const methods = [
  {
    icon: PhoneCall,
    title: "Call the clinic",
    value: clinic.phoneDisplay,
    href: clinic.phoneHref,
    text: "Best for appointments, urgent pain, and direct consultation guidance.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: clinic.phoneDisplay,
    href: clinic.whatsappHref,
    text: "A simple option for patients who prefer messaging first before visiting.",
  },
  {
    icon: Mail,
    title: "Email",
    value: clinic.email,
    href: clinic.emailHref,
    text: "Useful for follow-up questions, timing preferences, or general inquiries.",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: clinic.address,
    href: clinic.mapsHref,
    text: "Open maps and navigate directly to the clinic location in Peterwar.",
  },
];

export const metadata = {
  title: "Contact | Sri Krishna Dental Clinic",
  description:
    "Contact Sri Krishna Dental Clinic by phone, WhatsApp, email, or inquiry form.",
};

export default function ContactPage() {
  return (
    <main className="page-frame">
      <div className="shell space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        <section className="hero-grid gap-8">
          <div className="space-y-5">
            <Badge variant="secondary">Contact the clinic</Badge>
            <p className="editorial-kicker">Reach the clinic</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map(({ icon: Icon, title, value, href, text }) => (
                <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="surface-card hover-rise min-w-0 p-6">
                  <Icon className="size-5 text-(--ash)" />
                  <p className="mt-4 font-ui text-lg font-medium text-foreground">{title}</p>
                  <p className="mt-2 break-all text-sm font-medium text-foreground">{value}</p>
                  <p className="mt-2 body-copy">{text}</p>
                </a>
              ))}
            </div>
          </div>

          <article className="cover-frame relative min-h-80 overflow-hidden">
            <Image
              src={heroGallery[6].src}
              alt={heroGallery[6].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6">
              <p className="editorial-kicker text-white/70">What to expect</p>
              <p className="mt-3 max-w-md font-ui text-base font-medium leading-7 text-white">
                Reach out in the way that feels easiest. The clinic can respond with timing, guidance, and the right next step.
              </p>
            </div>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <Card className="surface-card py-6">
              <CardHeader>
                <p className="editorial-kicker">Clinic hours</p>
                <CardTitle>Visiting hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 size-5 text-(--ash)" />
                    <ul className="space-y-2 text-sm leading-7 text-(--body-text)">
                      {visitingHours.map((slot) => (
                        <li key={slot}>{slot}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="text-link inline-flex items-center gap-2">
                    Open location in maps
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="surface-elevated p-6">
              <p className="editorial-kicker">Helpful details</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-(--body-text)">
                <p>Share the main concern, the best callback number, and any preferred date.</p>
                <p>If the concern feels urgent, calling the clinic is still the fastest route.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}