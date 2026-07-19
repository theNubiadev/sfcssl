import type { Metadata } from "next";
import { Montserrat, Quicksand, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";

const quick = Quicksand({
  variable: "--font-quick",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});
const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "SF Care and Support Services Ltd",
  description:
    "Professional healthcare staffing, domestic cleaning, commercial cleaning, and concierge services across Greater Manchester.",
  keywords: [
    "healthcare staffing UK",
    "domestic cleaning Manchester",
    "commercial cleaning services",
    "care support services",
  ],
  openGraph: {
    title: "SF Care and Support Services Ltd",
    description: "Trusted care and support services in Greater Manchester.",
    url: "https://sfcssl.co.uk/",
    siteName: "SF Care and Support Services Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SF Care and Support Services Ltd",
    description: "Professional care and cleaning services.",
  },
  alternates: {
    canonical: "https://sfcssl.co.uk/locations/manchester",
  },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SF Care and Support Services Ltd",
  url: "https://sfcssl.co.uk",
  telephone: "+44 073 618 97965",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manchester",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    postalCode: "M2 3WW",
    addressCountry: "GB",
  },
  areaServed: [
    "Manchester",
    "Salford",
    "Trafford",
    "Stockport",
    "Oldham",
    "Bolton",
    "Wigan",
  ],
  serviceType: [
    "Healthcare Staffing",
    "Domestic Cleaning",
    "Commercial Cleaning",
    "Concierge Services",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        mont.variable,
        quick.variable,
        cormorant.variable,
      )}
    >
       <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>

      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </html>
  );
}
