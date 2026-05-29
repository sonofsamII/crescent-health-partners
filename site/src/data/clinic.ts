// Single source of truth for clinic info. Used in JSON-LD, headers, footers,
// contact page, schema, OG tags. If any of this changes, change here.

export const CLINIC = {
  name: "Crescent Health Partners",
  legalName: "Crescent Health Partners, LLC",
  tagline: "Your partners in wound care, wellness, and the work that gets you back on the road.",
  shortTagline: "Your partners in wound care and wellness.",
  email: "info@crescenthealthpartners.com",
  phone: "+1-803-883-4033",
  phoneDisplay: "(803) 883-4033",
  fax: "+1-803-883-4059",
  faxDisplay: "(803) 883-4059",
  url: "https://crescenthealthpartners.com",
  priceRange: "$$",
} as const;

export type ClinicLocation = {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  region: string;
  notes?: string;
  mapsQuery: string;
};

export const LOCATIONS: ClinicLocation[] = [
  {
    id: "sumter",
    name: "Sumter Clinic",
    street: "212 Broad St.",
    city: "Sumter",
    state: "SC",
    zip: "29150",
    region: "Sumter County",
    notes: "Walk-ins welcome · Truck parking available for DOT exams",
    mapsQuery: "Crescent+Health+Partners+212+Broad+St+Sumter+SC+29150",
  },
  {
    id: "columbia",
    name: "Columbia Clinic",
    street: "7356 Garners Ferry Road, Suite 127",
    city: "Columbia",
    state: "SC",
    zip: "29209",
    region: "Richland County",
    notes: "Open Tuesdays and Thursdays",
    mapsQuery: "7356+Garners+Ferry+Road+Suite+127+Columbia+SC+29209",
  },
];

export const HOURS = [
  { day: "Monday", hours: "8:30 AM – 5:00 PM" },
  { day: "Tuesday", hours: "8:30 AM – 5:00 PM" },
  { day: "Wednesday", hours: "8:30 AM – 5:00 PM" },
  { day: "Thursday", hours: "8:30 AM – 5:00 PM" },
  { day: "Friday", hours: "8:30 AM – 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
] as const;

export const PROVIDERS = [
  {
    id: "lisa-rivera",
    name: "Lisa Rivera",
    credentials: "MSN, FNP-C, WCC",
    role: "Family Nurse Practitioner · Wound Care Certified",
    bio: "Board-certified family nurse practitioner specializing in wound care and hyperbaric oxygen therapy. 38 years in nursing — bedside critical care, ED, Director of Nursing — now focused full-time on healing complex wounds. NAWCO-certified. Moved to Sumter from New Jersey in 2021.",
    specialties: ["Wound Care", "Hyperbaric Oxygen Therapy", "Diabetic Foot Care", "Occupational Health"],
  },
  {
    id: "kim-jackson",
    name: "Kimberly Dianne Billie Jackson",
    credentials: "MSN, AGNP-C",
    role: "Adult-Gerontology Primary Care NP · Co-founder",
    bio: "Board-certified Adult-Gerontology Primary Care Nurse Practitioner and co-founder of Sumter's only free-standing wound clinic. 26 years in nursing — including front-line ICU during COVID's first wave in NYC. Director of Allheart AHEC (17 years), training the next generation of CNAs, phlebotomists, and EKG techs. Sumter native, USC '97. Speaks conversational Spanish.",
    specialties: ["Wound Care", "Limb Salvage", "Diabetic Foot Care", "Health Education", "Medical Weight Loss"],
  },
] as const;
