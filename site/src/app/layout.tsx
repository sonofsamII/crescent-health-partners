import type { Metadata } from "next";
import { Geist, Inter, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CLINIC, LOCATIONS, HOURS, PROVIDERS } from "@/data/clinic";
import { SERVICES } from "@/data/services";

const SITE_URL = "https://crescenthealthpartners.com";

// ── MedicalClinic + MedicalBusiness JSON-LD ─────────────────────────────
// AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) parse this
// schema directly from the rendered HTML to identify the clinic, its
// specialties, services, providers, and locations. Multi-type so both
// classifications surface; medicalSpecialty array signals our three pillars.

const dayMap: Record<string, string> = {
  Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday",
  Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday", Sunday: "Sunday",
};

const openingHours = HOURS
  .filter((h) => h.hours !== "Closed")
  .map((h) => {
    const [opens, closes] = h.hours.split(" – ").map((s) => {
      const m = s.match(/^(\d{1,2}):?(\d{2})?\s*(AM|PM)$/i);
      if (!m) return s;
      let hr = parseInt(m[1], 10);
      const min = m[2] ?? "00";
      const ampm = m[3].toUpperCase();
      if (ampm === "PM" && hr !== 12) hr += 12;
      if (ampm === "AM" && hr === 12) hr = 0;
      return `${String(hr).padStart(2, "0")}:${min}`;
    });
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens,
      closes,
    };
  });

const branchLocations = LOCATIONS.map((loc) => ({
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}#${loc.id}`,
  name: `${CLINIC.name} — ${loc.name}`,
  url: `${SITE_URL}/locations#${loc.id}`,
  telephone: CLINIC.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: loc.street,
    addressLocality: loc.city,
    addressRegion: loc.state,
    postalCode: loc.zip,
    addressCountry: "US",
  },
  medicalSpecialty: ["WoundCare", "OccupationalHealth", "PrimaryCare", "PreventiveMedicine"],
  openingHoursSpecification: openingHours,
}));

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic"],
  "@id": `${SITE_URL}#business`,
  name: CLINIC.name,
  legalName: CLINIC.legalName,
  alternateName: "Crescent Wound and Medical Clinics",
  description:
    "Nurse-practitioner-owned wound care, occupational health (DOT physicals, drug testing), and wellness clinic with two locations in Sumter and Columbia, South Carolina.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  priceRange: CLINIC.priceRange,
  telephone: CLINIC.phone,
  faxNumber: CLINIC.fax,
  email: CLINIC.email,
  medicalSpecialty: [
    "WoundCare",
    "OccupationalHealth",
    "PrimaryCare",
    "PreventiveMedicine",
    "InternalMedicine",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: LOCATIONS[0].street,
    addressLocality: LOCATIONS[0].city,
    addressRegion: LOCATIONS[0].state,
    postalCode: LOCATIONS[0].zip,
    addressCountry: "US",
  },
  location: branchLocations,
  openingHoursSpecification: openingHours,
  availableService: SERVICES.map((s) => ({
    "@type": s.procedureType ?? "MedicalProcedure",
    name: s.name,
    description: s.short,
    url: s.slug ? `${SITE_URL}/services/${s.slug}` : `${SITE_URL}/services`,
  })),
  employee: PROVIDERS.map((p) => ({
    "@type": "Physician",
    name: `${p.name}, ${p.credentials}`,
    medicalSpecialty: p.specialties,
  })),
  areaServed: [
    { "@type": "City", name: "Sumter, SC" },
    { "@type": "City", name: "Columbia, SC" },
    { "@type": "City", name: "Manning, SC" },
    { "@type": "City", name: "Bishopville, SC" },
    { "@type": "AdministrativeArea", name: "Sumter County, SC" },
    { "@type": "AdministrativeArea", name: "Lee County, SC" },
    { "@type": "AdministrativeArea", name: "Clarendon County, SC" },
    { "@type": "AdministrativeArea", name: "Richland County, SC" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: CLINIC.name,
  legalName: CLINIC.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CLINIC.phone,
      email: CLINIC.email,
      contactType: "customer service",
      areaServed: "US-SC",
      availableLanguage: ["English", "Spanish"],
    },
  ],
};

const display = Geist({ subsets: ["latin"], display: "swap", variable: "--font-display", weight: ["400", "500", "600"] });
const body = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body", weight: ["400", "500", "600"] });
const mono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono", weight: ["400", "500"] });
const serif = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-serif", weight: ["400", "500", "600"], style: ["italic", "normal"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crescent Health Partners — Wound care, DOT physicals & wellness in Sumter, SC",
    template: "%s · Crescent Health Partners",
  },
  description:
    "Nurse-practitioner-owned wound care clinic in Sumter and Columbia, SC. Same-day DOT physicals, drug testing, wellness snap shots, IV hydration, medical weight loss. Walk-ins welcome.",
  openGraph: {
    title: "Crescent Health Partners",
    description:
      "Wound care, DOT physicals, drug testing and wellness in Sumter and Columbia, SC. Walk-ins welcome.",
    type: "website",
    url: SITE_URL,
    siteName: CLINIC.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescent Health Partners",
    description: "Wound care + wellness clinic in Sumter, SC.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <script
          id="ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
