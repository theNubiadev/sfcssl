import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
    <main className="min-h-screen bg-[#0d1f3c] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.10)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        {/* 404 number */}
        <div className="font-mont text-[clamp(6rem,20vw,10rem)] font-extrabold leading-none text-white/4 select-none mb-6">
          404
        </div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-[#c8973a]/10 border border-[#c8973a]/20 flex items-center justify-center text-[2.2rem] mx-auto mb-8">
          🧹
        </div>

        {/* Eyebrow */}
        <span className="inline-block font-mont text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#c8973a] border border-[#c8973a]/35 px-3.5 py-1.5 rounded-full mb-6">
          Page not found
        </span>

        {/* Headline */}
        <h1 className="font-lora text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-white leading-[1.2] mb-4">
          Looks like this page{" "}
          <em className="text-[#f5d97a] not-italic">needs a clean</em>
        </h1>

        {/* Subtext */}
        <p className="font-mont text-[0.92rem] text-[#8a9bb0] leading-[1.8] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back somewhere familiar.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="font-mont font-bold text-[0.88rem] tracking-wider bg-[#c8973a] text-[#0d1f3c] px-8 py-3.5 rounded-lg hover:bg-[#f5d97a] hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="font-mont font-bold text-[0.88rem] tracking-wider text-[#8a9bb0] border border-white/10 px-8 py-3.5 rounded-lg hover:text-white hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-14 pt-8 border-t border-white/[0.07]">
          <p className="font-mont text-[0.75rem] font-semibold uppercase tracking-widest text-[#8a9bb0] mb-5">
            Or go to
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {[
              { label: "Services", href: "/services" },
              { label: "Careers", href: "/careers" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mont text-[0.83rem] font-semibold text-[#c8973a] hover:text-[#f5d97a] transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}