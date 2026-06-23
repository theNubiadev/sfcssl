"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Building, PlayCircle, Check, ArrowRight } from "lucide-react";
interface Services {
  icon: React.ElementType;
  tag: string;
  title: string;
  link: string;
  desc: string;
  features: { list: string }[];
  note: string;
}

export default function Service() {
  const services: Services[] = [
    {
      icon: Building,
      tag: "",
      title: "Commercial Cleaning",
      link: "Book a Site Audit",
      desc: " We deliver enterprise-level janitorial and maintenance solutions engineered for corporate offices, retail environments, and high-traffic public spaces. We provide a pristine, compliant environment that reflects the professional standards of your brand.",
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
      icon: PlayCircle,
      tag: "",
      title: "Concierege and Hospitality.",
      link: "Speak to an Advisor",
      desc: " We act as your dedicated personal partner, providing high-touch, bespoke support designed to handle the complexities of daily life whether personal or professional with discretion and precision.",
      features: [
        {
          list: "Personalized Life Management: Daily assistance tailored to your requirements, ensuring your day-to-day routine runs seamlessly.",
        },
        {
          list: "Essential Errands & Logistics: Efficient management of daily tasks, including prescription collection, grocery shopping, and appointment coordination.",
        },
        {
          list: "Home Based Hospitality: Hands-on support including meal preparation, light cooking, and general household management, acting as an extension of your family.",
        },
        {
          list: "Dedicated Companionship: Providing a consistent, friendly, and professional presence for those who value social interaction, conversation, and support in staying active and engaged.",
        },
      ],
      note: "",
    },
    {
      icon: Building,
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
  return (
    <>
      <section className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16 reveal">
          <div>
            <div className="font-semibold tracking-light uppercase font-mont flex items-center gap-3 mb-3  text-main">
              <span className="w-7.5  h-0.5 bg-sub" />
              What we do
            </div>

            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] font-bold  leading-normal text-main">
              Four Pillars of <br />
            Our  Professional Service
            </h2>
            <p className="text-[0.9rem] text-main leading-[1.9] font-mont border-l-4 border-[#c8973a] pl-6">
              Every service we offer is built on the same foundation, skilled,
              vetted professionals who care deeply about the work they do and
              the people they serve. Whether we are staffing a ward, cleaning an
              office, or preparing a meal in your home, the standard never
              drops.
            </p>
          </div>
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

                {/* <div className="px-8 py-5 flex items-center justify-between  bg-[#fdf8f0] border-t border-[#f0e8d8] font-mont">
                  <Link
                    href="/services"
                    className="text-[0.78rem] flex justify-center items-center font-semibold text-[#c8973a] tracking-[0.5px] hover:underline"
                  >
                    {services.link}
                    <ArrowRight className="w-2.5 h-2.5 m-2 " />
                  </Link>
                </div> */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
