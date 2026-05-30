"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/*  Nav Item Component  */
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
      className={`px-4 lg:px-0 py-4 lg:py-2 text-right lg:text-left
       lg:hover:bg-transparent transition-colors font-mont
      ${
        active
          ? "text-sub font-medium lg:bg-transparent"
          : "text-white lg:text-inherit"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const navBarRef = useRef<HTMLUListElement | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showNav = () => setOpen(true);
  const removeNav = () => setOpen(false);

  return (
    <nav className="fixed z-50 w-full flex p-4 bg-white lg:px-8 lg:py-5 lg:items-center lg:justify-between">
      {/* Logo */}

      <div>
        <Link
          href="/"
          className=" no-underline text-inherit flex flex-col leading-none"
        >
          <span className="font-mont-[1.6rem] font-bold tracking-[1px] text-main">
            <span className="text-sub">SF</span>
          </span>

          <span className="mt-0.5 text-[0.58rem] font-medium font-mont tracking-[3px] uppercase text-[#8899b0]">
            Care & Support Services Ltd
          </span>
        </Link>
      </div>

      {/* NavLinks */}
      <ul
        ref={navBarRef}
        className={`transition-all duration-300 lg:flex lg:flex-row lg:relative lg:bg-transparent text-main lg:w-fit lg:h-fit lg:space-x-12
  ${
    open
      ? "flex bg-main absolute left-0 top-0 w-full h-fit py-16 flex-col justify-center z-30 divide-y divide-secondary"
      : "hidden"
  }`}
      >
        {/* Close Icon */}
        <X
          onClick={removeNav}
          className="lg:hidden absolute right-8 top-10 text-white text-sm cursor-pointer"
        />

        <NavItem
          href="/"
          label="Home"
          active={pathname === "/"}
          onClick={removeNav}
        />
        <NavItem
          href="/services"
          label="Services"
          active={pathname === "/services"}
          onClick={removeNav}
        />
        <NavItem
          href="/about-us"
          label="About Us"
          active={pathname === "/about-us"}
          onClick={removeNav}
        />
        <NavItem
          href="/testimonials"
          label="Testimonials"
          active={pathname === "/testimonials"}
          onClick={removeNav}
        />

        <li>
          <Link href="/contact" onClick={removeNav}>
            <Button className="bg-main text-white font-mont">Contact Us</Button>
          </Link>
        </li>
      </ul>

      <Menu
        className="lg:hidden absolute right-4 cursor-pointer text-[30px]"
        onClick={showNav}
      />
    </nav>
  );
}
 