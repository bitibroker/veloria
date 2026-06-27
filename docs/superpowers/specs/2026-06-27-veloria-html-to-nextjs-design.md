# VÉLORIA HTML → Next.js Conversion Design

**Date:** 2026-06-27  
**Status:** Approved  

---

## Overview

Convert `veloria.html` (a single-file Spanish agency landing page) into a Next.js 16.2.9 App Router project with one React component per page section. The visual output and all animations must be byte-for-byte identical to the original HTML.

---

## Architecture

### Framework
- **Next.js 16.2.9** with App Router (`app/` directory) — already installed
- **TypeScript** — already configured
- Tailwind CSS stays installed but is not used for Véloria styles

### CSS Strategy
All ~400 lines of existing CSS go into `app/globals.css` (replacing the current placeholder content), imported once from `app/layout.tsx`. No CSS Modules, no Tailwind utility classes for Véloria styles. Class names are unchanged from the HTML. Google Fonts (Cormorant Garamond + DM Sans) are loaded via `<link>` tags in the layout `<head>` using React 19's `<link>` support.

### Component Structure

All components live in `app/components/`:

| File | Server/Client | Notes |
|---|---|---|
| `UrgencyBar.tsx` | Server | Static banner |
| `Nav.tsx` | **Client** | `scroll` listener toggles `.stuck` class |
| `Hero.tsx` | **Client** | `useEffect` builds starfield, triggers scroll-reveal registration |
| `Stats.tsx` | **Client** | IntersectionObserver animates number counters |
| `Services.tsx` | Server | Static card grid |
| `About.tsx` | Server | Static orb + feature rows |
| `Carousel.tsx` | Server | Pure CSS infinite scroll, no JS needed |
| `Portfolio.tsx` | Server | SVG mock-up cards |
| `Offer.tsx` | **Client** | Countdown timer via `setInterval` |
| `Testimonials.tsx` | Server | Static testimonial cards |
| `FAQ.tsx` | **Client** | Accordion open/close state |
| `Contact.tsx` | **Client** | Form state + submit simulation |
| `Footer.tsx` | Server | Static footer |
| `ScrollReveal.tsx` | **Client** | Single global IntersectionObserver for all `.reveal` elements; rendered once in `app/page.tsx` |

### Pages

- `app/page.tsx` — assembles all components in order; renders `<ScrollReveal />` once at the bottom
- `app/layout.tsx` — sets metadata, imports `globals.css`, adds Google Fonts `<link>` tags
- `app/globals.css` — contains all custom CSS from the HTML verbatim

### JavaScript Behaviour Mapping

| HTML script | React equivalent |
|---|---|
| Nav scroll sticky | `useEffect` + `window.addEventListener('scroll', ...)` in `Nav.tsx` |
| Starfield DOM injection | `useEffect` loop in `Hero.tsx` |
| `.reveal` IntersectionObserver | `useEffect` in `ScrollReveal.tsx` (client component, renders `null`) |
| Counter animation | `useEffect` IntersectionObserver in `Stats.tsx` |
| FAQ accordion | `useState` tracking open item index in `FAQ.tsx` |
| Countdown timer | `useEffect` + `setInterval` in `Offer.tsx` |
| Form submit simulation | `useState` for button state in `Contact.tsx` |
| Smooth scroll for `a[href^="#"]` | CSS `scroll-behavior: smooth` on `html` (already in CSS) — no JS needed |

### Form Handling
The contact form replicates the original behaviour: client-side validation, 1.4s simulated delay, then success state. No backend API route. This matches the HTML exactly.

---

## Key Constraints

- All CSS class names stay identical — no renaming
- No new dependencies beyond what is already installed
- SVG logo marks are inlined as JSX (React-compatible `<svg>`)
- `html` attributes: `lang="es"` in layout
- Scroll-reveal delay stagger is preserved (`setTimeout(…, i * 90)`)

---

## Out of Scope

- Real form submission / email API
- Mobile hamburger menu (not in the HTML)
- Dark/light mode toggle (design is dark-only)
- i18n
