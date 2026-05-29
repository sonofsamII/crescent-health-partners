// All services. Three "hero" services get dedicated deep pages (wound-care,
// dot-physicals, drug-testing). The rest live on /services as cards.

export type Service = {
  id: string;
  slug?: string; // present if it has its own deep page
  name: string;
  short: string;
  long: string;
  highlights: string[];
  category: "specialty" | "occupational" | "wellness" | "diagnostic";
  conditions?: string[]; // for MedicalCondition schema (wound care)
  procedureType?: "TherapeuticProcedure" | "DiagnosticProcedure" | "MedicalTest";
};

export const SERVICES: Service[] = [
  {
    id: "wound-care",
    slug: "wound-care",
    name: "Wound Care",
    short: "Slow-healing, chronic, diabetic, venous, arterial, and atypical wounds — including burns. Physician-supervised. NAWCO-certified.",
    long: "Wound care is our specialty. Our nurse practitioners are wound-care certified with years of focused experience healing the wounds that don't close. Our program is physician-supervised, team-based, and built around limb salvage — we coordinate with local specialists, refer to nearby hyperbaric oxygen therapy chambers, and order advanced biologics and stem-cell modalities when the standard playbook stalls. We also bring wound care to hospice, in-home, and nursing facility patients across Sumter and the surrounding communities.",
    highlights: [
      "Diabetic foot ulcers and limb salvage",
      "Slow-healing surgical and traumatic wounds",
      "Venous and arterial ulcers",
      "Atypical wounds and burns",
      "Mobile wound care for hospice, in-home, and nursing facilities",
      "Hyperbaric oxygen therapy coordination",
      "Advanced modalities: biologics, stem-cell, growth factors",
    ],
    category: "specialty",
    conditions: ["Diabetic foot ulcer", "Pressure ulcer", "Venous stasis ulcer", "Arterial ulcer", "Surgical wound", "Burn", "Atypical wound"],
    procedureType: "TherapeuticProcedure",
  },
  {
    id: "dot-physicals",
    slug: "dot-physicals",
    name: "DOT Physicals",
    short: "Same-day DOT medical exams by full-time Certified DOT Examiners. Truck parking available.",
    long: "We have full-time Certified DOT Examiners on staff to perform thorough, high-quality DOT medical exams — same day, if you bring your paperwork. We email some of the forms ahead so the visit goes faster. Our prices are reasonable and our visits are quicker than the urgent-care line. We care about your health on and off the road. Ask us about truck parking when you come in.",
    highlights: [
      "Same-day DOT medical exams (with paperwork)",
      "Certified DOT Examiners on staff full-time",
      "Truck parking on site",
      "DOT and non-DOT drug screening in office",
      "Men's health checkups + medical weight loss for drivers",
      "Pre-visit electronic forms",
    ],
    category: "occupational",
    procedureType: "MedicalTest",
  },
  {
    id: "drug-testing",
    slug: "drug-testing",
    name: "Drug Testing (DOT & Non-DOT)",
    short: "CLIA lab. Rapid in-office screens and chain-of-custody send-outs.",
    long: "Crescent Health Partners is a CLIA-certified lab. We perform DOT chain-of-custody drug screens, send-out panels, and in-office rapid drug screens for both DOT and non-DOT employers. Walk-ins welcome. Faster than the local urgent care so we can get your driver, your hire, or your court-ordered test rolling.",
    highlights: [
      "DOT 5-panel (chain of custody, accredited lab)",
      "Non-DOT panels (5, 10, expanded)",
      "Pre-employment, random, post-accident, return-to-duty",
      "Rapid in-office screening (results in minutes)",
      "TB skin test + QuantiFERON Gold blood test",
      "Walk-ins welcome at both locations",
    ],
    category: "occupational",
    procedureType: "MedicalTest",
  },
  {
    id: "wellness-snapshots",
    name: "Wellness Snap Shots",
    short: "A concierge lab and screening panel for men and women — without a doctor's prescription required.",
    long: "We call it the gift of knowing. A Wellness Snap Shot is a panel of labs and simple in-office tests that paint a picture of where your health actually is: blood pressure, cholesterol, A1C, PSA for men, height, weight, the lab work you want, and a mental-health questionnaire — with a board-certified nurse practitioner who is in your corner. Gift certificates available.",
    highlights: ["BP, cholesterol, A1C, PSA (men)", "Labs of your choice", "Mental-health questionnaire", "Concierge — no prescription needed", "Gift certificates available"],
    category: "wellness",
  },
  {
    id: "medical-weight-loss",
    name: "Medical Weight Loss",
    short: "GLP-1 / GIP injections, nutrition, behavior change. Long-term, not extreme.",
    long: "We're a bonafide medical weight-loss clinic run by experienced nurse practitioners who understand the work is as much mental as physical. Our motto: no extremes; change your mind, change your body. GLP-1 / GIP injections paired with calorie planning and an exercise plan you can keep. Not every patient is a fit for the injections — we'll tell you straight. Free consultation.",
    highlights: ["GLP-1 / GIP injections when appropriate", "Cognitive-behavioral approach", "Meal and exercise planning", "Free consultation", "Long-term goal-setting"],
    category: "wellness",
  },
  {
    id: "iv-hydration",
    name: "IV Hydration Therapy",
    short: "Custom IV cocktails with vitamins, minerals, and 70 combined years of ICU/ER nursing behind the needle.",
    long: "Our nurse practitioners are ICU and ER veterans — starting IVs, even the tricky ones, is second nature. Relax in our spa room with TV, aromatherapy, robe and slippers, your music. Each Crescent cocktail is tailored to your wellness goals. Strict aseptic technique, every time.",
    highlights: ["Hydration, vitamin, and mineral infusions", "Spa room environment", "ICU/ER-experienced clinicians", "Customized to your goals"],
    category: "wellness",
  },
  {
    id: "pre-employment-physicals",
    name: "Pre-Employment & Sports Physicals",
    short: "Same-day physicals for employers and student athletes. School groups by appointment.",
    long: "Same-day pre-employment physicals for hires, and full sports physicals for adolescents (13–17) and college-age athletes. We travel to schools by appointment for groups of five or more. Adolescent sports physicals are $55.",
    highlights: ["Pre-employment physicals", "Student sports physicals (13–17) — $55", "On-site group visits at schools", "Same-day turnaround"],
    category: "occupational",
  },
  {
    id: "flu-covid-testing",
    name: "Flu, COVID & Respiratory Testing",
    short: "Rapid in-office or curbside testing. Stay in your car if you're too sick to come in.",
    long: "The triad — COVID, Flu A/B, RSV — spikes every winter. We screen, swab, and direct you to treatment or rest. Curbside testing available if you'd rather not come inside. Please wear a mask if you're symptomatic.",
    highlights: ["COVID, Flu A/B, RSV screening", "Curbside swabbing", "Same-day results for most rapid tests"],
    category: "diagnostic",
  },
  {
    id: "lab-work",
    name: "Walk-In Lab Work",
    short: "Order the labs you actually want — no prescription required. Fees apply.",
    long: "Walk in, ask for the labs you want, and go. No primary-care referral required. Pair it with a Wellness Snap Shot to actually understand what the numbers mean.",
    highlights: ["No prescription required", "Concierge lab draws", "Results explained by an NP", "Send-out to accredited labs"],
    category: "diagnostic",
  },
  {
    id: "pregnancy-paternity",
    name: "Pregnancy & Paternity Testing",
    short: "In-office urine, send-out blood pregnancy panels, and strict chain-of-custody DNA / paternity testing.",
    long: "Discreet pregnancy testing (urine in-office + blood send-out for HCG quantitation when you need a reliable number) and chain-of-custody paternity / DNA testing in clinic or at the courthouse. Your privacy and dignity are assured.",
    highlights: ["In-office and send-out pregnancy testing", "Chain-of-custody paternity testing", "Courthouse-area collection available", "Strict specimen handling"],
    category: "diagnostic",
  },
];

export const HERO_SERVICES = SERVICES.filter((s) => s.slug);
