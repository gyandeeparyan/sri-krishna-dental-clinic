"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { clinic, navigationLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--hairline) bg-background/88 backdrop-blur-xl">
      <div className="shell relative flex min-h-16 flex-col gap-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="flex h-16 w-auto items-center"
          onClick={() => setIsOpen(false)}
          aria-label={clinic.name}
        >
          <Image
            src="/brand-mark.png"
            alt={clinic.name}
            width={100}
            height={96}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Sticky buttons positioned absolutely on mobile */}
        <div className="absolute top-4 right-4 z-51 flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-(--hairline-strong) bg-secondary text-(--ink)"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

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

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
        </div>
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
