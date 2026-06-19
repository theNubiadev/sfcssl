import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-main px-[6%] pt-16 pb-8 border-t-[3px] border-sub">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
  {/* Logo — wrapped in block div so rules stretch properly */}
  <div className="mb-4">
    <Link
      href="/"
      className="no-underline inline-flex flex-col leading-none font-mont"
    >
      <span
        className="font-extrabold tracking-[2px] text-[1.1rem] lg:text-[1.15rem]"
        style={{
          background:
            "linear-gradient(135deg, #c8920a 0%, #f5d97a 40%, #e2a91a 60%, #b07c0a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        SF CARE &amp; SUPPORT
      </span>

      <div className="flex items-center gap-1.25 mt-1.25">
        <div
          className="h-[1.5px] flex-1 min-w-2.5"
          style={{
            background: "linear-gradient(90deg, #c8920a, #f5d97a, #c8920a)",
          }}
        />
        <span
          className="text-[0.5rem] font-bold tracking-[4px] whitespace-nowrap"
          style={{
            background:
              "linear-gradient(135deg, #8899b0 0%, #c8d8e8 45%, #a0b4c8 60%, #7090a8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SERVICES LTD
        </span>
        <div
          className="h-[1.5px] flex-1 min-w-2.5"
          style={{
            background: "linear-gradient(90deg, #c8920a, #f5d97a, #c8920a)",
          }}
        />
      </div>
    </Link>
  </div>

  <p className="text-[0.84rem] font-mont text-[#fdf8f0]/50 leading-[1.8] max-w-75">
    A Greater Manchester based professional services company delivering
    healthcare staffing, domestic and commercial cleaning, and concierge
    lifestyle support.
  </p>
</div>
          <div>
            <div className="text-[0.68rem] font-mont font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Services
            </div>

            <ul className="space-y-3 font-mont text-[0.83rem] text-[#fdf8f0]/50">
             <li>
                <a href="/services" className="hover:text-sub">
                  Domestic Cleaning
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-sub">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-sub">
                  Concierge &amp; Hospitality
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-sub">
                  Healthcare Staffing
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-mont font-bold tracking-[3px] uppercase text-sub mb-5">
              Company
            </div>
            <ul className="space-y-3 font-mont text-[0.83rem] text-[#fdf8f0]/50">
              <li>
                <a href="/about-us" className="hover:text-sub">
                  About Us
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-sub">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sub">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-[0.68rem] font-mont font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Contact
            </div>
            <ul className="space-y-3 font-mont text-[0.83rem] text-[#fdf8f0]/50">
              <li>
                <a href="tel:01619711824" className="hover:text-sub">
                  073 618 97965
                </a>
              </li>
              <li>
                <a href="mailto:info@sfcssl.co.uk" className="hover:text-sub">
                  info@sfcssl.co.uk
                </a>
              </li>
              <li>
                <a href="mailto:hr@sfcssl.co.uk" className="hover:text-sub">
                  hr@sfcssl.co.uk
                </a>
              </li>
              <li>Bartle House, 9 Oxford Court, Manchester, M2 3WQ</li>
            </ul>
          </div>
        </div>
        <div className="border-t font-mont border-[#fdf8f0]/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#c8973a]">
              SF Care and Support Services Ltd
            </span>
            . Company No. 14788040.
          </p>
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            Designed for <span className="text-[#c8973a]">sfcssl.co.uk</span> |
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
