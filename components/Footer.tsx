export default function Footer() {
  return (
    <>
      <footer className="bg-[#081529] px-[6%] pt-16 pb-8 border-t-[3px] border-[#c8973a]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-cormorant text-[1.8rem] font-bold text-[#fffdf9] block mb-1">
              <span className="text-[#c8973a]">SF</span>CSSL
            </span>
            <span className="text-[0.68rem] tracking-[2.5px] uppercase text-[#8899b0] block mb-4">
              SF Care and Support Services Ltd
            </span>
            <p className="text-[0.84rem] font-mont text-[#fdf8f0]/50 leading-[1.8] max-w-[300px]">
              A Greater Manchester based professional services company
              delivering healthcare staffing, domestic and commercial cleaning,
              and concierge lifestyle support.
            </p>
          </div>

          <div>
            <div className="text-[0.68rem] font-mont font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Services
            </div>

            <ul className="space-y-3 font-mont text-[0.83rem] text-[#fdf8f0]/50">
              <li>
                <a href="#services" className="hover:text-[#e2b660]">
                  Healthcare Staffing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e2b660]">
                  Domestic Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e2b660]">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e2b660]">
                  Concierge &amp; Hospitality
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[0.68rem] font-mont font-bold tracking-[3px] uppercase text-[#c8973a] mb-5">
              Company
            </div>
            <ul className="space-y-3 font-mont text-[0.83rem] text-[#fdf8f0]/50">
              <li>
                <a href="#about" className="hover:text-[#e2b660]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#e2b660]">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e2b660]">
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
                <a href="tel:01619711824" className="hover:text-[#e2b660]">
                  0161 971 1824
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sfcssl.co.uk"
                  className="hover:text-[#e2b660]"
                >
                  info@sfcssl.co.uk
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@sfcssl.co.uk"
                  className="hover:text-[#e2b660]"
                >
                  hr@sfcssl.co.uk
                </a>
              </li>
              <li>Manchester, M2 3WW</li>
            </ul>
          </div>

          
        </div>

        <div className="border-t font-mont border-[#fdf8f0]/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            © {new Date().getFullYear()} <span className="text-[#c8973a]">SF Care and Support Services Ltd</span>. Company No. 14788040.
          </p>
          <p className="text-[0.77rem] text-[#fdf8f0]/40">
            Designed for <span className="text-[#c8973a]">sfcssl.co.uk</span> | All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
