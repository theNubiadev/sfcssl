"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ href, label, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        px-5 py-3.5 text-right
        lg:px-0 lg:py-2 lg:text-left
        font-mont text-sm font-medium tracking-wide
        transition-colors duration-200
        ${active
          ? "text-sub lg:text-sub font-bold"
          : "text-white lg:text-main hover:text-sub"
        }
      `}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8 lg:py-4">

        {/* ── Logo ── */}
        <Link href="/" className="no-underline flex flex-col leading-none font-mont">
          <span
            className="font-extrabold tracking-[2px] text-[1.1rem] lg:text-[1.35rem]"
            style={{
              background: "linear-gradient(135deg, #c8920a 0%, #f5d97a 40%, #e2a91a 60%, #b07c0a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SF CARE &amp; SUPPORT
          </span>

          <div className="flex items-center gap-1.5 mt-1">
            <div
              className="h-[1.5px] flex-1 min-w-2.5"
              style={{ background: "linear-gradient(90deg, #c8920a, #f5d97a, #c8920a)" }}
            />
            <span
              className="text-[0.5rem] lg:text-[0.58rem] font-bold tracking-[4px] lg:tracking-[5px] whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #8899b0 0%, #c8d8e8 45%, #a0b4c8 60%, #7090a8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SERVICES LTD
            </span>
            <div
              className="h-[1.5px] flex-1 min-w-2.5"
              style={{ background: "linear-gradient(90deg, #c8920a, #f5d97a, #c8920a)" }}
            />
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden lg:flex items-center gap-10">
          <NavItem href="/" label="Home" active={pathname === "/"} />
          <NavItem href="/professional" label="Professional Environment" active={pathname === "/professional"} />
          <NavItem href="/private" label="Private Households" active={pathname === "/private"} />
          <NavItem href="/testimonials" label="Testimonials" active={pathname === "/testimonials"} />
          <li>
            <Link href="/contact">
              <Button className="bg-main text-white font-mont text-sm">Contact Us</Button>
            </Link>
          </li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden p-1 text-main"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* ── Mobile Overlay ── */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-main flex flex-col">
          {/* Close button */}
          <div className="flex justify-end px-5 py-5">
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={26} className="text-white" />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col divide-y divide-white/10 mt-4">
            <NavItem href="/" label="Home" active={pathname === "/"} onClick={() => setOpen(false)} />
            <NavItem href="/professional" label="Professional Environment" active={pathname === "/professional"} onClick={() => setOpen(false)} />
            <NavItem href="/private" label="Private Households" active={pathname === "/private"} onClick={() => setOpen(false)} />
            <NavItem href="/testimonials" label="Testimonials" active={pathname === "/testimonials"} onClick={() => setOpen(false)} />
            <li className="px-5 py-5 flex justify-end">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="bg-white text-main font-mont font-semibold">Contact Us</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}