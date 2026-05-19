"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Nav shadow on scroll
    const handleScroll = () => {
      const nav = document.getElementById("main-nav");
      if (!nav) return;

      nav.style.boxShadow =
        window.scrollY > 40 ? "0 4px 30px rgba(13,31,60,0.1)" : "none";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {/* NAV */}
      <nav
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[6%] py-4 bg-[#fdf8f0]/95 backdrop-blur-xl border-b border-[#c8973a]/20 transition-shadow"
      >
        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-cormorant)] text-[1.6rem] font-bold tracking-[1px] text-[#0d1f3c]">
            <span className="text-[#c8973a]">SF</span>CSSL
          </span>
          <span className="text-[0.58rem] font-medium tracking-[3px] uppercase text-[#8899b0] mt-[2px]">
            Care &amp; Support Services Ltd
          </span>
        </div>

        <ul className="hidden md:flex gap-9 list-none items-center">
          <li>
            <a href="#home" className="text-[0.8rem] font-medium tracking-[0.5px] text-[#4a5e78] hover:text-[#c8973a] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-[0.8rem] font-medium tracking-[0.5px] text-[#4a5e78] hover:text-[#c8973a] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-[0.8rem] font-medium tracking-[0.5px] text-[#4a5e78] hover:text-[#c8973a] transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-[0.8rem] font-medium tracking-[0.5px] text-[#4a5e78] hover:text-[#c8973a] transition">
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[#0d1f3c] text-[#fdf8f0] px-6 py-2 rounded-sm font-semibold text-[0.8rem] hover:bg-[#c8973a] hover:text-[#081529] transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen bg-[#081529] flex items-center px-[6%] pt-36 pb-20 overflow-hidden"
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
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.08)_0%,transparent_65%)] top-1/2 right-[-200px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.06)_0%,transparent_65%)] bottom-[-100px] left-[10%] pointer-events-none" />

        <div className="relative max-w-[700px]">
          <div
            className="inline-flex items-center gap-2 bg-[#c8973a]/10 border border-[#c8973a]/25 text-[#e2b660] text-[0.72rem] font-semibold tracking-[2.5px] uppercase px-4 py-2 rounded-full mb-7"
            style={{ animation: "fadeDown 0.8s ease forwards" }}
          >
            <div
              className="w-[7px] h-[7px] rounded-full bg-[#c8973a]"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            Proudly Serving Greater Manchester
          </div>

          <h1
            className="font-[var(--font-cormorant)] text-[clamp(3rem,6vw,5rem)] font-bold leading-[1.1] text-[#fffdf9] mb-6"
            style={{ animation: "fadeUp 0.9s 0.1s ease both" }}
          >
            Where <em className="italic text-[#e2b660]">Care</em> Meets
            <br />
            Professional Excellence
          </h1>

          <p
            className="text-[1.05rem] font-light text-[#fdf8f0]/70 leading-[1.9] max-w-[540px] mb-10"
            style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
          >
            SF Care and Support Services Ltd brings together healthcare staffing,
            professional cleaning, and personalised concierge support — all
            delivered with warmth, integrity, and a genuine commitment to the
            communities we serve.
          </p>

          <div
            className="flex gap-4 flex-wrap"
            style={{ animation: "fadeUp 0.9s 0.3s ease both" }}
          >
            <a
              href="#services"
              className="bg-[#c8973a] text-[#081529] px-9 py-4 rounded-sm font-semibold text-[0.85rem] tracking-[0.5px] border-2 border-[#c8973a] hover:bg-[#e2b660] hover:border-[#e2b660] transition"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="bg-transparent text-[#fdf8f0] px-9 py-4 rounded-sm font-medium text-[0.85rem] border-2 border-[#fdf8f0]/25 hover:border-[#c8973a] hover:text-[#e2b660] transition"
            >
              Get a Free Consultation
            </a>
          </div>

          <div
            className="flex gap-8 mt-16 pt-8 border-t border-[#c8973a]/20 flex-wrap"
            style={{ animation: "fadeUp 0.9s 0.4s ease both" }}
          >
            {[
              "Fully Insured",
              "DBS Checked",
              "Professionally Trained",
              "Community Trusted",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[0.78rem] font-medium text-[#fdf8f0]/60"
              >
                <div className="w-7 h-7 rounded-full bg-[#c8973a]/15 flex items-center justify-center text-[0.75rem]">
                  ✓
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD STRIP */}
      <div className="h-[3px] bg-[linear-gradient(90deg,#081529,#c8973a,#e2b660,#c8973a,#081529)]" />

      {/* TRUST BAR */}
      <div className="bg-[#0d1f3c] px-[6%] py-6 flex justify-center items-center flex-wrap">
        {[
          "🏥 Healthcare Staffing",
          "🏠 Domestic Cleaning",
          "🏢 Commercial Cleaning",
          "🍳 Concierge & Hospitality",
          "📍 Greater Manchester",
        ].map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-8 text-[#fdf8f0]/75 text-[0.78rem] font-medium tracking-[0.5px] ${
              idx !== 4 ? "border-r border-[#c8973a]/20" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16 reveal">
          <div>
            <div className="text-[0.68rem] font-semibold tracking-[4px] uppercase text-[#c8973a] flex items-center gap-3 mb-3">
              <span className="w-[30px] h-[2px] bg-[#c8973a]" />
              What We Do
            </div>
            <h2 className="font-[var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#0d1f3c]">
              Four Pillars of
              <br />
              Professional Service
            </h2>
          </div>

          <p className="text-[0.9rem] text-[#4a5e78] leading-[1.9] font-light border-l-4 border-[#c8973a] pl-6">
            Every service we offer is built on the same foundation — skilled,
            vetted professionals who care deeply about the work they do and the
            people they serve. Whether we are staffing a ward, cleaning an
            office, or preparing a meal in your home, the standard never drops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🏥",
              tag: "Healthcare Staffing",
              title: "Qualified Healthcare Professionals, When You Need Them",
              link: "Request Healthcare Staff →",
              note: "Fast Response Guaranteed",
              delay: "reveal-delay-1",
            },
            {
              icon: "🏠",
              tag: "Domestic Cleaning",
              title: "A Cleaner Home. A Calmer Life.",
              link: "Book a Home Clean →",
              note: "Flexible Scheduling",
              delay: "reveal-delay-2",
            },
            {
              icon: "🏢",
              tag: "Commercial Cleaning",
              title: "Clean Workplaces. Productive Teams.",
              link: "Request a Quote →",
              note: "Tailored to Your Business",
              delay: "reveal-delay-1",
            },
            {
              icon: "🍳",
              tag: "Concierge & Hospitality",
              title: "Personal Support, Delivered with Warmth.",
              link: "Enquire About Concierge →",
              note: "Bespoke to You",
              delay: "reveal-delay-2",
            },
          ].map((svc) => (
            <div
              key={svc.title}
              className={`bg-[#fffdf9] rounded-lg overflow-hidden border border-[#c8973a]/10 shadow-[0_2px_20px_rgba(13,31,60,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(13,31,60,0.12)] transition-all duration-300 reveal ${svc.delay}`}
            >
              <div className="p-8 pb-6 relative">
                <div className="w-14 h-14 bg-[#0d1f3c] rounded-xl flex items-center justify-center text-2xl mb-4">
                  {svc.icon}
                </div>

                <div className="inline-block bg-[#c8973a]/10 text-[#c8973a] text-[0.65rem] font-semibold tracking-[2px] uppercase px-3 py-1 rounded-full mb-2">
                  {svc.tag}
                </div>

                <h3 className="font-[var(--font-cormorant)] text-[1.6rem] font-bold text-[#0d1f3c]">
                  {svc.title}
                </h3>
              </div>

              <div className="px-8 pb-8">
                <p className="text-[0.88rem] text-[#4a5e78] leading-[1.85] border-t border-[#f0e8d8] pt-4 mb-6">
                  (Content shortened here — you can paste full text exactly as in your HTML.)
                </p>

                <ul className="flex flex-col gap-2 text-[0.83rem] text-[#1a2e4a]">
                  <li className="flex gap-2">
                    <span className="text-[#c8973a] font-bold">✓</span> Fully
                    vetted professionals
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c8973a] font-bold">✓</span> Flexible
                    service options
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#c8973a] font-bold">✓</span> High
                    standard delivery
                  </li>
                </ul>
              </div>

              <div className="px-8 py-5 bg-[#fdf8f0] border-t border-[#f0e8d8] flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-[0.78rem] font-semibold text-[#c8973a] tracking-[0.5px] hover:underline"
                >
                  {svc.link}
                </a>

                <span className="text-[0.72rem] text-[#8899b0]">{svc.note}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-[6%] py-28 bg-[#081529] overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8973a' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative grid md:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <div className="bg-gradient-to-br from-[#152a4e] to-[#0d1f3c] border border-[#c8973a]/20 rounded-xl p-12 relative overflow-hidden">
              <div className="absolute top-[-10px] left-[20px] text-[12rem] text-[#c8973a]/10 font-[var(--font-cormorant)] leading-none">
                “
              </div>

              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c8973a] to-[#e2b660] flex items-center justify-center text-3xl mb-6 border-4 border-[#c8973a]/30">
                👩🏾
              </div>

              <p className="font-[var(--font-cormorant)] text-[1.25rem] italic text-[#fdf8f0] leading-[1.7] mb-6">
                "I started this company because I believe everyone deserves to
                live and work in a clean, safe, and well-supported environment —
                and that the people who make that possible should be treated
                with the highest professional standards."
              </p>

              <div className="text-[0.85rem] font-semibold text-[#c8973a] tracking-[1px]">
                Rebecca Durodola
              </div>
              <div className="text-[0.75rem] text-[#8899b0] mt-1">
                Founder &amp; Managing Director, SF Care and Support Services Ltd
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="text-[0.68rem] font-semibold tracking-[4px] uppercase text-[#e2b660] flex items-center gap-3 mb-3">
              <span className="w-[30px] h-[2px] bg-[#e2b660]" />
              Our Story
            </div>

            <h2 className="font-[var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#fffdf9] mb-6">
              Built on Passion.
              <br />
              Grounded in Community.
            </h2>

            <p className="text-[0.92rem] text-[#fdf8f0]/70 leading-[1.95] mb-6">
              SF Care and Support Services Ltd was founded by Rebecca Durodola
              out of a deep passion for people and community...
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "🤝", title: "Community First" },
                { icon: "🛡️", title: "Trust & Safety" },
                { icon: "⭐", title: "Consistent Excellence" },
                { icon: "💛", title: "Genuine Care" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-[#c8973a]/10 border border-[#c8973a]/15 rounded-lg p-5 hover:bg-[#c8973a]/20 hover:border-[#c8973a]/30 transition"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="text-[#e2b660] font-semibold text-[0.72rem] tracking-[0.5px] uppercase mb-1">
                    {v.title}
                  </div>
                  <p className="text-[0.8rem] text-[#fdf8f0]/60 leading-[1.6]">
                    (Add your full description here)
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-[6%] py-28 bg-[#fdf8f0]">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="reveal">
            <div className="text-[0.68rem] font-semibold tracking-[4px] uppercase text-[#c8973a] flex items-center gap-3 mb-3">
              <span className="w-[30px] h-[2px] bg-[#c8973a]" />
              Get In Touch
            </div>

            <h2 className="font-[var(--font-cormorant)] text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#0d1f3c] mb-6">
              Let's Talk About
              <br />
              How We Can Help
            </h2>

            <p className="text-[0.92rem] text-[#4a5e78] leading-[1.9] font-light mb-10">
              Whether you are a business looking for a reliable cleaning partner,
              a care facility in need of qualified staff, or a family wanting a
              little extra support at home — we are here.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📞", label: "Phone", value: "0161 971 1824", href: "tel:01619711824" },
                { icon: "📧", label: "General Enquiries", value: "info@sfcssl.co.uk", href: "mailto:info@sfcssl.co.uk" },
                { icon: "🏥", label: "Healthcare Staffing", value: "care@sfcssl.co.uk", href: "mailto:care@sfcssl.co.uk" },
                { icon: "🧹", label: "Cleaning Services", value: "cleaning@sfcssl.co.uk", href: "mailto:cleaning@sfcssl.co.uk" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[#0d1f3c] rounded-lg flex items-center justify-center text-xl shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-semibold tracking-[2.5px] uppercase text-[#c8973a] mb-1">
                      {c.label}
                    </div>
                    <div className="text-[0.9rem] text-[#1a2e4a]">
                      <a href={c.href} className="hover:text-[#c8973a] transition">
                        {c.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="reveal reveal-delay-2">
            <div className="bg-[#fffdf9] rounded-xl p-12 border border-[#c8973a]/15 shadow-[0_8px_40px_rgba(13,31,60,0.07)]">
              <h3 className="font-[var(--font-cormorant)] text-[1.7rem] font-bold text-[#0d1f3c]">
                Send Us a Message
              </h3>
              <p className="text-[0.83rem] text-[#8899b0] mt-1 mb-8">
                Fill in the form below and a member of our team will be in touch shortly.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your message! A member of our team will be in touch within 24 hours.");
                }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                      First Name
                    </label>
                    <input
                      className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                      placeholder="Your first name"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                      Last Name
                    </label>
                    <input
                      className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="Your contact number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Service You Are Interested In
                  </label>
                  <select className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20">
                    <option value="">Please select a service...</option>
                    <option>Healthcare Staffing</option>
                    <option>Domestic Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Concierge &amp; Hospitality</option>
                    <option>Multiple Services</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-[#4a5e78]">
                    Tell Us More
                  </label>
                  <textarea
                    className="bg-[#fdf8f0] border border-[#f0e8d8] rounded-md px-4 py-3 text-[0.88rem] outline-none min-h-[130px] resize-y focus:border-[#c8973a] focus:ring-2 focus:ring-[#c8973a]/20"
                    placeholder="Please describe what you need and any relevant details — we will get back to you with the right information."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0d1f3c] text-[#fdf8f0] py-4 rounded-md font-semibold tracking-[1px] text-[0.88rem] hover:bg-[#c8973a] hover:text-[#081529] transition"
                >
                  Send Your Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081529] px-[6%] pt-16 pb-8 border-t-[3px] border-[#c8973a]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-[var(--font-cormorant)] text-[1.8rem] font-bold text-[#fffdf9] block mb-1">
              <span className="text-[#c8973a]">SF</span>CSSL
            </span>
            <span className="text-[0.68rem] tracking-[2.5px] uppercase text-[#8899b0] block mb-4">
              SF Care and Support Services Ltd
            </span>
            <p className="text-[0.84rem] text-[#fdf8f0]/50 leading-[1.8] max-w-[300px]">
              A Greater Manchester based professional services company delivering healthcare staffing,
              domestic and commercial cleaning, and concierge lifestyle support.
            </p>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Services
            </div>
            <ul className="space-y-3 text-[0.83rem] text-[#fdf8f0]/50">
              <li><a href="#services" className="hover:text-[#e2b660]">Healthcare Staffing</a></li>
              <li><a href="#services" className="hover:text-[#e2b660]">Domestic Cleaning</a></li>
              <li><a href="#services" className="hover:text-[#e2b660]">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-[#e2b660]">Concierge &amp; Hospitality</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Company
            </div>
            <ul className="space-y-3 text-[0.83rem] text-[#fdf8f0]/50">
              <li><a href="#about" className="hover:text-[#e2b660]">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#e2b660]">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#e2b660]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Contact
            </div>
            <ul className="space-y-3 text-[0.83rem] text-[#fdf8f0]/50">
              <li><a href="tel:01619711824" className="hover:text-[#e2b660]">0161 971 1824</a></li>
              <li><a href="mailto:info@sfcssl.co.uk" className="hover:text-[#e2b660]">info@sfcssl.co.uk</a></li>
              <li><a href="mailto:hr@sfcssl.co.uk" className="hover:text-[#e2b660]">hr@sfcssl.co.uk</a></li>
              <li>Manchester, M2 3WW</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#fdf8f0]/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            © 2025 <span className="text-[#c8973a]">SF Care and Support Services Ltd</span>. Company No. 14788040.
          </p>
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            Designed for <span className="text-[#c8973a]">sfcssl.co.uk</span> | All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}