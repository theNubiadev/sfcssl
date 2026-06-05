"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Service from "@/components/Service";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Hero from "@/public/errands.jpeg";
import Cleaning from "@/public/cleaning.jpeg";
import {
  CheckCheck,
  Database,
  ShieldCheck,
  Star,
  HeartPlus,
  Metronome,
  BrickWallShield,
  Locate,
  Radar,
  ArrowRight,
  Clock,
  Users,
  BadgeCheck,
  Leaf,
} from "lucide-react";

/* ─── Types  */
interface Feature {
  label: string;
  desc: string;
  icon: React.ElementType;
}
interface ServiceItem {
  label: string;
  desc: string;
  icon: React.ElementType;
}
interface TrustBadge {
  label: string;
  icon: React.ElementType;
  desc: string;
}

/* ─── Data ─ */
const features: Feature[] = [
  {
    label: "Fully Insured",
    desc: "All staff are fully insured for your total peace of mind.",
    icon: CheckCheck,
  },
  {
    label: "DBS Checked",
    desc: "Every team member is background checked before joining.",
    icon: Database,
  },
  {
    label: "Professionally Trained",
    desc: "Ongoing training to the highest industry standards.",
    icon: ShieldCheck,
  },
  {
    label: "Community Trusted",
    desc: "Proudly recommended by clients across Greater Manchester.",
    icon: Star,
  },
];

const services: ServiceItem[] = [
  {
    label: "Domestic Cleaning",
    desc: "Regular, one-off and specialist home cleaning services.",
    icon: Metronome,
  },
  {
    label: "Commercial Cleaning",
    desc: "Offices, schools and retail spaces kept spotless every day.",
    icon: BrickWallShield,
  },
  {
    label: "Concierge & Hospitality",
    desc: "Tailored front-of-house and lifestyle support services.",
    icon: Locate,
  },
  {
    label: "Greater Manchester",
    desc: "Covering all corners of the region from our local base.",
    icon: Radar,
  },
  {
    label: "Healthcare Staffing",
    desc: "Qualified, compassionate healthcare professionals placed with care.",
    icon: HeartPlus,
  },
];

const trustBadges: TrustBadge[] = [
  {
    label: "DBS-Checked & Insured",
    icon: BadgeCheck,
    desc: "Total peace of mind through rigorous background checks and comprehensive liability coverage.",
  },
  {
    label: "Reliable, Contracted Delivery",
    icon: Clock,
    desc: "Whether recurring or one-off, we provide structured, dependable service level agreements (SLAs) tailored to your operational schedule.",
  },
  {
    label: "Local Expert Team",
    icon: Users,
    desc: "A dedicated, Manchester-based team known for consistency, professionalism, and high standards of service.",
  },
  {
    label: "Sustainability-Led Standards",
    icon: Leaf,
    desc: "We utilize eco-friendly, high-performance cleaning solutions that protect your environment and meet professional safety standards.",
  },
];

const testimonials = [
  {
    quote:
      "SF Care staff are reliable, professional and maintain a consistently high standard. Communication is excellent and every request is handled swiftly.",
    author: "James H.",
  },
  {
    quote:
      "Classrooms and facilities are left spotless every day. The team are professional, punctual and incredibly thorough, complete peace of mind.",
    author: "Edunmont Co",
  },
  {
    quote:
      "Nothing but fabulous efficient, reliable and friendly. They quickly understood our needs and delivered exactly what we required.",
    author: "Alana Joe",
  },
];

/* ─── Page ─ */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* 
          HERO — full-bleed dark panel, image right, text left
       */}
      <section
        id="home"
        className="relative min-h-screen bg-main flex items-center overflow-hidden"
      >
        {/* subtle cross-hatch texture */}
        <div
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8973a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* radial glows */}
        <div className="absolute w-17.5 h-17.5 rounded-full bg-[radial-linear(circle,rgba(200,151,58,0.09)_0%,transparent_65%)] top-1/2 -right-25 -translate-y-1/2 pointer-events-none" />
        <div className="absolute w-100 h-100 rounded-full bg-[radial-linear(circle,rgba(200,151,58,0.06)_0%,transparent_65%)] -bottom-24 left-[8%] pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-[7%] pt-36 pb-24 flex flex-col lg:flex-row items-center gap-14">
          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-2xl">
            {/* pill badge */}
            <div className="inline-flex items-center gap-2 bg-sub/10 border border-sub/20 text-sub text-[0.7rem] font-semibold tracking-[2.5px] uppercase px-4 py-1.5 rounded-full mb-8 font-mont">
              <span className="w-1.5 h-1.5 rounded-full bg-sub animate-pulse" />
              Proudly Serving Greater Manchester
            </div>

            <h1 className="font-mont text-[clamp(3rem,5.5vw,5rem)] font-bold leading-[1.08] text-white mb-6 tracking-tight">
              Where <em className="text-sub not-italic">Care</em> Meets
              <br />
              Professional Excellence
            </h1>

            <p className="text-[1.05rem] font-mont text-white/70 leading-[1.9] max-w-xl mb-10">
              SF Care and Support Services brings together healthcare staffing,
              professional cleaning, and personalised concierge support,
              delivered with warmth, integrity, and a genuine commitment to the
              communities we serve.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Button
                asChild
                size="lg"
                className="bg-sub text-main font-mont font-semibold text-[0.85rem] tracking-wide px-9 border-2 border-sub hover:bg-transparent hover:text-sub transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white font-mont text-[0.85rem] border-2 border-white/25  transition-all duration-300 px-9"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <Image
              src={Hero}
              alt="SF Care team"
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="h-0.76 bg-[linear-linear(90deg,#081529,#c8973a,#e2b660,#c8973a,#081529)]" />
      {/* 
          INTRO SPLIT — "A Service That Makes the Right Impression"
          (mirrors Colliers' image-left / text-right split section)
       */}
      <section className="bg-white px-6 lg:px-[7%] py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* image placeholder — swap for a real photo */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-main/5">
            <div className="absolute inset-0 bg-linear-to-br from-main/80 to-main/40 flex items-center justify-center">
              {/* <span className="font-mont text-white/30 text-[5rem] font-bold select-none">
                SF
              </span> */}
              <Image
                src={Cleaning}
                alt="Cleaning Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* gold accent block */}
            <div className="absolute bottom-0 left-0 w-2/3 h-1 bg-sub" />
          </div>

          <div>
            <p className="text-sub text-[0.72rem] font-mont font-bold tracking-[3px] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="font-mont text-[clamp(2rem,3.5vw,3rem)] font-bold text-main leading-tight mb-6">
              Big Enough to Deliver.
              <br />
              <em className="text-sub">Small Enough to Care.</em>
            </h2>
            <p className="font-mont text-main/70 leading-[1.9] mb-5 text-[0.95rem]">
              SF Care and Support Services Ltd was founded on a simple belief:
              that quality care and professional services should always come
              with a personal touch. We are not an agency or a franchise, we are
              a family-led local business, hands-on and deeply committed to the
              communities we serve.
            </p>
            <p className="font-mont text-main/70 leading-[1.9] mb-9 text-[0.95rem]">
              Fully insured, DBS-checked, and trusted by clients across Greater
              Manchester, our team brings skill, warmth, and integrity to every
              single job.
            </p>
            <Button
              asChild
              className="bg-main text-white font-mont font-medium text-[0.85rem] tracking-wide px-8 hover:bg-sub hover:text-main transition-all duration-300"
              size="lg"
            >
              <Link href="/about-us">
                Meet Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 
          SERVICE CARDS GRID
       */}
     
          <Service />

          


            {/* {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group bg-white rounded-2xl p-8 border border-main/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-sub/10 flex items-center justify-center group-hover:bg-sub transition-colors duration-300">
                    <Icon className="w-5 h-5 text-sub group-hover:text-main transition-colors duration-300" />
                  </div>
                  <h3 className="font-mont font-semibold text-main text-[1rem]">
                    {s.label}
                  </h3>
                  <p className="font-mont text-main/60 text-[0.88rem] leading-[1.8] flex-1">
                    {s.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sub text-[0.8rem] font-mont font-semibold tracking-wide hover:gap-2 transition-all duration-200"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })} */}

            {/* CTA card */}
            {/* <div className="bg-main rounded-2xl p-8 flex flex-col justify-between gap-6 sm:col-span-2 lg:col-span-1">
              <div>
                <p className="font-mont text-[1.6rem] font-bold text-white leading-tight mb-3">
                  Not sure which service you need?
                </p>
                <p className="font-mont text-white/60 text-[0.88rem] leading-[1.8]">
                  Get in touch and we will advise on the best solution for your
                  home or business.
                </p>
              </div>
              <Button
                asChild
                className="bg-sub text-main font-mont font-semibold text-[0.85rem] hover:bg-white hover:text-main transition-all duration-300 w-full"
                size="lg"
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div> 
        

      {/* */}
      {/* <Service /> */}
      {/* 
          TRUST BADGES — 4-column icon strip (Colliers "Why Trust Us")
       */}
      <section className="bg-white px-6 lg:px-[7%] py-20 border-t border-main/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sub text-[0.72rem] font-mont font-bold tracking-[3px] uppercase mb-3">
              The SF Care Standard
            </p>
            <h2 className="font-mont text-[clamp(2rem,3.5vw,3rem)] font-bold text-main">
              Why Clients Trust Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-main/5 bg-[#f7f5f1]"
                >
                  <div className="w-14 h-14 rounded-full bg-sub/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sub" />
                  </div>
                  <p className="font-mont font-semibold text-main text-[0.92rem]">
                    {b.label}
                  </p>

                  <p className="font-mont text-main text-sm">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* 
          TESTIMONIALS — 3-column cards (Colliers style)
       */}
      {/* <section className="bg-main px-6 lg:px-[7%] py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sub text-[0.72rem] font-mont font-bold tracking-[3px] uppercase mb-3">
              Client Stories
            </p>
            <h2 className="font-mont text-[clamp(2rem,3.5vw,3rem)] font-bold text-white">
              Kind Words from Happy Clients
            </h2>
            <p className="font-mont text-white/50 mt-3 text-[0.9rem]">
              Rated 5 stars for professionalism, friendliness and results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
              >
                {/* stars */}
      {/* <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-sub text-sub" />
                  ))}
                </div>
                <p className="font-mont text-white/80 text-[0.9rem] leading-[1.9] flex-1 italic">
                  "{t.quote}"
                </p>
                <p className="font-mont font-semibold text-sub text-[0.82rem] tracking-wide">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Full Testimonials component */}
      <Testimonials />

      {/* 
          CTA BAND — full-width (Colliers "Get a Free Quote Today")
       */}
      <section className="bg-sub px-6 lg:px-[7%] py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mont text-[clamp(2rem,4vw,3.2rem)] font-bold text-main mb-4">
            Get a Free, No-Obligation Quote Today
          </h2>
          <p className="font-mont text-main/70 text-[0.95rem] leading-[1.9] mb-10 max-w-xl mx-auto">
            Whether you need a one-off clean, regular care, or a tailored
            concierge service, we'll get back to you quickly with a personalised
            quote.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-main text-white font-mont font-semibold text-[0.9rem] tracking-wide px-12 hover:bg-main/90 transition-all duration-300"
          >
            <Link href="/contact">
              Request a Quote Today{" "}
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
