# Vanprastha Corporate Rejuvenation Retreat Landing Page

> **"The CEO Within"** · Executive Rejuvenation Retreat hosted by **Vanprastha Resorts, Dunagiri (Almora), Uttarakhand (7,500 ft)**.

This is a dedicated, high-converting landing page and lead capture engine calibrated for Meta Ads traffic, targeting corporate executives, founders, CXOs, and leadership teams for the December 2026 cohorts.

---

## 🏔️ Core Highlights & Architectural Principles

- **Isolated Codebase**: All code is housed within `landing-page/`, keeping root video production files untouched.
- **Brand Aesthetic**: "Quiet Himalayan Luxury" — Deep Himalayan pine green (`#18281F`, `#111D16`), antique temple brass (`#C59B4B`), and warm sandalwood/khadi linen (`#FDFBF7`), styled with Lora serif and Plus Jakarta Sans.
- **Authentic Estate Assets**: Features official Vanprastha Resorts logo and real estate photography from `vanprastharesorts.com`.
- **Zero Video Weight**: Replaces heavy video embeds with lightweight high-resolution imagery and editorial typography for fast initial load.
- **Vedic & Cultural Grounding**: Deep focus on the Sanskrit meaning of *Vanaprastha*, the sacred 1.5 km proximity to Mahavatar Babaji's Cave, handcrafted pine wood cottages named after the Vedas and Ashtanga limbs, and pure Sattvik nutrition.
- **Executive Intervention**: The "Wooden Box" protocol (surrendering smartphones for 60 hours with a dedicated 24/7 resort emergency desk provided to families and executive assistants).
- **Dual Lead Capture Engine**:
  - Interactive multi-field screening form connected to `/api/leads`.
  - 24/7 cloud persistence via **Supabase PostgreSQL** with instant local fallback (`landing-page/data/leads.json`).
  - Automated WhatsApp Cloud API / Webhook notification to retreat coordinators.
  - Direct 1-tap WhatsApp deep links with pre-filled cohort context to official resort number `+91 9650102777`.
  - Mobile-first sticky bottom bar (`Apply (38 Seats)` & `WhatsApp Chat`).

---

## 📅 Cohort Details (December 2026)

- **Batch 01**: 11 – 13 December 2026 (Friday 2 PM to Sunday 2 PM)
- **Batch 02**: 25 – 27 December 2026 (Christmas Holiday Weekend)
- **Cap**: Strictly 38 leaders per cohort to ensure deep executive intimacy.
- **Lead Facilitator**: CA (Dr.) Alok Misra (FCA, FCS, Ph.D., 25+ years board advisory, 24 years Kriya Yogi).

### All-Inclusive Packages
- **Double Sharing**: ₹24,000 / person + GST
- **Triple Sharing**: ₹22,000 / person + GST
- **Quad Sharing**: ₹20,000 / person + GST
- **Corporate Team (2+)**: Custom group pricing + GST input credit invoice

---

## 🚀 Quickstart & Development

### 1. Install Dependencies
```bash
cd landing-page
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Supabase credentials:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

*(Note: If Supabase keys are omitted during development, leads automatically persist to `landing-page/data/leads.json` with zero data loss).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Setup (Supabase)

To enable 24/7 cloud persistence:
1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in the Supabase Dashboard.
3. Paste and run the contents of `landing-page/supabase_schema.sql`.
4. Copy your project URL and keys to `.env.local` or your Vercel deployment settings.

---

## 🚢 Production Deployment

The project is ready for one-click deployment to **Vercel** or **Netlify**:
- Root Directory: `landing-page`
- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.next`
