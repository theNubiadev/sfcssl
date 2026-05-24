"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  CheckCheck,
  Database,
  ShieldCheck,
  Star,
  HeartPlus,
  Metronome,
  Radar,
  BrickWallShield,
  Locate,
} from "lucide-react";
import Service from "@/components/Service";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/public/hero.png";
import Testimonials from "@/components/Testimonials";
interface Feature {
  label: string;
  icon: React.ElementType;
}
interface Service {
  label: string;
  icon: React.ElementType;
}

export default function Home() {
  const features: Feature[] = [
    {
      label: "Fully Insured",
      icon: CheckCheck,
    },
    {
      label: "DBS Checked",
      icon: Database,
    },
    {
      label: "Professionally Trained",
      icon: ShieldCheck,
    },
    {
      label: "Community Trusted",
      icon: Star,
    },
  ];
  const service: Service[] = [
    {
      label: "Healthcare Staffing",
      icon: HeartPlus,
    },
    {
      label: "Domestic Cleaning",
      icon: Metronome,
    },
    {
      label: "Commercial CLeaning",
      icon: BrickWallShield,
    },
    {
      label: "Concierge and Hospitality",
      icon: Locate,
    },
    {
      label: "Greater Manchester",
      icon: Radar,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="">
        <section
          id="home"
          className="relative min-h-screen bg-main flex items-center px-[6%] pt-40 pb-20 overflow-hidden"
        >
          {/* texture */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8973a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          {/* glows */}
          <div className="absolute w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.08)_0%,transparent_65%)] top-1/2 right-50 -translate-y-1/2 pointer-events-none" />
          <div className="absolute w-100 h-100 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.06)_0%,transparent_65%)] -bottom-25 left-[10%] pointer-events-none" />

          {/* ↓ Changed: flex-col on mobile, flex-row on desktop, gap between columns */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 w-full">
            {/* Text content */}
            <div className="flex-1 max-w-175">
              <div
                className="inline-flex items-center gap-2 bg-sub/10 border border-sub/25 text-sub text-[0.72rem] font-quick font-semibold tracking-[2.5px] uppercase px-4 py-2 rounded-full mb-7"
                style={{ animation: "fadeDown 0.8s ease forwards" }}
              >
                <div
                  className="w-1.75 h-1.75 rounded-full bg-sub"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                Proudly Serving Greater Manchester
              </div>

              <h1
                className="font-mont text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] text-white mb-6"
                style={{ animation: "fadeUp 0.9s 0.1s ease both" }}
              >
                Where{" "}
                <span className="italic font-cormorant text-sub">Care </span>{" "}
                Meets
                <br />
                Professional Excellence
              </h1>

              <p
                className="text-[1.05rem] font-mont text-light leading-[1.9] max-w-135 mb-10"
                style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
              >
                SF Care and Support Services Ltd brings together healthcare
                staffing, professional cleaning, and personalised concierge
                support, all delivered with warmth, integrity, and a genuine
                commitment to the communities we serve.
              </p>

              <div
                className="flex gap-4 flex-wrap"
                style={{ animation: "fadeUp 0.9s 0.3s ease both" }}
              >
                <Button
                  className="bg-sub px-9 py-4 font-medium tracking-[0.5px] border-2 border-sub font-mont text-[0.85rem] text-main hover:bg-main hover:border-main transition"
                  size="lg"
                >
                  Explore Our Services
                </Button>

                <Button
                  className="bg-transparent text-light h-2 px-9 py-4 rounded-sm font-medium font-mont text-[0.85rem] border-2 border-light/25 hover:border-light hover:text-light transition"
                  size="lg"
                >
                  Get a Free Consultation
                </Button>
              </div>

              <div
                className="flex gap-8 mt-16 pt-8 border-t border-main/20 flex-wrap"
                style={{ animation: "fadeUp 0.9s 0.4s ease both" }}
              >
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2 text-[0.78rem] font-mont font-medium text-light"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#c8973a]/15 flex items-center justify-center text-[0.75rem]">
                        <Icon className="w-4 h-4 text-sub" />
                      </div>
                      {feature.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ↓ Changed: image in its own flex child, centered on mobile */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <Image
                src={Hero}
                alt="Hero"
                className="w-full max-w-125 lg:max-w-none object-contain"
              />
            </div>
          </div>
        </section>
        <div className="h-0.75 bg-[linear-gradient(90deg,#081529,#c8973a,#e2b660,#c8973a,#081529)]" />

        <div className="bg-main px-[6%] py-6 flex justify-center items-center flex-wrap">
          {service.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={service.label}
                className={`flex items-center gap-2 px-8 text-[#fdf8f0]/75 text-[0.78rem] font-mont font-medium tracking-[0.5px] ${
                  idx !== 4 ? "border-r border-[#c8973a]/20" : ""
                }`}
              >
                <Icon className="w-4 h-4 text-sub" />
                {service.label}
              </div>
            );
          })}
        </div>

        {/* Services COMPONENT */}
        <Service />

        {/* About Component */}
        <About />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
