import { Phone, Mail, Building, BrushCleaning } from "lucide-react";
import Link from "next/link";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Contact {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

export default function Contact() {
  const contact = [
    {
      icon: Phone,
      label: "Phone",
      value: "0161 971 1824",
      href: "tel",
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
      vlaue: "care@sfcssl.co.uk",
      href: "mailto:care@sfcssl.co.uk",
    },
    {
      icon: BrushCleaning,
      label: "Cleaning Services",
      value: "cleaning@sfcssl.co.uk",
      href: "mailto:cleanings@sfcssl.co.uk",
    },
  ];
  const items = [
    { label: "Healthcare Staffing", value: "healthcarestaff" },
    { label: "Domestic Cleaning", value: "domestic" },
    { label: "Commerical Cleaning", value: "commercialcleaning" },
    { label: "Concierge and Hospitality", value: "concierge" },
    { label: "Multiple Services", value: "multiple" },
    { label: "General Enquiry", value: "general" },
  ];
  return (
    <>
      <section className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="reveal">
            <div className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-[#c8973a] flex items-center gap-3 mb-3">
              <span className="w-7.5 h-0.5 bg-[#c8973a]" />
              Get In Touch
            </div>
            <h2 className="font-mont text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#0d1f3c] mb-6">
              Let's Talk About
              <br />
              How We Can Help
            </h2>

            <p className="text-[0.92rem] font-mont text-[#4a5e78] leading-[1.9] font-light mb-10">
              Whether you are a business looking for a reliable cleaning
              partner, a care facility in need of qualified staff, or a family
              wanting a little extra support at home, we are here, and we would
              love to hear from you. All enquiries receive a response within 24
              hours.
            </p>
            <div className="space-y-6">
              {contact.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-main text-sub rounded-lg flex items-center justify-center">
                      <Icon className="text-xl shrink-0" />
                    </div>

                    <div>
                      <h3 className="font-semibold font-mont text-[0.68rem] tracking-[2.5px] uppercase text-sub mb-1">
                        {contact.label}
                      </h3>

                      <p className="text-sm text-main font-mont hover:text-sub transition">
                        <Link href={contact.href}>{contact.value}</Link>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="bg-[#fffdf9] rounded-xl p-12 border border-[#c8973a]/15 shadow-[0_8px_40px_rgba(13,31,60,0.07)]">
              <h3 className="font-mont text-[1.7rem] font-bold text-[#0d1f3c]">
                Send Us a Message
              </h3>
              <p className="text-[0.83rem] font-mont text-[#8899b0] mt-1 mb-8">
                Fill in the form below and a member of our team will be in touch
                shortly.
              </p>

              <form action="" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                      First Name
                    </FieldLabel>
                    <Input
                      className="bg-[#fdf8f0] font-mont border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                      placeholder="Your first name"
                    />
                  </Field>

                  <Field className="flex flex-col gap-2">
                    <FieldLabel className="ext-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                      Last Name
                    </FieldLabel>
                    <Input
                      className="bg-[#fdf8f0] border font-mont border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                      placeholder="Your last name"
                      type="text"
                    />
                  </Field>
                </div>
                <Field className="flex flex-col gap-2">
                  <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Email Address{" "}
                  </FieldLabel>
                  <Input
                    type="email"
                    className="bg-[#fdf8f0] border font-mont border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="your@email.com"
                  />
                </Field>

                <Field className="flex  flex-col gap-2">
                  <FieldLabel className="text-[0.7rem] font-mont font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Phone Number
                  </FieldLabel>
                  <Input
                    type="tel"
                    className="bg-[#fdf8f0] border font-mont border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="Your contact number"
                  />
                </Field>
                <Field className="flex flex-col gap-2">
                  <FieldLabel className="font-mont text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Service You Are Interested In
                  </FieldLabel>

                  <Select>
                    <SelectTrigger className="font-mont bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20">
                      <SelectValue placeholder="Please select a value" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="font-mont">
                          Services
                        </SelectLabel>

                        {items.map((item) => (
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
                  <FieldLabel className="font-mont text-light">
                    Tell us More
                  </FieldLabel>
                  <Textarea
                    className="bg-[#fdf8f0] font-mont border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none min-h-32.5 resize-y focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="Please describe what you need and any relevant details, we will get back to you with the right information."
                  ></Textarea>
                </Field>

                <Button className="w-full h-12 bg-main  font-mont rounded">
                  Send Your Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
