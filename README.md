# PROMPUBI Builder Profile Dashboard

A production-ready **Builder Profile Dashboard** for Hyderabad's top 10 real estate developers. The UI template is fixed — only the builder data changes.

## 10 Hyderabad Builders Loaded

1. **My Home Group** — My Home Constructions Pvt. Ltd. (Est. 1981)
2. **Vasavi Group** — Vasavi Realtors India Pvt. Ltd. (Est. 1994)
3. **Aparna Constructions** — Aparna Constructions and Estates Pvt. Ltd. (Est. 1996)
4. **Rajapushpa Properties** — Rajapushpa Properties Pvt. Ltd. (Est. 2006)
5. **Ramky Estates** — Ramky Estates and Farms Ltd. (Est. 1994)
6. **ASBL** — Ashoka Builders Sukhii LLP (Est. 2017)
7. **Jayabheri Properties** — Jayabheri Properties Pvt. Ltd. (Est. 1993)
8. **Honer Homes** — Honer Developers Pvt. Ltd. (Est. 2016)
9. **Cybercity Builders** — Cybercity Builders & Developers Pvt. Ltd. (Est. 2005)
10. **Prestige Group** — Prestige Estates Projects Ltd. Hyderabad (Est. 1986)

Switch between builders using the header dropdown or the dark quick-switcher bar.

## Tech Stack

- Next.js 16 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Architecture

```
src/
  app/
    layout.tsx              Root layout
    page.tsx                Builder Profile Dashboard (fixed template)
    globals.css             Global styles
  components/
    layout/
      Sidebar.tsx           PROMPUBI sidebar + TS-RERA footer
      Header.tsx            Breadcrumb, builder switcher, notifications
    builder/
      CompanySummary.tsx    Company information card
      UpdateReminder.tsx    Quarterly filing reminder
      ProfileCompletion.tsx Donut chart + progress bars
      ProfileTabs.tsx       Overview / History / Directors / ...
      CompanyHistory.tsx    About, vision, mission
      KeyHighlights.tsx     6-stat KPI row
      RegularUpdateReminder.tsx  Dark statutory banner
      CompletionOverview.tsx     Audit checklist
      InformationUsage.tsx       How data is used
      PrivacyNotice.tsx          Disclaimer
    directors/
      DirectorsSection.tsx
    projects/
      ProjectsTable.tsx     Fixed 7-column table
    quality/
      QualityDetails.tsx
    amenities/
      AmenitiesSection.tsx
    documents/
      DocumentsCompliance.tsx
    charts/
      CompletionDonut.tsx
  data/
    builders/
      index.ts              Registry of all 10 builders
      my-home-group.ts
      vasavi-group.ts
      ... (8 more)
  types/
    builder.ts              Canonical BuilderData schema
```

## Data vs UI

- **UI never changes.** Layout, sidebar, cards, tables, colors, and section order are the fixed Builder Profile template.
- **Data is isolated** in `src/data/builders/*.ts`. Add a new builder by creating a file that exports `BuilderData` and registering it in `src/data/builders/index.ts`.
- Missing fields render as `-` / `Not provided` — no fabricated RERA numbers or facts.

## Profile Completion Weights

| Section   | Weight |
|-----------|--------|
| Directors | 20%    |
| Materials | 20%    |
| Projects  | 25%    |
| Amenities | 15%    |
| Documents | 20%    |
