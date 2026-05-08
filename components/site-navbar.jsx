"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { clinic, navigationLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--hairline) bg-black/88 backdrop-blur-xl">
      <div className="shell flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0" onClick={() => setIsOpen(false)}>
          <p className="font-heading-display text-[1.55rem] leading-none tracking-[0.02em] text-(--ink) sm:text-[1.8rem]">
            Sri Krishna Dental Clinic
          </p>
          <p className="mt-1 font-ui text-[11px] uppercase tracking-[0.24em] text-(--ash)">
            Peterwar, Jharkhand
          </p>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-full px-4 py-2 font-ui text-[13px] font-medium tracking-[0.04em] transition-colors",
                pathname === link.href
                  ? "bg-secondary text-(--ink)"
                  : "text-(--charcoal) hover:text-(--ink)"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4 text-[13px]")}
          >
            Book inquiry
          </Link>
        </div>

        <div className="hidden lg:block">
          <a
            href={clinic.phoneHref}
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-3 text-[13px] text-(--charcoal) hover:text-(--ink)")}
          >
            Call clinic
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-(--hairline-strong) bg-secondary text-(--ink) lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-(--hairline) bg-(--surface-card) lg:hidden">
          <div className="shell grid gap-3 py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-xl border px-4 py-3 font-ui text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "border-(--hairline-strong) bg-secondary text-(--ink)"
                    : "border-(--hairline) bg-transparent text-(--charcoal)"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className={cn(buttonVariants({ size: "lg" }), "justify-center")}>Book inquiry</Link>
            <a href={clinic.phoneHref} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "justify-center")}>Call clinic</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}