import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HandHeart,
  Shield,
  Star,
  Heart,
  Clock,
  Users,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

// ── Types ─────────
interface Stat {
  title: string;
  subtitle: string;
}

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface TeamMember {
  emoji: string;
  name: string;
  role: string;
  bio: string;
}

interface Milestone {
  year: string;
  event: string;
}

// ── Data 
const STATS: Stat[] = [
  { title: "4+",   subtitle: "Professional Services" },
  { title: "GM",   subtitle: "Greater Manchester" },
  { title: "100%", subtitle: "DBS Checked Staff" },
  { title: "24/7", subtitle: "Healthcare On-Call" },
];

const VALUES: Value[] = [
  {
    icon: HandHeart,
    title: "Community First",
    description: "We are rooted in Greater Manchester and proud to serve the people who make this city thrive.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every team member is vetted, DBS checked, and insured before entering any home or workplace.",
  },
  {
    icon: Star,
    title: "Consistent Excellence",
    description: "We hold ourselves to a high standard on every job — no matter how big or small.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "Behind every service is a real human connection — we care about the people we work with and for.",
  },
];

const TEAM: TeamMember[] = [
  {
    emoji: "👩🏾",
    name: "Rebecca Durodola",
    role: "Founder & Managing Director",
    bio: "Rebecca founded SFCSSL out of a deep passion for people and community. Her vision has shaped every aspect of the company — from how we hire to how we care.",
  },
  {
    emoji: "👩🏽",
    name: "Healthcare Lead",
    role: "Head of Staffing Operations",
    bio: "Overseeing all healthcare placements, our staffing lead ensures every professional we place meets the highest compliance and character standards.",
  },
  {
    emoji: "👨🏿",
    name: "Cleaning Supervisor",
    role: "Head of Cleaning Services",
    bio: "With years of experience in domestic and commercial environments, our cleaning lead guarantees consistency and quality across every contract.",
  },
];

const MILESTONES: Milestone[] = [
  { year: "2023", event: "SF Care and Support Services Ltd founded in Manchester" },
  { year: "2023", event: "First healthcare staffing placements completed" },
  { year: "2024", event: "Domestic and commercial cleaning divisions launched" },
  { year: "2024", event: "Concierge & hospitality service introduced" },
  { year: "2025", event: "Expanded coverage across all Greater Manchester boroughs" },
];

// ── Page 
export default function About() {
  return (
    <>
      <Navbar />

      {/* ── HERO  */}
      <section className="relative px-[6%] pt-36 pb-24 overflow-hidden bg-main">
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8973a' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        {/* Glow */}
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-sub/5 blur-3xl pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — Founder card + stats */}
          <div className="space-y-6">
            {/* Founder quote card */}
            <div className="bg-linear-to-br from-main to-[#0d1f3c] border border-sub/20 rounded-2xl p-10 relative overflow-hidden shadow-2xl">
              {/* Decorative quote */}
              <div className="absolute -top-4 left-4 text-[11rem] text-sub/8 font-cormorant leading-none select-none pointer-events-none">
                "
              </div>

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-sub to-sub flex items-center justify-center text-3xl mb-6 border-4 border-sub/30 shadow-lg">
                👩🏾
              </div>

              {/* Quote */}
              <p className="font-cormorant text-[1.3rem] italic text-[#fdf8f0] leading-[1.75] mb-6 relative">
                "I started this company because I believe everyone deserves to
                live and work in a clean, safe, and well-supported environment —
                and that the people who make that possible should be treated
                with the highest professional standards."
              </p>

              {/* Attribution */}
              <div className="border-t border-sub/20 pt-5 mt-2">
                <div className="text-[0.88rem] font-cormorant font-semibold text-sub tracking-wide">
                  Rebecca Durodola
                </div>
                <div className="text-[0.74rem] font-mont text-[#8899b0] mt-0.5">
                  Founder & Managing Director, SF Care and Support Services Ltd
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-sub/10 border border-sub/20 rounded-xl p-5 text-center hover:bg-sub/15 hover:border-sub/35 transition-all duration-300"
                >
                  <h3 className="text-sub font-cormorant font-bold text-3xl tracking-tight mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[0.75rem] font-mont text-[#fdf8f0]/55 leading-relaxed uppercase tracking-wider">
                    {s.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Story + values */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-sub" />
              <span className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-sub">
                Our Story
              </span>
            </div>

            <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-[1.15] text-[#fffdf9]">
              Built on Passion.<br />
              Grounded in Community.
            </h2>

            <p className="text-[0.92rem] font-mont text-[#fdf8f0]/70 leading-[1.95]">
              SF Care and Support Services Ltd was founded by Rebecca Durodola
              out of a deep passion for people and community. Having seen
              first-hand how much a clean, safe, and well-supported environment
              can transform a person's quality of life, Rebecca set out to build
              a company that would make that difference — professionally,
              reliably, and with genuine heart.
            </p>
            <p className="text-[0.92rem] font-mont text-[#fdf8f0]/70 leading-[1.95]">
              Her vision was simple but powerful: to give working families the
              gift of time; to help businesses present themselves at their very
              best; and to ensure that vulnerable individuals and elderly clients
              always have a trusted, caring presence nearby. Every member of the
              SFCSSL team is selected not just for their skills, but for their
              character — because in this work, who you are matters just as much
              as what you can do.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="bg-sub/8 border border-sub/15 rounded-xl p-5 hover:bg-sub/15 hover:border-sub/30 transition-all duration-300 group"
                  >
                    <Icon
                      size={20}
                      className="text-sub mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h4 className="text-sub font-mont font-semibold text-[0.72rem] tracking-widest uppercase mb-1">
                      {v.title}
                    </h4>
                    <p className="text-[0.8rem] font-mont text-[#fdf8f0]/55 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── GOLD STRIP  */}
      <div
        className="h-0.75"
        style={{
          background:
            "linear-gradient(90deg, #081529, #c8973a, #e2b660, #c8973a, #081529)",
        }}
      />

      {/* ── WHY CHOOSE US  */}
      <section className="px-[6%] py-24 bg-[#f0e8d8]">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-0.5 bg-sub" />
            <span className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-sub">
              Why SFCSSL
            </span>
          </div>
          <h2 className="font-cormorant text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-tight text-[#0d1f3c]">
            Why Clients Choose Us
          </h2>
          <p className="text-[0.9rem] font-mont text-[#4a5e78] leading-relaxed max-w-xl mx-auto mt-3 font-light">
            In a crowded market, we stand apart not just by what we do, but by how we do it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { icon: CheckCircle, label: "Fully Vetted", desc: "Every staff member passes Enhanced DBS, reference checks, and skills verification before starting." },
            { icon: Clock,       label: "Fast Response", desc: "We respond to healthcare staffing requests within hours — 24/7, including weekends and bank holidays." },
            { icon: Users,       label: "Consistent Team", desc: "We assign named professionals to domestic and concierge clients for continuity and trust." },
            { icon: Phone,       label: "Always Reachable", desc: "Our team is always available. You will never be left chasing an answer when you need us most." },
          ].map(({ icon: Icon, label, desc }, i) => (
            <div
              key={i}
              className="bg-white border border-sub/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-sub/25 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0d1f3c] flex items-center justify-center mx-auto mb-4">
                <Icon size={20} className="text-sub" />
              </div>
              <h4 className="font-mont font-bold text-[1.1rem] text-[#0d1f3c] mb-2">{label}</h4>
              <p className="text-[0.8rem] font-mont text-[#4a5e78] leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

    
      {/* ── TEAM  */}
      <section className="px-[6%] py-24 bg-[#fdf8f0]">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-0.5 bg-sub" />
            <span className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-sub">
              The People Behind the Service
            </span>
          </div>
          <h2 className="font-cormorant text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-tight text-[#0d1f3c]">
            Meet Our Team
          </h2>
          <p className="text-[0.9rem] font-mont text-[#4a5e78] leading-relaxed max-w-xl mx-auto mt-3 font-light">
            Every member of the SFCSSL team is chosen for their skills and their character — because in care, both matter equally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="bg-white border border-sub/10 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-sub/25 transition-all duration-300 text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#0d1f3c] to-main border-4 border-[#f7edd8] flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                {member.emoji}
              </div>
              <h3 className="font-cormorant font-bold text-[1.2rem] text-[#0d1f3c] mb-0.5">
                {member.name}
              </h3>
              <p className="text-[0.68rem] font-mont font-semibold tracking-widest uppercase text-sub mb-3">
                {member.role}
              </p>
              <div className="w-10 h-0.5 bg-sub/30 mx-auto mb-4" />
              <p className="text-[0.82rem] font-mont text-[#4a5e78] leading-relaxed font-light">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="px-[6%] py-24 bg-[#f0e8d8]">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-0.5 bg-sub" />
            <span className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-sub">
              A Glimpse Into Our Work
            </span>
          </div>
          <h2 className="font-cormorant text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-tight text-[#0d1f3c]">
            The People &amp; Places We Serve
          </h2>

          <p className="text-[0.9rem] font-mont text-[#4a5e78] leading-relaxed max-w-xl mx-auto mt-3 font-light">
            Every day our team shows up — in homes, workplaces, and care settings across Greater Manchester — ready to make a real difference.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large feature image — spans 2 rows */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group aspect-square md:aspect-auto">
            <img
              src="/carehome.jpeg"
              alt="Healthcare professional with patient"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#081529]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="text-[0.68rem] font-mont font-semibold tracking-[3px] uppercase text-sub block mb-1">Healthcare Staffing</span>
              <p className="text-[0.85rem] font-mont text-white font-light leading-snug">Compassionate care, delivered every day.</p>
            </div>
          </div>

          {/* Top-right small */}
          <div className="relative rounded-2xl overflow-hidden group aspect-video md:aspect-auto">
            <img
              src="/homecleaning.jpeg"
              alt="Domestic cleaning team at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#081529]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="text-[0.65rem] font-mont font-semibold tracking-[2px] uppercase text-sub block mb-0.5">Domestic Cleaning</span>
              <p className="text-[0.8rem] font-mont text-white font-light">Homes that feel cared for.</p>
            </div>
          </div>

          {/* Top-right small */}
          <div className="relative rounded-2xl overflow-hidden group aspect-video md:aspect-auto">
            <img
              src="/office.jpeg"
              alt="Commercial cleaning in an office"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#081529]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="text-[0.65rem] font-mont font-semibold tracking-[2px] uppercase text-sub block mb-0.5">Commercial Cleaning</span>
              <p className="text-[0.8rem] font-mont text-white font-light">Workplaces that impress.</p>
            </div>
          </div>

          {/* Bottom-right small */}
          <div className="relative rounded-2xl overflow-hidden group aspect-video md:aspect-auto">
            <img
              src="/concierge.jpeg"
              alt="Concierge team preparing a meal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#081529]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="text-[0.65rem] font-mont font-semibold tracking-[2px] uppercase text-sub block mb-0.5">Concierge &amp; Hospitality</span>
              <p className="text-[0.8rem] font-mont text-white font-light">Support that feels personal.</p>
            </div>
          </div>

          {/* Bottom-right small */}
          <div className="relative rounded-2xl overflow-hidden group aspect-video md:aspect-auto">
            <img
              src="/ca.jpeg"
              alt="Our team in Greater Manchester"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#081529]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="text-[0.65rem] font-mont font-semibold tracking-[2px] uppercase text-sub block mb-0.5">Our Team</span>
              <p className="text-[0.8rem] font-mont text-white font-light">Proud to serve Greater Manchester.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ─ */}
      <section className="px-[6%] py-24 bg-main text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(200,151,58,0.07) 0%, transparent 65%)" }} />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-[#e2b660]" />
            <span className="text-[0.68rem] font-mont font-semibold tracking-[4px] uppercase text-[#e2b660]">
              Get In Touch
            </span>
          </div>
          <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-bold text-[#fffdf9] leading-tight mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-[0.95rem] font-mont text-[#fdf8f0]/65 leading-relaxed mb-8 font-light">
            Whether you are a business, a care facility, or a family — we would love to hear from you. All enquiries are answered within 24 hours.
          </p>
        <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:01619711824"
              className="inline-flex font-mont items-center gap-2 bg-sub text-[#081529] px-8 py-4 rounded-md font-semibold text-[0.85rem] hover:bg-[#e2b660] transition"
            >
              <Phone />Call 0161 971 1824
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