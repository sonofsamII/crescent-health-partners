# 90-Day Action Plan — Crescent Health Partners
**Start Date:** 2026-05-29
**Domain:** crescenthealthpartners.com (rebuild in progress)

---

## Honest Reality Check

Crescent Health Partners is starting from near-zero organic presence:
- Domain authority: 0
- Indexed pages: 2 (default WordPress placeholder)
- Google Business Profile: Not confirmed active
- Healthcare directory citations: Partial (Tebra only)
- Healthgrades / Vitals / ZocDoc listings: None confirmed
- Google reviews: Unknown, likely 0
- NPI registry: Active (this is the one meaningful existing trust signal)
- Related site crescentdotexams.com: Live with partial organic presence

**What 90 days gets you (realistic):** Local map pack eligibility for Sumter wound care + DOT physical queries, page 1 for low-competition condition and informational queries, first AI engine citation mentions for wound care in Sumter (Prisma Health dominates this but Crescent can appear alongside for specific queries), indexed content for all primary service lines. A strong start with compounding momentum.

**What 90 days does NOT get you:** Outranking Prisma Health (DR 60+) for "wound care Sumter SC." Displacing LabCorp or Colonial Healthcare from the top map pack slots overnight. Significant primary care new patient volume from SEO alone.

**The honest 6–12 month trajectory:**
- 0–3 months: Infrastructure, schema, GBP, healthcare directory citations, first content
- 3–6 months: Map pack eligibility, condition pages ranking on page 1–2, informational posts driving AI citations
- 6–9 months: Page 1 for core wound care and DOT physical queries in Sumter; Columbia location gains traction
- 9–12 months: Consistent AI engine citations for Sumter wound care queries; review moat building; employer drug testing SEO capturing business accounts

---

## WEEKS 1–2: Foundation and Verification

These two weeks are entirely about making the business verifiable to Google, AI engines, and patients. No amount of content helps if the business cannot be confirmed as a real, operating medical entity.

---

### Action 1: Rebuild crescenthealthpartners.com on a proper CMS/stack

**Why:** The current site is a broken WordPress default. The rebuild is confirmed to be in progress, so this action is about ensuring the new site launches with SEO infrastructure baked in from day one.

**Technical requirements for the rebuilt site:**
- All page content server-rendered (not client-side JavaScript only) — AI and Google crawlers must see content in raw HTML
- sitemap.xml auto-generated and submitted to Google Search Console immediately on launch
- robots.txt allowing all crawlers (or properly segmenting staging vs. production)
- Canonical tags on all pages
- Mobile-responsive (Google indexes mobile-first)
- HTTPS with valid SSL certificate
- Page load time under 3 seconds (healthcare patients often use mobile on slow connections)

**Effort:** Part of the rebuild project
**Expected impact:** CRITICAL — Without this, no other action matters.

---

### Action 2: Add MedicalBusiness/MedicalClinic JSON-LD schema to root layout

**Why:** Healthcare-specific schema is the single highest-leverage technical action for AI engine citation. AI engines use this to identify Crescent as a verified medical entity — not just a generic local business.

**Include in the root layout schema:**
- NPI number (1568207702) as an identifier
- All 4 confirmed DBA names as alternateName
- Both physical locations (Sumter + Columbia)
- All service types as availableService with MedicalTherapy / MedicalProcedure types
- Insurance plans as paymentAccepted
- "Accepting new patients: Yes" in description and GBP

**Effort:** 2–3 hours
**Expected impact:** CRITICAL — Enables AI citation within 4–8 weeks of indexing.

**See aeo-audit.md Section 4 for the complete JSON-LD template.**

---

### Action 3: Create Google Business Profile — Sumter location

**Why:** GBP is the primary driver of local map pack ranking and Google AI Overview citations. Without a verified GBP, Crescent is invisible in local search.

**Healthcare-specific GBP fields:**
- Business category: "Medical Clinic" (primary)
- Additional categories: "Wound Care Center," "Drug Testing Service," "Occupational Health Service"
- Special attribute: "Accepting new patients: Yes"
- Insurance plans: Medicare, Medicaid, BCBS, Aetna, Cigna, Humana, United Healthcare
- Services: Add each service with individual description and price (DOT physical: $95)
- Website: crescenthealthpartners.com
- Address: 212 Broad Street, Sumter, SC 29150
- Phone: (803) 580-4747
- Hours: Accurate to actual practice hours
- Photos: Minimum 10 at launch (clinic exterior, interior, providers, any clinical images that are appropriate)
- Booking link: /book-appointment

**Effort:** 2–3 hours initial setup; ongoing 15–30 min/week maintenance
**Expected impact:** CRITICAL
**Who:** Lisa Rivera / practice ownership — GBP requires identity verification

---

### Action 4: Create Google Business Profile — Columbia location

**Why:** 7356 Garners Ferry Rd, Suite 127 is the second physical location. It needs its own GBP entry.

**Effort:** 1–2 hours
**Expected impact:** HIGH for Columbia market

---

### Action 5: Claim Healthgrades, Vitals, WebMD, Doximity, and Tebra listings

**Why:** These are the healthcare-specific directories AI engines check to verify a medical practice. Without them, AI engines cannot confidently cite Crescent for medical queries.

**Priority order:**
1. Healthgrades (healthgrades.com — search for Crescent Health Partners, claim if exists, create if not)
2. Vitals (vitals.com)
3. WebMD Health Listings (doctor.webmd.com)
4. Doximity (doximity.com — for Lisa Rivera as an individual provider NP profile)
5. Tebra (already partially present — complete the existing listing)
6. ZocDoc (zocdoc.com — paid booking platform; assess cost vs. benefit based on budget)

**NAP for all healthcare directories:**
- Organization: Crescent Health Partners
- Address: 212 Broad Street, Sumter, SC 29150
- Phone: (803) 580-4747
- NPI: 1568207702

**Effort:** 3–5 hours total (one-time)
**Expected impact:** HIGH for AI medical citation

---

### Action 6: Claim general citation directories with healthcare focus

**Why:** NAP consistency across directories is a local ranking signal. Also verify Bing Places (feeds ChatGPT/Perplexity via Bing index).

**Priority order:**
1. Bing Places for Business (bingplaces.com) — CRITICAL; feeds ChatGPT
2. Apple Maps Connect (mapsconnect.apple.com) — feeds Siri, Apple Intelligence
3. Google Business Profile (Actions 3–4 above)
4. Yelp (yelp.com/biz/add)
5. BBB (bbb.org) — creates trust signal
6. Foursquare (foursquare.com/business) — data provider to AI systems
7. Yellow Pages
8. Nextdoor Business

**Effort:** 2–3 hours
**Expected impact:** MED-HIGH

---

### Action 7: Verify crescentdotexams.com decision

**Two options — must decide before building:**

**Option A: 301-Redirect crescentdotexams.com to crescenthealthpartners.com/services/dot-physicals**
- Pro: Consolidates all domain authority into one domain; creates permanent DOT physical hub at main brand
- Pro: The $95 pricing and "150+ clients / 15 years" claims migrate to the main brand
- Con: Crescentdotexams.com may have existing rankings that could briefly fluctuate during redirect
- Recommended: Yes, after the DOT physical service page is fully built on the main site

**Option B: Maintain crescentdotexams.com as satellite, cross-link**
- Pro: Lower risk to existing rankings
- Con: Splits domain authority; confusing brand story; two sites to maintain
- Not recommended long-term

**Effort:** Decision = 0 hours; implementation after DOT page is built = 1 hour (redirect rules)

---

## WEEKS 3–4: First Content Velocity

Infrastructure is live. Now publish the content that captures the AEO queries and the first commercial intent searches.

---

### Action 8: Publish provider page — Lisa Rivera, MSN, FNP-C, WCC

**Why:** AI engines cite named providers, not unnamed clinics. This page, with Physician schema including her NPI and credentials, is the trust anchor for the entire site. It must exist before the wound care service pages link to it.

**Content requirements:**
- Professional biography (patient-facing narrative, not a resume)
- All credentials with full expansions: Family Nurse Practitioner Certified (FNP-C), Wound Care Certified (WCC), Master of Science in Nursing (MSN)
- Specializations listed as a bullet list
- Note on SC NP practice structure (collaborative agreement language if applicable)
- Professional photo
- Physician schema in JSON-LD with NPI 1568207702

**Effort:** 2–3 hours
**Expected impact:** HIGH — enables all other clinical pages to link to a verified provider entity

---

### Action 9: Publish the wound care service page (/services/wound-care)

**Why:** This is the primary commercial page. "Wound care clinic Sumter SC" has low competition — Prisma Health is the only real organic competitor, but their result is a sub-page on a mega-domain, not a dedicated wound care clinic site. A well-structured wound care service page on a focused domain can rank on page 1–2 within 3–4 months.

**Required elements:**
- H1: "Wound Care Clinic in Sumter, SC — Crescent Health Partners"
- All wound types treated (specific conditions named, not generic "wound care")
- Services included: debridement, dressings, wound VAC, mobile wound care
- "No referral required" — emphasize self-referral access (Prisma requires referral)
- Medicare and insurance acceptance stated explicitly
- Provider: Lisa Rivera FNP-C WCC (linked to /providers/lisa-rivera)
- FAQPage schema with 5 questions
- MedicalTherapy schema
- CTA: "(803) 580-4747 — No referral required"

**Effort:** 3–4 hours
**Expected impact:** CRITICAL

---

### Action 10: Publish the DOT physical service page (/services/dot-physicals)

**Why:** crescentdotexams.com already has DOT physical organic presence. Migrating this to the main brand via a well-structured service page, then redirecting crescentdotexams.com, consolidates that authority.

**Required elements:**
- H1: "DOT Physical Exams in Sumter, SC | $95 | Walk-Ins Welcome"
- Price ($95) in the H1 or immediately below — this is a major conversion signal
- All DOT physical components explained
- "FMCSA Certified Medical Examiner" language
- Sumter and Columbia locations
- FAQPage schema (5 questions)
- CTA: Call (803) 883-4033 (the DOT exam line) or book online

**Effort:** 2–3 hours
**Expected impact:** CRITICAL

---

### Action 11: Publish "When Should You See a Wound Care Specialist?" blog post

**AEO Priority #1 from aeo-audit.md.** Direct Q&A format. First paragraph answers the question completely. Specific clinical triggers. Crescent's number and "no referral required" as the conversion close.

**Effort:** 2–3 hours
**Expected impact:** HIGH for AEO; moderate for organic ranking

---

### Action 12: Publish "Is Wound Care Covered by Medicare?" blog post

**AEO Priority #2.** Must explicitly state that Crescent accepts Medicare. Link to /insurance/medicare.

**Effort:** 2–3 hours
**Expected impact:** HIGH for AEO

---

### Action 13: Launch patient review collection process

**Why:** The review floor for Sumter wound care providers is extremely low. Physicians Footcare has 81 reviews — the highest in the wound care adjacent space. Prisma Health's wound center benefits from the health system brand. Crescent can build a review count that surpasses most local medical providers within 6 months.

**The process:**
1. After every appointment: send text or email to patient "Thank you for choosing Crescent Health Partners. If you're willing to share your experience, a Google review helps us serve more patients in Sumter. [Direct review link]"
2. Provide a QR code card in the visit summary or discharge paperwork
3. Respond to every review — positive and negative — within 48 hours
4. Target: 25 Google reviews by day 90

**HIPAA note:** The review request cannot mention the patient's condition or the reason for their visit. It must be a generic "thank you for visiting" message only. The patient chooses what to disclose in their own review.

**Effort:** 30 min setup; 5 min per patient interaction ongoing
**Expected impact:** HIGH — the second most important local ranking signal after GBP completeness

---

## MONTH 2: Content Scaling and Citation Building

### Action 14: Publish condition pages (highest priority first)

**Month 2 condition pages in priority order:**
1. /conditions/diabetic-foot-ulcer (highest search volume; podiatry-dominated locally; Crescent can win)
2. /conditions/non-healing-wound (primary referral trigger; highest AEO value)
3. /conditions/venous-stasis-ulcer (second most common wound type nationally)
4. /conditions/pressure-ulcer (nursing home / home health adjacent patient population)

**Effort:** 3–4 hours per page
**Expected impact:** HIGH — condition pages rank faster than service pages because competition is lower

---

### Action 15: Publish drug testing and employer hub pages

**Pages to publish:**
1. /services/drug-testing
2. /for-employers (employer hub overview)
3. /for-employers/drug-testing-programs
4. /for-employers/dot-compliance

**Effort:** 2–3 hours per page
**Expected impact:** HIGH for employer B2B acquisition

---

### Action 16: Publish insurance pages (Medicare and Medicaid first)

**Why:** These pages capture AEO queries about coverage and demonstrate to AI engines that Crescent is a verified Medicare/Medicaid provider.

**Pages to publish first:**
1. /insurance/medicare
2. /insurance/medicaid

**Effort:** 2 hours total for first two pages
**Expected impact:** HIGH for AEO; builds patient trust

---

### Action 17: Publish Month 2 blog posts

Per the content calendar in site-architecture-plan.md:
- "What Disqualifies You from a DOT Physical?"
- "5-Panel vs. 10-Panel Drug Tests: What's the Difference?"
- "Can Employers Require Random Drug Testing in South Carolina?"
- "How to Prepare for a DOT Physical"

**Effort:** 2–3 hours per post
**Expected impact:** MED-HIGH for AEO

---

### Action 18: Publish primary care service page and occupational medicine service page

**Effort:** 2–3 hours each
**Expected impact:** HIGH for local primary care acquisition; builds topical authority breadth

---

### Action 19: Publish Columbia SC location page

**Why:** The Columbia location at 7356 Garners Ferry Rd is completely invisible online. A single location page with MedicalBusiness schema, hours, and services will rank immediately for "wound care Columbia SC" because no focused competitor exists for that specific address.

**Effort:** 2 hours
**Expected impact:** HIGH (immediate ranking opportunity)

---

### Action 20: Submit crescentdotexams.com 301 redirects (after DOT service page is published)

**After /services/dot-physicals is live:** Implement 301 redirect rules on crescentdotexams.com:
- crescentdotexams.com → crescenthealthpartners.com/services/dot-physicals
- All crescentdotexams.com subpages → crescenthealthpartners.com/services/dot-physicals

**Effort:** 1–2 hours (requires hosting/DNS access to crescentdotexams.com)
**Expected impact:** HIGH — passes link equity and organic signals to main domain

---

## MONTH 3: Review Acceleration and Authority Building

### Action 21: Complete all condition pages and remaining service pages

**Remaining condition pages:**
- /conditions/surgical-wound-care
- /conditions/arterial-ulcer
- /conditions/wound-infection
- /conditions/burn-wound-care

**Remaining service pages:**
- /services/durable-medical-equipment
- /for-employers/occupational-health-services
- /for-employers/request-employer-account

**Effort:** 2–3 hours per page

---

### Action 22: Complete all insurance pages

Publish BCBS, Aetna, Cigna, Humana, United Healthcare pages.

**Effort:** 1–2 hours each

---

### Action 23: Build and publish the FAQ hub

**URL:** /faq
**Schema:** FAQPage with 20+ questions in all service categories
**This is the most important single AEO asset on the site.** A comprehensive FAQ with FAQPage schema is the page AI engines most frequently cite for medical practice queries.

**Effort:** 3–4 hours
**Expected impact:** HIGH for AI citation

---

### Action 24: Publish Month 3 blog posts

Per content calendar — wound care condition posts (venous stasis ulcer, what causes a wound to stop healing, signs of wound infection, what is wound debridement).

---

### Action 25: Target 25 Google reviews milestone

25 reviews is the threshold where AI engines start confidently recommending a specific medical practice for local queries. Below 10, AI engines hedge or cite the larger competitors instead. With a medical practice, authentic reviews mentioning the clinical service (wound care, DOT physical, etc.) carry additional weight — they confirm what the schema says the business does.

**Review request protocol reminder:**
- Text only after appointment; generic message
- Do NOT ask patients to mention their condition — HIPAA concern
- Respond to every review within 48 hours
- Thank positive reviewers; address negative ones professionally and never mention patient details in responses

---

### Action 26: Google Search Console monitoring — first analysis

**By Month 3:** The site should have GSC data showing which queries are generating impressions. This analysis determines:
- Which condition pages are getting impressions but low CTR (title tag optimization needed)
- Which blog posts are ranking on pages 2–3 (link building opportunity)
- Which keywords are bringing unexpected traffic (new content opportunities)

**Effort:** 2 hours analysis
**Who:** Sam / Crescent team review

---

## NPI and Medical Board Verification Checklist

These are healthcare-specific tasks that have no equivalent in a general business SEO plan:

| Task | Priority | Who | Notes |
|------|----------|-----|-------|
| NPI registry — verify information is current and accurate | HIGH | Lisa Rivera | npiregistry.cms.hhs.gov — confirm address, phone, taxonomy codes are current |
| FMCSA National Registry — verify DOT examiner listing | CRITICAL | Exam certifier | All DOT examiners must be listed on the FMCSA National Registry; confirm listing is active |
| SC Board of Nursing — NP profile current | HIGH | Lisa Rivera | scbon.llronline.com — public provider profile |
| SC Collaborative Practice Agreement | HIGH | Practice | SC requires NPs to have a collaborative agreement; confirm status and that it is documented |
| Doximity NP profile | HIGH | Lisa Rivera | Individual provider profile; feeds AI engine medical knowledge graphs |
| HIPAA contact form setup | CRITICAL | Web developer | Any online form that collects PHI requires a HIPAA-compliant form service with BAA |
| Accept new patients GBP attribute | CRITICAL | Lisa Rivera / GBP admin | Must be turned on; this is a direct AI citation signal |
| Insurance credentialing verification | HIGH | Billing | Confirm credentialing is active with Medicare, Medicaid, and all commercial plans before listing them on the site |

---

## Timeline Summary Table

| Weeks | Action | Effort (hrs) | Who | Impact |
|-------|--------|-------------|-----|--------|
| 1–2 | Rebuild site with server-rendered content | — | Developer | CRITICAL |
| 1 | MedicalBusiness JSON-LD schema in root layout | 3 | Developer | CRITICAL |
| 1–2 | GBP create + complete — Sumter location | 3 | Lisa Rivera | CRITICAL |
| 1–2 | GBP create — Columbia location | 2 | Lisa Rivera | HIGH |
| 1–2 | Healthgrades, Vitals, WebMD, Doximity, Tebra claims | 5 | Staff | HIGH |
| 1–2 | Bing Places, Apple Maps, Yelp, BBB citations | 3 | Staff | MED-HIGH |
| 1–2 | crescentdotexams.com redirect decision | — | Lisa Rivera | HIGH |
| 3–4 | Provider page (Lisa Rivera) with Physician schema | 3 | Developer | CRITICAL |
| 3–4 | Wound care service page + schema | 4 | Developer | CRITICAL |
| 3–4 | DOT physical service page + schema + pricing | 3 | Developer | CRITICAL |
| 3–4 | AEO blog posts 1–2 (when to see WC, Medicare) | 5 | Developer | HIGH |
| 3–4 | Launch review collection process | 1 | Lisa Rivera | HIGH |
| Month 2 | Condition pages 1–4 (diabetic, non-healing, venous, pressure) | 16 | Developer | HIGH |
| Month 2 | Drug testing + employer hub pages | 10 | Developer | HIGH |
| Month 2 | Insurance pages (Medicare, Medicaid) | 4 | Developer | HIGH |
| Month 2 | Blog posts 5–8 (DOT / drug testing series) | 10 | Developer | MED |
| Month 2 | Primary care + occupational medicine pages | 5 | Developer | HIGH |
| Month 2 | Columbia location page | 2 | Developer | HIGH |
| Month 2 | crescentdotexams.com 301 redirect | 2 | Developer | HIGH |
| Month 3 | Remaining condition pages + service pages | 12 | Developer | MED-HIGH |
| Month 3 | All insurance pages | 7 | Developer | MED |
| Month 3 | FAQ hub + FAQPage schema | 4 | Developer | HIGH |
| Month 3 | Blog posts 9–12 (wound care conditions) | 10 | Developer | MED-HIGH |
| Month 3 | 25 Google reviews milestone (ongoing process) | Ongoing | Lisa Rivera | CRITICAL |
| Month 3 | GSC analysis + strategy adjustment | 2 | Sam/Crescent | HIGH |

**Total 90-day effort estimate:** ~120 hours (split roughly 65% developer/content, 35% practice ownership for GBP, citations, reviews, and compliance verification)

---

## If Crescent Does Nothing Else, Do These 3 Things

### 1. Create and fully verify the Google Business Profile as a Medical Clinic, with "Accepting New Patients: Yes"

This is the single highest-leverage action available today. Without a verified GBP, Crescent does not appear in Google's local pack, Google AI Overviews, or Google Maps for any medical query. The "Accepting New Patients" attribute is a healthcare-specific GBP field that AI engines extract and cite when answering "where can I find a wound care doctor near me?" It is a 2–3 hour setup that costs nothing and produces compounding returns for the lifetime of the practice.

**Expected outcome:** Map pack eligibility within 2–4 weeks of verification. AI Overview citation eligibility unlocked.

### 2. Add MedicalBusiness / MedicalClinic JSON-LD schema to the site with the NPI number as an identifier

Healthcare AI citations require medical-grade entity verification. The NPI number (1568207702) is a federal trust signal that no general local business has. Including it in the schema, combined with the correct taxonomy codes and all DBA names as alternateNames, tells every AI engine that Crescent Health Partners is a verified, federally-registered multi-specialty medical clinic in Sumter, SC. This is a 3-hour developer task that directly enables Perplexity, ChatGPT, and Gemini to cite the practice within 4–8 weeks.

**Expected outcome:** First AI engine citations for "wound care Sumter SC" and "DOT physical Sumter SC" within 60 days of launch.

### 3. Publish Lisa Rivera's provider page with Physician schema before any other clinical page goes live

AI engines in healthcare do not cite unnamed clinics — they cite named, credentialed providers. Lisa Rivera's credentials (FNP-C, WCC, MSN) are exactly the signals AI engines use to decide whether to recommend a wound care provider. A page at /providers/lisa-rivera with Physician schema including her NPI, her Wound Care Certified credential, and a clear biography makes Crescent citable as "a wound care certified nurse practitioner in Sumter, SC." Without this page, the practice is a generic clinic. With it, it is a named, credentialed specialist.

**Expected outcome:** Named provider citations in AI engines within 60–90 days. Higher patient trust on all clinical pages that link to her bio.

---

## What 12 Months Looks Like If Executed

| Metric | Day 1 | Month 3 | Month 6 | Month 12 |
|--------|-------|---------|---------|---------|
| Indexed pages | 2 | 35–50 | 60–75 | 80–100 |
| Google reviews (Sumter GBP) | Unknown | 15–25 | 40–60 | 80–120 |
| Healthcare directory citations | 0–1 | 8–10 | 12–15 | 18–22 |
| AI citations (ChatGPT, Perplexity, Gemini) | None | Rare | Occasional | Regular for Sumter wound care + DOT queries |
| Map pack position — wound care Sumter | Not listed | Eligible; position 4–7 | Position 3–5 | Position 1–3 |
| Map pack position — DOT physical Sumter | Not listed | Position 2–4 | Position 1–2 | Position 1 |
| Organic rank — "wound care clinic Sumter SC" | Not indexed | Page 3–5 | Page 1–2 | Page 1 |
| Organic rank — condition pages (diabetic foot ulcer Sumter) | Not indexed | Page 1–2 | Page 1 | Page 1 |
| Organic rank — DOT physical Sumter SC | Not indexed | Page 2–3 | Page 1 | Page 1 |
| Organic rank — Columbia SC service pages | Not indexed | Page 2–3 | Page 1 | Page 1 |
| Monthly organic traffic estimate | 0 | 100–250 | 400–800 | 1,000–2,500 |

These are realistic estimates based on the actual competitive landscape: no independent wound care clinic competitor has a built web presence, the DOT physical market has moderate competition, and Crescent's multi-service positioning is genuinely unique.
