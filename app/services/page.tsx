"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Mail,
  Check,
  ArrowRight,
  Bubbles,
  TowelRack,
  Plus,
  Phone,
  Quote,
  Metronome,
  ListStart,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
interface Services {
  icon: React.ElementType;
  tag: string;
  title: string;
  link: string;
  desc: string;
  image: string;
  features: { list: string }[];
  note: string;
}
interface Process {
  icon: React.ElementType;
  num: number;
  title: string;
  desc: string;
}

export default function Service() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services: Services[] = [
    {
      icon: Bubbles,
      image: "/domestic.jpeg",
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
    {
      icon: Metronome,
      image: "/office.jpeg",
      tag: "",
      title: "Commercial CLeaning",
      link: "Book a Site Audit",
      desc: "We deliver enterprise-level janitorial and maintenance solutions engineered for corporate offices, retail environments, and high-traffic public spaces. We provide a pristine, compliant environment that reflects the professional standards of your brand.",
      features: [
        {
          list: "Tailored Sanitation Protocols: Customized cleaning regimes designed for your facility’s specific operational needs.",
        },
        {
          list: "Quality Assurance Systems: Regular inspections and supervision to ensure consistent, high-standard maintenance.",
        },
        {
          list: "Disruption-Free Operations: Fully vetted, trained staff who work efficiently to ensure your daily activities continue without interruption.",
        },
        {
          list: "On-Call Deep Cleaning: Flexible scheduling for deep cleans, periodic maintenance, and facility refreshes.",
        },
        {
          list: "Facility Management Support: Acting as an extension of your team to oversee hygiene and upkeep, allowing you to focus on your core business goals.",
        },
      ],
      note: "",
    },
    {
      icon: TowelRack,
      
      image: "/concierge.jpeg",
      tag: "",
      title: "Concierge and Hospitality.",
      link: "Speak to an Advisor",
      desc: " We act as your dedicated personal partner, providing high-touch, bespoke support designed to handle the complexities of daily life—whether personal or professional—with discretion and precision.",
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
      icon: Metronome,
      image: "/care.jpeg",
      tag: "",
      title: "Healthcare Staffing",
      link: "Speak to An Advisor",
      desc: "We are a trusted partner to the healthcare sector, providing high-caliber, fully compliant, and professional staffing solutions. We ensure staffing continuity for care homes and facilities, meeting both regulatory requirements and your highest standards of patient care..",
      features: [
        {
          list: "Stringent Vetting Processes: Comprehensive recruitment including enhanced DBS verification, clinical reference checks, and right-to-work documentation.",
        },
        {
          list: "Performance Monitoring: Continuous evaluation of staff performance to ensure reliability, skill, and professionalism in every placement.",
        },
        {
          list: "Seamless Integration: Staff who are selected not only for their qualifications but for their character, compassion, and ability to blend into your existing team culture.",
        },
        {
          list: "Staffing Continuity: Rapid, responsive solutions to bridge workforce gaps, ensuring your facility never compromises on service levels.",
        },
        {
          list: "Regulatory Compliance Support: Ensuring all staffing deployments strictly meet national healthcare standards and internal facility policies.",
        },
      ],
      note: "",
    },
  ];

  const faqData = [
    {
      q: "How do you ensure staff vetting?",
      a: "Enhanced DBS checks, reference verification, and insurance.",
    },
    {
      q: "Can you handle short-notice requests?",
      a: "Yes, we pride ourselves on agile, responsive service.",
    },
    {
      q: "Do you offer contract-based service?",
      a: "Yes, all operations are fully covered by comprehensive liability insurance.",
    },
    {
      q: "Are you insured?",
      a: "Yes, all operations are fully covered by comprehensive liability insurance.",
    },
    // {
    //   q: "Are all your staff DBS checked and insured?",
    //   a: "Yes! every single member of our team goes through an Enhanced DBS check before starting any assignment. All staff are also fully insured, reference-verified, and trained to the standards required for their specific role.",
    // },
    // {
    //   q: "How quickly can you provide healthcare staff in an emergency?",
    //   a: "Our healthcare staffing team operates a 24/7 on-call line. In many cases we can place a qualified professional within hours of your call.",
    // },
    // {
    //   q: "Can I have the same cleaner every visit?",
    //   a: "Absolutely. Wherever possible, we assign you a named cleaner who learns exactly how you like things done  building a relationship built on familiarity and trust.",
    // },
    // {
    //   q: "Do you offer commercial cleaning outside of office hours?",
    //   a: "Yes. We work around your business schedule, early mornings, evenings, and weekends are all available.",
    // },
    {
      q: "What areas of Greater Manchester do you cover?",
      a: "We cover the full Greater Manchester area including Manchester City Centre, Salford, Trafford, Stockport, Tameside, Bolton, Wigan, Oldham, Rochdale, and surrounding areas.",
    },
    {
      q: "How does the concierge service work is there a minimum commitment?",
      a: "Our concierge service is completely bespoke. Whether you need help three hours a week or every day, we will create something that works for your schedule and budget.",
    },
  ];

  const process: Process[] = [
    {
      num: 1,
      icon: Phone,
      title: "Get in Touch",
      desc: "Call, email or full in our contact form.",
    },
    {
      num: 2,
      icon: Quote,
      title: "Free Consultation",
      desc: "We discuss our reguirements in detail..",
    },
    {
      num: 3,
      icon: Bubbles,
      title: "We Match & Confirm",
      desc: "We select the right professional...",
    },
    {
      num: 4,
      icon: ListStart,
      title: "Service Begins",
      desc: "Your service starts, and we stay in touch...",
    },
    { num: 5, icon: Check, title: "Strategic Consultation",
      desc: "We begin with a detailed discovery session to analyze your unique requirements—whether corporate, healthcare, or private. We listen closely to ensure our solution is perfectly aligned with your objectives."
     },
  ];
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="relative min-h-[56vh] bg-main flex items-center px-[6%] pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-texture"></div>
        <div className="absolute w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.09)_0%,transparent_65%)] top-1/2 -bg-conic-30right-37.5 -translate-y-1/2 pointer-events-none"></div>
        <div className="relative max-w-170">
          <h1 className="font-mont text-[clamp(2.8rem,5vw,4.2rem)] font-bold leading-[1.1] text-[#fffdf9] mb-5">
            Professional Services,
            <br />
            <em className="italic text-sub">Delivered with Care</em>
          </h1>

          <p className="text-[1rem] font-mont text-[rgba(253,248,240,0.7)] leading-[1.9] max-w-130 mb-10">
            From healthcare staffing to home cleaning and concierge lifestyle
            support every service we provide is built on the same foundation:
            skilled, vetted professionals who take pride in what they do.
          </p>
        </div>
      </section>

      <section className="px-[6%] py-28 mt-20">
        <div className="grid  bg-cover bg-center md:grid-cols-2 gap-12 items-end mb-16 reveal">
          {/* <div className="">
            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] font-bold  leading-normal text-sub">
              Four Pillars of <br />
              Professional Service
            </h2>
            <p className="text-[0.9rem] text-main leading-[1.9] font-mont border-l-4 border-[#c8973a] pl-6">
              Every service we offer is built on the same foundation skilled,
              vetted professionals who care deeply about the work they do and
              the people they serve. Whether we are staffing a ward, cleaning an
              office, or preparing a meal in your home, the standard never
              drops.
            </p>
          </div> */}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((services) => {
            const Icon = services.icon;
            return (
              <div
                className="rounded-lg bg-[#fffdf9]  overflow-hidden border border-[#c8973a]/10 shadow-[0_2px_20px_rgba(13,31,60,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(13,31,60,0.12)] transition-all duration-300"
                key={services.title}
              >
                <div className="relative w-full  h-48 overflow-hidden">
                  <Image
                    src={services.image}
                    alt={services.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover block"
                  />
                  <div className="absolute inset-0 bg-[#0d1f3c]/10" />
                </div>
                <div className="p-8 pb-6 relative">
                  <div className="w-14 h-14 bg-[#0d1f3c] rounded-xl flex items-center justify-center text-2xl mb-4">
                    <Icon className="text-sub" />
                  </div>
                  <div className="inline-block font-mont bg-[#c8973a]/10 text-[#c8973a] text-[0.65rem] font-semibold tracking-[2px] uppercase px-3 py-1 rounded-full mb-2">
                    {services.tag}
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
                  <span className="text-[0.72rem] text-light">
                    {services.note}
                  </span>

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
      </section>

      {/* PROCESS SECTION */}
      <section className="px-[6%] py-24 bg-[#fdf8f0]">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center font-mont justify-center gap-3 text-[0.68rem] font-semibold tracking-[4px] uppercase text-[#c8973a] mb-3">
            <span className="w-7.5 h-0.5 bg-sub"></span>
            Simple Process
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.8rem)]  font-mont  font-bold text-[#0d1f3c] mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-[0.92rem]  font-mont text-[#4a5e78] leading-[1.9] max-w-130 mx-auto font-light">
            Whether you are a business or an individual, we make it
            straightforward from the very first conversation to the first day of
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((process) => {
            const Icon = process.icon;
            return (
              <div
                key={process.title}
                className="text-center p-10 bg-[#fffdf9] rounded-xl border border-[rgba(200,151,58,0.1)] shadow-[0_4px_20px_rgba(13,31,60,0.05)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(13,31,60,0.1)] transition reveal"
              >
                <span className="font-mont text-[3rem] font-bold text-main leading-none mb-2">
                  {/* {process.num} */}
                </span>
                <div className="flex justify-center">
                  <Icon className="text-[1.8rem] mb-2 text-sub" />
                </div>

                <h3 className="font-mont text-[1.2rem] font-bold text-[#0d1f3c] mb-3">
                  {process.title}
                </h3>
                <p className="text-[0.8rem] font-mont text-sub leading-[1.7]">
                  {process.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-[6%] py-24 bg-main">
        <div className="max-w-180 mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="flex items-center font-mont justify-center gap-3 text-[0.68rem] font-semibold tracking-[4px] uppercase text-sub mb-3">
              <span className="w-7.5 h-0.5 bg-sub"></span>
              Common Questions
            </div>
            <h2 className="font-mont text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#fffdf9]">
              Frequently Asked Questions
            </h2>
          </div>

          {faqData.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="border-b border-[rgba(200,151,58,0.15)] py-6 cursor-pointer reveal"
            >
              <div className="flex justify-between items-center font-mont text-[0.95rem] font-medium text-[#fffdf9] leading-normal">
                {faq.q}
                <span
                  className={`text-[#c8973a] text-[1.2rem] font-mont ml-4 transition ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  <Plus />
                </span>
              </div>

              <div
                className={`text-[0.87rem] text-[rgba(253,248,240,0.6)] font-mont leading-[1.85] overflow-hidden transition-all duration-500 ${
                  openFaq === i ? "max-h-75 pt-4" : "max-h-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative px-[6%] py-24 bg-[linear-gradient(135deg,#152a4e_0%,#081529_100%)] text-center overflow-hidden"
      >
        <div className="relative max-w-160 mx-auto reveal">
          <div className="flex items-center justify-center font-mont gap-3 text-[0.68rem] font-semibold tracking-[4px] uppercase text-sub mb-3">
            <span className="w-7.5 h-0.5 bg-sub"></span>
            Ready to Get Started?
          </div>

          <h2 className="font-mont text-[clamp(2rem,4vw,3rem)] font-bold text-[#fffdf9] mb-4 leading-[1.15]">
            Let's Talk About
            <br />
            How We Can Help
          </h2>
          <p className="text-[0.95rem] font-mont text-[rgba(253,248,240,0.65)] leading-[1.85] mb-10 font-light">
            Whether you need a healthcare professional tomorrow, a regular
            cleaner for your home, or a trusted concierge to lighten the load we
            are here and ready to help.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:01619711824"
              className="inline-flex font-mont items-center gap-2 bg-[#c8973a] text-[#081529] px-8 py-4 rounded-md font-semibold text-[0.85rem] hover:bg-[#e2b660] transition"
            >
              <Phone />
              Call 0161 971 1824
            </a>

            <a
              href="mailto:info@sfcssl.co.uk"
              className="inline-flex  font-mont items-center gap-2 border border-[rgba(200,151,58,0.4)] text-[#e2b660] px-8 py-4 rounded-md font-semibold text-[0.85rem] hover:bg-[#c8973a] hover:text-[#081529] transition"
            >
              <Mail /> info@sfcssl.co.uk
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
