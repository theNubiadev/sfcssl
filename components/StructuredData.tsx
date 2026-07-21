// components/StructuredData.tsx
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sfcssl.co.uk/",
    "name": "SF Care and Support Services Ltd",
    "alternateName": "SFCSSL",
    "url": "https://sfcssl.co.uk",
    "logo": "https://sfcssl.co.uk/domestic.jpeg",
    "image": "https://sfcssl.co.uk/homes.jpeg",
    "description": "Professional care, support, and cleaning services based in Greater Manchester, UK.",
    "telephone": "+44-073-618-97965",
    "email": "info@sfcssl.co.uk",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bartle House,",
      "addressLocality": "9 Oxford Court,",
      "addressRegion": "Greater Manchester",
      "postalCode": "M2 3WQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.4808",
      "longitude": "-2.2426"
    },
    "areaServed": [
      { "@type": "City", "name": "Manchester" },
      { "@type": "City", "name": "Oxford Court" },
      { "@type": "City", "name": "Bolton" },
      { "@type": "City", "name": "Bury" },
      { "@type": "City", "name": "Stockport" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/sfcareandsupport?igsh=YWlrNTA1czY1b3Br&utm_source=qr",
      "https://www.facebook.com/photo.php?fbid=941524095596182&set=a.100843316330935&type=3"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic Cleaning",
            "areaServed": "Greater Manchester"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "areaServed": "Greater Manchester"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Care and Support Services",
            "areaServed": "Greater Manchester"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}