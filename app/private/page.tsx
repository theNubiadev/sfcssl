"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, PlayCircle, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/public/homes.jpeg";
import Footer from "@/components/Footer";
interface Services {
  icon: React.ElementType;
  tag: string;
  title: string;
  link: string;
  desc: string;
  features: { list: string }[];
  note: string;
}

export default function Private() {
  const services: Services[] = [
    {
      icon: PlayCircle,
      tag: "",
      title: "Concierege and Hospitality.",
      link: "Speak to an Advisor",
      desc: " We act as your dedicated personal partner, providing high-touch, bespoke support designed to handle the complexities of daily life—whether personal or professional with discretion and precision.",
      features: [
        {
          list: "Personalized Life Management: Daily assistance tailored to your requirements, ensuring your day-to-day routine runs seamlessly.",
        },
        {
          list: "Essential Errands & Logistics: Efficient management of daily tasks, including prescription collection, grocery shopping, and appointment coordination.",
        },
        {
          list: "Home-Based Hospitality: Hands-on support including meal preparation, light cooking, and general household management, acting as an extension of your family.",
        },
        {
          list: "Dedicated Companionship:** Providing a consistent, friendly, and professional presence for those who value social interaction, conversation, and support in staying active and engaged.",
        },
      ],
      note: "",
    },

    {
      icon: PlayCircle,
      tag: "",
      title: "Domestic Cleaning.",
      link: "Get a Free Quote",
      desc: "We provide a meticulous, reliable, and trustworthy approach to home maintenance. We offer a high-standard service that gives you peace of mind and allows you to reclaim your time, ensuring your home is managed with professional consistency.",
      features: [
        {
          list: "Customizable Cleaning Plans: Bespoke schedules tailored to your lifestyle, ranging from daily recurring maintenance to intensive one-off deep cleans.",
        },
        {
          list: "Professional-Grade Standards: Use of high-performance, eco-conscious equipment and products for a safe, spotless, and sustainable finish.",
        },
        {
          list: "Fully Vetted & Insured Team: All cleaning personnel are permanent, insured, and DBS-verified, guaranteeing both safety and reliability.",
        },
        {
          list: "Detailed Maintenance: Thorough attention to detail, covering everything from standard room cleaning to specialized surface care and organizing.",
        },
        {
          list: "Quality Consistency: A consistent team dedicated to learning your specific preferences and standards, ensuring the same quality every visit.",
        },
      ],
      note: "",
    },
  ];


  const render = [
    {
      text: "Regular Home Cleans",
      summary:
        "Enjoy a consistently fresh home with weekly or fortnightly visits. We’ll keep every room spotless so you can focus on what matters.",
      image: "",
    },
     {
      text: "Laundry & Ironing",
      summary:
        "From everyday washing to neatly pressed clothes, our team can take the hassle out of household chores..",
      image: "",
    },
    {
      text: "Deep Cleans",
      summary:
        "A full top-to-bottom clean that tackles hidden dirt and hard-to-reach areas. Perfect for seasonal refreshes or moving house.",
      image: "",
    },
    {
    text: "Dry Cleaning",
    summary: "Convenient pick-up and return service for your freshly dry cleaned garments, saving you time and effort."
    },
    // {
    //   text: "Carpet Cleaning",
    //   summary: "Professional steam and extraction cleaning to remove dirt, stains, and allergens - restoring carpets to their best."
    // }
   
  ];
  return (
    <>
      <Navbar />
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
        <div className="absolute w-175 h-175 rounded-full opacity-10 bg-[#c8973a] blur-[120px] top-1/2 -right-64 -translate-y-1/2 pointer-events-none" />
        <div className="absolute w-100 h-100 rounded-full opacity-8 bg-[#c8973a] blur-[100px] -bottom-24 left-[8%] pointer-events-none" />

        <div className="relative z-10 w-full px-6 lg:px-[7%] pt-36 pb-24 flex flex-col lg:flex-row items-center gap-14">
          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-2xl">
            {/* Accent badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#c8973a]/30 bg-[#c8973a]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8973a] animate-pulse" />
              <span className="font-mont text-[0.75rem] font-semibold tracking-widest uppercase text-[#c8973a]">
                Trusted Private Cleaning
              </span>
            </div>

            <h1 className="font-mont text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-6 tracking-tight">
              Professional
              <span className="relative inline-block">
                <span className="text-[#c8973a]">Private Cleaning</span>
                {/* underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="4"
                  viewBox="0 0 300 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 2 Q75 0 150 2 Q225 4 300 2"
                    stroke="#c8973a"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-[1rem] font-mont text-white/65 leading-[1.9] max-w-100 mb-10">
              SF Care and Support Services provide a meticulous, reliable, and
              trustworthy approach to home maintenance. We act as your dedicated
              personal partner, providing high-touch, bespoke support designed
              to handle the complexities of daily life whether personal or
              professional with discretion and precision.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="group relative font-mont text-[0.85rem] font-semibold tracking-wide px-9 py-3 rounded-md border-2 border-[#c8973a] bg-transparent text-white overflow-hidden transition-all duration-300 hover:text-main"
              >
                <Link href="/contact">
                  {/* gold fill on hover */}
                  <span className="absolute inset-0 bg-[#c8973a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10">Get a Free Consultation</span>
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: "✓", label: "Fully Insured" },
                { icon: "✓", label: "DBS Checked Staff" },
                { icon: "✓", label: "Flexible Scheduling" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c8973a]/20 text-[#c8973a] text-[0.65rem] font-bold">
                    {icon}
                  </span>
                  <span className="font-mont text-[0.78rem] text-white/50 tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 -m-8 rounded-2xl bg-[#c8973a] opacity-[0.07] blur-2xl pointer-events-none" />

              {/* Gold corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#c8973a]/50 rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#c8973a]/50 rounded-bl-xl pointer-events-none" />

              <Image
                src={Hero}
                alt="SF Care team"
                className="relative z-10 w-full max-w-105 lg:max-w-125 object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="justtify-center align-center mb-16">
          <h2>
            <span className="relative inline-block">
              <span className="text-[#c8973a] align-center text-[clamp(2rem,4vw,3.2rem)] font-bold  mb-4">
                Our Private Household Services
              </span>
              {/* underline accent */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="4"
                viewBox="0 0 300 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 2 Q75 0 150 2 Q225 4 300 2"
                  stroke="#c8973a"
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((services) => {
            const Icon = services.icon;
            return (
              <div
                className="rounded-lg bg-[#fffdf9]  overflow-hidden border border-[#c8973a]/10 shadow-[0_2px_20px_rgba(13,31,60,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(13,31,60,0.12)] transition-all duration-300"
                key={services.title}
              >
                <div className="p-8 pb-6 relative">
                  <div className="w-14 h-14 bg-[#0d1f3c] rounded-xl flex items-center justify-center text-2xl mb-4">
                    <Icon className="text-sub" />
                  </div>

                  <h3 className="font-mont) text-[1.6rem] font-bold text-[#0d1f3c]">
                    {services.title}
                  </h3>
                </div>

                <div className="px-8 pb-8">
                  <p className="font-mont text-[0.88rem] text-[#4a5e78] leading-[1.85] border-t border-[#f0e8d8] pt-4 mb-6">
                    {services.desc}
                  </p>

                  <ul className="flex flex-col gap-2 text-[0.83rem] text-[#1a2e4a]">
                    {services.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 font-mont ">
                        <Check className="w-4 h-4 mt-1 text-sub" />
                        {feature.list}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 py-5 flex items-center justify-between  bg-[#fdf8f0] border-t border-[#f0e8d8] font-mont">
                  <Link
                    href="/services"
                    className="text-[0.78rem] flex justify-center items-center font-semibold text-[#c8973a] tracking-[0.5px] hover:underline"
                  >
                    {services.link}
                    <ArrowRight className="w-2.5 h-2.5 m-2 " />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>


              <div className="px-6 lg:px-[7%] py-20">
        <h2 className=" text-center font-mont text-[clamp(2rem,4vw,3.2rem)] font-bold text-main mb-4">
          Our Commercial Cleaning Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {render.map((render) => {
            return (
              <div
                className="rounded-lg bg-[#fffdf9]  overflow-hidden border border-[#c8973a]/10 shadow-[0_2px_20px_rgba(13,31,60,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(13,31,60,0.12)] transition-all duration-300"
                key={render.text}
              >
                <div className="p-8 pb-6 relative">
                  <h3 className="font-mont) text-[1.6rem] font-bold text-[#0d1f3c]">
                    {render.text}
                  </h3>
                </div>

                <div className="px-8 pb-8">
                  <p className="font-mont text-[0.88rem] text-[#4a5e78] leading-[1.85] border-t border-[#f0e8d8] pt-4 mb-6">
                    {render.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
