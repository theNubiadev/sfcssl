"use client";
import Link from "next/link";
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
      tag: "Commercial CLeaning",
      title: "Clean Workspaces. Productive Teams",
      link: "Request a Quote",
      desc: "A clean, well-maintained workplace speaks volumes about your business. Our commercial cleaning service is designed for organisations that need a reliable, professional, and discreet cleaning partner one who understands that your environment reflects your brand. We work across a wide range of sectors in Greater Manchester, including offices, schools, healthcare settings, retail, and hospitality venues. We operate around your business hours, ensuring minimal disruption to your daily operations.",
      features: [
        { list: "Daily, weekly, and contract commercial cleaning programmes" },
        {
          list: "Office cleaning including desks, floors, kitchens, and washrooms",
        },
        {
          list: "Schools, nurseries, and educational settings with child-safe products",
        },
        {
          list: "Healthcare and clinical environments requiring infection control standards",
        },
        { list: "Retail, hospitality, and customer-facing venue cleaning" },
        { list: "End-of-tenancy and post-construction deep cleans" },
        {
          list: "High-touch surface and communal area disinfection programmes",
        },
      ],
      note: "Tailored to your business",
    },
    {
      icon: PlayCircle,
      tag: "Concierege and Hospitality",
      title: "Personal Support, Delivered with Warmth.",
      link: "Enquire about Concierge",
      desc: "Life gets busy. For working families, elderly individuals, or anyone who simply needs an extra pair of trusted hands, our concierge and hospitality service provides practical, personal support right where it matters most in your home. We go beyond cleaning to offer a genuinely comprehensive lifestyle support service. Our team members are warm, discreet, and thoroughly vetted, so you can trust them in your home without hesitation.",
      features: [
        {
          list: "Home cooking and meal preparation using your preferred recipes or dietary needs",
        },
        {
          list: "Grocery shopping, collection, and home delivery coordination",
        },
        {
          list: "Prescription and errand collections for elderly or mobility-limited clients",
        },
        {
          list: "Event hosting support including setup, service, and post-event cleaning",
        },
        {
          list: "Companionship visits and welfare check-ins for elderly clients",
        },
        {
          list: "School run, appointment accompaniment, and daily routine support",
        },
        {
          list: "Bespoke packages tailored to your household's specific needs",
        },
      ],
      note: "Bespoke to you",
    },
    {
      icon: Building,
      tag: "Commercial CLeaning",
      title: "Clean Workspaces. Productive Teams",
      link: "Request a Quote",
      desc: "A clean, well-maintained workplace speaks volumes about your business. Our commercial cleaning service is designed for organisations that need a reliable, professional, and discreet cleaning partner one who understands that your environment reflects your brand. We work across a wide range of sectors in Greater Manchester, including offices, schools, healthcare settings, retail, and hospitality venues. We operate around your business hours, ensuring minimal disruption to your daily operations.",
      features: [
        { list: "Daily, weekly, and contract commercial cleaning programmes" },
        {
          list: "Office cleaning including desks, floors, kitchens, and washrooms",
        },
        {
          list: "Schools, nurseries, and educational settings with child-safe products",
        },
        {
          list: "Healthcare and clinical environments requiring infection control standards",
        },
        { list: "Retail, hospitality, and customer-facing venue cleaning" },
        { list: "End-of-tenancy and post-construction deep cleans" },
        {
          list: "High-touch surface and communal area disinfection programmes",
        },
      ],
      note: "Tailored to your business",
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

            <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.2rem)] font-bold  leading-normal text-main">
              Four Pillars of <br />
              Professional Service
            </h2>
            <p className="text-[0.9rem] text-main leading-[1.9] font-mont border-l-4 border-[#c8973a] pl-6">
              Every service we offer is built on the same foundation , skilled,
              vetted professionals who care deeply about the work they do and
              the people they serve. Whether we are staffing a ward, cleaning an
              office, or preparing a meal in your home, the standard never
              drops.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((services) => {
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
                  <div className="inline-block font-mont bg-[#c8973a]/10 text-[#c8973a] text-[0.65rem] font-semibold tracking-[2px] uppercase px-3 py-1 rounded-full mb-2">
                    {services.tag}
                  </div>
                  <h3 className="font-cormorant) text-[1.6rem] font-bold text-[#0d1f3c]">
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

                  <span className="text-[0.72rem] text-light">
                    {services.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
