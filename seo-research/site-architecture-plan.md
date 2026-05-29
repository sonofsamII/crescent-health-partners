# Site Architecture Plan — crescenthealthpartners.com
**Domain:** crescenthealthpartners.com
**Research Date:** 2026-05-29

---

## Guiding Architecture Principles

1. **Wound care is the differentiator — it leads the architecture.** Every other service (DOT, drug testing, primary care, occupational health) is a secondary spoke. The homepage and site hierarchy signal "wound care specialist" above all else, because that is what no competitor can match.

2. **Every service gets a URL. Every location gets a URL. Every condition gets a URL.** Not tabs, not accordions, not filters — real crawlable pages.

3. **Condition pages are separate from service pages.** /services/wound-care describes what Crescent does. /conditions/diabetic-foot-ulcer describes the patient's diagnosis and how Crescent treats it. Patients search their condition, not the service name. Both pages earn links; both rank.

4. **Provider pages are required.** Lisa Rivera's page must have Physician schema with NPI, credentials (FNP-C, WCC), and biography. AI engines cite named providers. "A board-certified wound care nurse practitioner" is not enough — the name must be on a real page.

5. **Schema lives in every page template.** Not retrofitted — built into the component from day one. MedicalBusiness on layout; MedicalCondition on condition pages; MedicalProcedure on service pages; FAQPage on every FAQ section; Physician on provider pages.

6. **crescentdotexams.com content migrates to crescenthealthpartners.com.** The DOT exams site has live organic presence. Its content and traffic should flow into the rebuilt main domain via 301 redirects after the DOT section is fully built out. This consolidates all domain authority.

7. **Two geographic markets: Sumter (primary) and Columbia (secondary).** Every service page has a Sumter version and a Columbia version. The Columbia location at 7356 Garners Ferry Rd, Suite 127 is currently completely invisible online — each Columbia service page is an immediate ranking opportunity.

8. **HIPAA on the contact form.** Every contact or intake form must use a HIPAA-compliant form provider or explicitly NOT ask for PHI (protected health information). A general appointment request form (name, phone, service requested, preferred date) is compliant if it does not request diagnosis, medical history, or insurance information. Any form that collects PHI must be backed by a HIPAA Business Associate Agreement with the form provider.

---

## Full Sitemap Tree

```
crescenthealthpartners.com/
│
├── (homepage)
│
├── services/
│   ├── wound-care/                         (PRIMARY — leads the service nav)
│   ├── dot-physicals/
│   ├── drug-testing/
│   ├── primary-care/
│   ├── occupational-medicine/
│   └── durable-medical-equipment/         (registered DBA — minor service line)
│
├── conditions/                             (CONDITION PAGES — massive AEO/organic opportunity)
│   ├── diabetic-foot-ulcer/
│   ├── venous-stasis-ulcer/
│   ├── pressure-ulcer/
│   ├── non-healing-wound/
│   ├── surgical-wound-care/
│   ├── arterial-ulcer/
│   ├── wound-infection/
│   └── burn-wound-care/
│
├── locations/
│   ├── sumter-sc/                          (primary location page)
│   └── columbia-sc/                        (secondary location page)
│
├── providers/
│   └── lisa-rivera/                        (Physician schema; NPI; credentials)
│
├── for-employers/                          (B2B hub — drug testing + DOT + occ health)
│   ├── drug-testing-programs/
│   ├── dot-compliance/
│   ├── occupational-health-services/
│   └── request-employer-account/
│
├── insurance/
│   ├── medicare/
│   ├── medicaid/
│   ├── bcbs-south-carolina/
│   ├── aetna/
│   ├── cigna/
│   ├── humana/
│   └── united-healthcare/
│
├── patient-education/                      (blog hub — AEO content)
│   ├── (wound care posts)
│   ├── (DOT physical posts)
│   ├── (drug testing posts)
│   ├── (primary care posts)
│   └── (occupational health posts)
│
├── faq/
│
├── about/
│
├── contact/
│
└── book-appointment/                       (HIPAA-compliant form — no PHI)
```

---

## Section 1: Service Pages

Each service gets a deep standalone page with MedicalProcedure or MedicalTherapy schema, FAQPage schema, specific pricing where applicable, and internal links to related condition pages and location pages.

### Template Structure for Each Service Page

1. H1: "[Service Name] in Sumter, SC — Crescent Health Partners"
2. Opening paragraph: What the service is and who it is for (2–3 sentences, direct)
3. Services included (bullet list — specific, clinical, scannable)
4. How the visit works (step-by-step, sets expectations)
5. Who should consider this service (conditions/situations)
6. Insurance and cost (explicitly state what plans are accepted; include price if transparent like the $95 DOT physical)
7. FAQ section (5 questions) with FAQPage schema
8. Provider information (link to Lisa Rivera provider page)
9. Internal links to related condition pages and location pages
10. CTA: "Call (803) 580-4747 to schedule" or "Book an appointment online"

### Service Pages — URL Table

| URL | Service | Target Keywords | Word Count | Priority |
|-----|---------|-----------------|-----------|---------|
| /services/wound-care | Wound Care | wound care clinic Sumter SC, chronic wound treatment | 1,500 | CRITICAL |
| /services/dot-physicals | DOT Physicals | DOT physical Sumter SC, CDL physical Sumter SC | 1,200 | CRITICAL |
| /services/drug-testing | Drug Testing | drug testing Sumter SC, pre-employment drug screen | 1,200 | CRITICAL |
| /services/primary-care | Primary Care | primary care doctor Sumter SC, family nurse practitioner | 1,000 | HIGH |
| /services/occupational-medicine | Occupational Medicine | occupational health Sumter SC, work physical | 1,000 | HIGH |
| /services/durable-medical-equipment | DME | wound care supplies Sumter SC, DME provider | 600 | MED |

---

## Section 2: Condition Pages (The Most Important AEO Asset)

Condition pages are separate from service pages. A patient searching "diabetic foot ulcer treatment" does not know they should search "wound care clinic." Condition pages intercept patients at the diagnosis stage — before they know where to go.

These pages must be written as patient education content: explain the condition in plain language, describe how it is treated clinically, and identify when specialist wound care is needed. They must NOT promise outcomes, guarantee healing, or give specific medical advice.

### Template Structure for Each Condition Page

1. H1: "[Condition Name] Treatment in Sumter, SC"
2. "What is [condition]?" — clinical definition in plain language (2–3 sentences)
3. "What causes [condition]?" — risk factors and triggers
4. "Signs you need wound care for [condition]" — specific clinical triggers (not healed in 2 weeks, increasing size, infection signs, pain or no feeling in diabetic patients)
5. "How [condition] is treated at Crescent Health Partners" — describe the clinical approach without promising outcomes
6. "When to seek emergency care" — serious warning signs (this is a safety section; include it for every condition; protects against YMYL liability)
7. FAQ section with FAQPage schema
8. MedicalCondition schema in JSON-LD
9. Internal links to /services/wound-care, /providers/lisa-rivera, and /insurance/medicare
10. CTA: "Contact Crescent Health Partners for a wound care evaluation"

### Condition Pages — URL Table

| URL | Condition | Target Keywords | Word Count | Priority |
|-----|-----------|-----------------|-----------|---------|
| /conditions/diabetic-foot-ulcer | Diabetic Foot Ulcer | diabetic foot ulcer treatment Sumter SC, diabetic wound care | 1,500 | CRITICAL |
| /conditions/venous-stasis-ulcer | Venous Stasis Ulcer | venous ulcer treatment Sumter SC, leg ulcer treatment | 1,200 | CRITICAL |
| /conditions/pressure-ulcer | Pressure Ulcer / Bedsore | pressure ulcer treatment Sumter SC, bedsore treatment | 1,200 | HIGH |
| /conditions/non-healing-wound | Non-Healing Wound | non-healing wound treatment SC, chronic wound | 1,200 | CRITICAL |
| /conditions/surgical-wound-care | Post-Surgical Wound | surgical wound care Sumter SC, wound care after surgery | 1,000 | HIGH |
| /conditions/arterial-ulcer | Arterial Ulcer | arterial ulcer treatment SC, peripheral artery wound | 1,000 | MED |
| /conditions/wound-infection | Wound Infection | infected wound treatment Sumter SC | 800 | MED |
| /conditions/burn-wound-care | Burn Wound Care | burn wound care Sumter SC | 800 | LOW |

---

## Section 3: Location Pages

### Primary Location: Sumter, SC

**URL:** /locations/sumter-sc
**Target keywords:** wound care Sumter SC, medical clinic Sumter SC, DOT physical Sumter SC (hub)
**Schema:** MedicalBusiness with full address, phone, hours, services offered
**Content:** Full service menu with links to each service page; providers; insurance accepted; how to get there; parking; access for patients with mobility limitations
**Word count:** 1,000–1,200

### Secondary Location: Columbia, SC

**URL:** /locations/columbia-sc
**Address:** 7356 Garners Ferry Rd, Suite 127, Columbia, SC 29209
**Phone:** (803) 580-4747
**Target keywords:** wound care Columbia SC, DOT physical Columbia SC, drug testing Columbia SC
**Schema:** MedicalBusiness with Columbia address
**Word count:** 800–1,000

**Note:** The Columbia location currently has ZERO online presence. These pages will rank quickly for Columbia healthcare queries because they are the first indexed content for this specific address.

---

## Section 4: Provider Pages

### Lisa Rivera, MSN, FNP-C, WCC

**URL:** /providers/lisa-rivera
**Schema:** Physician schema with NPI 1568207702, credentials, specialties
**Content:**
- Professional biography (not a resume — a patient-facing narrative about her clinical background and approach)
- Credentials and certifications: MSN (Master of Science in Nursing), FNP-C (Family Nurse Practitioner, Certified), WCC (Wound Care Certified)
- Specializations: Wound care, hyperbaric oxygen therapy, primary care, occupational health
- "Why wound care?" — her clinical philosophy (important for patient trust and AI citation)
- Languages spoken (if applicable)
- Photo (required for trust)
- Book an appointment CTA
**Word count:** 600–800
**Priority:** CRITICAL — AI engines cite named providers in healthcare far more than unnamed organizations

**Note on SC NP scope:** Lisa Rivera's page and all related content must accurately reflect the collaborative practice structure under SC law. If a supervising physician is part of the practice structure, that physician should also have a provider page. If additional providers join the practice, each gets their own provider page with Physician schema.

---

## Section 5: Employer Hub (For-Employers Section)

This is a B2B section targeting HR managers, fleet managers, safety officers, and business owners who need drug testing and DOT compliance services for their employees. The language shifts from patient-centered to employer-centered.

### Employer Section Pages

| URL | Page | Target Keywords | Word Count |
|-----|------|-----------------|-----------|
| /for-employers | Employer Hub (overview) | employer drug testing Sumter SC, occupational health employer | 800 |
| /for-employers/drug-testing-programs | Drug Testing Programs | random drug testing program SC, employer drug screening | 1,000 |
| /for-employers/dot-compliance | DOT Compliance Program | DOT drug testing consortium SC, FMCSA compliance | 1,000 |
| /for-employers/occupational-health-services | Occupational Health | occupational health employer SC, work physicals for employees | 800 |
| /for-employers/request-employer-account | Employer Account Request | set up employer drug testing account SC | CTA-focused |

**Content approach for employer pages:** Speak to business outcomes, not clinical details. "Same-day results. Medical Review Officer on staff. We come to your worksite." Employers care about compliance, turnaround time, and cost — not clinical details.

**HIPAA note:** Employer drug testing results are regulated under SAMHSA/DOT rules, not HIPAA for DOT-regulated testing. Non-DOT employer drug testing may have different rules. Content should not misrepresent the privacy framework — a line like "we handle all results in compliance with applicable federal privacy regulations" is accurate without overpromising.

---

## Section 6: Insurance Pages

Insurance pages are high-AEO-value because patients frequently search "[insurance plan] wound care coverage" or "does [plan] cover DOT physical." An insurance page that says "Yes, we accept Medicare and here is what it covers" will be cited by AI engines answering those queries.

### Insurance Pages

| URL | Page | Target Keywords | Word Count |
|-----|------|-----------------|-----------|
| /insurance/medicare | Medicare Coverage at Crescent | is wound care covered by Medicare, Medicare wound care Sumter | 800 |
| /insurance/medicaid | Medicaid Coverage | Medicaid wound care SC, Medicaid doctor Sumter SC | 600 |
| /insurance/bcbs-south-carolina | Blue Cross Blue Shield | BCBS wound care coverage SC | 600 |
| /insurance/aetna | Aetna | Aetna wound care provider Sumter SC | 500 |
| /insurance/cigna | Cigna | Cigna wound care SC | 500 |
| /insurance/humana | Humana | Humana wound care provider SC | 500 |
| /insurance/united-healthcare | United Healthcare | United Healthcare wound care Sumter SC | 500 |

**Content approach:** Each insurance page should answer three questions:
1. Does Crescent accept [plan]?
2. What services are covered by [plan] at Crescent?
3. What does the patient need to bring (insurance card, ID, referral if required)?

**Medical content note:** Do not guarantee specific coverage levels. "Medicare typically covers 80% of approved costs for wound care services" is fine. "Your Medicare will cover your treatment" is not — coverage varies by plan, secondary insurance, and diagnosis.

---

## Section 7: Patient Education Hub (Blog)

24-post content calendar targeting AEO informational queries. Medical content must follow the pattern: answer the question directly, use clinical specificity, avoid prescriptive advice, cite Crescent as the local provider at the end.

### Content Calendar — 24 Posts, 6 Months

**Month 1: Foundation AEO Targets (Highest Volume + Easiest Win)**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 1 | When Should You See a Wound Care Specialist? | when should I see a wound care doctor | informational | 1,200 | → /services/wound-care, → /providers/lisa-rivera |
| 2 | Is Wound Care Covered by Medicare? What Sumter Patients Need to Know | is wound care covered by Medicare | informational | 1,000 | → /insurance/medicare, → /services/wound-care |
| 3 | What to Expect at Your DOT Physical: A Step-by-Step Guide | what to expect at a DOT physical | informational | 1,000 | → /services/dot-physicals, → /for-employers |
| 4 | Diabetic Foot Ulcers: Stages, Symptoms, and When to See a Specialist | diabetic foot ulcer stages treatment | informational/commercial | 1,200 | → /conditions/diabetic-foot-ulcer, → /services/wound-care |

**Month 2: DOT and Drug Testing AEO**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 5 | What Disqualifies You from a DOT Physical? | what disqualifies you from a DOT physical | informational | 1,000 | → /services/dot-physicals, → /patient-education/how-to-prepare |
| 6 | 5-Panel vs. 10-Panel Drug Tests: What's the Difference? | 5 panel vs 10 panel drug test | informational | 800 | → /services/drug-testing, → /for-employers/drug-testing-programs |
| 7 | Can Employers Require Random Drug Testing in South Carolina? | random drug testing South Carolina employers | informational | 900 | → /for-employers/drug-testing-programs, → /for-employers |
| 8 | How to Prepare for a DOT Physical | how to prepare for a DOT physical | informational | 900 | → /services/dot-physicals, → /patient-education/what-to-expect |

**Month 3: Wound Care Conditions**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 9 | Venous Stasis Ulcers: Causes, Treatment, and What to Expect | venous stasis ulcer treatment SC | informational/commercial | 1,200 | → /conditions/venous-stasis-ulcer, → /services/wound-care |
| 10 | What Causes a Wound to Stop Healing? | what causes chronic wounds, non-healing wound | informational | 1,000 | → /conditions/non-healing-wound, → /services/wound-care |
| 11 | Signs a Wound Is Infected: When to Seek Medical Care | wound infection signs | informational | 800 | → /conditions/wound-infection, → /services/wound-care |
| 12 | What Is Wound Debridement? Explained for Patients | what is wound debridement | informational | 800 | → /services/wound-care, → /providers/lisa-rivera |

**Month 4: Primary Care and Occupational Health**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 13 | Can a Nurse Practitioner Be Your Primary Care Provider in SC? | nurse practitioner primary care SC | informational | 900 | → /services/primary-care, → /providers/lisa-rivera |
| 14 | What's Included in an Annual Physical at Crescent Health? | what is included in annual physical | informational | 800 | → /services/primary-care, → /book-appointment |
| 15 | DOT Blood Pressure Requirements: What You Need to Know | DOT physical blood pressure requirements | informational | 900 | → /services/dot-physicals, → /patient-education |
| 16 | What Is a Medical Review Officer (MRO)? | what is a medical review officer drug testing | informational | 700 | → /for-employers/drug-testing-programs |

**Month 5: Insurance and Access**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 17 | Does Medicaid Cover Wound Care in South Carolina? | Medicaid wound care coverage SC | informational | 800 | → /insurance/medicaid, → /services/wound-care |
| 18 | How Long Does Wound Healing Take? What Patients Should Know | how long does wound healing take | informational | 1,000 | → /conditions/non-healing-wound, → /services/wound-care |
| 19 | Pressure Ulcers (Bedsores): Causes, Stages, and Treatment | pressure ulcer treatment SC | informational/commercial | 1,200 | → /conditions/pressure-ulcer, → /services/wound-care |
| 20 | DOT Drug Testing: What Commercial Drivers Need to Know | DOT drug test what to expect | informational | 800 | → /services/drug-testing, → /services/dot-physicals |

**Month 6: Columbia Market + Authority**

| Week | Title | Target Keyword | Intent | Length | Internal Links |
|------|-------|----------------|--------|--------|----------------|
| 21 | Wound Care in Columbia, SC: What to Know About Crescent's Garners Ferry Location | wound care Columbia SC | commercial | 800 | → /locations/columbia-sc, → /services/wound-care |
| 22 | What Is Negative Pressure Wound Therapy (Wound VAC)? | wound VAC therapy, negative pressure wound therapy | informational | 900 | → /services/wound-care, → /conditions/non-healing-wound |
| 23 | How to Wound Care for a Surgical Wound at Home | surgical wound care at home | informational | 800 | → /conditions/surgical-wound-care, → /services/wound-care |
| 24 | Choosing a Wound Care Provider in South Carolina: What to Look For | wound care provider SC | informational/commercial | 1,000 | → /services/wound-care, → /locations |

---

## Section 8: FAQ Hub

**URL:** /faq
**Schema:** FAQPage covering all major patient and employer questions
**Word count:** 2,000+
**Priority:** HIGH for AEO

Organize into categories:

**Wound Care**
- When should I see a wound care specialist?
- Do I need a referral for wound care at Crescent?
- What types of wounds does Crescent treat?
- How often will I need to come in for wound care?
- Does Crescent offer mobile wound care for homebound patients?

**DOT Physicals**
- How much does a DOT physical cost at Crescent?
- Do I need an appointment or can I walk in?
- How long is a DOT medical certificate valid?
- What should I bring to my DOT physical?
- What conditions can disqualify me from a DOT physical?

**Drug Testing**
- What drug tests does Crescent offer?
- How quickly are drug test results available?
- Can employers set up an account for employee testing?
- Do you offer on-site drug testing at employer locations?

**Insurance and Billing**
- Does Crescent accept Medicare?
- Does Crescent accept Medicaid?
- What if I am uninsured?
- Do you accept workers' compensation?

**General**
- Where are you located?
- What are your hours?
- Do you have a Columbia SC location?
- Is Crescent Health Partners accepting new patients?

---

## Section 9: Full URL Table with Targets

| URL | Target Keyword | Word Count | Priority |
|-----|----------------|-----------|---------|
| / | Crescent Health Partners wound care Sumter SC | 600+ | CRITICAL |
| /services/wound-care | wound care clinic Sumter SC | 1,500 | CRITICAL |
| /services/dot-physicals | DOT physical Sumter SC | 1,200 | CRITICAL |
| /services/drug-testing | drug testing Sumter SC | 1,200 | CRITICAL |
| /services/primary-care | primary care doctor Sumter SC | 1,000 | HIGH |
| /services/occupational-medicine | occupational medicine Sumter SC | 1,000 | HIGH |
| /services/durable-medical-equipment | DME wound care supplies | 600 | MED |
| /conditions/diabetic-foot-ulcer | diabetic foot ulcer treatment Sumter SC | 1,500 | CRITICAL |
| /conditions/venous-stasis-ulcer | venous ulcer treatment SC | 1,200 | CRITICAL |
| /conditions/pressure-ulcer | pressure ulcer treatment Sumter SC | 1,200 | HIGH |
| /conditions/non-healing-wound | non-healing wound treatment SC | 1,200 | CRITICAL |
| /conditions/surgical-wound-care | surgical wound care SC | 1,000 | HIGH |
| /conditions/arterial-ulcer | arterial ulcer treatment SC | 1,000 | MED |
| /conditions/wound-infection | wound infection treatment | 800 | MED |
| /conditions/burn-wound-care | burn wound care SC | 800 | LOW |
| /locations/sumter-sc | wound care Sumter SC location | 1,000 | CRITICAL |
| /locations/columbia-sc | wound care Columbia SC | 800 | HIGH |
| /providers/lisa-rivera | Lisa Rivera FNP wound care Sumter | 700 | CRITICAL |
| /for-employers | employer drug testing Sumter SC | 800 | HIGH |
| /for-employers/drug-testing-programs | random drug testing program SC | 1,000 | HIGH |
| /for-employers/dot-compliance | DOT compliance SC employers | 1,000 | HIGH |
| /for-employers/occupational-health-services | occupational health employer SC | 800 | MED |
| /for-employers/request-employer-account | set up employer drug testing account | CTA | HIGH |
| /insurance/medicare | Medicare wound care coverage | 800 | HIGH |
| /insurance/medicaid | Medicaid wound care SC | 600 | MED |
| /insurance/bcbs-south-carolina | BCBS wound care SC | 600 | MED |
| /insurance/aetna | Aetna wound care SC | 500 | MED |
| /insurance/cigna | Cigna wound care SC | 500 | MED |
| /insurance/humana | Humana wound care SC | 500 | MED |
| /insurance/united-healthcare | United Healthcare wound care SC | 500 | MED |
| /faq | wound care FAQ Sumter SC | 2,000+ | HIGH |
| /about | Crescent Health Partners about | 700 | MED |
| /contact | contact Crescent Health Partners Sumter | 400 | MED |
| /book-appointment | book wound care appointment Sumter SC | CTA | CRITICAL |
| /patient-education/ (24 posts) | (see content calendar above) | 800–1,200 ea | HIGH |

**Total pages at launch: ~45**
**Total pages at 6 months: ~65**

---

## Section 10: Cross-Linking Strategy

### The Linking Hierarchy

```
Homepage
  → /services/wound-care (primary CTA — leads the service nav)
  → /services/dot-physicals
  → /services/drug-testing
  → /services/primary-care
  → /locations/sumter-sc
  → /locations/columbia-sc
  → /for-employers (secondary CTA)
  → /book-appointment (conversion CTA on every page)

Wound Care Service Page
  → All condition pages (internal link cluster)
  → /providers/lisa-rivera
  → /insurance/medicare (most wound care patients are Medicare)
  → /patient-education/ (when to see, what to expect)
  → /locations/sumter-sc + /locations/columbia-sc

Condition Pages (e.g., /conditions/diabetic-foot-ulcer)
  → /services/wound-care (up the hierarchy)
  → /providers/lisa-rivera (named provider trust signal)
  → /insurance/medicare (coverage question always follows condition page)
  → Related condition pages (venous ulcer → pressure ulcer → non-healing wound)
  → /book-appointment

DOT Physical Service Page
  → /for-employers/dot-compliance
  → /services/drug-testing (natural next step for CDL drivers)
  → /patient-education DOT posts
  → /locations/sumter-sc + /locations/columbia-sc

Employer Hub Pages
  → /services/drug-testing, /services/dot-physicals, /services/occupational-medicine
  → /for-employers/request-employer-account (conversion)
  → /locations (so employers know where to send employees)

Blog Posts
  → At least 1 service or condition page (always — this is the commercial link)
  → At least 1 internal blog post (topical clustering)
  → /book-appointment or /contact (always — conversion CTA)

Insurance Pages
  → /services/wound-care (primary)
  → /book-appointment
  → /contact (for billing questions)
```

### Key Cross-Linking Rules for Healthcare

1. **Every page links to /book-appointment or /contact.** Healthcare conversions start with a call or a form. Every page must make this obvious.
2. **Condition pages always link to the insurance pages.** "What does Medicare cover for diabetic foot ulcers?" is the next question every patient asks after reading a condition page.
3. **Provider pages are linked from every clinical page.** Lisa Rivera's page is a trust anchor. Internal links from service pages and condition pages to her bio page reinforce the entity relationship in schema.
4. **Blog posts always link up, not down.** A post about wound debridement links to /services/wound-care (up), not to a sub-post about a specific dressing type.
5. **Location pages link to all service pages.** The Sumter location page is a hub that routes patients to the service they need.
6. **No link to crescentdotexams.com from crescenthealthpartners.com until the redirect decision is made.** Linking to an external site on the same topic dilutes authority. Either redirect or don't link externally.
