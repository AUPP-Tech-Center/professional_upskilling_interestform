# AUPP Technology Center (ATC) — Design System & Theme Specification

> **How to use this file:**  
> Copy and paste this document directly into your new repository (e.g. as `websitetheme.md` or as system instructions for an AI agent / frontend developer). It contains the complete brand tokens, typography, CSS variables, Tailwind configurations, component patterns, and a full reference HTML/CSS implementation for building standalone forms and pages matching the official ATC website.

---

## 1. Quick AI Prompt (Copy-Paste for New Projects)

```markdown
You are building/redesigning a page for AUPP Technology Center (ATC). 
Strictly follow the design system defined in `websitetheme.md`:
- Aesthetic: Modern executive tech, clean, authoritative, high-contrast, premium educational institution.
- Core Colors: Brand Navy (`#091E42` / `oklch(0.28 0.11 258)`), Brand Blue (`#1D68EE` / `oklch(0.56 0.14 250)`), Brand Sky (`#6DB1FF` / `oklch(0.76 0.09 240)`), Brand Mist (`#F1F5F9` / `oklch(0.96 0.012 240)`).
- Typography: Display font "Nexa" (or Google Font fallback "Plus Jakarta Sans" / "Inter") with tight heading tracking and uppercase tracked eyebrows (`tracking-[0.16em]`).
- Shapes: Pill-shaped CTA buttons (`rounded-full`), soft rounded inputs (`rounded-xl` / `12px`), spacious cards (`rounded-3xl` / `24px`) with subtle borders (`border-border`) and soft navy drop shadows (`shadow-xl shadow-brand-navy/5`).
- Form Elements: Floating/clean inputs with border transitions, segmented pill selectors for tracks/options, and high-contrast dark navy submit buttons.
```

---

## 2. Brand Identity & Visual Language

ATC represents Cambodia's flagship technology and innovation center at the American University of Phnom Penh (AUPP). The visual identity balances **modern executive prestige** with **digital forward-thinking innovation**:

- **Crisp Minimalism:** Crisp white/mist background surfaces with sharp contrast against deep navy ink.
- **Deep Navy Base:** Deep Navy anchors titles, primary actions, and hero cards.
- **Electric Blue Highlights:** Tech Blue provides energetic accents, focus states, and eyebrow labels.
- **Pill Geometry:** Circular/pill-shaped primary buttons (`rounded-full`), generous card corners (`rounded-3xl`), and friendly input radiuses (`rounded-xl`).
- **Micro-elevation:** Subtle borders (`oklch(0.9 0.02 240)`) coupled with tinted navy shadows rather than harsh neutral blacks.

---

## 3. Color Tokens & Palette

### Primary Brand Colors

| Token | OKLCH | HEX Equivalent | RGB | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `brand-navy` | `oklch(0.28 0.11 258)` | `#091E42` | `9, 30, 66` | Primary brand color, main headings, dark cards, primary buttons |
| `brand-blue` | `oklch(0.56 0.14 250)` | `#1D68EE` | `29, 104, 238` | Primary accents, interactive links, button hover states, focus rings |
| `brand-sky` | `oklch(0.76 0.09 240)` | `#6DB1FF` | `109, 177, 255` | Accent highlights on dark backgrounds, badges, subtle gradients |
| `brand-mist` | `oklch(0.96 0.012 240)`| `#F1F5F9` | `241, 245, 249`| Light neutral background, card fills, input hover, unselected pills |

### Accent Colors (Pantone Brand Accents)

| Token | Pantone / Hex | Usage |
| :--- | :--- | :--- |
| `brand-orange` | `#EB6815` (Pantone P 27-8 U) | Highlight tags, warning chips, badges |
| `brand-coral` | `#E85A59` (Pantone P 55-5 U) | Destructive badges, urgent notices |
| `brand-yellow` | `#FFC400` (Pantone P 7-8 U) | Star badges, spotlight markers, key metric highlights |

### Semantic System Colors

| Token | OKLCH | HEX | Usage |
| :--- | :--- | :--- | :--- |
| `background` | `oklch(1 0 0)` | `#FFFFFF` | Page canvas background |
| `foreground` | `oklch(0.22 0.05 258)` | `#111A2E` | Primary body copy |
| `card` | `oklch(1 0 0)` | `#FFFFFF` | Form container / card surface |
| `card-foreground`| `oklch(0.22 0.05 258)` | `#111A2E` | Text inside cards |
| `muted` | `oklch(0.96 0.012 240)`| `#F1F5F9` | Neutral sub-cards & divider bars |
| `muted-foreground`|`oklch(0.48 0.03 258)` | `#5B6B82` | Secondary labels, descriptions, helper text |
| `border` | `oklch(0.90 0.02 240)` | `#E2E8F0` | Input borders, card strokes, dividers |
| `input` | `oklch(0.90 0.02 240)` | `#E2E8F0` | Default border for text fields & selects |
| `ring` | `oklch(0.56 0.14 250)` | `#1D68EE` | 2px focus ring for accessibility |
| `destructive` | `oklch(0.577 0.245 27.325)` | `#DC2626` | Error states, validation alerts |
| `success` | `oklch(0.62 0.18 145)` | `#16A34A` | Success messages, confirmed status |

---

## 4. Typography & Font Hierarchy

### Font Family
- **Primary / Display Font:** `"Nexa"` (`Nexa-Regular`, `Nexa-Bold`, `Nexa-Heavy`, `Nexa-Black`)
- **Web / Google Fonts Fallback:** `"Plus Jakarta Sans"`, `"Outfit"`, or `"Inter"`, `ui-sans-serif`, `system-ui`, `sans-serif`

```html
<!-- Recommended Google Font replacement if Nexa files are not bundled -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Type Scale & Hierarchy

| Element | Class / Style | Font Weight | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- |
| **Eyebrow / Overline** | `text-xs font-bold uppercase` | 700 / Bold | `tracking-[0.18em]` to `0.22em` | `brand-blue` |
| **Page / Hero Title (H1)** | `text-3xl md:text-4xl font-black` | 900 / Black | `-0.02em` | `brand-navy` |
| **Card Heading (H2/H3)** | `text-xl md:text-2xl font-black` | 900 / Black | `-0.015em` | `brand-navy` |
| **Field Label** | `text-xs font-bold uppercase` | 700 / Bold | `tracking-[0.16em]` | `brand-blue` |
| **Body / Description** | `text-sm leading-relaxed` | 400 or 500 | Normal | `muted-foreground` |
| **Input / Select Text** | `text-sm font-medium` | 500 | Normal | `brand-navy` |
| **Button Text** | `text-sm font-bold` | 700 / Bold | Normal | `white` |
| **Footnote / Hint** | `text-xs` | 400 | Normal | `muted-foreground` |

---

## 5. Shape, Spacing & Elevation System

- **Border Radiuses:**
  - Pills & Badges: `rounded-full` (`9999px`)
  - Main Cards: `rounded-3xl` (`24px` / `1.5rem`)
  - Sub-Cards / Information Boxes: `rounded-2xl` (`16px` / `1rem`)
  - Form Inputs, Buttons, & Selects: `rounded-xl` (`12px` / `0.75rem`)
  - Checkboxes & Micro Elements: `rounded-md` (`6px`)

- **Shadows:**
  - Standard Card: `box-shadow: 0 20px 25px -5px rgba(9, 30, 66, 0.05), 0 8px 10px -6px rgba(9, 30, 66, 0.05);` (`shadow-xl shadow-brand-navy/5`)
  - Button Elevation: `box-shadow: 0 4px 6px -1px rgba(9, 30, 66, 0.1), 0 2px 4px -2px rgba(9, 30, 66, 0.1);`
  - Floating Card / Hover: `box-shadow: 0 25px 50px -12px rgba(9, 30, 66, 0.15);` (`-translate-y-0.5` on hover)

---

## 6. Form Component Specifications

### 1. Form Field Container & Label
```html
<label class="block">
  <span class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-2">
    Full Name *
  </span>
  <input 
    type="text" 
    name="name" 
    required 
    placeholder="e.g. Sokha Chan" 
    class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
  />
</label>
```

### 2. Segmented Pill Selector (Cohort Track / Radio Group)
Use this pattern for track choices (e.g., *Open Enrollment / Enterprise / Government*):
```html
<div>
  <span class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-2">
    Cohort Track
  </span>
  <div class="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-brand-mist/60 border border-border/60">
    <!-- Active Tab -->
    <button type="button" class="rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-navy text-white shadow-sm">
      Open Enrollment
    </button>
    <!-- Inactive Tab -->
    <button type="button" class="rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all text-brand-navy hover:bg-brand-mist">
      Enterprise
    </button>
    <button type="button" class="rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all text-brand-navy hover:bg-brand-mist">
      Government
    </button>
  </div>
</div>
```

### 3. Styled Select Dropdown
```html
<div class="relative">
  <select class="w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 pr-10 text-sm text-brand-navy outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20">
    <option value="1">1 Participant (Individual)</option>
    <option value="2-4">2–4 Participants (Team)</option>
    <option value="5-15">5–15 Participants (Department)</option>
  </select>
  <!-- Down Chevron Icon -->
  <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue">
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
  </div>
</div>
```

### 4. Primary CTA Submit Button
```html
<button 
  type="submit" 
  class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-blue hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 cursor-pointer"
>
  <span>Submit Registration</span>
  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
</button>
```

### 5. Left-Side Information Panel / Feature Cards
When building a 2-column registration layout:
```html
<!-- Benefit Pill Card -->
<div class="flex items-start gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm">
  <div class="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
    ✓
  </div>
  <div>
    <h4 class="text-xs font-bold text-brand-navy">Strict Cohort Cap (30 Seats)</h4>
    <p class="text-xs text-muted-foreground mt-0.5">
      Seats are allocated on a first-come, first-served basis following profile confirmation.
    </p>
  </div>
</div>

<!-- Direct Admissions Box -->
<div class="rounded-3xl bg-brand-navy p-6 text-white shadow-xl">
  <h4 class="text-xs font-bold uppercase tracking-wider text-brand-sky">Direct Program Admissions</h4>
  <p class="mt-2 text-xs text-white/80">
    Have specific questions? Contact our admissions coordinators directly:
  </p>
  <div class="mt-4 space-y-2.5 text-xs">
    <div class="flex items-center gap-2.5">
      <span class="text-brand-sky font-bold">✉</span>
      <a href="mailto:s.sunvisa@aupptechcenter.com" class="text-white hover:underline">s.sunvisa@aupptechcenter.com</a>
    </div>
    <div class="flex items-center gap-2.5">
      <span class="text-brand-sky font-bold">☏</span>
      <a href="tel:+85517633888" class="text-white hover:underline">+855 17 633 888 / +855 15 836 896</a>
    </div>
  </div>
</div>
```

---

## 7. Ready-to-Use Drop-in Stylesheets

### Option A: Pure CSS / Vanilla CSS (Zero Dependencies)

If your new repo uses plain HTML and CSS, paste this into `styles.css`:

```css
:root {
  --brand-navy: #091E42;
  --brand-blue: #1D68EE;
  --brand-sky: #6DB1FF;
  --brand-mist: #F1F5F9;
  --brand-orange: #EB6815;
  --brand-coral: #E85A59;
  --brand-yellow: #FFC400;

  --background: #FFFFFF;
  --foreground: #111A2E;
  --card: #FFFFFF;
  --muted: #F1F5F9;
  --muted-foreground: #5B6B82;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #1D68EE;
  --destructive: #DC2626;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  --font-family: "Plus Jakarta Sans", "Nexa", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--brand-mist);
  color: var(--foreground);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Headings */
h1, h2, h3, h4 {
  color: var(--brand-navy);
  font-weight: 800;
  line-height: 1.2;
}

/* Card Surface */
.atc-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  box-shadow: 0 20px 25px -5px rgba(9, 30, 66, 0.05), 0 8px 10px -6px rgba(9, 30, 66, 0.05);
  padding: 2rem;
}

@media (min-width: 768px) {
  .atc-card {
    padding: 2.5rem;
  }
}

/* Eyebrow Label */
.atc-eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--brand-blue);
  margin-bottom: 0.5rem;
}

/* Inputs & Selects */
.atc-input {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background-color: var(--background);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-family: inherit;
  color: var(--brand-navy);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.atc-input:focus {
  border-color: var(--brand-blue);
  box-shadow: 0 0 0 3px rgba(29, 104, 238, 0.15);
}

.atc-input::placeholder {
  color: rgba(91, 107, 130, 0.6);
}

/* Primary Button */
.atc-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-full);
  background-color: var(--brand-navy);
  color: #FFFFFF;
  padding: 0.875rem 2rem;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: inherit;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(9, 30, 66, 0.15);
  transition: all 0.2s ease;
}

.atc-btn-primary:hover {
  background-color: var(--brand-blue);
  transform: translateY(-1px);
}

.atc-btn-primary:active {
  transform: translateY(0);
}

.atc-btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

---

### Option B: Tailwind CSS v4 Theme Config

If your new project uses Tailwind CSS v4, add this to `src/styles.css`:

```css
@import "tailwindcss";

@theme inline {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
  --font-sans: "Nexa", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Nexa", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --color-brand-navy: oklch(0.28 0.11 258);
  --color-brand-blue: oklch(0.56 0.14 250);
  --color-brand-sky: oklch(0.76 0.09 240);
  --color-brand-mist: oklch(0.96 0.012 240);
  --color-brand-orange: #EB6815;
  --color-brand-coral: #E85A59;
  --color-brand-yellow: #FFC400;
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.22 0.05 258);
  --color-card: oklch(1 0 0);
  --color-card-foreground: oklch(0.22 0.05 258);
  --color-muted: oklch(0.96 0.012 240);
  --color-muted-foreground: oklch(0.48 0.03 258);
  --color-border: oklch(0.9 0.02 240);
  --color-input: oklch(0.9 0.02 240);
  --color-ring: oklch(0.56 0.14 250);
  --color-destructive: oklch(0.577 0.245 27.325);
}
```

---

### Option C: Tailwind CSS v3 `tailwind.config.js`

If your project is using Tailwind CSS v3:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#091E42",
          blue: "#1D68EE",
          sky: "#6DB1FF",
          mist: "#F1F5F9",
          orange: "#EB6815",
          coral: "#E85A59",
          yellow: "#FFC400",
        },
        border: "#E2E8F0",
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#5B6B82",
        },
      },
      borderRadius: {
        "xl": "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Nexa", "sans-serif"],
        display: ["Plus Jakarta Sans", "Nexa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 8. Full HTML Reference Registration Page

Here is a complete, self-contained reference page you can copy-paste into an `index.html` to instantly run the redesigned registration portal:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register Your Interest — Professional Upskilling | AUPP Technology Center</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              navy: '#091E42',
              blue: '#1D68EE',
              sky: '#6DB1FF',
              mist: '#F1F5F9',
              orange: '#EB6815',
              coral: '#E85A59',
              yellow: '#FFC400',
            },
            border: '#E2E8F0',
            muted: {
              DEFAULT: '#F1F5F9',
              foreground: '#5B6B82',
            },
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          },
          borderRadius: {
            'xl': '12px',
            '2xl': '16px',
            '3xl': '24px',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-mist/50 text-[#111A2E] font-sans antialiased min-h-screen py-10 px-4 md:px-8">

  <!-- Header Branding -->
  <header class="max-w-6xl mx-auto mb-10 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- ATC Text / Logo Mark -->
      <div class="h-10 w-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-black text-lg tracking-wider shadow-md">
        ATC
      </div>
      <div>
        <h1 class="text-sm font-black text-brand-navy leading-none">AUPP Technology Center</h1>
        <p class="text-[11px] font-bold text-brand-blue uppercase tracking-widest mt-0.5">Professional Upskilling</p>
      </div>
    </div>
    <a href="https://aupptechcenter.systems" class="text-xs font-bold text-brand-navy hover:text-brand-blue transition-colors">
      ← Back to Main Site
    </a>
  </header>

  <!-- Main Content Split Grid -->
  <main class="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
    
    <!-- Left Column: Context & Direct Contact -->
    <div class="lg:col-span-5 space-y-6">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Take The Next Step</p>
        <h2 class="mt-2 text-3xl md:text-4xl font-black text-brand-navy leading-tight">Register Your Interest</h2>
        <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
          Submit your profile details to reserve priority consideration for upcoming quarterly executive masterclasses and tailored corporate cohorts.
        </p>
      </div>

      <!-- Feature Highlight Badges -->
      <div class="space-y-3.5">
        <div class="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div class="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs shrink-0 mt-0.5">✓</div>
          <div>
            <h4 class="text-xs font-bold text-brand-navy">Strict Cohort Cap (30 Seats)</h4>
            <p class="text-xs text-muted-foreground mt-0.5">Seats are allocated on a first-come, first-served basis following profile verification.</p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div class="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue font-bold text-xs shrink-0 mt-0.5">🛡</div>
          <div>
            <h4 class="text-xs font-bold text-brand-navy">No Payment Required Today</h4>
            <p class="text-xs text-muted-foreground mt-0.5">Registering your interest holds your priority slot while our admissions team contacts you with the syllabus.</p>
          </div>
        </div>

        <div class="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div class="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-brand-orange font-bold text-xs shrink-0 mt-0.5">★</div>
          <div>
            <h4 class="text-xs font-bold text-brand-navy">Scholarship Consideration</h4>
            <p class="text-xs text-muted-foreground mt-0.5">Partial scholarships are available for eligible non-profits, researchers, and early-stage founders.</p>
          </div>
        </div>
      </div>

      <!-- Direct Admissions Dark Card -->
      <div class="rounded-3xl bg-brand-navy p-6 text-white shadow-xl">
        <h4 class="text-xs font-bold uppercase tracking-wider text-brand-sky">Direct Program Admissions</h4>
        <p class="mt-2 text-xs text-white/80">Have specific questions or need enterprise tailoring? Contact our coordinators directly:</p>

        <div class="mt-4 space-y-3 text-xs">
          <div class="flex items-center gap-3">
            <span class="text-brand-sky">✉</span>
            <a href="mailto:s.sunvisa@aupptechcenter.com" class="text-white hover:underline">s.sunvisa@aupptechcenter.com</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-brand-sky">✉</span>
            <a href="mailto:malinna.el@aupptechcenter.com" class="text-white hover:underline">malinna.el@aupptechcenter.com</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-brand-sky">☏</span>
            <a href="tel:+85517633888" class="text-white hover:underline">+855 17 633 888 / +855 15 836 896</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Registration Form Card -->
    <div class="lg:col-span-7">
      <form id="interestForm" class="rounded-3xl border border-border bg-white p-7 md:p-10 shadow-xl shadow-brand-navy/5 space-y-5">
        <div>
          <h3 class="text-xl md:text-2xl font-black text-brand-navy">Registration & Inquiry Form</h3>
          <p class="mt-1 text-xs text-muted-foreground">Select your track and enter your professional information. No immediate payment required.</p>
        </div>

        <!-- Cohort Track Selector -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-2">Cohort Track</label>
          <div class="grid grid-cols-3 gap-2">
            <button type="button" class="track-btn rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-navy text-white shadow-sm" data-track="Open Enrollment">
              Open Enrollment
            </button>
            <button type="button" class="track-btn rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-mist/80 text-brand-navy hover:bg-brand-mist" data-track="Enterprise">
              Enterprise
            </button>
            <button type="button" class="track-btn rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-mist/80 text-brand-navy hover:bg-brand-mist" data-track="Government">
              Government
            </button>
          </div>
          <input type="hidden" name="track" id="selectedTrack" value="Open Enrollment" />
        </div>

        <!-- Preferred Course Dropdown -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-2">Preferred Course</label>
          <div class="relative">
            <select name="course" required class="w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 pr-10 text-sm text-brand-navy outline-none transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20">
              <option value="Digital Transformation & Agentic AI">Digital Transformation & Agentic AI for Business Leaders (2 Days)</option>
              <option value="Enterprise AI Roadmap Sprint">Enterprise AI Roadmap & Automation Sprint (3 Days)</option>
              <option value="Executive Cyber Governance">Executive Cyber Governance, Data Security & Privacy (2 Days)</option>
              <option value="Modern Tech Leadership">Modern Tech Leadership & Product Management (2 Days)</option>
              <option value="Fintech & Digital Banking">Fintech & Digital Banking Modernization (3 Days)</option>
            </select>
            <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue">
              ▼
            </div>
          </div>
        </div>

        <!-- Inputs: Two-column grid -->
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">First Name *</label>
            <input type="text" name="firstname" required placeholder="e.g. Sokha" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Last Name *</label>
            <input type="text" name="lastname" required placeholder="e.g. Chan" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Work Email *</label>
            <input type="email" name="email" required placeholder="you@organization.com" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Phone / Telegram *</label>
            <input type="tel" name="phone" required placeholder="+855 12 345 678" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Company / Organization</label>
            <input type="text" name="company" placeholder="Company or Ministry" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Job Title / Designation *</label>
            <input type="text" name="job_title" required placeholder="e.g. Managing Director" class="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
          </div>
        </div>

        <!-- Notes / Custom Requests -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.16em] text-brand-blue mb-1.5">Questions, Custom Goals, or Scholarship Inquiry</label>
          <textarea rows="3" name="notes" placeholder="Tell us about specific topics you'd like covered or corporate team requirements..." class="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-muted-foreground/60 transition-all focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"></textarea>
        </div>

        <!-- Terms Agreement -->
        <label class="flex items-center gap-2.5 text-xs text-muted-foreground cursor-pointer">
          <input type="checkbox" required class="h-4 w-4 rounded border-border text-brand-navy focus:ring-brand-blue" />
          <span>I agree to receive the course syllabus and cohort schedules from ATC.</span>
        </label>

        <!-- Submit Button Row -->
        <div class="pt-2 flex flex-wrap items-center justify-between gap-4">
          <button type="submit" class="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-blue hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
            <span>Submit Registration</span>
            <span>→</span>
          </button>
          <span class="text-xs text-muted-foreground">Direct verification · No upfront fee</span>
        </div>
      </form>
    </div>
  </main>

  <script>
    // Simple Tab Switcher Logic
    const trackButtons = document.querySelectorAll('.track-btn');
    const selectedTrackInput = document.getElementById('selectedTrack');

    trackButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        trackButtons.forEach(b => {
          b.className = 'track-btn rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-mist/80 text-brand-navy hover:bg-brand-mist';
        });
        btn.className = 'track-btn rounded-xl py-2.5 px-2 text-center text-xs font-bold transition-all bg-brand-navy text-white shadow-sm';
        selectedTrackInput.value = btn.dataset.track;
      });
    });
  </script>
</body>
</html>
```

---

## 9. Verification & Quality Checklist

Before shipping changes in your new repo, ensure:
- [ ] Primary buttons use `bg-brand-navy` with hover `bg-brand-blue` and `rounded-full`.
- [ ] Card surfaces use `rounded-3xl` (`24px`) with `border-border` and soft navy drop shadows.
- [ ] Form input labels use `text-xs font-bold uppercase tracking-[0.16em] text-brand-blue`.
- [ ] Input fields use `rounded-xl` (`12px`) with subtle borders and clear focus rings in `brand-blue`.
- [ ] Contrast ratios meet WCAG AA standards (headings in deep navy on light surfaces, white on deep navy).
