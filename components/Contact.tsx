"use client";
import { useState } from "react";
import { Phone, Mail, Building, Brush, MapPin } from "lucide-react";
import Link from "next/link";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Status = "idle" | "loading" | "success" | "error";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "0161 971 1824",
    href: "tel:01619711824",
  },
  {
    icon: Mail,
    label: "General Enquiries",
    value: "info@sfcssl.co.uk",
    href: "mailto:info@sfcssl.co.uk",
  },
  {
    icon: Building,
    label: "Healthcare Staffing",
    value: "care@sfcssl.co.uk",
    href: "mailto:care@sfcssl.co.uk",
  },
  {
    icon: Brush,
    label: "Cleaning Services",
    value: "cleaning@sfcssl.co.uk",
    href: "mailto:cleaning@sfcssl.co.uk",
  },
];

const serviceItems = [
  { label: "Healthcare Staffing",      value: "healthcarestaff" },
  { label: "Domestic Cleaning",        value: "domestic" },
  { label: "Commercial Cleaning",      value: "commercialcleaning" },
  { label: "Concierge and Hospitality", value: "concierge" },
  { label: "Multiple Services",        value: "multiple" },
  { label: "General Enquiry",          value: "general" },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  const inputClass =
    "bg-[#fdf8f0] font-mont border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20 transition-all";

  return (
    <>
    
      <section className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="grid lg:grid-cols-2 gap-20">

          {/*  Left: info  */}
          <div className="reveal">
            <div className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-[#c8973a] flex items-center gap-3 mb-3">
              <span className="w-7 h-0.5 bg-[#c8973a]" />
              Get In Touch
            </div>

            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#0d1f3c] mb-6">
              Let&apos;s Talk About
              <br />
              How We Can Help
            </h2>

            <p className="text-[0.92rem] font-mont text-[#4a5e78] leading-[1.9] font-light mb-10">
              Whether you are a business looking for a reliable cleaning
              partner, a care facility in need of qualified staff, or a family
              wanting a little extra support at home, we are here, and we
              would love to hear from you. All enquiries receive a response
              within 24 hours.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-main text-sub rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold font-mont text-[0.68rem] tracking-[2.5px] uppercase text-sub mb-1">
                        {item.label}
                      </h3>
                      <Link
                        href={item.href}
                        className="text-sm text-main font-mont hover:text-sub transition-colors"
                      >
                        {item.value}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/*  Right: form  */}
          <div className="reveal">
            <div className="bg-[#fffdf9] rounded-xl p-10 border border-[#c8973a]/15 shadow-[0_8px_40px_rgba(13,31,60,0.07)]">

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-mont font-bold text-[#0d1f3c] text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-mont text-sm text-[#8899b0] leading-relaxed">
                    Thank you for reaching out. A member of our team will be
                    in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-mont text-sm text-[#c8973a] underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-mont text-[1.7rem] font-bold text-[#0d1f3c]">
                    Send Us a Message
                  </h3>
                  <p className="text-[0.83rem] font-mont text-[#8899b0] mt-1 mb-8">
                    Fill in the form below and a member of our team will be in
                    touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field className="flex flex-col gap-2">
                        <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                          First Name <span className="text-[#c8973a]">*</span>
                        </FieldLabel>
                        <Input
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="Your first name"
                        />
                      </Field>

                      <Field className="flex flex-col gap-2">
                        <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                          Last Name
                        </FieldLabel>
                        <Input
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your last name"
                        />
                      </Field>
                    </div>

                    <Field className="flex flex-col gap-2">
                      <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                        Email Address <span className="text-[#c8973a]">*</span>
                      </FieldLabel>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </Field>

                    <Field className="flex flex-col gap-2">
                      <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                        Phone Number
                      </FieldLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your contact number"
                      />
                    </Field>

                    <Field className="flex flex-col gap-2">
                      <FieldLabel className="font-mont text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                        Service You Are Interested In
                      </FieldLabel>
                      <Select
                        value={form.service}
                        onValueChange={(val) =>
                          setForm((f) => ({ ...f, service: val }))
                        }
                      >
                        <SelectTrigger className="font-mont bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20">
                          <SelectValue placeholder="Please select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="font-mont">
                              Services
                            </SelectLabel>
                            {serviceItems.map((item) => (
                              <SelectItem
                                key={item.value}
                                value={item.value}
                                className="font-mont text-[0.88rem]"
                              >
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field className="flex flex-col gap-2">
                      <FieldLabel className="font-mont text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                        Tell Us More <span className="text-[#c8973a]">*</span>
                      </FieldLabel>
                      <Textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className={inputClass + " min-h-32 resize-y"}
                        placeholder="Please describe what you need and any relevant details..."
                      />
                    </Field>

                    {status === "error" && (
                      <p className="text-sm font-mont text-red-500 bg-red-50 border border-red-100 rounded-md px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 bg-main hover:bg-[#c8973a] font-mont font-semibold rounded transition-colors disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending..." : "Send Your Enquiry →"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
   </>
  );
}
