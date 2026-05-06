import type { Metadata } from "next";
import {  Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: '500'
})

export const metadata: Metadata = {
  title: "SFCSSL ",
  description: "SF Care and Support Services Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", mont.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
