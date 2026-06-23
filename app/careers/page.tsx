"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const BENEFITS = [
  {
    icon: "💷",
    title: "Competitive Pay",
    desc: "Above living wage rates, weekly pay, and performance bonuses across all divisions.",
  },
  {
    icon: "📅",
    title: "Flexible Shifts",
    desc: "Full-time, part-time, and weekend options — designed to fit around your life.",
  },
  {
    icon: "📈",
    title: "Career Progression",
    desc: "Clear paths from operative to team leader to supervisor, with regular reviews.",
  },
  {
    icon: "🎓",
    title: "Paid Training",
    desc: "Full induction, health & safety certification, and role-specific skills training — all paid.",
  },
  {
    icon: "🏥",
    title: "Healthcare Cover",
    desc: "Access to employee assistance programmes and wellbeing support from day one.",
  },
  {
    icon: "🤝",
    title: "Supportive Team",
    desc: "Regular check-ins, an open-door management culture, and team socials throughout the year.",
  },
];

const ROLES = [
  {
    tag: "Healthcare Staffing",
    title: "Healthcare Support Worker",
    desc: "Provide essential cleaning and hygiene support in NHS and private healthcare environments. Experience in clinical settings preferred but not required.",
    location: "Manchester",
    type: "Full-time",
    pay: "£12.50/hr",
  },
  {
    tag: "Healthcare Staffing",
    title: "Infection Control Operative",
    desc: "Specialist cleaning operative focused on decontamination protocols in clinical areas. Training provided for the right candidate.",
    location: "Salford",
    type: "Part-time",
    pay: "£13.00/hr",
  },
  {
    tag: "Concierge",
    title: "Concierge & Front of House",
    desc: "Be the face of premium residential and commercial buildings. Duties include reception, access control, light maintenance, and resident support.",
    location: "City Centre",
    type: "Full-time",
    pay: "£12.00/hr",
  },
  {
    tag: "Concierge",
    title: "Night Concierge",
    desc: "Overnight presence for residential blocks and mixed-use developments. Ideal for someone reliable, calm under pressure, and comfortable working independently.",
    location: "Manchester",
    type: "Nights",
    pay: "£12.50/hr",
  },
  {
    tag: "Home Cleaning",
    title: "Domestic Cleaner",
    desc: "Regular cleaning visits to private homes across Greater Manchester. You'll build relationships with clients and take pride in delivering a consistent, high-quality finish.",
    location: "Greater Manchester",
    type: "Flexible",
    pay: "£11.80/hr",
  },
  {
    tag: "Office Cleaning",
    title: "Commercial Cleaning Operative",
    desc: "Early morning or evening cleans across offices, retail, and commercial premises. No experience necessary — full training and equipment provided.",
    location: "Manchester",
    type: "Part-time",
    pay: "£11.44/hr",
  },
  {
    tag: "Office Cleaning",
    title: "Cleaning Team Leader",
    desc: "Lead a small team across commercial accounts. You'll manage rotas, quality checks, and client relationships. Previous supervisory experience preferred.",
    location: "Manchester",
    type: "Full-time",
    pay: "£13.50/hr",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Apply Online",
    desc: "Fill in the short form below. No CV required for operative roles.",
  },
  {
    num: "02",
    title: "Initial Call",
    desc: "A 15-minute call with our recruitment team to learn more about you.",
  },
  {
    num: "03",
    title: "Site Visit",
    desc: "Meet the team, see the environment, ask any questions you have.",
  },
  {
    num: "04",
    title: "Start Work",
    desc: "Paid induction and training from day one. Welcome to the team.",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    availability: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `Career Application — ${formData.role || "General"} | ${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        replyto: formData.email,
        ...formData,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        availability: "",
        message: "",
      });
    } else {
      setStatus("error");
      setErrorMsg(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <Navbar />
    <main className="bg-[#fffdf9] text-[#0d1f3c]">
      {/* ── HERO ── */}
      <section className="bg-[#0d1f3c] px-6 md:px-12 pt-24 pb-20 relative overflow-hidden">
        <div className="absolute -top-16 -right-20 w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.13)_0%,transparent_70%)] pointer-events-none" />

        <span className="inline-block font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] border border-[#c8973a]/35 px-3.5 py-1.5 rounded-full mb-7">
          We&apos;re hiring · Manchester, UK
        </span>

        <h1 className="font-lora text-[clamp(2.4rem,5vw,3.8rem)] font-semibold text-white leading-[1.18] max-w-2xl mb-5">
          Build a career that{" "}
          <em className="text-[#f5d97a] not-italic">makes a difference</em>{" "}
          every day
        </h1>

        <p className="font-mont text-[1rem] text-[#8a9bb0] leading-[1.8] max-w-xl mb-10">
          Join a team that takes pride in every space we touch from hospitals
          and offices to homes across Greater Manchester.
        </p>

        <a
          href="#open-roles"
          className="inline-block font-mont font-bold text-[0.88rem] tracking-wider bg-[#c8973a] text-[#0d1f3c] px-8 py-3.5 rounded-lg hover:bg-[#f5d97a] hover:-translate-y-0.5 transition-all duration-200"
        >
          View Open Roles
        </a>

        <div className="flex gap-12 mt-16 pt-10 border-t border-white/8 flex-wrap">
          {[
            { num: "200+", label: "Team Members" },
            { num: "8+", label: "Years in Manchester" },
            { num: "4 Services", label: "Divisions" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-mont text-[2rem] font-extrabold text-white">
                {s.num.replace(/\+|Services/g, "")}
                <span className="text-[#c8973a]">
                  {s.num.includes("+") ? "+" : s.num.includes("Services") ? " Services" : ""}
                </span>
              </div>
              <div className="font-mont text-[0.78rem] text-[#8a9bb0] mt-1 uppercase tracking-[0.08em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="bg-[#faf7f2] px-6 md:px-12 py-20">
        <p className="font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] mb-3">
          Why SFC SSL
        </p>
        <h2 className="font-lora text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#0d1f3c] leading-tight mb-4">
          A workplace that values you
        </h2>
        <p className="font-mont text-[0.92rem] text-[#4a5e78] leading-[1.8] max-w-xl mb-12">
          We believe the people who keep spaces clean and cared for deserve the
          same in return. Here&apos;s what you can expect.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-[#f0e8d8] rounded-xl p-8 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(13,31,60,0.10)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c8973a]/10 flex items-center justify-center text-[1.4rem] mb-5">
                {b.icon}
              </div>
              <h3 className="font-mont text-[1rem] font-bold text-[#0d1f3c] mb-2.5">
                {b.title}
              </h3>
              <p className="font-mont text-[0.84rem] text-[#4a5e78] leading-[1.75]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="px-6 md:px-12 py-20">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] mb-3">
              Open Positions
            </p>
            <h2 className="font-lora text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#0d1f3c] leading-tight">
              Find your role
            </h2>
          </div>
          <p className="font-mont text-[0.84rem] text-[#4a5e78] max-w-70 leading-[1.7]">
            All roles are based in Manchester and surrounding areas. Right to
            work in the UK required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* {ROLES.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-[#f0e8d8] rounded-xl p-7 flex flex-col gap-3.5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,31,60,0.09)] hover:border-[#c8973a] transition-all duration-300"
            >
              <span className="inline-block font-mont text-[0.7rem] font-bold tracking-widest uppercase text-[#c8973a] bg-[#c8973a]/10 rounded-full px-3 py-1 w-fit">
                {r.tag}
              </span>
              <h3 className="font-mont text-[1.05rem] font-bold text-[#0d1f3c]">
                {r.title}
              </h3>
              <p className="font-mont text-[0.83rem] text-[#4a5e78] leading-[1.75] flex-1">
                {r.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {[`📍 ${r.location}`, `⏱ ${r.type}`, r.pay].map((pill) => (
                  <span
                    key={pill}
                    className="font-mont text-[0.75rem] font-semibold text-[#4a5e78] bg-[#faf7f2] border border-[#f0e8d8] rounded-md px-2.5 py-1"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 font-mont text-[0.82rem] font-bold text-[#0d1f3c] mt-1 hover:text-[#c8973a] transition-colors group"
              >
                Apply now
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))} */}

          {/* Speculative card */}
          <div className="bg-[#faf7f2] border border-dashed border-[#f0e8d8] rounded-xl p-7 flex flex-col justify-center gap-3.5 min-h-55">
            <div className="text-[1.6rem]">👋</div>
            <h3 className="font-mont text-[1.05rem] font-bold text-[#0d1f3c]">
              Don&apos;t see your role?
            </h3>
            <p className="font-mont text-[0.83rem] text-[#4a5e78] leading-[1.75]">
              We&apos;re always interested in motivated people. Send us a
              speculative application and we&apos;ll keep you in mind.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 font-mont text-[0.82rem] font-bold text-[#c8973a] hover:text-[#0d1f3c] transition-colors group"
            >
              Get in touch
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#0d1f3c] px-6 md:px-12 py-20">
        <p className="font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] mb-3">
          How it works
        </p>
        <h2 className="font-lora text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white leading-1.25 mb-4">
          Our hiring process
        </h2>
        <p className="font-mont text-[0.92rem] text-[#8a9bb0] leading-[1.8] max-w-xl mb-14">
          We keep it simple and respectful of your time — most people hear back
          within 48 hours.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative">
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-4 text-[#c8973a]/40 text-xl">
                  →
                </span>
              )}
              <div className="font-mont text-[2.4rem] font-extrabold text-[#c8973a]/20 leading-none mb-5">
                {s.num}
              </div>
              <h3 className="font-mont text-[0.95rem] font-bold text-white mb-2.5">
                {s.title}
              </h3>
              <p className="font-mont text-[0.82rem] text-[#8a9bb0] leading-[1.75]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPLY FORM ── */}
      <section id="apply" className="bg-[#faf7f2] px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <p className="font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] mb-3">
            Apply Now
          </p>
          <h2 className="font-lora text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#0d1f3c] leading-1.25 mb-4">
            Take the first step
          </h2>
          <p className="font-mont text-[0.92rem] text-[#4a5e78] leading-[1.8] max-w-xl mx-auto">
            Fill in your details and we&apos;ll be in touch within 48 hours. No
            lengthy forms, no hoops to jump through.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-[#f0e8d8] rounded-2xl p-8 md:p-12 shadow-[0_4px_32px_rgba(13,31,60,0.07)]">
          {/* Name row */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {(
              [
                { name: "firstName", label: "First Name", placeholder: "Jane", type: "text" },
                { name: "lastName", label: "Last Name", placeholder: "Smith", type: "text" },
              ] as const
            ).map((f) => (
              <div key={f.name} className="flex flex-col gap-1.5">
                <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
                  {f.label} *
                </label>
                <input
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={formData[f.name]}
                  onChange={handleChange}
                  className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c8973a] transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Contact row */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                placeholder="jane@email.com"
                value={formData.email}
                onChange={handleChange}
                className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c8973a] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+44 7700 000000"
                value={formData.phone}
                onChange={handleChange}
                className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c8973a] transition-colors"
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
              Role You&apos;re Applying For *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] focus:outline-none focus:border-[#c8973a] transition-colors"
            >
              <option value="">Select a role...</option>
              <optgroup label="Healthcare Staffing">
                <option>Healthcare Support Worker</option>
                <option>Infection Control Operative</option>
              </optgroup>
              <optgroup label="Concierge">
                <option>Concierge & Front of House</option>
                <option>Night Concierge</option>
              </optgroup>
              <optgroup label="Home Cleaning">
                <option>Domestic Cleaner</option>
              </optgroup>
              <optgroup label="Office Cleaning">
                <option>Commercial Cleaning Operative</option>
                <option>Cleaning Team Leader</option>
              </optgroup>
              <option>Speculative / Other</option>
            </select>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] focus:outline-none focus:border-[#c8973a] transition-colors"
            >
              <option value="">Select availability...</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Weekends only</option>
              <option>Evenings / nights</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5 mb-6">
            <label className="font-mont text-[0.78rem] font-bold text-[#0d1f3c] uppercase tracking-[0.04em]">
              Tell us about yourself
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Previous experience, why you'd like to join SFC SSL, or anything else you'd like us to know..."
              value={formData.message}
              onChange={handleChange}
              className="font-mont border border-[#f0e8d8] rounded-lg px-3.5 py-3 text-[0.88rem] text-[#0d1f3c] bg-[#fffdf9] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#c8973a] transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full font-mont font-bold text-[0.9rem] tracking-[0.04em] bg-[#0d1f3c] text-white py-4 rounded-lg hover:bg-[#c8973a] hover:text-[#0d1f3c] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>

          {status === "success" && (
            <p className="font-mont text-[0.88rem] text-green-600 mt-4 text-center">
              ✓ Application received! We&apos;ll be in touch within 48 hours.
            </p>
          )}
          {status === "error" && (
            <p className="font-mont text-[0.88rem] text-red-500 mt-4 text-center">
              {errorMsg}
            </p>
          )}
        </div>
      </section>
    </main>

    </>
  );
}