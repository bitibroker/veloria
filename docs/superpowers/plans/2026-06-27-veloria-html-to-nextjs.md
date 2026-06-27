# VÉLORIA HTML → Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `veloria.html` into a Next.js 16.2.9 App Router project with one React component per page section, preserving all CSS, animations, and JS behaviour exactly.

**Architecture:** All custom CSS lives verbatim in `app/globals.css` (no CSS Modules, no Tailwind utilities). Interactive sections are `'use client'` components; static sections are Server Components. A single `<ScrollReveal />` client component mounts one IntersectionObserver for all `.reveal` elements.

**Tech Stack:** Next.js 16.2.9, React 19, TypeScript 5, global CSS (no Tailwind utilities used)

## Global Constraints

- Next.js version: 16.2.9 (already installed — do NOT change)
- All CSS class names stay identical to `veloria.html` — no renaming
- No new npm dependencies
- All SVG attributes must use JSX camelCase (`strokeWidth`, `stopColor`, etc.)
- HTML `class` → `className`, `for` → `htmlFor`, `crossorigin` → `crossOrigin="anonymous"`
- CSS custom properties in inline styles require `as React.CSSProperties` cast
- `lang="es"` on `<html>`
- Scroll-reveal uses `setTimeout(…, i * 90)` stagger — preserve exactly

---

### Task 1: Global CSS + Layout

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: global styles available to all components; `<html lang="es">` with Google Fonts

- [ ] **Step 1: Replace globals.css with Véloria CSS**

Replace the entire file `app/globals.css` with:

```css
/* ===================== TOKENS ===================== */
:root {
  --bg:        #06060E;
  --bg2:       #0C0C1A;
  --bg3:       #121226;
  --gold:      #C9A96E;
  --gold-lt:   #E8D5A8;
  --gold-dim:  rgba(201,169,110,0.11);
  --border:    rgba(201,169,110,0.14);
  --border-md: rgba(201,169,110,0.28);
  --text:      #F0EFF8;
  --text-muted:#7A7A9E;
  --text-soft: #A8A8C8;
  --radius:    14px;
  --ff-d: 'Cormorant Garamond', Georgia, serif;
  --ff-b: 'DM Sans', system-ui, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--ff-b);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
img, svg { display: block; }
a { color: inherit; }

/* ===================== UTILITIES ===================== */
.container { max-width: 1180px; margin: 0 auto; padding: 0 36px; }

.eyebrow {
  font-size: 10.5px; font-weight: 600;
  letter-spacing: 3.5px; text-transform: uppercase;
  color: var(--gold); margin-bottom: 18px;
}
.sec-title {
  font-family: var(--ff-d);
  font-size: clamp(2.1rem,4.5vw,3.6rem);
  font-weight: 600; line-height: 1.08; margin-bottom: 22px;
}
.sec-body { font-size: 16px; font-weight: 300; color: var(--text-muted); line-height: 1.8; }
.gold-italic { font-style: italic; color: var(--gold); }

.btn-gold {
  display: inline-block; background: var(--gold); color: #05050C;
  padding: 14px 34px; border-radius: 8px; font-weight: 600;
  font-size: 14.5px; text-decoration: none;
  transition: background .25s, transform .25s, box-shadow .25s;
}
.btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); box-shadow: 0 14px 44px rgba(201,169,110,.26); }

.btn-outline {
  display: inline-block; border: 1px solid var(--border-md);
  color: var(--text-soft); padding: 14px 34px; border-radius: 8px;
  font-weight: 400; font-size: 14.5px; text-decoration: none;
  transition: border-color .25s, color .25s;
}
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }

/* ===================== SCROLL REVEAL ===================== */
.reveal { opacity: 0; transform: translateY(36px); transition: opacity .75s cubic-bezier(.25,.8,.25,1), transform .75s cubic-bezier(.25,.8,.25,1); }
.reveal.up { opacity: 1; transform: translateY(0); }

/* ===================== URGENCY BANNER ===================== */
#urgency-bar {
  background: linear-gradient(90deg, #1A0E00, #251500, #1A0E00);
  border-bottom: 1px solid rgba(201,169,110,0.35);
  padding: 11px 0;
  text-align: center;
  position: relative;
  z-index: 1000;
}
.urgency-inner {
  display: flex; align-items: center; justify-content: center;
  gap: 14px; flex-wrap: wrap;
}
.urgency-fire { font-size: 15px; animation: fireShake .8s ease-in-out infinite alternate; }
@keyframes fireShake { 0% { transform: rotate(-5deg); } 100% { transform: rotate(5deg); } }
.urgency-text { font-size: 13px; font-weight: 500; color: var(--gold-lt); letter-spacing: .3px; }
.urgency-pill {
  background: rgba(201,169,110,0.15);
  border: 1px solid rgba(201,169,110,0.35);
  border-radius: 100px; padding: 3px 12px;
  font-size: 11.5px; font-weight: 700;
  color: var(--gold); letter-spacing: .5px;
}

/* ===================== NAV ===================== */
#nav {
  position: sticky; top: 0; left: 0; right: 0; z-index: 900;
  padding: 18px 0;
  transition: background .45s, backdrop-filter .45s, padding .35s, border-color .45s;
  border-bottom: 1px solid transparent;
}
#nav.stuck {
  background: rgba(6,6,14,.88); backdrop-filter: blur(22px);
  padding: 12px 0; border-bottom-color: var(--border);
}
.nav-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.nav-logo { display: flex; align-items: center; gap: 11px; text-decoration: none; flex-shrink: 0; }
.logo-mark { width: 36px; height: 36px; flex-shrink: 0; }
.logo-name {
  font-family: var(--ff-d); font-size: 19px; font-weight: 700;
  letter-spacing: 4px; color: var(--text); text-transform: uppercase;
}
.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links a { text-decoration: none; font-size: 13px; color: var(--text-muted); transition: color .2s; }
.nav-links a:hover { color: var(--text); }
.nav-cta {
  background: var(--gold); color: #05050C; padding: 9px 22px;
  border-radius: 7px; font-size: 13px; font-weight: 600;
  text-decoration: none; white-space: nowrap;
  transition: opacity .2s; flex-shrink: 0;
}
.nav-cta:hover { opacity: .85; }

/* ===================== HERO ===================== */
#hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 110px 36px 90px; overflow: hidden;
}
.hero-bg-mesh {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 90% 65% at 50% -5%, rgba(110,60,220,.14) 0%, transparent 70%),
    radial-gradient(ellipse 55% 45% at 15% 85%, rgba(201,169,110,.07) 0%, transparent 60%),
    radial-gradient(ellipse 65% 55% at 85% 75%, rgba(60,30,140,.10) 0%, transparent 60%),
    radial-gradient(ellipse 40% 35% at 70% 15%, rgba(201,169,110,.05) 0%, transparent 55%);
  animation: meshPulse 14s ease-in-out infinite alternate;
}
@keyframes meshPulse { 0% { opacity:.75; } 100% { opacity:1; } }
#starfield { position: absolute; inset: 0; pointer-events: none; }
.star {
  position: absolute; border-radius: 50%; background: var(--gold);
  animation: twinkle var(--d,3s) ease-in-out infinite;
  animation-delay: var(--delay,0s);
}
@keyframes twinkle { 0%,100% { opacity:.15; transform:scale(.7); } 50% { opacity:.8; transform:scale(1.2); } }
.hero-content { position: relative; z-index: 2; max-width: 820px; }
.hero-badge {
  display: inline-flex; align-items: center; gap: 9px;
  border: 1px solid var(--border-md); border-radius: 100px;
  padding: 7px 20px; font-size: 11.5px; font-weight: 500;
  color: var(--gold-lt); margin-bottom: 38px;
  background: rgba(201,169,110,.05);
}
.badge-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex-shrink: 0;
  animation: badgePulse 2.2s ease-in-out infinite;
}
@keyframes badgePulse { 0%,100% { box-shadow:0 0 0 0 rgba(201,169,110,.5); } 50% { box-shadow:0 0 0 6px rgba(201,169,110,0); } }
.hero-h1 { font-family:var(--ff-d); font-size:clamp(3.2rem,9vw,7rem); font-weight:600; line-height:.97; margin-bottom:14px; }
.hero-h1 em { font-style:italic; color:var(--gold); }
.hero-h2 { font-family:var(--ff-d); font-size:clamp(2.4rem,6.5vw,5.6rem); font-weight:300; font-style:italic; line-height:1.0; color:var(--text-muted); margin-bottom:34px; }
.hero-sub { font-size:clamp(15px,2vw,17.5px); color:var(--text-muted); font-weight:300; line-height:1.75; max-width:580px; margin:0 auto 50px; }
.hero-btns { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
.scroll-hint {
  position: absolute; bottom: 34px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px; z-index: 2;
}
.scroll-line {
  width: 1px; height: 44px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollLine 2.2s ease-in-out infinite;
}
@keyframes scrollLine {
  0%  { transform:scaleY(0); transform-origin:top; opacity:1; }
  49% { transform:scaleY(1); transform-origin:top; opacity:1; }
  50% { transform:scaleY(1); transform-origin:bottom; opacity:1; }
  100%{ transform:scaleY(0); transform-origin:bottom; opacity:0; }
}

/* ===================== STATS BAR ===================== */
.stats-bar { background:var(--bg2); border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:52px 0; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
.stat-cell { text-align:center; padding:16px 24px; border-right:1px solid var(--border); }
.stat-cell:last-child { border-right:none; }
.stat-num { font-family:var(--ff-d); font-size:3.4rem; font-weight:700; color:var(--gold); line-height:1; display:block; margin-bottom:8px; }
.stat-lbl { font-size:12px; color:var(--text-muted); font-weight:400; line-height:1.4; }

/* ===================== SERVICES ===================== */
#services { padding: 128px 0; }
.services-hd { text-align:center; margin-bottom:64px; }
.services-hd .sec-body { max-width:560px; margin:0 auto; text-align:center; }
.svc-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; }
.svc-card {
  background:var(--bg2); border:1px solid var(--border); border-radius:var(--radius);
  padding:50px 46px; position:relative; overflow:hidden;
  transition:border-color .4s, transform .4s, box-shadow .4s;
}
.svc-card::after {
  content:''; position:absolute; top:0; left:0; right:0; height:2px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent);
  transform:scaleX(0); transition:transform .5s cubic-bezier(.25,.8,.25,1);
}
.svc-card:hover::after { transform:scaleX(1); }
.svc-card:hover { border-color:var(--border-md); transform:translateY(-7px); box-shadow:0 28px 64px rgba(0,0,0,.45); }
.svc-ico { width:64px; height:64px; background:var(--gold-dim); border:1px solid var(--border); border-radius:15px; display:flex; align-items:center; justify-content:center; font-size:28px; margin-bottom:30px; }
.svc-ttl { font-family:var(--ff-d); font-size:2rem; font-weight:600; margin-bottom:14px; line-height:1.1; }
.svc-desc { font-size:14.5px; color:var(--text-muted); font-weight:300; line-height:1.75; margin-bottom:28px; }
.svc-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
.svc-list li { font-size:13.5px; color:var(--text-soft); display:flex; align-items:center; gap:10px; }
.svc-list li::before { content:''; width:16px; height:1px; background:var(--gold); flex-shrink:0; }
.svc-badge { display:inline-block; margin-top:28px; background:rgba(201,169,110,.08); border:1px solid rgba(201,169,110,.22); border-radius:100px; padding:5px 16px; font-size:11.5px; color:var(--gold-lt); font-weight:500; }

/* ===================== ABOUT ===================== */
#about { padding:128px 0; background:var(--bg2); }
.about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.about-orb-wrap { position:relative; height:480px; display:flex; align-items:center; justify-content:center; }
.orb-core { width:260px; height:260px; border-radius:50%; background:radial-gradient(circle at 35% 30%,rgba(201,169,110,.22) 0%,rgba(90,50,200,.18) 50%,rgba(6,6,14,0) 75%); border:1px solid rgba(201,169,110,.18); animation:floatOrb 7s ease-in-out infinite; }
@keyframes floatOrb { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-18px); } }
.orb-ring { position:absolute; width:340px; height:340px; border-radius:50%; border:1px dashed rgba(201,169,110,.18); animation:spinRing 22s linear infinite; }
@keyframes spinRing { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
.orb-dot { position:absolute; top:-5px; left:50%; transform:translateX(-50%); width:10px; height:10px; border-radius:50%; background:var(--gold); box-shadow:0 0 14px var(--gold),0 0 28px rgba(201,169,110,.4); }
.orb-ring-2 { position:absolute; width:420px; height:420px; border-radius:50%; border:1px solid rgba(201,169,110,.06); }
.float-pill { position:absolute; background:var(--bg3); border:1px solid var(--border-md); border-radius:12px; padding:16px 22px; animation:floatOrb var(--fd,6s) ease-in-out infinite; animation-delay:var(--fdel,0s); }
.float-pill .pill-label { font-size:10px; font-weight:600; letter-spacing:1.5px; color:var(--gold); text-transform:uppercase; margin-bottom:4px; }
.float-pill .pill-val { font-family:var(--ff-d); font-size:2rem; font-weight:700; line-height:1; }
.about-features { margin-top:42px; display:flex; flex-direction:column; gap:28px; }
.feat-row { display:flex; gap:18px; align-items:flex-start; }
.feat-icon { width:46px; height:46px; min-width:46px; background:var(--gold-dim); border:1px solid var(--border); border-radius:11px; display:flex; align-items:center; justify-content:center; font-size:22px; }
.feat-ttl { font-size:15.5px; font-weight:600; margin-bottom:5px; }
.feat-desc { font-size:13.5px; color:var(--text-muted); font-weight:300; line-height:1.65; }

/* ===================== CAROUSEL ===================== */
#advantages { padding:128px 0; overflow:hidden; }
.adv-hd { text-align:center; margin-bottom:64px; }
.adv-hd .sec-body { max-width:540px; margin:0 auto; text-align:center; }
.carousel-wrap { position:relative; overflow:hidden; }
.carousel-wrap::before, .carousel-wrap::after { content:''; position:absolute; top:0; bottom:0; width:100px; z-index:2; pointer-events:none; }
.carousel-wrap::before { left:0; background:linear-gradient(to right,var(--bg),transparent); }
.carousel-wrap::after { right:0; background:linear-gradient(to left,var(--bg),transparent); }
.carousel-track { display:flex; gap:22px; animation:slide 60s linear infinite; width:max-content; padding:12px 0; }
.carousel-track:hover { animation-play-state:paused; }
@keyframes slide { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
.c-card { background:var(--bg2); border:1px solid var(--border); border-radius:var(--radius); padding:34px 30px; min-width:272px; flex-shrink:0; transition:border-color .3s,box-shadow .3s; }
.c-card:hover { border-color:var(--border-md); box-shadow:0 8px 32px rgba(0,0,0,.3); }
.c-icon { font-size:30px; margin-bottom:14px; display:block; }
.c-ttl { font-weight:600; font-size:15px; margin-bottom:7px; }
.c-desc { font-size:13px; color:var(--text-muted); font-weight:300; line-height:1.65; }

/* ===================== PORTFOLIO ===================== */
#portfolio { padding:128px 0; background:var(--bg2); }
.port-hd { text-align:center; margin-bottom:64px; }
.port-hd .sec-body { max-width:500px; margin:0 auto; text-align:center; }
.port-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
.port-card { border-radius:12px; aspect-ratio:16/10; overflow:hidden; position:relative; background:var(--bg3); border:1px solid var(--border); transition:border-color .3s,transform .35s,box-shadow .35s; }
.port-card:hover { border-color:var(--border-md); transform:scale(1.03) translateY(-4px); box-shadow:0 20px 48px rgba(0,0,0,.5); }
.port-card svg { width:100%; height:100%; }
.port-overlay { position:absolute; inset:0; background:rgba(6,6,14,0); transition:background .35s; display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-end; padding:16px 18px; }
.port-card:hover .port-overlay { background:rgba(6,6,14,.55); }
.port-cat-tag { font-size:9.5px; letter-spacing:2.5px; text-transform:uppercase; color:var(--gold); opacity:0; transform:translateY(6px); transition:opacity .3s,transform .3s; font-weight:600; }
.port-card:hover .port-cat-tag { opacity:1; transform:translateY(0); }

/* ===================== OFFER ===================== */
#offer { padding:128px 0; position:relative; overflow:hidden; }
#offer::before { content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:860px; height:440px; background:radial-gradient(ellipse,rgba(201,169,110,.055) 0%,transparent 68%); pointer-events:none; }
.offer-inner { text-align:center; max-width:840px; margin:0 auto; position:relative; z-index:1; }
.offer-flag { display:inline-block; background:rgba(201,169,110,.09); border:1px solid rgba(201,169,110,.28); border-radius:8px; padding:11px 28px; margin-bottom:44px; font-size:12.5px; color:var(--gold-lt); font-weight:500; }
.offer-ttl { font-family:var(--ff-d); font-size:clamp(2.6rem,5.5vw,4.6rem); font-weight:700; line-height:1.04; margin-bottom:28px; }
.offer-ttl span { color:var(--gold); font-style:italic; }
.offer-sub { font-size:17px; color:var(--text-muted); font-weight:300; line-height:1.75; max-width:620px; margin:0 auto 50px; }
.offer-checks { display:flex; justify-content:center; flex-wrap:wrap; gap:14px 40px; margin-bottom:28px; }
.offer-check { display:flex; align-items:center; gap:9px; font-size:13.5px; color:var(--text-soft); }
.offer-check::before { content:'✓'; color:var(--gold); font-weight:700; font-size:14px; }
.offer-urgency { display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:44px; flex-wrap:wrap; }
.urgency-label { font-size:12.5px; color:var(--text-muted); }
.countdown-boxes { display:flex; gap:8px; }
.cdbox { background:rgba(201,169,110,.08); border:1px solid rgba(201,169,110,.25); border-radius:8px; padding:10px 14px; text-align:center; min-width:56px; }
.cd-num { font-family:var(--ff-d); font-size:1.6rem; font-weight:700; color:var(--gold); display:block; line-height:1; }
.cd-lbl { font-size:9px; letter-spacing:1.5px; text-transform:uppercase; color:var(--text-muted); margin-top:3px; display:block; }

/* ===================== TESTIMONIALS ===================== */
#testimonials { padding:128px 0; background:var(--bg2); }
.test-hd { text-align:center; margin-bottom:64px; }
.test-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:26px; }
.test-card { background:var(--bg3); border:1px solid var(--border); border-radius:var(--radius); padding:40px; position:relative; transition:border-color .4s,transform .4s,box-shadow .4s; }
.test-card:hover { border-color:var(--border-md); transform:translateY(-5px); box-shadow:0 22px 54px rgba(0,0,0,.35); }
.test-stars { position:absolute; top:28px; right:28px; color:var(--gold); font-size:12px; letter-spacing:2.5px; }
.test-quote { font-size:52px; font-family:Georgia,serif; color:var(--gold); opacity:.35; line-height:.6; margin-bottom:22px; }
.test-text { font-size:14.5px; font-weight:300; line-height:1.78; color:var(--text-muted); font-style:italic; margin-bottom:30px; }
.test-author { display:flex; align-items:center; gap:14px; }
.avatar { width:50px; height:50px; border-radius:50%; overflow:hidden; border:2px solid rgba(201,169,110,.3); flex-shrink:0; }
.author-name { font-size:14px; font-weight:600; margin-bottom:3px; }
.author-role { font-size:11.5px; color:var(--text-muted); }

/* ===================== FAQ ===================== */
#faq { padding:128px 0; }
.faq-hd { text-align:center; margin-bottom:64px; }
.faq-hd .sec-body { max-width:520px; margin:0 auto; text-align:center; }
.faq-list { max-width:780px; margin:0 auto; display:flex; flex-direction:column; gap:0; }
.faq-item { border-bottom:1px solid var(--border); }
.faq-item:first-child { border-top:1px solid var(--border); }
.faq-q {
  width:100%; background:none; border:none; cursor:pointer;
  display:flex; align-items:center; justify-content:space-between;
  padding:24px 0; text-align:left; gap:20px;
  color:var(--text); font-family:var(--ff-b); font-size:16px; font-weight:500;
  transition:color .2s;
}
.faq-q:hover { color:var(--gold); }
.faq-icon {
  width:28px; height:28px; min-width:28px; border-radius:50%;
  border:1px solid var(--border); display:flex; align-items:center; justify-content:center;
  font-size:16px; color:var(--gold); transition:transform .35s, border-color .2s;
}
.faq-item.open .faq-icon { transform:rotate(45deg); border-color:var(--gold); }
.faq-a { max-height:0; overflow:hidden; transition:max-height .4s cubic-bezier(.25,.8,.25,1), padding .4s; padding:0; }
.faq-item.open .faq-a { max-height:200px; padding-bottom:22px; }
.faq-a p { font-size:15px; color:var(--text-muted); font-weight:300; line-height:1.75; }

/* ===================== CONTACT ===================== */
#contact { padding:128px 0; background:var(--bg2); }
.contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
.contact-urgency-pill {
  display:inline-flex; align-items:center; gap:8px;
  background:rgba(201,169,110,.07); border:1px solid rgba(201,169,110,.2);
  border-radius:100px; padding:6px 16px; font-size:11.5px;
  color:var(--gold); margin-bottom:24px; font-weight:500;
}
.contact-urgency-dot { width:6px; height:6px; border-radius:50%; background:var(--gold); animation:badgePulse 2s ease-in-out infinite; }
.contact-email-link { display:flex; align-items:center; gap:11px; margin-top:34px; color:var(--gold); font-size:15.5px; font-weight:500; text-decoration:none; transition:opacity .2s; }
.contact-email-link:hover { opacity:.7; }
.promises { margin-top:48px; display:flex; flex-direction:column; gap:14px; }
.promise { display:flex; align-items:center; gap:13px; font-size:13.5px; color:var(--text-muted); }
.p-dot { width:6px; height:6px; border-radius:50%; background:var(--gold); flex-shrink:0; }
.cform { background:var(--bg3); border:1px solid var(--border); border-radius:20px; padding:48px; }
.fg { margin-bottom:22px; }
.flabel { display:block; font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:9px; }
.finput, .ftextarea { width:100%; background:var(--bg); border:1px solid var(--border); border-radius:9px; padding:14px 16px; color:var(--text); font-family:var(--ff-b); font-size:14.5px; font-weight:300; outline:none; transition:border-color .3s; }
.finput:focus, .ftextarea:focus { border-color:rgba(201,169,110,.5); }
.ftextarea { resize:vertical; min-height:120px; }
.finput::placeholder, .ftextarea::placeholder { color:var(--text-muted); }
.fsubmit { width:100%; background:var(--gold); color:#05050C; border:none; border-radius:9px; padding:16px; font-size:15px; font-weight:600; cursor:pointer; font-family:var(--ff-b); transition:background .25s,transform .25s,box-shadow .25s; }
.fsubmit:hover { background:var(--gold-lt); transform:translateY(-2px); box-shadow:0 14px 44px rgba(201,169,110,.28); }
.fsubmit.sent { background:#2B8A5A; color:#fff; transform:none; box-shadow:none; }
.form-note { font-size:11.5px; color:var(--text-muted); text-align:center; margin-top:14px; line-height:1.5; }

/* ===================== FOOTER ===================== */
footer { background:var(--bg); border-top:1px solid var(--border); padding:56px 0 36px; }
.foot-top { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:24px; padding-bottom:36px; border-bottom:1px solid var(--border); margin-bottom:28px; }
.foot-links { display:flex; gap:28px; list-style:none; flex-wrap:wrap; }
.foot-links a { font-size:13px; color:var(--text-muted); text-decoration:none; transition:color .2s; }
.foot-links a:hover { color:var(--gold); }
.foot-bottom { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }
.foot-copy { font-size:12.5px; color:var(--text-muted); }
.foot-made { font-size:12px; color:var(--text-muted); }

/* ===================== RESPONSIVE ===================== */
@media (max-width:960px) {
  .about-grid,.svc-grid,.contact-grid { grid-template-columns:1fr; gap:48px; }
  .test-grid { grid-template-columns:1fr; }
  .port-grid { grid-template-columns:1fr 1fr; }
  .stats-grid { grid-template-columns:1fr 1fr; }
  .stat-cell { border-right:none; border-bottom:1px solid var(--border); }
  .stat-cell:nth-child(odd) { border-right:1px solid var(--border); }
  .stat-cell:last-child { border-bottom:none; }
  .about-orb-wrap { height:320px; }
  .nav-links { display:none; }
}
@media (max-width:600px) {
  .port-grid { grid-template-columns:1fr; }
  .hero-btns { flex-direction:column; align-items:center; }
  .cform { padding:30px 24px; }
  .svc-card { padding:34px 28px; }
  .countdown-boxes { gap:5px; }
}
```

- [ ] **Step 2: Update app/layout.tsx**

Replace the entire file `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VÉLORIA — Agencia de Desarrollo',
  description: 'Véloria lleva el desarrollo digital de élite a tu negocio: webs que convierten y recepcionistas virtuales disponibles 24 horas, los 365 días del año.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npm run build`
Expected: Build succeeds with no TypeScript errors

- [ ] **Step 4: Commit**

```bash
git init
git add app/globals.css app/layout.tsx
git commit -m "feat: add veloria global CSS and update layout"
```

---

### Task 2: ScrollReveal utility + page shell

**Files:**
- Create: `app/components/ScrollReveal.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<ScrollReveal />` — renders `null`, mounts global IntersectionObserver on `.reveal` elements with `i * 90ms` stagger

- [ ] **Step 1: Create app/components/ScrollReveal.tsx**

```tsx
'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('up'), i * 90)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return null
}
```

- [ ] **Step 2: Replace app/page.tsx with a clean shell**

```tsx
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add app/components/ScrollReveal.tsx app/page.tsx
git commit -m "feat: add ScrollReveal utility and page shell"
```

---

### Task 3: UrgencyBar + Nav

**Files:**
- Create: `app/components/UrgencyBar.tsx`
- Create: `app/components/Nav.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<UrgencyBar />` (server); `<Nav />` (client, adds/removes `.stuck` on `#nav` via scroll listener)

- [ ] **Step 1: Create app/components/UrgencyBar.tsx**

```tsx
export default function UrgencyBar() {
  return (
    <div id="urgency-bar">
      <div className="urgency-inner">
        <span className="urgency-fire">🔥</span>
        <span className="urgency-text">
          Solo quedan{' '}
          <strong style={{ color: 'var(--gold)' }}>3 plazas disponibles</strong>{' '}
          este mes a precio de lanzamiento
        </span>
        <span className="urgency-pill">OFERTA LIMITADA</span>
        <a
          href="#contact"
          style={{ fontSize: '12px', color: 'var(--gold-lt)', textDecoration: 'underline', fontWeight: 500 }}
        >
          Reserva la tuya →
        </a>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create app/components/Nav.tsx**

```tsx
'use client'
import { useEffect } from 'react'

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const handler = () => nav?.classList.toggle('stuck', window.scrollY > 56)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="nav-logo">
            <svg className="logo-mark" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 6L18 3L24.5 6L28 13H8L11.5 6Z" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.07)" strokeLinejoin="round"/>
              <path d="M8 13L18 33L28 13" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.04)" strokeLinejoin="round"/>
              <line x1="8" y1="13" x2="28" y2="13" stroke="#C9A96E" strokeWidth="0.8"/>
              <line x1="18" y1="3" x2="14.5" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5"/>
              <line x1="18" y1="3" x2="21.5" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5"/>
              <line x1="18" y1="33" x2="13" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4"/>
              <line x1="18" y1="33" x2="23" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4"/>
              <circle cx="18" cy="13" r="1.5" fill="#C9A96E" opacity="0.9"/>
            </svg>
            <span className="logo-name">VÉLORIA</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Clientes</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Contactar</a>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 4: Verify nav scroll behaviour**

Run: `npm run dev`
Open browser at `http://localhost:3000`. Scroll down — the nav should gain a blurred dark background with `.stuck` class. Background: `rgba(6,6,14,.88)` with `backdrop-filter: blur(22px)`.

- [ ] **Step 5: Commit**

```bash
git add app/components/UrgencyBar.tsx app/components/Nav.tsx app/page.tsx
git commit -m "feat: add UrgencyBar and Nav components"
```

---

### Task 4: Hero

**Files:**
- Create: `app/components/Hero.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Hero />` (client) — builds starfield via DOM injection in `useEffect`

- [ ] **Step 1: Create app/components/Hero.tsx**

```tsx
'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const sf = document.getElementById('starfield')
    if (!sf) return
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const size = Math.random() > 0.75 ? 3 : 2
      s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${2 + Math.random() * 5}s;--delay:${Math.random() * 5}s;opacity:${0.1 + Math.random() * 0.5};`
      sf.appendChild(s)
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg-mesh"></div>
      <div id="starfield"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Agencia de Desarrollo · España
        </div>
        <h1 className="hero-h1">Tú te centras <em>en crecer.</em></h1>
        <div className="hero-h2">Nosotros hacemos el resto.</div>
        <p className="hero-sub">
          Véloria lleva el desarrollo digital de élite a tu negocio: webs que convierten y recepcionistas virtuales disponibles 24 horas, los 365 días del año.
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-gold">Descubrir servicios</a>
          <a href="#contact" className="btn-outline">Hablar con nosotros</a>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 3: Verify starfield**

Run: `npm run dev`. 90 gold twinkling stars should appear over the hero section. The hero should be full viewport height with gradient mesh background.

- [ ] **Step 4: Commit**

```bash
git add app/components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero component with starfield animation"
```

---

### Task 5: Stats

**Files:**
- Create: `app/components/Stats.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Stats />` (client) — animates `[data-count]` spans from 0 to target when scrolled into view

- [ ] **Step 1: Create app/components/Stats.tsx**

```tsx
'use client'
import { useEffect } from 'react'

export default function Stats() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.count ?? '0')
          const suf = el.dataset.suf ?? ''
          let cur = 0
          const step = Math.max(1, Math.ceil(target / 55))
          const t = setInterval(() => {
            cur = Math.min(cur + step, target)
            el.textContent = cur + suf
            if (cur >= target) clearInterval(t)
          }, 22)
          obs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-count]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="24" data-suf="h">0</span>
            <span className="stat-lbl">Horas al día activos</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="100" data-suf="%">0</span>
            <span className="stat-lbl">Clientes satisfechos</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="7" data-suf=" días">0</span>
            <span className="stat-lbl">Entrega garantizada</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="365" data-suf="">0</span>
            <span className="stat-lbl">Días al año disponibles</span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 3: Verify counter animation**

Run: `npm run dev`. Scroll to the stats bar — numbers should animate from 0 upward (24h, 100%, 7 días, 365).

- [ ] **Step 4: Commit**

```bash
git add app/components/Stats.tsx app/page.tsx
git commit -m "feat: add Stats component with counter animation"
```

---

### Task 6: Services + About

**Files:**
- Create: `app/components/Services.tsx`
- Create: `app/components/About.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Services />` (server); `<About />` (server) — both use `.reveal` class for scroll-reveal

- [ ] **Step 1: Create app/components/Services.tsx**

```tsx
export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-hd reveal">
          <p className="eyebrow">Nuestros Servicios</p>
          <h2 className="sec-title">Lo que hacemos <span className="gold-italic">mejor que nadie</span></h2>
          <p className="sec-body">Dos servicios diseñados para transformar cómo tu negocio comunica, capta y atiende clientes.</p>
        </div>
        <div className="svc-grid">
          <div className="svc-card reveal">
            <div className="svc-ico">🌐</div>
            <h3 className="svc-ttl">Creación de Webs</h3>
            <p className="svc-desc">Páginas web de alto impacto que no solo lucen increíbles, sino que trabajan activamente para convertir cada visita en una oportunidad de negocio real.</p>
            <ul className="svc-list">
              <li>Diseño exclusivo y 100% personalizado</li>
              <li>Optimización SEO desde el primer día</li>
              <li>Ultra rápidas, seguras y responsive</li>
              <li>E-commerce y tiendas online</li>
              <li>Integración nativa con herramientas IA</li>
              <li>Panel de edición sencillo para ti</li>
            </ul>
            <span className="svc-badge">✨ Precios que te sorprenderán</span>
          </div>
          <div className="svc-card reveal">
            <div className="svc-ico">🤖</div>
            <h3 className="svc-ttl">Recepcionistas Virtuales 24h</h3>
            <p className="svc-desc">Nunca pierdas una consulta, una venta o una oportunidad por no estar disponible. Nuestros asistentes atienden con naturalidad y con la voz de tu marca.</p>
            <ul className="svc-list">
              <li>Activos 24 horas, 7 días a la semana</li>
              <li>Respuestas naturales y humanizadas</li>
              <li>Integración en web, WhatsApp y más</li>
              <li>Gestión automática de citas y reservas</li>
              <li>Entrenado con la personalidad de tu marca</li>
              <li>Panel de control y métricas en tiempo real</li>
            </ul>
            <span className="svc-badge">⚡ Activo en menos de 48 horas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create app/components/About.tsx**

```tsx
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-orb-wrap reveal">
            <div className="orb-ring-2"></div>
            <div className="orb-ring"><div className="orb-dot"></div></div>
            <div className="orb-core"></div>
            <div
              className="float-pill"
              style={{ top: '55px', right: '10px', '--fd': '5s', '--fdel': '0s' } as React.CSSProperties}
            >
              <div className="pill-label">Disponibilidad</div>
              <div className="pill-val">24/7</div>
            </div>
            <div
              className="float-pill"
              style={{ bottom: '70px', left: '10px', '--fd': '7s', '--fdel': '1.2s' } as React.CSSProperties}
            >
              <div className="pill-label">Entrega web en</div>
              <div className="pill-val">7 días</div>
            </div>
            <div
              className="float-pill"
              style={{ bottom: '55px', right: '30px', '--fd': '6s', '--fdel': '0.6s' } as React.CSSProperties}
            >
              <div className="pill-label">Satisfacción</div>
              <div className="pill-val">100%</div>
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Sobre VÉLORIA</p>
            <h2 className="sec-title">
              El socio digital <span className="gold-italic">que multiplica</span><br />
              tu negocio, sin que<br />
              tengas que preocuparte de nada
            </h2>
            <p className="sec-body" style={{ marginBottom: 0 }}>
              En Véloria no vendemos tecnología. Vendemos resultados. Somos la agencia de desarrollo que combina diseño premium, automatización inteligente y un servicio cercano para que tu negocio crezca sin límites.
            </p>
            <div className="about-features">
              <div className="feat-row">
                <div className="feat-icon">🌐</div>
                <div>
                  <div className="feat-ttl">Webs que venden, no solo que existen</div>
                  <div className="feat-desc">Diseñamos cada píxel con un objetivo: convertir visitantes en clientes. Estrategia, diseño y tecnología en una sola web.</div>
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-icon">🤖</div>
                <div>
                  <div className="feat-ttl">Tu recepcionista nunca duerme</div>
                  <div className="feat-desc">Asistentes que atienden, informan y gestionan a tus clientes a cualquier hora, con la calidez de tu marca.</div>
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-icon">⚡</div>
                <div>
                  <div className="feat-ttl">Resultados desde el primer día</div>
                  <div className="feat-desc">Implementación ágil, soporte continuo y métricas claras. Sin promesas vacías, solo resultados medibles.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds. Open `npm run dev` and verify service cards lift on hover and orb floats in About.

- [ ] **Step 5: Commit**

```bash
git add app/components/Services.tsx app/components/About.tsx app/page.tsx
git commit -m "feat: add Services and About components"
```

---

### Task 7: Carousel + Portfolio

**Files:**
- Create: `app/components/Carousel.tsx`
- Create: `app/components/Portfolio.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Carousel />` (server, pure CSS infinite scroll); `<Portfolio />` (server, 6 SVG mock-up cards)

- [ ] **Step 1: Create app/components/Carousel.tsx**

```tsx
const cards = [
  { icon: '⏰', title: 'Disponibilidad 24/7', desc: 'Tu negocio nunca cierra. Atendemos a tus clientes a cualquier hora, incluso cuando duermes.' },
  { icon: '🚀', title: 'Implementación Rápida', desc: 'De la idea a la realidad en tiempo récord. Webs en 7 días, asistentes activos en 48 horas.' },
  { icon: '💎', title: 'Calidad Premium', desc: 'Cada proyecto nace con los más altos estándares de diseño, tecnología y atención al detalle.' },
  { icon: '💰', title: 'Precio Accesible', desc: 'Tecnología de élite a precios que te sorprenderán. Sin sacrificar ni un milímetro de calidad.' },
  { icon: '📊', title: 'Resultados Medibles', desc: 'Métricas claras para que veas exactamente el impacto en tu negocio.' },
  { icon: '🎨', title: 'Personalización Total', desc: 'Nada de plantillas genéricas. Cada proyecto se adapta perfectamente a tu negocio y tu marca.' },
  { icon: '🔐', title: 'Seguridad y Confianza', desc: 'Los más altos estándares de seguridad y transparencia en cada paso del proceso.' },
  { icon: '🤝', title: 'Soporte Continuo', desc: 'No te dejamos solo tras el lanzamiento. Estamos aquí para acompañarte en el largo plazo.' },
  { icon: '🌍', title: 'Alcance Global', desc: 'Soluciones preparadas para escalar. Tu negocio puede atender clientes en cualquier lugar del mundo.' },
  { icon: '🧠', title: 'Tecnología de Vanguardia', desc: 'Utilizamos las herramientas de desarrollo más avanzadas disponibles en el mercado.' },
]

export default function Carousel() {
  return (
    <section id="advantages">
      <div className="container">
        <div className="adv-hd reveal">
          <p className="eyebrow">Por qué VÉLORIA</p>
          <h2 className="sec-title">Las ventajas de trabajar <span className="gold-italic">con nosotros</span></h2>
          <p className="sec-body">Cada detalle de Véloria está pensado para darte más con menos esfuerzo.</p>
        </div>
      </div>
      <div className="carousel-wrap">
        <div className="carousel-track">
          {[...cards, ...cards].map((card, i) => (
            <div className="c-card" key={i}>
              <span className="c-icon">{card.icon}</span>
              <h4 className="c-ttl">{card.title}</h4>
              <p className="c-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create app/components/Portfolio.tsx**

```tsx
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="port-hd reveal">
          <p className="eyebrow">Proyectos</p>
          <h2 className="sec-title">Nuestro trabajo habla <span className="gold-italic">por sí solo</span></h2>
          <p className="sec-body">Primeros proyectos en marcha. Muy pronto aquí verás los resultados reales.</p>
        </div>
        <div className="port-grid">

          {/* Card 1: Clínica dental */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#0C0C1A"/>
              <rect x="0" y="0" width="320" height="28" fill="#121226"/>
              <circle cx="14" cy="14" r="4" fill="#2D2D4E"/>
              <circle cx="26" cy="14" r="4" fill="#2D2D4E"/>
              <circle cx="38" cy="14" r="4" fill="#2D2D4E"/>
              <rect x="55" y="10" width="60" height="8" rx="4" fill="#1E1E38"/>
              <rect x="230" y="10" width="40" height="8" rx="4" fill="#C9A96E" opacity="0.7"/>
              <rect x="0" y="28" width="320" height="80" fill="url(#g1)"/>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="320" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0F0F2A"/>
                  <stop offset="100%" stopColor="#1A0A30"/>
                </linearGradient>
              </defs>
              <rect x="24" y="45" width="8" height="24" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="18" y="51" width="20" height="8" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="46" y="46" width="100" height="10" rx="3" fill="#F0EFF8" opacity="0.85"/>
              <rect x="46" y="61" width="130" height="6" rx="3" fill="#7A7A9E" opacity="0.6"/>
              <rect x="46" y="71" width="110" height="6" rx="3" fill="#7A7A9E" opacity="0.4"/>
              <rect x="46" y="83" width="56" height="10" rx="4" fill="#C9A96E"/>
              <rect x="12" y="118" width="88" height="56" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="116" y="118" width="88" height="56" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="220" y="118" width="88" height="56" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="30" cy="133" r="7" fill="#C9A96E" opacity="0.3"/>
              <rect x="42" y="128" width="48" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="42" y="137" width="35" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <circle cx="134" cy="133" r="7" fill="#C9A96E" opacity="0.3"/>
              <rect x="146" y="128" width="48" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="146" y="137" width="35" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <circle cx="238" cy="133" r="7" fill="#C9A96E" opacity="0.3"/>
              <rect x="250" y="128" width="48" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="250" y="137" width="35" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="0" y="182" width="320" height="18" fill="#08080F"/>
              <rect x="12" y="187" width="60" height="5" rx="2" fill="#2D2D4E"/>
              <rect x="200" y="187" width="30" height="5" rx="2" fill="#2D2D4E"/>
              <rect x="240" y="187" width="30" height="5" rx="2" fill="#2D2D4E"/>
              <rect x="280" y="187" width="30" height="5" rx="2" fill="#C9A96E" opacity="0.4"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Web Clínica Dental</span></div>
          </div>

          {/* Card 2: Chat / Recepcionista */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#08080F"/>
              <rect x="110" y="8" width="100" height="184" rx="12" fill="#121226" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4"/>
              <rect x="115" y="12" width="90" height="18" rx="6" fill="#0C0C1A"/>
              <rect x="142" y="16" width="36" height="6" rx="3" fill="#1E1E38"/>
              <rect x="118" y="36" width="68" height="22" rx="8" fill="#1E1E38"/>
              <rect x="118" y="37" width="4" height="10" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="126" y="42" width="52" height="4" rx="2" fill="#7A7A9E" opacity="0.7"/>
              <rect x="126" y="49" width="38" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="134" y="64" width="68" height="18" rx="8" fill="rgba(201,169,110,0.15)"/>
              <rect x="138" y="70" width="56" height="4" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="118" y="88" width="80" height="28" rx="8" fill="#1E1E38"/>
              <rect x="124" y="94" width="68" height="4" rx="2" fill="#7A7A9E" opacity="0.7"/>
              <rect x="124" y="102" width="50" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="130" y="122" width="72" height="18" rx="8" fill="rgba(201,169,110,0.15)"/>
              <rect x="136" y="128" width="58" height="4" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="118" y="146" width="80" height="18" rx="8" fill="#1E1E38"/>
              <rect x="124" y="152" width="68" height="4" rx="2" fill="#7A7A9E" opacity="0.6"/>
              <rect x="113" y="170" width="94" height="16" rx="8" fill="#0C0C1A" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <circle cx="197" cy="178" r="5" fill="#C9A96E" opacity="0.7"/>
              <circle cx="155" cy="22" r="2.5" fill="#2DC97E"/>
              <circle cx="50" cy="60" r="28" fill="none" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.1"/>
              <circle cx="270" cy="140" r="22" fill="none" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.1"/>
              <rect x="20" y="80" width="70" height="8" rx="3" fill="#1E1E38" opacity="0.5"/>
              <rect x="20" y="93" width="50" height="5" rx="2" fill="#2D2D4E" opacity="0.4"/>
              <rect x="236" y="55" width="60" height="8" rx="3" fill="#1E1E38" opacity="0.5"/>
              <rect x="244" y="68" width="44" height="5" rx="2" fill="#2D2D4E" opacity="0.4"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Recepcionista Virtual</span></div>
          </div>

          {/* Card 3: E-commerce */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#0C0C1A"/>
              <rect x="0" y="0" width="320" height="26" fill="#08080F"/>
              <rect x="12" y="9" width="50" height="8" rx="4" fill="#1E1E38"/>
              <rect x="100" y="9" width="120" height="8" rx="4" fill="#1E1E38"/>
              <rect x="262" y="7" width="22" height="12" rx="3" fill="#C9A96E" opacity="0.5"/>
              <rect x="291" y="9" width="18" height="8" rx="3" fill="#2D2D4E"/>
              <rect x="0" y="26" width="320" height="22" fill="#121226"/>
              <rect x="12" y="32" width="40" height="10" rx="4" fill="#C9A96E"/>
              <rect x="60" y="32" width="40" height="10" rx="4" fill="#1E1E38"/>
              <rect x="108" y="32" width="40" height="10" rx="4" fill="#1E1E38"/>
              <rect x="156" y="32" width="40" height="10" rx="4" fill="#1E1E38"/>
              <rect x="12" y="58" width="90" height="66" rx="6" fill="#1A1A2E"/>
              <rect x="116" y="58" width="90" height="66" rx="6" fill="#1A1A2E"/>
              <rect x="220" y="58" width="90" height="66" rx="6" fill="#1A1A2E"/>
              <rect x="20" y="64" width="74" height="40" rx="4" fill="#0F0F24"/>
              <ellipse cx="57" cy="84" rx="18" ry="12" fill="#C9A96E" opacity="0.15"/>
              <circle cx="57" cy="84" r="8" fill="#C9A96E" opacity="0.25"/>
              <rect x="124" y="64" width="74" height="40" rx="4" fill="#0F0F24"/>
              <ellipse cx="161" cy="84" rx="16" ry="10" fill="#7B5FCC" opacity="0.2"/>
              <circle cx="161" cy="84" r="7" fill="#9B7FE8" opacity="0.25"/>
              <rect x="228" y="64" width="74" height="40" rx="4" fill="#0F0F24"/>
              <ellipse cx="265" cy="84" rx="14" ry="9" fill="#C9A96E" opacity="0.15"/>
              <circle cx="265" cy="84" r="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="20" y="109" width="55" height="5" rx="2" fill="#F0EFF8" opacity="0.7"/>
              <rect x="20" y="117" width="35" height="5" rx="2" fill="#C9A96E" opacity="0.8"/>
              <rect x="124" y="109" width="55" height="5" rx="2" fill="#F0EFF8" opacity="0.7"/>
              <rect x="124" y="117" width="35" height="5" rx="2" fill="#C9A96E" opacity="0.8"/>
              <rect x="228" y="109" width="55" height="5" rx="2" fill="#F0EFF8" opacity="0.7"/>
              <rect x="228" y="117" width="35" height="5" rx="2" fill="#C9A96E" opacity="0.8"/>
              <rect x="12" y="132" width="90" height="55" rx="6" fill="#1A1A2E"/>
              <rect x="116" y="132" width="90" height="55" rx="6" fill="#1A1A2E"/>
              <rect x="220" y="132" width="90" height="55" rx="6" fill="#1A1A2E"/>
              <rect x="20" y="138" width="74" height="32" rx="4" fill="#0F0F24"/>
              <circle cx="57" cy="154" r="9" fill="#2DC97E" opacity="0.2"/>
              <rect x="124" y="138" width="74" height="32" rx="4" fill="#0F0F24"/>
              <circle cx="161" cy="154" r="9" fill="#C9A96E" opacity="0.2"/>
              <rect x="228" y="138" width="74" height="32" rx="4" fill="#0F0F24"/>
              <circle cx="265" cy="154" r="9" fill="#5F8FFF" opacity="0.2"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Tienda Online</span></div>
          </div>

          {/* Card 4: Landing Page / Restaurant */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="landBg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1A0800"/>
                  <stop offset="100%" stopColor="#0A0405"/>
                </linearGradient>
              </defs>
              <rect width="320" height="200" fill="url(#landBg)"/>
              <rect x="0" y="0" width="320" height="26" fill="rgba(0,0,0,0.4)"/>
              <rect x="14" y="9" width="44" height="8" rx="3" fill="#C9A96E" opacity="0.7"/>
              <rect x="190" y="10" width="28" height="6" rx="2" fill="#7A7A9E" opacity="0.6"/>
              <rect x="226" y="10" width="28" height="6" rx="2" fill="#7A7A9E" opacity="0.6"/>
              <rect x="266" y="8" width="42" height="10" rx="4" fill="#C9A96E" opacity="0.6"/>
              <rect x="40" y="42" width="200" height="18" rx="4" fill="#F0EFF8" opacity="0.9"/>
              <rect x="60" y="66" width="160" height="10" rx="3" fill="#C9A96E" opacity="0.7"/>
              <rect x="50" y="82" width="180" height="6" rx="3" fill="#7A7A9E" opacity="0.5"/>
              <rect x="70" y="92" width="140" height="6" rx="3" fill="#7A7A9E" opacity="0.35"/>
              <rect x="72" y="108" width="80" height="18" rx="6" fill="#C9A96E"/>
              <rect x="162" y="108" width="80" height="18" rx="6" fill="none" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.5"/>
              <circle cx="260" cy="110" r="42" fill="rgba(201,169,110,0.04)" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.2"/>
              <circle cx="260" cy="110" r="28" fill="rgba(201,169,110,0.06)"/>
              <ellipse cx="260" cy="108" rx="16" ry="12" fill="#2A1500" opacity="0.8"/>
              <ellipse cx="258" cy="106" rx="8" ry="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="0" y="148" width="320" height="52" fill="rgba(0,0,0,0.35)"/>
              <rect x="1" y="148" width="320" height="1" fill="#C9A96E" opacity="0.15"/>
              <rect x="40" y="162" width="30" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="30" y="174" width="50" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="130" y="162" width="30" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="120" y="174" width="50" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="220" y="162" width="30" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="210" y="174" width="50" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Landing Page</span></div>
          </div>

          {/* Card 5: Dashboard / AI Panel */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#08080F"/>
              <rect x="0" y="0" width="64" height="200" fill="#0C0C1A"/>
              <rect x="8" y="14" width="48" height="14" rx="4" fill="#1E1E38"/>
              <polygon points="32,36 39,44 32,52 25,44" fill="none" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.7"/>
              <rect x="10" y="64" width="44" height="8" rx="3" fill="#C9A96E" opacity="0.25"/>
              <rect x="10" y="78" width="44" height="8" rx="3" fill="#1E1E38"/>
              <rect x="10" y="92" width="44" height="8" rx="3" fill="#1E1E38"/>
              <rect x="10" y="106" width="44" height="8" rx="3" fill="#1E1E38"/>
              <rect x="10" y="120" width="44" height="8" rx="3" fill="#1E1E38"/>
              <rect x="10" y="174" width="44" height="8" rx="3" fill="#1E1E38"/>
              <rect x="74" y="8" width="200" height="10" rx="3" fill="#1E1E38"/>
              <rect x="280" y="6" width="32" height="14" rx="4" fill="#C9A96E" opacity="0.6"/>
              <rect x="74" y="28" width="58" height="40" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="140" y="28" width="58" height="40" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="206" y="28" width="58" height="40" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="264" y="28" width="48" height="40" rx="6" fill="#121226" stroke="#C9A96E" strokeWidth="0.5" strokeOpacity="0.3"/>
              <rect x="80" y="36" width="30" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="80" y="48" width="42" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="146" y="36" width="24" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="146" y="48" width="38" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="212" y="36" width="34" height="8" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="212" y="48" width="28" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="268" y="36" width="28" height="8" rx="2" fill="#2DC97E" opacity="0.7"/>
              <rect x="268" y="48" width="36" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="74" y="76" width="140" height="78" rx="6" fill="#121226"/>
              <rect x="86" y="120" width="10" height="20" rx="2" fill="#C9A96E" opacity="0.3"/>
              <rect x="102" y="108" width="10" height="32" rx="2" fill="#C9A96E" opacity="0.5"/>
              <rect x="118" y="113" width="10" height="27" rx="2" fill="#C9A96E" opacity="0.4"/>
              <rect x="134" y="100" width="10" height="40" rx="2" fill="#C9A96E" opacity="0.7"/>
              <rect x="150" y="95" width="10" height="45" rx="2" fill="#C9A96E" opacity="0.8"/>
              <rect x="166" y="103" width="10" height="37" rx="2" fill="#C9A96E" opacity="0.5"/>
              <rect x="182" y="90" width="10" height="50" rx="2" fill="#C9A96E"/>
              <rect x="222" y="76" width="90" height="78" rx="6" fill="#121226"/>
              <rect x="230" y="84" width="60" height="6" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="230" y="96" width="74" height="5" rx="2" fill="#1E1E38"/>
              <rect x="230" y="105" width="66" height="5" rx="2" fill="#C9A96E" opacity="0.4"/>
              <rect x="230" y="114" width="70" height="5" rx="2" fill="#1E1E38"/>
              <rect x="230" y="123" width="58" height="5" rx="2" fill="#1E1E38"/>
              <rect x="230" y="136" width="74" height="10" rx="4" fill="#C9A96E" opacity="0.6"/>
              <rect x="74" y="162" width="238" height="30" rx="6" fill="#121226"/>
              <rect x="82" y="170" width="50" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="150" y="170" width="40" height="5" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="210" y="170" width="50" height="5" rx="2" fill="#2DC97E" opacity="0.5"/>
              <rect x="280" y="170" width="24" height="5" rx="2" fill="#C9A96E" opacity="0.5"/>
              <rect x="82" y="180" width="60" height="4" rx="2" fill="#1E1E38"/>
              <rect x="150" y="180" width="45" height="4" rx="2" fill="#1E1E38"/>
              <rect x="210" y="180" width="55" height="4" rx="2" fill="#1E1E38"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Panel IA / Dashboard</span></div>
          </div>

          {/* Card 6: Corporate */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="corpBg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0D0D22"/>
                  <stop offset="100%" stopColor="#080812"/>
                </linearGradient>
              </defs>
              <rect width="320" height="200" fill="url(#corpBg)"/>
              <rect x="0" y="0" width="320" height="30" fill="#0A0A18"/>
              <rect x="16" y="10" width="36" height="10" rx="2" fill="#C9A96E" opacity="0.8"/>
              <rect x="130" y="12" width="26" height="6" rx="2" fill="#2D2D4E"/>
              <rect x="164" y="12" width="26" height="6" rx="2" fill="#2D2D4E"/>
              <rect x="198" y="12" width="26" height="6" rx="2" fill="#2D2D4E"/>
              <rect x="270" y="9" width="38" height="12" rx="4" fill="none" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.6"/>
              <rect x="0" y="30" width="180" height="90" fill="#0C0C1E"/>
              <rect x="180" y="30" width="140" height="90" fill="#10101E"/>
              <rect x="16" y="48" width="130" height="12" rx="3" fill="#F0EFF8" opacity="0.9"/>
              <rect x="16" y="65" width="150" height="7" rx="2" fill="#F0EFF8" opacity="0.7"/>
              <rect x="16" y="76" width="120" height="7" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="16" y="90" width="60" height="14" rx="4" fill="#C9A96E"/>
              <rect x="84" y="90" width="60" height="14" rx="4" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.5"/>
              <circle cx="250" cy="75" r="35" fill="none" stroke="#C9A96E" strokeWidth="0.6" strokeOpacity="0.15"/>
              <circle cx="250" cy="75" r="22" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.2"/>
              <polygon points="250,55 268,83 232,83" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4"/>
              <circle cx="250" cy="75" r="5" fill="#C9A96E" opacity="0.5"/>
              <rect x="0" y="120" width="320" height="80" fill="#0A0A18"/>
              <rect x="0" y="120" width="320" height="1" fill="#C9A96E" opacity="0.1"/>
              <rect x="16" y="132" width="64" height="48" rx="5" fill="#121226"/>
              <circle cx="30" cy="146" r="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="42" y="142" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="42" y="151" width="24" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="90" y="132" width="64" height="48" rx="5" fill="#121226"/>
              <circle cx="104" cy="146" r="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="116" y="142" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="116" y="151" width="24" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="164" y="132" width="64" height="48" rx="5" fill="#121226"/>
              <circle cx="178" cy="146" r="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="190" y="142" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="190" y="151" width="24" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <rect x="238" y="132" width="66" height="48" rx="5" fill="#121226"/>
              <circle cx="252" cy="146" r="6" fill="#C9A96E" opacity="0.2"/>
              <rect x="264" y="142" width="32" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="264" y="151" width="26" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Web Corporativa</span></div>
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Carousel />
      <Portfolio />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds. Open `npm run dev` — carousel should scroll automatically, pause on hover. Portfolio cards should show category tag on hover.

- [ ] **Step 5: Commit**

```bash
git add app/components/Carousel.tsx app/components/Portfolio.tsx app/page.tsx
git commit -m "feat: add Carousel and Portfolio components"
```

---

### Task 8: Offer (countdown)

**Files:**
- Create: `app/components/Offer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Offer />` (client) — live countdown initialized to `Date.now() + (4d 11h 38m)` in seconds, ticking every 1s via `setInterval`

- [ ] **Step 1: Create app/components/Offer.tsx**

```tsx
'use client'
import { useState, useEffect } from 'react'

export default function Offer() {
  const [time, setTime] = useState({ d: '04', h: '11', m: '38', s: '00' })

  useEffect(() => {
    const end = Date.now() + (4 * 86400 + 11 * 3600 + 38 * 60) * 1000
    function tick() {
      const diff = end - Date.now()
      if (diff <= 0) return
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="offer">
      <div className="container">
        <div className="offer-inner reveal">
          <div className="offer-flag">✦ Oferta especial de lanzamiento · Plazas muy limitadas</div>
          <h2 className="offer-ttl">
            Páginas web <span>premium</span><br />
            a un precio verdaderamente<br />
            <span>económico</span>
          </h2>
          <p className="offer-sub">
            Creemos que todas las empresas merecen una presencia digital de élite. Por eso ofrecemos desarrollo de primer nivel a precios que te harán dudar de que sea posible. Y lo es.
          </p>
          <div className="offer-checks">
            <div className="offer-check">Diseño exclusivo y personalizado</div>
            <div className="offer-check">Sin costes ocultos</div>
            <div className="offer-check">Entrega en 7 días garantizada</div>
            <div className="offer-check">Soporte incluido el primer mes</div>
            <div className="offer-check">100% profesional, siempre</div>
          </div>
          <div className="offer-urgency">
            <span className="urgency-label">La oferta de lanzamiento caduca en:</span>
            <div className="countdown-boxes">
              <div className="cdbox"><span className="cd-num">{time.d}</span><span className="cd-lbl">días</span></div>
              <div className="cdbox"><span className="cd-num">{time.h}</span><span className="cd-lbl">horas</span></div>
              <div className="cdbox"><span className="cd-num">{time.m}</span><span className="cd-lbl">min</span></div>
              <div className="cdbox"><span className="cd-num">{time.s}</span><span className="cd-lbl">seg</span></div>
            </div>
          </div>
          <a href="#contact" className="btn-gold" style={{ fontSize: '15.5px', padding: '16px 52px' }}>
            Solicitar presupuesto gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Carousel />
      <Portfolio />
      <Offer />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 3: Verify countdown ticks**

Run: `npm run dev`. Scroll to the Offer section — the `seg` (seconds) counter should decrement every second.

- [ ] **Step 4: Commit**

```bash
git add app/components/Offer.tsx app/page.tsx
git commit -m "feat: add Offer component with live countdown"
```

---

### Task 9: Testimonials + FAQ

**Files:**
- Create: `app/components/Testimonials.tsx`
- Create: `app/components/FAQ.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Testimonials />` (server); `<FAQ />` (client) — `openIndex: number | null` state, one item open at a time

- [ ] **Step 1: Create app/components/Testimonials.tsx**

```tsx
export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="test-hd reveal">
          <p className="eyebrow">Testimonios</p>
          <h2 className="sec-title">Lo que dicen nuestros <span className="gold-italic">clientes</span></h2>
        </div>
        <div className="test-grid">
          <div className="test-card reveal">
            <div className="test-stars">★★★★★</div>
            <div className="test-quote">&ldquo;</div>
            <p className="test-text">Contraté a Véloria para mi clínica dental y el resultado superó con creces todas mis expectativas. La web quedó preciosa y el asistente virtual atiende a mis pacientes a cualquier hora. Desde el primer mes aumenté un 40% las citas.</p>
            <div className="test-author">
              <div className="avatar">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" fill="#1E1B38"/>
                  <circle cx="25" cy="20" r="9" fill="#C9A96E" opacity="0.75"/>
                  <ellipse cx="25" cy="44" rx="16" ry="11" fill="#C9A96E" opacity="0.45"/>
                </svg>
              </div>
              <div>
                <div className="author-name">María García</div>
                <div className="author-role">Directora · Clínica Dental García</div>
              </div>
            </div>
          </div>
          <div className="test-card reveal">
            <div className="test-stars">★★★★★</div>
            <div className="test-quote">&ldquo;</div>
            <p className="test-text">Necesitaba una web profesional para mi restaurante y me preocupaba el precio. Véloria me ofreció algo premium que jamás habría imaginado poder pagar. Ahora el asistente gestiona reservas 24/7 sin que yo haga nada. Increíble.</p>
            <div className="test-author">
              <div className="avatar">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" fill="#1A1830"/>
                  <circle cx="25" cy="19" r="9" fill="#A88050" opacity="0.75"/>
                  <ellipse cx="25" cy="44" rx="16" ry="11" fill="#A88050" opacity="0.45"/>
                </svg>
              </div>
              <div>
                <div className="author-name">Carlos Martínez</div>
                <div className="author-role">Fundador · Restaurante El Rincón</div>
              </div>
            </div>
          </div>
          <div className="test-card reveal">
            <div className="test-stars">★★★★★</div>
            <div className="test-quote">&ldquo;</div>
            <p className="test-text">Mi academia tenía una web anticuada que no convertía. Véloria la transformó completamente en menos de una semana. Ahora los alumnos se matriculan directamente desde la web y el asistente resuelve sus dudas al instante.</p>
            <div className="test-author">
              <div className="avatar">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" fill="#1C1830"/>
                  <circle cx="25" cy="20" r="9" fill="#D4B080" opacity="0.75"/>
                  <ellipse cx="25" cy="44" rx="16" ry="11" fill="#D4B080" opacity="0.45"/>
                </svg>
              </div>
              <div>
                <div className="author-name">Ana López</div>
                <div className="author-role">Directora · Academia Formativa López</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create app/components/FAQ.tsx**

```tsx
'use client'
import { useState } from 'react'

const items = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi web?',
    a: 'Entre 5 y 7 días laborables desde la recepción del pago y los materiales necesarios. Si no tienes materiales, también te ayudamos a crearlos sin coste adicional.',
  },
  {
    q: '¿Puedo ver el diseño antes de que esté terminado?',
    a: 'Sí. Compartimos avances y borradores durante el proceso para que puedas dar tu aprobación en cada etapa. Incluimos revisiones hasta que estés al 100% satisfecho.',
  },
  {
    q: '¿El recepcionista virtual suena como un robot?',
    a: 'No. Nuestros asistentes se entrenan específicamente con la voz, tono y personalidad de tu marca. Responden de forma completamente natural, como lo haría un miembro de tu equipo.',
  },
  {
    q: '¿Cuánto cuesta una web o el recepcionista virtual?',
    a: 'Los precios se adaptan a cada proyecto y siempre son más asequibles de lo que esperas. Solicita tu presupuesto gratuito sin compromiso y te sorprenderemos con lo que es posible.',
  },
  {
    q: '¿Qué pasa si no quedo satisfecho con el resultado?',
    a: 'No paramos hasta que estés al 100% satisfecho. Incluimos rondas de revisión en todos nuestros proyectos. Nuestro objetivo es que el resultado supere tus expectativas.',
  },
  {
    q: '¿Necesito conocimientos técnicos para gestionar mi web?',
    a: 'No. Te entregamos tu web lista para usar, con un panel de gestión sencillo e intuitivo. Incluimos formación básica para que puedas actualizarla tú mismo cuando lo necesites.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-hd reveal">
          <p className="eyebrow">Preguntas Frecuentes</p>
          <h2 className="sec-title">Todo lo que necesitas <span className="gold-italic">saber</span></h2>
          <p className="sec-body">Resolvemos tus dudas antes de que las tengas. Transparencia total, sin letra pequeña.</p>
        </div>
        <div className="faq-list reveal">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Carousel />
      <Portfolio />
      <Offer />
      <Testimonials />
      <FAQ />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 4: Verify FAQ accordion**

Run: `npm run dev`. Click a FAQ question — it should expand with `max-height` transition. Click another — the first should close, the new one opens. Click the same again — it closes.

- [ ] **Step 5: Commit**

```bash
git add app/components/Testimonials.tsx app/components/FAQ.tsx app/page.tsx
git commit -m "feat: add Testimonials and FAQ components"
```

---

### Task 10: Contact + Footer + Final verification

**Files:**
- Create: `app/components/Contact.tsx`
- Create: `app/components/Footer.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `<Contact />` (client) — form with validation, 1.4s simulated send delay, green `.sent` state; `<Footer />` (server)

- [ ] **Step 1: Create app/components/Contact.tsx**

```tsx
'use client'
import { useRef, useState } from 'react'

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const msgRef = useRef<HTMLTextAreaElement>(null)
  const [btnText, setBtnText] = useState('Solicitar presupuesto gratuito →')
  const [btnStyle, setBtnStyle] = useState<React.CSSProperties>({})
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    const name = nameRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const msg = msgRef.current?.value.trim() ?? ''
    if (!name || !email || !msg) {
      setBtnText('Rellena los campos obligatorios')
      setBtnStyle({ background: '#6B2F2F', color: '#fff' })
      setTimeout(() => { setBtnText('Solicitar presupuesto gratuito →'); setBtnStyle({}) }, 2200)
      return
    }
    setBtnText('Enviando...')
    setBtnStyle({ opacity: 0.65 })
    setTimeout(() => {
      setBtnText('Mensaje enviado - Te contactamos muy pronto')
      setBtnStyle({})
      setSent(true)
    }, 1400)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-urgency-pill">
              <span className="contact-urgency-dot"></span>
              Solo 3 plazas disponibles este mes
            </div>
            <p className="eyebrow">Contacto</p>
            <h2 className="sec-title">Hablemos de <span className="gold-italic">tu proyecto</span></h2>
            <p className="sec-body">Cuéntanos qué necesitas y te preparamos una propuesta sin compromiso. Sin presiones, sin letra pequeña.</p>
            <a href="mailto:hola@veloriaonline.es" className="contact-email-link">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect x="0.9" y="0.9" width="16.2" height="12.2" rx="1.8" stroke="#C9A96E" strokeWidth="1.4"/>
                <path d="M1 2.5L9 8.5L17 2.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              hola@veloriaonline.es
            </a>
            <div className="promises">
              <div className="promise"><div className="p-dot"></div>Respuesta en menos de 24 horas</div>
              <div className="promise"><div className="p-dot"></div>Presupuesto sin coste ni compromiso</div>
              <div className="promise"><div className="p-dot"></div>Asesoría personalizada y honesta</div>
              <div className="promise"><div className="p-dot"></div>Sin letra pequeña ni sorpresas</div>
            </div>
          </div>
          <div className="cform reveal">
            <div className="fg">
              <label className="flabel" htmlFor="f-name">Nombre</label>
              <input ref={nameRef} type="text" className="finput" id="f-name" placeholder="Tu nombre completo" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-email">Email</label>
              <input ref={emailRef} type="email" className="finput" id="f-email" placeholder="tu@email.com" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-company">
                Empresa{' '}
                <span style={{ opacity: 0.5, fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>
                  (opcional)
                </span>
              </label>
              <input type="text" className="finput" id="f-company" placeholder="Nombre de tu empresa" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-msg">Mensaje</label>
              <textarea ref={msgRef} className="ftextarea" id="f-msg" placeholder="Cuéntanos qué necesitas para tu negocio..."></textarea>
            </div>
            <button
              className={`fsubmit${sent ? ' sent' : ''}`}
              onClick={handleSubmit}
              style={btnStyle}
            >
              {btnText}
            </button>
            <p className="form-note">⏳ Solo quedan 3 plazas disponibles a precio de lanzamiento este mes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create app/components/Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
              <path d="M11.5 6L18 3L24.5 6L28 13H8L11.5 6Z" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.07)" strokeLinejoin="round"/>
              <path d="M8 13L18 33L28 13" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.04)" strokeLinejoin="round"/>
              <line x1="8" y1="13" x2="28" y2="13" stroke="#C9A96E" strokeWidth="0.8"/>
              <circle cx="18" cy="13" r="1.5" fill="#C9A96E" opacity="0.9"/>
            </svg>
            <span className="logo-name" style={{ fontSize: '16px', letterSpacing: '3px' }}>VÉLORIA</span>
          </a>
          <ul className="foot-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Clientes</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">© 2025 VÉLORIA · Todos los derechos reservados</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', fontFamily: 'var(--ff-d)' }}>
            Tú te centras en crecer. Nosotros hacemos el resto.
          </span>
          <span className="foot-made">Hecho con IA en España 🇪🇸</span>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Finalize page.tsx**

```tsx
import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Carousel />
      <Portfolio />
      <Offer />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  )
}
```

- [ ] **Step 4: Test form validation**

Run: `npm run dev`. Click submit with empty fields — button should turn red for 2.2s. Fill all required fields and submit — button shows "Enviando..." for 1.4s then turns green.

- [ ] **Step 5: Production build**

Run: `npm run build`
Expected: Build completes with no TypeScript errors. Output shows all routes as static.

- [ ] **Step 6: Verify Vercel readiness**

Confirm `next.config.ts` has no custom `output` field (default is compatible with Vercel). The project deploys by pushing to GitHub and connecting via Vercel dashboard — no additional config needed.

- [ ] **Step 7: Commit**

```bash
git add app/components/Contact.tsx app/components/Footer.tsx app/page.tsx
git commit -m "feat: add Contact and Footer — complete Veloria landing page"
```
