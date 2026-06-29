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

          {/* 1 — Web Clínica Dental */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#F8FAFF"/>
              {/* Nav */}
              <rect x="0" y="0" width="320" height="30" fill="#FFFFFF"/>
              <rect x="0" y="30" width="320" height="0.5" fill="#CBD5E1"/>
              <rect x="12" y="9" width="8" height="12" rx="3" fill="#1D4ED8"/>
              <rect x="24" y="13" width="38" height="5" rx="2" fill="#1E3A5F"/>
              <rect x="140" y="13" width="24" height="5" rx="2" fill="#94A3B8"/>
              <rect x="172" y="13" width="24" height="5" rx="2" fill="#94A3B8"/>
              <rect x="204" y="13" width="24" height="5" rx="2" fill="#94A3B8"/>
              <rect x="262" y="8" width="48" height="14" rx="5" fill="#1D4ED8"/>
              {/* Hero left */}
              <rect x="0" y="30" width="175" height="92" fill="#EFF6FF"/>
              <rect x="12" y="46" width="130" height="11" rx="3" fill="#1E3A5F" opacity="0.9"/>
              <rect x="12" y="61" width="150" height="7" rx="2" fill="#64748B" opacity="0.6"/>
              <rect x="12" y="71" width="120" height="7" rx="2" fill="#64748B" opacity="0.4"/>
              <rect x="12" y="87" width="72" height="17" rx="5" fill="#1D4ED8"/>
              <rect x="90" y="87" width="72" height="17" rx="5" fill="none" stroke="#1D4ED8" strokeWidth="1" strokeOpacity="0.5"/>
              {/* Hero right — image */}
              <rect x="175" y="30" width="145" height="92" fill="#DBEAFE"/>
              <ellipse cx="247" cy="76" rx="46" ry="38" fill="#BFDBFE" opacity="0.75"/>
              <circle cx="247" cy="63" r="19" fill="#93C5FD" opacity="0.7"/>
              <rect x="242" y="56" width="10" height="14" rx="3" fill="#1D4ED8" opacity="0.55"/>
              <rect x="237" y="61" width="20" height="4" rx="2" fill="#1D4ED8" opacity="0.55"/>
              <ellipse cx="247" cy="90" rx="30" ry="8" fill="#3B82F6" opacity="0.12"/>
              {/* Services */}
              <rect x="0" y="122" width="320" height="54" fill="#FFFFFF"/>
              <rect x="0" y="122" width="320" height="0.5" fill="#E2E8F0"/>
              <rect x="12" y="127" width="75" height="7" rx="3" fill="#1E3A5F" opacity="0.8"/>
              <rect x="12" y="138" width="90" height="32" rx="6" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="0.8"/>
              <rect x="116" y="138" width="90" height="32" rx="6" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="0.8"/>
              <rect x="220" y="138" width="90" height="32" rx="6" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="0.8"/>
              <circle cx="28" cy="154" r="6" fill="#1D4ED8" opacity="0.28"/>
              <rect x="38" y="149" width="55" height="5" rx="2" fill="#1E3A5F" opacity="0.7"/>
              <rect x="38" y="157" width="36" height="4" rx="2" fill="#64748B" opacity="0.5"/>
              <circle cx="132" cy="154" r="6" fill="#1D4ED8" opacity="0.28"/>
              <rect x="142" y="149" width="55" height="5" rx="2" fill="#1E3A5F" opacity="0.7"/>
              <rect x="142" y="157" width="36" height="4" rx="2" fill="#64748B" opacity="0.5"/>
              <circle cx="236" cy="154" r="6" fill="#1D4ED8" opacity="0.28"/>
              <rect x="246" y="149" width="55" height="5" rx="2" fill="#1E3A5F" opacity="0.7"/>
              <rect x="246" y="157" width="36" height="4" rx="2" fill="#64748B" opacity="0.5"/>
              {/* Footer */}
              <rect x="0" y="176" width="320" height="24" fill="#1E3A5F"/>
              <rect x="12" y="185" width="48" height="4" rx="2" fill="#93C5FD" opacity="0.4"/>
              <rect x="200" y="185" width="24" height="4" rx="2" fill="#93C5FD" opacity="0.25"/>
              <rect x="232" y="185" width="24" height="4" rx="2" fill="#93C5FD" opacity="0.25"/>
              <rect x="264" y="185" width="44" height="4" rx="2" fill="#93C5FD" opacity="0.25"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Web Clínica Dental</span></div>
          </div>

          {/* 2 — Recepcionista Virtual */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#07071A"/>
              {/* Phone frame */}
              <rect x="100" y="6" width="120" height="188" rx="18" fill="#10102A" stroke="#252550" strokeWidth="1.5"/>
              {/* Notch */}
              <rect x="132" y="10" width="56" height="14" rx="7" fill="#07071A"/>
              {/* Chat header */}
              <rect x="100" y="28" width="120" height="28" fill="#18183C"/>
              <rect x="100" y="56" width="120" height="0.5" fill="#252550"/>
              <circle cx="120" cy="42" r="9" fill="#4C1D95"/>
              <circle cx="120" cy="42" r="6" fill="#7C3AED"/>
              <circle cx="126" cy="36" r="3.5" fill="#22C55E"/>
              <rect x="133" y="38" width="48" height="5" rx="2" fill="#F1F5F9"/>
              <rect x="133" y="46" width="32" height="4" rx="2" fill="#22C55E" opacity="0.8"/>
              {/* Incoming 1 */}
              <rect x="106" y="62" width="76" height="20" rx="10" fill="#1E1E3C" stroke="#252550" strokeWidth="0.5"/>
              <rect x="113" y="68" width="62" height="4" rx="2" fill="#94A3B8" opacity="0.8"/>
              <rect x="113" y="74" width="44" height="4" rx="2" fill="#94A3B8" opacity="0.5"/>
              {/* Outgoing 1 */}
              <rect x="138" y="88" width="76" height="20" rx="10" fill="#6D28D9" opacity="0.9"/>
              <rect x="145" y="94" width="62" height="4" rx="2" fill="#EDE9FE" opacity="0.9"/>
              <rect x="145" y="100" width="44" height="4" rx="2" fill="#EDE9FE" opacity="0.6"/>
              <circle cx="214" cy="103" r="2.5" fill="#22C55E" opacity="0.8"/>
              <circle cx="209" cy="103" r="2.5" fill="#22C55E" opacity="0.8"/>
              {/* Incoming 2 */}
              <rect x="106" y="114" width="90" height="28" rx="10" fill="#1E1E3C" stroke="#252550" strokeWidth="0.5"/>
              <rect x="113" y="120" width="77" height="4" rx="2" fill="#94A3B8" opacity="0.8"/>
              <rect x="113" y="127" width="64" height="4" rx="2" fill="#94A3B8" opacity="0.6"/>
              <rect x="113" y="134" width="48" height="4" rx="2" fill="#94A3B8" opacity="0.4"/>
              {/* Quick reply chips */}
              <rect x="106" y="148" width="48" height="12" rx="6" fill="none" stroke="#7C3AED" strokeWidth="0.8"/>
              <rect x="160" y="148" width="50" height="12" rx="6" fill="none" stroke="#7C3AED" strokeWidth="0.8"/>
              <rect x="110" y="152" width="40" height="4" rx="2" fill="#7C3AED" opacity="0.7"/>
              <rect x="164" y="152" width="42" height="4" rx="2" fill="#7C3AED" opacity="0.7"/>
              {/* Input bar */}
              <rect x="104" y="166" width="112" height="20" rx="10" fill="#1A1A38" stroke="#252550" strokeWidth="0.8"/>
              <rect x="113" y="173" width="70" height="4" rx="2" fill="#3A3A62" opacity="0.7"/>
              <circle cx="208" cy="176" r="8" fill="#7C3AED"/>
              {/* Home indicator */}
              <rect x="140" y="188" width="40" height="3" rx="1.5" fill="#252550"/>
              {/* Background ambient orbs */}
              <circle cx="55" cy="76" r="28" fill="none" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4"/>
              <circle cx="268" cy="130" r="20" fill="none" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="4 4"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Recepcionista Virtual</span></div>
          </div>

          {/* 3 — Tienda Online */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#FAFAFA"/>
              {/* Nav */}
              <rect x="0" y="0" width="320" height="28" fill="#FFFFFF"/>
              <rect x="0" y="28" width="320" height="0.5" fill="#E2E8F0"/>
              <rect x="12" y="9" width="38" height="10" rx="3" fill="#0F172A"/>
              {/* Search */}
              <rect x="80" y="8" width="160" height="12" rx="6" fill="#F1F5F9"/>
              <rect x="90" y="12" width="5" height="5" rx="1" fill="#94A3B8" opacity="0.6"/>
              <rect x="100" y="13" width="80" height="4" rx="2" fill="#CBD5E1" opacity="0.7"/>
              {/* Cart + user */}
              <rect x="260" y="8" width="16" height="12" rx="3" fill="none" stroke="#0F172A" strokeWidth="1.2"/>
              <circle cx="263" cy="8" r="3.5" fill="#EF4444"/>
              <rect x="282" y="9" width="26" height="10" rx="5" fill="#F1F5F9"/>
              {/* Filter bar */}
              <rect x="0" y="29" width="320" height="18" fill="#F8FAFC"/>
              <rect x="12" y="33" width="30" height="10" rx="5" fill="#0F172A"/>
              <rect x="48" y="33" width="38" height="10" rx="5" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5"/>
              <rect x="92" y="33" width="44" height="10" rx="5" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5"/>
              <rect x="142" y="33" width="38" height="10" rx="5" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5"/>
              <rect x="186" y="33" width="50" height="10" rx="5" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="0.5"/>
              {/* Product grid row 1 */}
              <rect x="12" y="53" width="67" height="65" rx="8" fill="#F1F5F9"/>
              <rect x="85" y="53" width="67" height="65" rx="8" fill="#FEF9C3"/>
              <rect x="158" y="53" width="67" height="65" rx="8" fill="#FCE7F3"/>
              <rect x="231" y="53" width="77" height="65" rx="8" fill="#ECFDF5"/>
              <ellipse cx="45" cy="74" rx="23" ry="18" fill="#CBD5E1" opacity="0.7"/>
              <ellipse cx="118" cy="74" rx="23" ry="18" fill="#FDE68A" opacity="0.7"/>
              <ellipse cx="191" cy="74" rx="23" ry="18" fill="#FBCFE8" opacity="0.7"/>
              <ellipse cx="269" cy="74" rx="26" ry="18" fill="#A7F3D0" opacity="0.7"/>
              <rect x="14" y="101" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="14" y="109" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="87" y="101" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="87" y="109" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="160" y="101" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="160" y="109" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="233" y="101" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="233" y="109" width="32" height="6" rx="2" fill="#0F172A"/>
              {/* Product grid row 2 */}
              <rect x="12" y="124" width="67" height="65" rx="8" fill="#EDE9FE"/>
              <rect x="85" y="124" width="67" height="65" rx="8" fill="#FEF2F2"/>
              <rect x="158" y="124" width="67" height="65" rx="8" fill="#FFFBEB"/>
              <rect x="231" y="124" width="77" height="65" rx="8" fill="#F0F9FF"/>
              <ellipse cx="45" cy="145" rx="23" ry="18" fill="#C4B5FD" opacity="0.7"/>
              <ellipse cx="118" cy="145" rx="23" ry="18" fill="#FECACA" opacity="0.7"/>
              <ellipse cx="191" cy="145" rx="23" ry="18" fill="#FDE68A" opacity="0.65"/>
              <ellipse cx="269" cy="145" rx="26" ry="18" fill="#BAE6FD" opacity="0.7"/>
              <rect x="14" y="172" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="14" y="180" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="87" y="172" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="87" y="180" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="160" y="172" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="160" y="180" width="32" height="6" rx="2" fill="#0F172A"/>
              <rect x="233" y="172" width="55" height="5" rx="2" fill="#0F172A" opacity="0.65"/>
              <rect x="233" y="180" width="32" height="6" rx="2" fill="#0F172A"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Tienda Online</span></div>
          </div>

          {/* 4 — Landing Page */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lp4bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#110820"/>
                  <stop offset="100%" stopColor="#06040E"/>
                </linearGradient>
                <radialGradient id="lp4glow" cx="50%" cy="42%" r="52%" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.22"/>
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <rect width="320" height="200" fill="url(#lp4bg)"/>
              <rect width="320" height="200" fill="url(#lp4glow)"/>
              {/* Nav */}
              <rect x="0" y="0" width="320" height="28" fill="rgba(0,0,0,0.35)"/>
              <rect x="14" y="9" width="44" height="10" rx="3" fill="#C9A96E" opacity="0.85"/>
              <rect x="158" y="11" width="26" height="6" rx="2" fill="#94A3B8" opacity="0.6"/>
              <rect x="192" y="11" width="26" height="6" rx="2" fill="#94A3B8" opacity="0.6"/>
              <rect x="226" y="11" width="26" height="6" rx="2" fill="#94A3B8" opacity="0.6"/>
              <rect x="268" y="8" width="44" height="12" rx="5" fill="#7C3AED"/>
              {/* Badge */}
              <rect x="86" y="38" width="148" height="16" rx="8" fill="rgba(124,58,237,0.13)" stroke="#7C3AED" strokeWidth="0.5" strokeOpacity="0.38"/>
              <rect x="120" y="44" width="80" height="4" rx="2" fill="#C4B5FD" opacity="0.7"/>
              {/* Headline */}
              <rect x="22" y="62" width="276" height="15" rx="4" fill="#F1F5F9" opacity="0.95"/>
              <rect x="48" y="81" width="224" height="13" rx="4" fill="#C9A96E" opacity="0.82"/>
              {/* Subtext */}
              <rect x="62" y="103" width="196" height="6" rx="3" fill="#94A3B8" opacity="0.55"/>
              <rect x="78" y="112" width="164" height="6" rx="3" fill="#94A3B8" opacity="0.4"/>
              {/* CTA buttons */}
              <rect x="72" y="128" width="88" height="20" rx="8" fill="#7C3AED"/>
              <rect x="168" y="128" width="88" height="20" rx="8" fill="none" stroke="#7C3AED" strokeWidth="1" strokeOpacity="0.65"/>
              <rect x="80" y="134" width="72" height="6" rx="3" fill="#EDE9FE" opacity="0.9"/>
              <rect x="176" y="134" width="72" height="6" rx="3" fill="#C4B5FD" opacity="0.7"/>
              {/* Social proof bar */}
              <rect x="88" y="158" width="144" height="12" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
              <circle cx="104" cy="164" r="6" fill="#E2E8F0"/>
              <circle cx="113" cy="164" r="6" fill="#BFDBFE" opacity="0.9"/>
              <circle cx="122" cy="164" r="6" fill="#C4B5FD" opacity="0.9"/>
              <circle cx="131" cy="164" r="6" fill="#A7F3D0" opacity="0.9"/>
              <rect x="140" y="162" width="78" height="4" rx="2" fill="#94A3B8" opacity="0.6"/>
              {/* Scroll dots */}
              <circle cx="110" cy="186" r="3.5" fill="#7C3AED" opacity="0.7"/>
              <circle cx="122" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="133" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="144" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="155" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="166" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="177" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="188" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="199" cy="186" r="3" fill="#64748B" opacity="0.35"/>
              <circle cx="210" cy="186" r="3" fill="#64748B" opacity="0.35"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Landing Page</span></div>
          </div>

          {/* 5 — Panel IA / Dashboard */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="320" height="200" fill="#0A0A18"/>
              {/* Sidebar */}
              <rect x="0" y="0" width="56" height="200" fill="#060610"/>
              <rect x="56" y="0" width="0.5" height="200" fill="#1E1E38"/>
              {/* Logo area */}
              <rect x="8" y="10" width="40" height="12" rx="3" fill="#1A1A2E"/>
              <rect x="13" y="13" width="20" height="6" rx="2" fill="#C9A96E" opacity="0.6"/>
              {/* Nav items */}
              <rect x="8" y="32" width="40" height="11" rx="3" fill="rgba(201,169,110,0.15)"/>
              <rect x="14" y="35" width="28" height="5" rx="2" fill="#C9A96E" opacity="0.75"/>
              <rect x="8" y="48" width="40" height="11" rx="3" fill="#111122"/>
              <rect x="14" y="51" width="28" height="5" rx="2" fill="#2D2D50" opacity="0.9"/>
              <rect x="8" y="64" width="40" height="11" rx="3" fill="#111122"/>
              <rect x="14" y="67" width="28" height="5" rx="2" fill="#2D2D50" opacity="0.9"/>
              <rect x="8" y="80" width="40" height="11" rx="3" fill="#111122"/>
              <rect x="14" y="83" width="28" height="5" rx="2" fill="#2D2D50" opacity="0.9"/>
              <rect x="8" y="96" width="40" height="11" rx="3" fill="#111122"/>
              <rect x="14" y="99" width="28" height="5" rx="2" fill="#2D2D50" opacity="0.9"/>
              {/* Top bar */}
              <rect x="64" y="4" width="155" height="8" rx="3" fill="#1A1A2E"/>
              <rect x="256" y="2" width="56" height="12" rx="4" fill="#C9A96E" opacity="0.6"/>
              {/* KPI cards */}
              <rect x="64" y="22" width="58" height="38" rx="6" fill="#111226"/>
              <rect x="128" y="22" width="58" height="38" rx="6" fill="#111226"/>
              <rect x="192" y="22" width="58" height="38" rx="6" fill="#111226"/>
              <rect x="256" y="22" width="56" height="38" rx="6" fill="#111226"/>
              <rect x="70" y="28" width="40" height="9" rx="3" fill="#C9A96E" opacity="0.7"/>
              <rect x="70" y="41" width="30" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="134" y="28" width="38" height="9" rx="3" fill="#2DC97E" opacity="0.7"/>
              <rect x="134" y="41" width="30" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="198" y="28" width="36" height="9" rx="3" fill="#7DD3FC" opacity="0.7"/>
              <rect x="198" y="41" width="30" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="262" y="28" width="38" height="9" rx="3" fill="#F0EFF8" opacity="0.7"/>
              <rect x="262" y="41" width="28" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              {/* Main chart */}
              <rect x="64" y="68" width="185" height="86" rx="6" fill="#111226"/>
              <rect x="70" y="74" width="60" height="6" rx="2" fill="#F0EFF8" opacity="0.65"/>
              {/* Bar chart */}
              <rect x="72" y="118" width="13" height="24" rx="2" fill="#C9A96E" opacity="0.3"/>
              <rect x="89" y="106" width="13" height="36" rx="2" fill="#C9A96E" opacity="0.45"/>
              <rect x="106" y="112" width="13" height="30" rx="2" fill="#C9A96E" opacity="0.38"/>
              <rect x="123" y="96" width="13" height="46" rx="2" fill="#C9A96E" opacity="0.62"/>
              <rect x="140" y="90" width="13" height="52" rx="2" fill="#C9A96E" opacity="0.75"/>
              <rect x="157" y="99" width="13" height="43" rx="2" fill="#C9A96E" opacity="0.52"/>
              <rect x="174" y="84" width="13" height="58" rx="2" fill="#C9A96E" opacity="0.92"/>
              <rect x="191" y="91" width="13" height="51" rx="2" fill="#C9A96E" opacity="0.68"/>
              <rect x="208" y="103" width="13" height="39" rx="2" fill="#C9A96E" opacity="0.45"/>
              {/* Line overlay */}
              <polyline points="78,118 95,106 112,112 129,92 146,86 163,97 180,80 197,87 214,99" fill="none" stroke="#7DD3FC" strokeWidth="1.3" strokeOpacity="0.5"/>
              {/* Right panel */}
              <rect x="256" y="68" width="56" height="86" rx="6" fill="#111226"/>
              <rect x="262" y="74" width="44" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="262" y="84" width="40" height="4" rx="2" fill="#1E1E38"/>
              <rect x="262" y="92" width="36" height="4" rx="2" fill="#C9A96E" opacity="0.45"/>
              <rect x="262" y="100" width="44" height="4" rx="2" fill="#1E1E38"/>
              <rect x="262" y="108" width="32" height="4" rx="2" fill="#1E1E38"/>
              <rect x="262" y="116" width="44" height="10" rx="3" fill="#C9A96E" opacity="0.55"/>
              <rect x="262" y="130" width="36" height="4" rx="2" fill="#1E1E38"/>
              <rect x="262" y="138" width="44" height="4" rx="2" fill="#2DC97E" opacity="0.35"/>
              {/* Data table */}
              <rect x="64" y="162" width="248" height="34" rx="6" fill="#111226"/>
              <rect x="70" y="168" width="55" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="150" y="168" width="44" height="5" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="218" y="168" width="55" height="5" rx="2" fill="#2DC97E" opacity="0.5"/>
              <rect x="294" y="168" width="10" height="5" rx="2" fill="#C9A96E" opacity="0.5"/>
              <rect x="70" y="177" width="65" height="4" rx="2" fill="#1E1E38"/>
              <rect x="150" y="177" width="50" height="4" rx="2" fill="#1E1E38"/>
              <rect x="218" y="177" width="60" height="4" rx="2" fill="#1E1E38"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Panel IA / Dashboard</span></div>
          </div>

          {/* 6 — Web Corporativa */}
          <div className="port-card reveal">
            <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="corp6bg" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0D0D22"/>
                  <stop offset="100%" stopColor="#07070F"/>
                </linearGradient>
              </defs>
              <rect width="320" height="200" fill="url(#corp6bg)"/>
              {/* Nav */}
              <rect x="0" y="0" width="320" height="30" fill="#09091A"/>
              <rect x="0" y="30" width="320" height="0.5" fill="rgba(201,169,110,0.12)"/>
              <rect x="16" y="10" width="36" height="10" rx="2" fill="#C9A96E" opacity="0.85"/>
              <rect x="128" y="12" width="26" height="6" rx="2" fill="#2D2D50"/>
              <rect x="162" y="12" width="26" height="6" rx="2" fill="#2D2D50"/>
              <rect x="196" y="12" width="26" height="6" rx="2" fill="#2D2D50"/>
              <rect x="268" y="9" width="40" height="12" rx="4" fill="none" stroke="#C9A96E" strokeWidth="1" strokeOpacity="0.6"/>
              {/* Hero — left text half */}
              <rect x="0" y="30" width="180" height="90" fill="#0C0C1E"/>
              <rect x="16" y="48" width="130" height="12" rx="3" fill="#F0EFF8" opacity="0.9"/>
              <rect x="16" y="64" width="150" height="7" rx="2" fill="#F0EFF8" opacity="0.65"/>
              <rect x="16" y="74" width="120" height="7" rx="2" fill="#7A7A9E" opacity="0.5"/>
              <rect x="16" y="90" width="64" height="16" rx="4" fill="#C9A96E"/>
              <rect x="86" y="90" width="64" height="16" rx="4" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.5"/>
              {/* Hero — right visual */}
              <rect x="180" y="30" width="140" height="90" fill="#10101E"/>
              <circle cx="250" cy="75" r="36" fill="none" stroke="#C9A96E" strokeWidth="0.6" strokeOpacity="0.14"/>
              <circle cx="250" cy="75" r="24" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.2"/>
              <polygon points="250,55 268,83 232,83" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeOpacity="0.4"/>
              <circle cx="250" cy="75" r="5" fill="#C9A96E" opacity="0.55"/>
              {/* Services strip */}
              <rect x="0" y="120" width="320" height="1" fill="rgba(201,169,110,0.1)"/>
              <rect x="0" y="121" width="320" height="44" fill="#0A0A18"/>
              <rect x="16" y="130" width="64" height="26" rx="5" fill="#111226"/>
              <rect x="90" y="130" width="64" height="26" rx="5" fill="#111226"/>
              <rect x="164" y="130" width="64" height="26" rx="5" fill="#111226"/>
              <rect x="238" y="130" width="66" height="26" rx="5" fill="#111226"/>
              <circle cx="30" cy="143" r="6" fill="#C9A96E" opacity="0.22"/>
              <rect x="42" y="139" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="42" y="147" width="22" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <circle cx="104" cy="143" r="6" fill="#C9A96E" opacity="0.22"/>
              <rect x="116" y="139" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="116" y="147" width="22" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <circle cx="178" cy="143" r="6" fill="#C9A96E" opacity="0.22"/>
              <rect x="190" y="139" width="30" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="190" y="147" width="22" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              <circle cx="252" cy="143" r="6" fill="#C9A96E" opacity="0.22"/>
              <rect x="264" y="139" width="32" height="5" rx="2" fill="#F0EFF8" opacity="0.6"/>
              <rect x="264" y="147" width="22" height="4" rx="2" fill="#7A7A9E" opacity="0.4"/>
              {/* Footer */}
              <rect x="0" y="165" width="320" height="35" fill="#07070F"/>
              <rect x="0" y="165" width="320" height="0.5" fill="rgba(201,169,110,0.08)"/>
              <rect x="16" y="175" width="38" height="8" rx="2" fill="#C9A96E" opacity="0.6"/>
              <rect x="200" y="175" width="24" height="5" rx="2" fill="#2D2D50"/>
              <rect x="232" y="175" width="24" height="5" rx="2" fill="#2D2D50"/>
              <rect x="264" y="175" width="24" height="5" rx="2" fill="#2D2D50"/>
              <rect x="16" y="188" width="120" height="4" rx="2" fill="#1A1A2E"/>
            </svg>
            <div className="port-overlay"><span className="port-cat-tag">Web Corporativa</span></div>
          </div>

        </div>
      </div>
    </section>
  )
}
