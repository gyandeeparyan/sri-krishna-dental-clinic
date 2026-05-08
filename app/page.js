import Image from "next/image";
import Link from "next/link";
import {
  CalendarClock,
  Clock3,
  ExternalLink,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
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

const clinic = {
  name: "Sri Krishna Dental Clinic",
  doctor: "Dr. Abhijeet Prakash",
  phoneDisplay: "+91 94315 40685",
  phoneHref: "tel:+919431540685",
  whatsappHref: "https://wa.me/919431540685",
  email: "care@srikrishnadentalclinic.in",
  emailHref: "mailto:care@srikrishnadentalclinic.in",
  address: "Peterwar, Jharkhand",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Dental+Clinic+Peterwar+Jharkhand",
  instagramHref: "https://www.instagram.com/sk_dentalclinic.2301/",
  instagramHandle: "@sk_dentalclinic.2301",
};

const differentiators = [
  {
    icon: HeartPulse,
    title: "Family dentistry with a calm chairside approach",
    text: "Consultations are positioned around patient comfort, clear explanations, and confident treatment planning.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive care that stays practical",
    text: "From routine cleanings to early diagnosis, the site now speaks to ongoing oral health instead of generic marketing copy.",
  },
  {
    icon: Sparkles,
    title: "Smile-focused restorative and cosmetic care",
    text: "The clinic presentation now reflects a real local practice offering both essential dental support and aesthetic improvements.",
  },
];

const services = [
  {
    title: "Check-ups and professional cleaning",
    description:
      "Routine oral exams, preventive cleaning, and practical hygiene advice to keep small problems from becoming major ones.",
  },
  {
    title: "Tooth pain and root canal support",
    description:
      "Fast attention for painful teeth, decay, and sensitivity with treatment planning designed around comfort and recovery.",
  },
  {
    title: "Fillings, crowns, and restorations",
    description:
      "Restore function, reduce discomfort, and bring back a natural smile with conservative restorative care.",
  },
  {
    title: "Smile improvement consultations",
    description:
      "Aesthetic polishing, tooth-colored options, and guidance for patients who want a cleaner, more confident smile.",
  },
  {
    title: "Kids and family visits",
    description:
      "A softer communication style for children and families who want a reassuring first experience with dental care.",
  },
  {
    title: "Future-ready appointment support",
    description:
      "The website is structured to grow into online scheduling, reminders, and confirmed booking flows when needed.",
  },
];

const visitingInfo = [
  {
    icon: PhoneCall,
    label: "Call the clinic",
    value: clinic.phoneDisplay,
    href: clinic.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: clinic.email,
    href: clinic.emailHref,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: clinic.address,
    href: clinic.mapsHref,
  },
];

const schedule = [
  "Mon to Sat: 10:00 AM - 1:30 PM",
  "Mon to Sat: 5:00 PM - 8:30 PM",
  "Sunday: By prior appointment",
];

const journey = [
  {
    step: "01",
    title: "Call, message, or submit your concern",
    text: "Patients can use the website form, phone number, or WhatsApp shortcut depending on what feels quickest.",
  },
  {
    step: "02",
    title: "Get guidance from the clinic",
    text: "The clinic can review symptoms, suggest the right visit type, and help patients plan a convenient time.",
  },
  {
    step: "03",
    title: "Visit with confidence",
    text: "The current inquiry flow supports real lead collection today and can later expand into full online appointment booking.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-24">
        <div className="orb orb-left" />
        <div className="orb orb-right" />
        <div className="shell">
          <div className="glass-card rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(224,245,247,0.86),rgba(230,244,239,0.9))] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="max-w-3xl space-y-6">
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3 rounded-full border border-primary/15 bg-white/70 px-4 py-2 shadow-sm">
                      <span className="flex size-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#8fd6ea,#3c7fca)] text-white shadow-lg shadow-cyan-200/50">
                        <SmilePlus className="size-5" />
                      </span>
                      <div>
                        <p className="font-heading text-xl font-bold uppercase leading-none text-foreground">
                          {clinic.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-primary/80">
                          Peterwar, Jharkhand
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-cyan-100 px-3 py-1 text-cyan-900">
                      {clinic.doctor}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
                      Real clinic details, contact paths, and local trust signals
                    </p>
                    <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-7xl">
                      Comfortable dental care for families, with clear guidance and healthier smiles.
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                      {clinic.name} is now presented as a real neighborhood practice with clear contact details,
                      visiting information, service guidance, and direct links to call, message, email, or locate
                      the clinic on maps.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={clinic.phoneHref}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-11 rounded-full px-6 text-sm shadow-lg shadow-cyan-200/60"
                      )}
                    >
                      <PhoneCall className="size-4" />
                      Call now
                    </a>
                    <a
                      href={clinic.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 rounded-full border-emerald-300 bg-emerald-50/80 px-6 text-sm text-emerald-800 hover:bg-emerald-100"
                      )}
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp
                    </a>
                    <Link
                      href="#inquiry"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-11 rounded-full border-primary/20 bg-white/70 px-6 text-sm text-primary hover:bg-primary/5"
                      )}
                    >
                      Request a callback
                    </Link>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {visitingInfo.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 p-4 shadow-sm transition-transform"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-10 items-center justify-center rounded-2xl bg-cyan-50 text-primary">
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">{label}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-700">{value}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="float-slow absolute -top-8 -left-4 hidden rounded-full bg-white/70 p-3 shadow-lg backdrop-blur md:block">
                    <span className="flex size-12 items-center justify-center rounded-full bg-cyan-50 text-primary">
                      <Sparkles className="size-6" />
                    </span>
                  </div>
                  <Card className="w-full border-primary/10 bg-white/78 shadow-[0_25px_60px_-35px_rgba(15,84,137,0.45)]">
                    <CardContent className="grid gap-4 p-4 sm:p-5">
                      <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(232,247,251,0.95),rgba(255,255,255,0.98))] p-4">
                        <div className="float-slow">
                          <Image
                            src="/clinic-hero.svg"
                            alt="Illustration of a calm dental clinic interior"
                            width={720}
                            height={560}
                            className="h-auto w-full"
                            priority
                          />
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-primary/10 bg-cyan-50/80 p-4">
                          <p className="text-3xl font-semibold text-primary">6+</p>
                          <p className="mt-1 text-sm">Service categories</p>
                        </div>
                        <div className="rounded-2xl border border-emerald-200/60 bg-emerald-50/80 p-4">
                          <p className="text-3xl font-semibold text-emerald-700">24/7</p>
                          <p className="mt-1 text-sm">Online access </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
              Services and patient guidance
            </Badge>
            <h2 className="section-title max-w-2xl text-slate-900">
              Real treatments, clearer service language, and a more trustworthy first impression.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              Instead of placeholder panels, the service section now reflects what patients actually look for when
              choosing a nearby dentist: pain relief, preventive care, restorations, children&apos;s visits, and practical
              guidance on what happens next.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 px-5 py-4 text-sm leading-7 text-slate-700 shadow-sm transition-transform"
                >
                  <p className="font-semibold text-slate-900">{service.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-card border-primary/10 bg-white/80 py-6">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-900">How visiting the clinic works</CardTitle>
              <CardDescription className="leading-7 text-slate-600">
                The site now mirrors a real patient journey, not a generic startup funnel.
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
              <Separator className="bg-primary/10" />
              <div className="rounded-[1.5rem] border border-primary/10 bg-cyan-50/70 p-4">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold text-slate-900">Typical clinic hours</p>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">
                      {schedule.map((slot) => (
                        <li key={slot}>{slot}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Card className="glass-card overflow-hidden border-primary/10 bg-white/80 py-0">
            <CardContent className="grid gap-5 p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(235,248,245,0.95),rgba(255,255,255,0.98))] p-4">
                <div className="float-delayed">
                  <Image
                    src="/smile-illustration.svg"
                    alt="Illustration of a dental smile consultation"
                    width={720}
                    height={560}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Badge variant="outline" className="border-primary/20 bg-white/60 text-primary">
              Contact and location
            </Badge>
            <h2 className="section-title max-w-2xl text-slate-900">
              Clear ways to reach the clinic, whether a patient wants to call, visit, or message first.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              This section adds the practical details that make a clinic website feel real: doctor name, address,
              phone contact, email, map navigation, and social presence for local patients.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={clinic.phoneHref} className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 transition-transform">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">Phone</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{clinic.phoneDisplay}</p>
                <p className="mt-2 text-sm text-slate-600">Direct line for appointments and dental concerns.</p>
              </a>
              <a href={clinic.emailHref} className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 transition-transform">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">Email</p>
                <p className="mt-2 max-w-full break-all text-base font-semibold leading-7 text-slate-900 sm:text-lg">{clinic.email}</p>
                <p className="mt-2 text-sm text-slate-600">Useful for follow-up questions and non-urgent requests.</p>
              </a>
              <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 transition-transform">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">Address</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{clinic.address}</p>
                <p className="mt-2 text-sm text-slate-600">Tap to open map directions for the clinic location.</p>
              </a>
              <a href={clinic.instagramHref} target="_blank" rel="noreferrer" className="hover-lift rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 transition-transform">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">Instagram</p>
                <p className="mt-2 max-w-full break-all text-base font-semibold leading-7 text-slate-900 sm:text-lg">{clinic.instagramHandle}</p>
                <p className="mt-2 text-sm text-slate-600">Follow the clinic for updates, awareness posts, and smile-care tips.</p>
              </a>
            </div>
          </div>
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
              Let patients leave their details or contact the clinic directly.
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              The form still collects leads, but it now sits beside real clinic contact options so the site feels more
              like a trustworthy local practice and less like a template.
            </p>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-primary/10 bg-white/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/75">Quick contact links</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <a href={clinic.phoneHref} className="font-semibold text-primary">Call</a>, <a href={clinic.emailHref} className="font-semibold text-primary">email</a>, or <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="font-semibold text-primary">open maps</a> if the patient prefers direct contact.
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

      <footer className="border-t border-primary/10 bg-white/55 py-8 backdrop-blur-sm">
        <div className="shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-3xl text-slate-900">{clinic.name}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
           {clinic.doctor} · {clinic.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={clinic.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-slate-700 hover:bg-cyan-50">
              <PhoneCall className="size-4 text-primary" />
              {clinic.phoneDisplay}
            </a>
            <a href={clinic.emailHref} className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-slate-700 hover:bg-cyan-50 sm:max-w-none">
              <Mail className="size-4 text-primary" />
              <span className="max-w-[14rem] break-all leading-5 sm:max-w-none">{clinic.email}</span>
            </a>
            <a href={clinic.instagramHref} target="_blank" rel="noreferrer" className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-slate-700 hover:bg-cyan-50 sm:max-w-none">
              <Sparkles className="size-4 text-primary" />
              <span className="max-w-[12rem] break-all leading-5 sm:max-w-none">{clinic.instagramHandle}</span>
            </a>
            <a href={clinic.mapsHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-slate-700 hover:bg-cyan-50">
              <ExternalLink className="size-4 text-primary" />
              Open location
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
