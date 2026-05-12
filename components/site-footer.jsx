import Link from "next/link";
import { ExternalLink, Mail, MapPin, PhoneCall, Sparkles } from "lucide-react";

import { clinic, navigationLinks, visitingHours } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--divider-soft) bg-background py-16 sm:py-20">
      <div className="shell space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.85fr_0.95fr_0.85fr]">
          <div className="space-y-4">
            <p className=" text-[1.8rem] leading-none tracking-[0.02em] text-(--ink)">
              Sri Krishna Dental & Aesthetic Clinic
            </p>

            <p className="font-ui text-sm font-medium text-(--ink)">{clinic.doctor}</p>
            <p className="font-ui text-sm font-medium text-(--ink)">Dental Surgeon</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-(--hairline-strong) bg-secondary px-3 py-1.5 font-ui text-[12px] uppercase tracking-[0.18em] text-(--body-text)">
              <span className="size-2 rounded-full bg-(--accent-green)" />
              Available
            </div>
        </div>

          <div>
            <p className="editorial-kicker">Pages</p>
            <div className="mt-5 grid gap-3 text-sm text-(--charcoal)">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-ui transition-colors hover:text-(--ink)">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="editorial-kicker">Hours</p>
            <div className="mt-5 grid gap-3 text-sm text-(--charcoal)">
              {visitingHours.map((slot) => (
                <p key={slot} className="font-ui leading-6">
                  {slot}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="editorial-kicker">Contact</p>
            <div className="mt-5 grid gap-3 text-sm text-(--charcoal)">
              <a href={clinic.phoneHref} className="inline-flex min-w-0 items-start gap-2 font-ui hover:text-(--ink)">
                <PhoneCall className="mt-0.5 size-4 shrink-0 text-(--ash)" />
                <span>{clinic.phoneDisplay}</span>
              </a>
              <a href={clinic.emailHref} className="inline-flex min-w-0 items-start gap-2 font-ui hover:text-(--ink)">
                <Mail className="mt-0.5 size-4 shrink-0 text-(--ash)" />
                <span className="break-all">{clinic.email}</span>
              </a>
              <a href={clinic.instagramHref} target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-start gap-2 font-ui hover:text-(--ink)">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-(--ash)" />
                <span className="break-all">{clinic.instagramHandle}</span>
              </a>
              <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-start gap-2 font-ui hover:text-(--ink)">
                <MapPin className="mt-0.5 size-4 shrink-0 text-(--ash)" />
                <span>{clinic.address}</span>
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-(--ash)" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-soft flex flex-col gap-3 pt-6 text-xs text-(--ash) sm:flex-row sm:items-center sm:justify-between">
          <p className="font-ui uppercase tracking-[0.16em]">Sri Krishna Dental & Aesthetic Clinic</p>
          <p className="font-ui">Built with care by <Link href="https://gyandeeparyan.vercel.app/" target="_blank" rel="noreferrer"><p className="underline font-semibold">Aryan Studios</p></Link></p>
        </div>
      </div>
    </footer>
  );
}