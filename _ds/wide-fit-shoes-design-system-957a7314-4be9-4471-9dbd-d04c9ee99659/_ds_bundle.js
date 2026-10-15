/* @ds-bundle: {"format":4,"namespace":"WideFitShoesDesignSystem_957a73","components":[{"name":"AnnouncementBar","sourcePath":"ui_kits/website/CollectionGrid.jsx"},{"name":"CategoryNav","sourcePath":"ui_kits/website/CollectionGrid.jsx"},{"name":"CollectionGrid","sourcePath":"ui_kits/website/CollectionGrid.jsx"},{"name":"PromoSection","sourcePath":"ui_kits/website/CollectionGrid.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"Icon","sourcePath":"ui_kits/website/Icon.jsx"},{"name":"Nav","sourcePath":"ui_kits/website/Nav.jsx"},{"name":"ProductCard","sourcePath":"ui_kits/website/ProductCard.jsx"}],"sourceHashes":{"campaign/atoms.jsx":"506a5abc49b5","campaign/concept-a-landing.jsx":"edd2f838c93e","design-canvas.jsx":"7e5b5e30b46d","ios-frame.jsx":"24642b887be3","preview/tweaks-panel.jsx":"d259e3a86f73","tweaks-panel.jsx":"a1107c630a56","ui_kits/website/CollectionGrid.jsx":"0a8c25fcf064","ui_kits/website/Footer.jsx":"2aeb70d943d2","ui_kits/website/Hero.jsx":"de0143b2cc7c","ui_kits/website/Icon.jsx":"4f7c57a31702","ui_kits/website/Nav.jsx":"1ec74890f1ee","ui_kits/website/ProductCard.jsx":"d5cb648ae076","ui_kits/website/design-canvas.jsx":"7e5b5e30b46d","ui_kits/website/tweaks-panel.jsx":"ea982af775f0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WideFitShoesDesignSystem_957a73 = window.WideFitShoesDesignSystem_957a73 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// campaign/atoms.jsx
try { (() => {
// Shared atoms for the World Cup campaign concepts.
// Logo, Stars, KickoffMark, FixtureRow, etc.

const F_UI = "'Hanken Grotesk', sans-serif";
const F_DISP = "'Playfair Display', serif";
const F_LABEL = "'DM Sans', sans-serif";

// Brand palette (from /colors_and_type.css)
const NAVY = '#1a2740';
const NAVY_DK = '#0d1520';
const CREAM = '#f4f1ea';
const PAPER = '#ece5d3'; // warmer "programme paper"
const PAPER_DK = '#1a1815'; // bg for B's dark variants
const RED = '#cf1b2b'; // brand error / FA red
const GREEN = '#3b7a45'; // forest brand green
const BONE = '#fffcf5';
const INK = '#0e0e0e';

// Hero photography (uploaded by client)
const HERO_WIDE = 'assets/hero-wide.jpg'; // 1440x567
const HERO_PORTRAIT = 'assets/hero-portrait.jpg'; // 375x512

function Logo({
  invert = false,
  height = 28
}) {
  // Source PNG aspect 842:490
  const width = Math.round(height * (842 / 490));
  return /*#__PURE__*/React.createElement("img", {
    src: invert ? 'assets/logos/wfs-logo-white.png' : 'assets/logos/wfs-logo-black.png',
    width: width,
    height: height,
    alt: "Wide Fit Shoes",
    style: {
      width,
      height,
      display: 'block',
      flexShrink: 0,
      objectFit: 'contain'
    }
  });
}
function Stars({
  size = 12,
  color = '#00b67a',
  n = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: size,
      height: size,
      background: color,
      borderRadius: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size * 0.66,
    height: size * 0.66,
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
  })))));
}

// Small rule with circle in the middle — used as a section break
function CenterRule({
  color = 'rgba(0,0,0,0.3)',
  dot = true,
  width = 80
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 1,
      background: color
    }
  }), dot && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 1,
      background: color
    }
  }));
}

// England flag chip (used as a tiny accent — not as the primary visual,
// since FIFA / FA usage rules are strict, and the brief is "quietly stylish")
function FlagChip({
  size = 12
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: size * 1.5,
      height: size,
      position: 'relative',
      background: '#fff',
      boxShadow: '0 0 0 0.5px rgba(0,0,0,0.18)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '45%',
      height: '10%',
      background: RED
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '45%',
      width: '10%',
      background: RED
    }
  }));
}

// Width chips — E / 2E / 3E / 4E / 6E
function WidthRow({
  dark = false,
  size = 'md',
  items = ['E', '2E', '3E', '4E', '6E']
}) {
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: sm ? 4 : 6,
      flexWrap: 'wrap'
    }
  }, items.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      fontFamily: F_LABEL,
      fontSize: sm ? 10 : 12,
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: dark ? 'rgba(255,255,255,0.85)' : NAVY,
      background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,39,64,0.06)',
      border: dark ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(26,39,64,0.18)',
      padding: sm ? '3px 8px' : '5px 10px'
    }
  }, w)));
}

// Make atoms global so other Babel scripts can use them
Object.assign(window, {
  F_UI,
  F_DISP,
  F_LABEL,
  NAVY,
  NAVY_DK,
  CREAM,
  PAPER,
  PAPER_DK,
  RED,
  GREEN,
  BONE,
  INK,
  HERO_WIDE,
  HERO_PORTRAIT,
  Logo,
  Stars,
  CenterRule,
  FlagChip,
  WidthRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaign/atoms.jsx", error: String((e && e.message) || e) }); }

// campaign/concept-a-landing.jsx
try { (() => {
// Concept A — "Stadium of Comfort"
// Editorial / quietly stylish. Hero photography led, deep navy + warm cream,
// thin red rule, Playfair display headlines. Reads like a Sunday-supplement
// fashion shoot rather than a betting ad.

const HEADLINE_DEFAULT = 'Watch England in comfort.';

/* ── HEADLINE — pulls from window.__campaignHeadline (tweakable) ── */
function useHeadline() {
  const [h, setH] = React.useState(window.__campaignHeadline || HEADLINE_DEFAULT);
  React.useEffect(() => {
    const onChange = e => setH(e.detail || HEADLINE_DEFAULT);
    window.addEventListener('__campaign_headline', onChange);
    return () => window.removeEventListener('__campaign_headline', onChange);
  }, []);
  return h;
}

/* ── Reusable pieces ── */

function A_KickoffMark({
  light = false,
  big = false
}) {
  const fg = light ? 'rgba(255,255,255,0.95)' : NAVY;
  const muted = light ? 'rgba(255,255,255,0.5)' : 'rgba(26,39,64,0.5)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      color: fg,
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: big ? 11 : 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: muted,
      fontWeight: 600
    }
  }, "Kick-off"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_DISP,
      fontSize: big ? 28 : 20,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, "11 \xB7 vi \xB7 26"));
}
function A_RedThread({
  width = 60
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 2,
      background: RED
    }
  });
}

/* ════════════════════════════════════════════════════════════════
   LANDING PAGE — DESKTOP
═══════════════════════════════════════════════════════════════ */
function A_Landing({
  headline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1440,
      fontFamily: F_UI,
      background: BONE,
      color: NAVY
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      color: 'rgba(255,255,255,0.85)',
      fontSize: 12,
      padding: '10px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "020 8907 1742  \xB7  Wide fit specialists since 1982"), /*#__PURE__*/React.createElement("span", null, "United Kingdom (GBP \xA3)")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid #ececec',
      padding: '20px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  }, ['New In', 'Mens', 'Womens', 'Brands', 'England Edit', 'Sale'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      color: l === 'England Edit' ? RED : NAVY
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      fontSize: 13,
      color: NAVY
    }
  }, /*#__PURE__*/React.createElement("span", null, "Search"), /*#__PURE__*/React.createElement("span", null, "Account"), /*#__PURE__*/React.createElement("span", null, "Bag (0)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 720,
      overflow: 'hidden',
      background: '#dadcd9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO_WIDE,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'left center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(105deg, transparent 35%, rgba(244,241,234,0.0) 55%, rgba(244,241,234,0.65) 85%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 36,
      left: 80,
      fontFamily: F_LABEL,
      fontSize: 11,
      color: 'rgba(14,14,14,0.7)',
      letterSpacing: '0.24em',
      textTransform: 'uppercase'
    }
  }, "England Edit \xB7 Tournament 2026 \xB7 Issue I"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 80,
      top: 110,
      width: 520,
      color: NAVY
    }
  }, /*#__PURE__*/React.createElement(A_RedThread, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 12,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(26,39,64,0.7)',
      marginTop: 14
    }
  }, "Wide Fit Shoes presents"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: F_DISP,
      fontSize: 92,
      fontWeight: 500,
      lineHeight: 0.96,
      letterSpacing: '-0.025em',
      marginTop: 18,
      color: NAVY
    }
  }, headline.split(' ').slice(0, -1).join(' '), ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: RED,
      fontWeight: 500
    }
  }, headline.split(' ').slice(-1)[0])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'rgba(26,39,64,0.78)',
      marginTop: 24,
      maxWidth: 460,
      fontFamily: F_UI
    }
  }, "Ninety minutes is a long time on your feet. The England Edit brings together our most comfortable wide-fit trainers \u2014 built for celebrating, sweating, and pacing the lounge. Widths E to\xA06E."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      color: '#fff',
      padding: '18px 28px',
      fontFamily: F_DISP,
      fontSize: 17,
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  }, "Shop the Edit \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 13,
      color: 'rgba(26,39,64,0.6)'
    }
  }, "Free returns \xA0\xB7\xA0 Free UK delivery over \xA350"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      bottom: 28,
      fontFamily: F_LABEL,
      fontSize: 11,
      color: 'rgba(14,14,14,0.55)',
      letterSpacing: '0.06em'
    }
  }, "Photographed in studio. New Balance 574 in Steel Grey, \xA3109.99."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 36,
      right: 80
    }
  }, /*#__PURE__*/React.createElement(A_KickoffMark, {
    big: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      color: 'rgba(255,255,255,0.85)',
      padding: '14px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: F_LABEL,
      fontSize: 13,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 20
    }
  }, "Kick-off June 11"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Widths E \u2013 6E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Free UK delivery over \xA350"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "500+ wide fit styles"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Watch in comfort"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Kick-off June 11"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 16px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Widths E \u2013 6E")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 80px 64px',
      background: BONE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 12,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: RED,
      marginBottom: 14
    }
  }, "\xB7 Chapter 01 \xB7"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: F_DISP,
      fontSize: 56,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: NAVY
    }
  }, "The Tournament Edit.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: F_UI,
      fontSize: 15,
      color: 'rgba(26,39,64,0.65)',
      maxWidth: 380,
      lineHeight: 1.6
    }
  }, "Three trainers picked for ninety-minute comfort. Wide-fit lasts, padded collars, no compromise on style.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, [{
    name: 'New Balance 574 — Steel Grey',
    tag: 'Best for: armchair to pub',
    price: '£109.99',
    wd: 'E · 2E · 4E'
  }, {
    name: 'New Balance 530 — Cream',
    tag: 'Best for: sofa surfing',
    price: '£124.99',
    wd: 'E · 2E · 4E'
  }, {
    name: 'Mens Walking Trainer — Navy',
    tag: 'Best for: stadium queues',
    price: '£94.99',
    wd: 'E · 2E · 4E · 6E'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: '#e8e4d9',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: F_LABEL,
      fontSize: 11,
      color: 'rgba(14,14,14,0.32)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, "Product photography"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      background: NAVY,
      color: '#fff',
      fontSize: 10,
      fontFamily: F_LABEL,
      padding: '4px 8px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_UI,
      fontSize: 15,
      fontWeight: 600,
      color: NAVY,
      letterSpacing: '0.01em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_DISP,
      fontSize: 18,
      fontWeight: 500,
      color: NAVY
    }
  }, p.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 12,
      color: 'rgba(26,39,64,0.55)',
      letterSpacing: '0.04em'
    }
  }, p.tag, "  \xB7  Widths ", p.wd))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 80px 96px',
      background: NAVY,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 12,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: RED,
      marginBottom: 18
    }
  }, "\xB7 Chapter 02 \xB7"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: F_DISP,
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "The widest range of wide fits in Britain."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: F_UI,
      fontSize: 16,
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 22,
      maxWidth: 420
    }
  }, "Five widths, every silhouette. From standard wide (E) through 6E for the broadest feet \u2014 fitted, never forced.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 1,
      background: 'rgba(255,255,255,0.18)',
      border: '1px solid rgba(255,255,255,0.18)'
    }
  }, [{
    w: 'E',
    l: 'Wide'
  }, {
    w: '2E',
    l: 'Extra Wide'
  }, {
    w: '3E',
    l: 'Super Wide'
  }, {
    w: '4E',
    l: 'Ultra Wide'
  }, {
    w: '6E',
    l: 'Maximum'
  }].map(({
    w,
    l
  }) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      background: NAVY,
      padding: '38px 16px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_DISP,
      fontSize: 48,
      fontWeight: 500,
      color: '#fff',
      lineHeight: 1
    }
  }, w), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 11,
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginTop: 12
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 80px 88px',
      background: BONE,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 14,
    color: "#00b67a"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: F_UI,
      fontSize: 14,
      fontWeight: 600,
      color: NAVY
    }
  }, "4.8 on Trustpilot"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: F_UI,
      fontSize: 14,
      color: 'rgba(26,39,64,0.5)'
    }
  }, "\xB7  10,000+ reviews")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: F_DISP,
      fontSize: 56,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: NAVY,
      marginBottom: 28
    }
  }, "Find ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: RED
    }
  }, "your"), " tournament fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      color: '#fff',
      padding: '18px 32px',
      fontFamily: F_DISP,
      fontSize: 17,
      fontWeight: 500
    }
  }, "Shop Mens \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: NAVY,
      border: '1.5px solid ' + NAVY,
      padding: '18px 32px',
      fontFamily: F_DISP,
      fontSize: 17,
      fontWeight: 500
    }
  }, "Shop Womens \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      color: 'rgba(255,255,255,0.6)',
      padding: '32px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: F_LABEL,
      fontSize: 12,
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wide Fit Shoes \xB7 widefitshoes.co.uk"), /*#__PURE__*/React.createElement("span", null, "England Edit \xB7 Issue I \xB7 Tournament 2026")));
}

/* ════════════════════════════════════════════════════════════════
   LANDING PAGE — MOBILE
═══════════════════════════════════════════════════════════════ */
function A_LandingMobile({
  headline
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      fontFamily: F_UI,
      background: BONE,
      color: NAVY
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      color: 'rgba(255,255,255,0.85)',
      fontSize: 11,
      padding: '8px 16px',
      textAlign: 'center',
      letterSpacing: '0.08em'
    }
  }, "Wide fit specialists since 1982"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ececec'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: NAVY
    }
  }, "\u2630"), /*#__PURE__*/React.createElement(Logo, {
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: NAVY
    }
  }, "Bag")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '375 / 512',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO_PORTRAIT,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(244,241,234,0) 50%, rgba(244,241,234,0.92) 95%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      fontFamily: F_LABEL,
      fontSize: 9,
      color: 'rgba(14,14,14,0.7)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase'
    }
  }, "England Edit \xB7 Issue I")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 36px',
      background: BONE,
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement(A_RedThread, {
    width: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(26,39,64,0.7)',
      marginTop: 14
    }
  }, "Wide Fit Shoes presents"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: F_DISP,
      fontSize: 50,
      fontWeight: 500,
      lineHeight: 0.96,
      letterSpacing: '-0.02em',
      marginTop: 12,
      color: NAVY
    }
  }, headline.split(' ').slice(0, -1).join(' '), ' ', /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: RED,
      fontWeight: 500
    }
  }, headline.split(' ').slice(-1)[0])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'rgba(26,39,64,0.75)',
      marginTop: 18
    }
  }, "Ninety minutes is a long time on your feet. Wide-fit trainers, kick-off ready. Widths E to\xA06E."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      color: '#fff',
      padding: '16px',
      fontFamily: F_DISP,
      fontSize: 15,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 24,
      letterSpacing: '0.02em'
    }
  }, "Shop the Edit \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 18,
      fontFamily: F_LABEL,
      fontSize: 11,
      color: 'rgba(26,39,64,0.55)',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Free UK delivery \xA350+"), /*#__PURE__*/React.createElement(A_KickoffMark, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      color: 'rgba(255,255,255,0.85)',
      padding: '10px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: F_LABEL,
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 12
    }
  }, "Kick-off June 11"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 12px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Widths E\u20136E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 12px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "500+ wide fit styles"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: RED,
      margin: '0 12px'
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, "Watch in comfort")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 20px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: RED,
      marginBottom: 8
    }
  }, "\xB7 Chapter 01 \xB7"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: F_DISP,
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: NAVY,
      marginBottom: 22
    }
  }, "The Tournament Edit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, [{
    name: '574 — Steel Grey',
    price: '£109.99'
  }, {
    name: '530 — Cream',
    price: '£124.99'
  }, {
    name: 'Walking — Navy',
    price: '£94.99'
  }, {
    name: '327 — Sage',
    price: '£114.99'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: '#e8e4d9',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: NAVY,
      color: '#fff',
      fontSize: 9,
      fontFamily: F_LABEL,
      padding: '2px 6px',
      letterSpacing: '0.14em'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: NAVY
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_DISP,
      fontSize: 14,
      fontWeight: 500,
      color: NAVY
    }
  }, p.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 20px',
      background: NAVY,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: F_LABEL,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: RED,
      marginBottom: 10
    }
  }, "\xB7 Chapter 02 \xB7"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: F_DISP,
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      marginBottom: 22
    }
  }, "Five widths. Every silhouette."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 1,
      background: 'rgba(255,255,255,0.15)'
    }
  }, ['E', '2E', '3E', '4E', '6E'].map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      background: NAVY,
      padding: '20px 4px',
      textAlign: 'center',
      fontFamily: F_DISP,
      fontSize: 24,
      fontWeight: 500
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 20px 48px',
      textAlign: 'center',
      background: BONE
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    size: 12
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: F_DISP,
      fontSize: 32,
      fontWeight: 500,
      color: NAVY,
      margin: '14px 0 18px'
    }
  }, "Find ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: RED
    }
  }, "your"), " fit."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      color: '#fff',
      padding: '16px',
      fontFamily: F_DISP,
      fontSize: 15,
      marginBottom: 10
    }
  }, "Shop Mens \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1.5px solid ' + NAVY,
      color: NAVY,
      padding: '16px',
      fontFamily: F_DISP,
      fontSize: 15
    }
  }, "Shop Womens \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY_DK,
      padding: 18,
      textAlign: 'center',
      fontFamily: F_LABEL,
      fontSize: 10,
      color: 'rgba(255,255,255,0.55)',
      letterSpacing: '0.08em'
    }
  }, "Wide Fit Shoes \xB7 widefitshoes.co.uk"));
}
Object.assign(window, {
  A_Landing,
  A_LandingMobile,
  useHeadline,
  A_KickoffMark,
  A_RedThread
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "campaign/concept-a-landing.jsx", error: String((e && e.message) || e) }); }

// design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:1;transition:background .12s;', '  height:26px;padding:0 10px;border-radius:5px;border:none;cursor:pointer;', '  background:rgba(0,0,0,.10);color:rgba(60,50,40,.85);display:flex;align-items:center;gap:5px;font-size:12px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}', '.dc-expand:hover{background:rgba(201,100,66,.18);color:#c96442}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  })), "Expand"), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-canvas.jsx", error: String((e && e.message) || e) }); }

// ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ios-frame.jsx", error: String((e && e.message) || e) }); }

// preview/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Wide Fit Shoes hero banner component

function Hero({
  title = "New Season\nWide Fit Styles",
  subtitle = "Comfort meets style in E, 2E, 3E, 4E and 6E fittings",
  ctaText = "Shop New In",
  ctaSecondary = "Find your fit",
  bgColor = "#e8edf4"
}) {
  return React.createElement('section', {
    style: {
      width: '100%',
      minHeight: 560,
      background: bgColor,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  },
  // BG tint layer
  React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 55%)'
    }
  }),
  // Decorative shoe silhouette placeholder
  React.createElement('div', {
    style: {
      position: 'absolute',
      right: '8%',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 380,
      height: 280,
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 13,
      color: 'rgba(255,255,255,0.3)'
    }
  }, '[ Product Photography ]')),
  // Content
  React.createElement('div', {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '0 60px 56px',
      maxWidth: 600
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontWeight: 400,
      fontSize: 56,
      lineHeight: 1.1,
      color: '#fff',
      marginBottom: 16,
      whiteSpace: 'pre-line',
      textWrap: 'pretty'
    }
  }, title), React.createElement('p', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 16,
      color: 'rgba(255,255,255,0.85)',
      marginBottom: 32,
      lineHeight: 1.6
    }
  }, subtitle), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement('button', {
    style: {
      background: '#1a2740',
      color: '#fff',
      border: 'none',
      fontFamily: "'Lexend',sans-serif",
      fontWeight: 500,
      fontSize: 15,
      padding: '12px 28px',
      cursor: 'pointer',
      transition: 'background 0.15s'
    },
    onMouseEnter: e => e.target.style.background = '#0d1520',
    onMouseLeave: e => e.target.style.background = '#1a2740'
  }, ctaText), React.createElement('button', {
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.8)',
      fontFamily: "'Lexend',sans-serif",
      fontWeight: 500,
      fontSize: 15,
      padding: '12px 28px',
      cursor: 'pointer'
    }
  }, ctaSecondary))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Icon.jsx — Wide Fit Shoes inline SVG icon component
// Renders a named icon from the registry below as an inline <svg> (no asset files).

const ICON_PATHS = {
  heart: {
    vb: "0 0 18 15.364",
    d: "M 1.318 7.682 L 2.025 6.975 L 1.318 7.682 Z M 7.682 1.318 L 8.389 0.611 L 8.389 0.611 L 7.682 1.318 Z M 9 2.636 L 8.293 3.343 C 8.48 3.531 8.735 3.636 9 3.636 C 9.265 3.636 9.52 3.531 9.707 3.343 L 9 2.636 Z M 9 15.364 L 8.293 16.071 C 8.48 16.259 8.735 16.364 9 16.364 C 9.265 16.364 9.52 16.259 9.707 16.071 L 9 15.364 Z M 16.682 7.682 L 15.975 6.975 L 15.975 6.975 L 16.682 7.682 Z M 10.318 1.318 L 9.611 0.611 L 9.611 0.611 L 10.318 1.318 Z M 2.025 6.975 C 0.658 5.608 0.658 3.392 2.025 2.025 L 0.611 0.611 C -1.537 2.759 -1.537 6.241 0.611 8.389 L 2.025 6.975 Z M 2.025 2.025 C 3.392 0.658 5.608 0.658 6.975 2.025 L 8.389 0.611 C 6.241 -1.537 2.759 -1.537 0.611 0.611 L 2.025 2.025 Z M 6.975 2.025 L 8.293 3.343 L 9.707 1.929 L 8.389 0.611 L 6.975 2.025 Z M 0.611 8.389 L 8.293 16.071 L 9.707 14.657 L 2.025 6.975 L 0.611 8.389 Z M 15.975 2.025 C 17.342 3.392 17.342 5.608 15.975 6.975 L 17.389 8.389 C 19.537 6.241 19.537 2.759 17.389 0.611 L 15.975 2.025 Z M 11.025 2.025 C 12.392 0.658 14.608 0.658 15.975 2.025 L 17.389 0.611 C 15.241 -1.537 11.759 -1.537 9.611 0.611 L 11.025 2.025 Z M 15.975 6.975 L 8.293 14.657 L 9.707 16.071 L 17.389 8.389 L 15.975 6.975 Z M 9.611 0.611 L 8.293 1.929 L 9.707 3.343 L 11.025 2.025 L 9.611 0.611 Z"
  },
  'shopping-bag': {
    vb: "0 0 16 18",
    d: "M 1 6 L 1 5 C 0.48 5 0.047 5.399 0.003 5.917 L 1 6 Z M 15 6 L 15.997 5.917 C 15.953 5.399 15.52 5 15 5 L 15 6 Z M 16 18 L 16 19 C 16.28 19 16.547 18.883 16.736 18.677 C 16.925 18.471 17.02 18.196 16.997 17.917 L 16 18 Z M 0 18 L -0.997 17.917 C -1.02 18.196 -0.925 18.471 -0.736 18.677 C -0.547 18.883 -0.28 19 0 19 L 0 18 Z M 11 8 C 11 8.552 11.448 9 12 9 C 12.552 9 13 8.552 13 8 L 11 8 Z M 3 8 C 3 8.552 3.448 9 4 9 C 4.552 9 5 8.552 5 8 L 3 8 Z M 1 7 L 15 7 L 15 5 L 1 5 L 1 7 Z M 14.003 6.083 L 15.003 18.083 L 16.997 17.917 L 15.997 5.917 L 14.003 6.083 Z M 16 17 L 0 17 L 0 19 L 16 19 L 16 17 Z M 0.997 18.083 L 1.997 6.083 L 0.003 5.917 L -0.997 17.917 L 0.997 18.083 Z M 11 4 L 11 8 L 13 8 L 13 4 L 11 4 Z M 5 8 L 5 4 L 3 4 L 3 8 L 5 8 Z M 8 1 C 9.657 1 11 2.343 11 4 L 13 4 C 13 1.239 10.761 -1 8 -1 L 8 1 Z M 8 -1 C 5.239 -1 3 1.239 3 4 L 5 4 C 5 2.343 6.343 1 8 1 L 8 -1 Z"
  },
  account: {
    vb: "0 0 16 15.111",
    d: "M -0.728 14.425 C -1.106 14.827 -1.088 15.46 -0.686 15.839 C -0.284 16.218 0.349 16.199 0.728 15.797 L -0.728 14.425 Z M 15.272 15.797 C 15.651 16.199 16.284 16.218 16.686 15.839 C 17.088 15.46 17.106 14.827 16.728 14.425 L 15.272 15.797 Z M 11 4 C 11 5.657 9.657 7 8 7 L 8 9 C 10.761 9 13 6.761 13 4 L 11 4 Z M 8 7 C 6.343 7 5 5.657 5 4 L 3 4 C 3 6.761 5.239 9 8 9 L 8 7 Z M 5 4 C 5 2.343 6.343 1 8 1 L 8 -1 C 5.239 -1 3 1.239 3 4 L 5 4 Z M 8 1 C 9.657 1 11 2.343 11 4 L 13 4 C 13 1.239 10.761 -1 8 -1 L 8 1 Z M 0.728 15.797 C 2.634 13.775 5.197 12.556 8 12.556 L 8 10.556 C 4.593 10.556 1.519 12.043 -0.728 14.425 L 0.728 15.797 Z M 8 12.556 C 10.803 12.556 13.366 13.775 15.272 15.797 L 16.728 14.425 C 14.481 12.043 11.407 10.556 8 10.556 L 8 12.556 Z"
  },
  search: {
    vb: "0 0 18 18",
    d: "M 17.293 18.707 C 17.683 19.098 18.317 19.098 18.707 18.707 C 19.098 18.317 19.098 17.683 18.707 17.293 L 17.293 18.707 Z M 12.707 11.293 C 12.317 10.902 11.683 10.902 11.293 11.293 C 10.902 11.683 10.902 12.317 11.293 12.707 L 12.707 11.293 Z M 13 7 C 13 10.314 10.314 13 7 13 L 7 15 C 11.418 15 15 11.418 15 7 L 13 7 Z M 7 13 C 3.686 13 1 10.314 1 7 L -1 7 C -1 11.418 2.582 15 7 15 L 7 13 Z M 1 7 C 1 3.686 3.686 1 7 1 L 7 -1 C 2.582 -1 -1 2.582 -1 7 L 1 7 Z M 7 1 C 10.314 1 13 3.686 13 7 L 15 7 C 15 2.582 11.418 -1 7 -1 L 7 1 Z M 18.707 17.293 L 12.707 11.293 L 11.293 12.707 L 17.293 18.707 L 18.707 17.293 Z"
  },
  globe: {
    vb: "0 0 18 18",
    d: "M 9 17 C 4.582 17 1 13.418 1 9 L -1 9 C -1 14.523 3.477 19 9 19 L 9 17 Z M 1 9 C 1 4.582 4.582 1 9 1 L 9 -1 C 3.477 -1 -1 3.477 -1 9 L 1 9 Z M 9 1 C 13.418 1 17 4.582 17 9 L 19 9 C 19 3.477 14.523 -1 9 -1 L 9 1 Z M 17 9 C 17 13.418 13.418 17 9 17 L 9 19 C 14.523 19 19 14.523 19 9 L 17 9 Z M 2 9 C 2.552 9 3 9.448 3 10 L 5 10 C 5 8.343 3.657 7 2 7 L 2 9 Z M 3 11 C 3 12.657 4.343 14 6 14 L 6 12 C 5.448 12 5 11.552 5 11 L 3 11 Z M 6 14 C 6.552 14 7 14.448 7 15 L 9 15 C 9 13.343 7.657 12 6 12 L 6 14 Z M 7 15 L 7 17.945 L 9 17.945 L 9 15 L 7 15 Z"
  },
  'chevron-right': {
    vb: "0 0 14 7",
    d: "M 14.707 0.707 C 15.098 0.317 15.098 -0.317 14.707 -0.707 C 14.317 -1.098 13.683 -1.098 13.293 -0.707 L 14.707 0.707 Z M 7 7 L 6.293 7.707 C 6.683 8.098 7.317 8.098 7.707 7.707 L 7 7 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0.707 -0.707 Z M 13.293 -0.707 L 6.293 6.293 L 7.707 7.707 L 14.707 0.707 L 13.293 -0.707 Z M 7.707 6.293 L 0.707 -0.707 L -0.707 0.707 L 6.293 7.707 L 7.707 6.293 Z"
  },
  truck: {
    vb: "0 0 18 14",
    d: "M 9 1 L 1 1 L 1 11 L 9 11 L 9 1 Z M 9 3 L 11 3 L 11 1 L 9 1 L 9 3 Z M 11 3 L 13.586 3 L 17 6.414 L 17 11 L 11 11 L 11 3 Z M 4 9 C 2.343 9 1 10.343 1 12 C 1 13.657 2.343 15 4 15 C 5.657 15 7 13.657 7 12 C 7 10.343 5.657 9 4 9 Z M 14 9 C 12.343 9 11 10.343 11 12 C 11 13.657 12.343 15 14 15 C 15.657 15 17 13.657 17 12 C 17 10.343 15.657 9 14 9 Z"
  },
  check: {
    vb: "0 0 14 10",
    d: "M -0.707 6.707 L 3.293 10.707 L 4.707 9.293 L 0.707 5.293 L -0.707 6.707 Z M 4.707 10.707 L 14.707 0.707 L 13.293 -0.707 L 3.293 9.293 L 4.707 10.707 Z"
  },
  waterproof: {
    vb: "0 0 18 17.678",
    d: "M 17.58 2.291 C 17.388 2.301 17.195 2.306 17 2.306 L 17 3.806 C 17.22 3.806 17.439 3.8 17.656 3.789 L 17.58 2.291 Z M 17 2.306 C 14.118 2.306 11.491 1.223 9.5 -0.559 L 8.5 0.559 C 10.755 2.577 13.735 3.806 17 3.806 L 17 2.306 Z M 8.5 -0.559 C 6.509 1.223 3.882 2.306 1 2.306 L 1 3.806 C 4.265 3.806 7.245 2.577 9.5 0.559 L 8.5 -0.559 Z M 1 2.306 C 0.805 2.306 0.612 2.301 0.42 2.291 L 0.344 3.789 C 0.561 3.8 0.78 3.806 1 3.806 L 1 2.306 Z M -0.344 2.852 C -0.609 3.876 -0.75 4.95 -0.75 6.056 L 0.75 6.056 C 0.75 5.078 0.875 4.131 1.108 3.228 L -0.344 2.852 Z M -0.75 6.056 C -0.75 11.998 3.314 16.989 8.813 18.404 L 9.187 16.951 C 4.335 15.702 0.75 11.297 0.75 6.056 L -0.75 6.056 Z M 9.187 18.404 C 14.686 16.989 18.75 11.998 18.75 6.056 L 17.25 6.056 C 17.25 11.297 13.665 15.702 8.813 16.951 L 9.187 18.404 Z M 18.75 6.056 C 18.75 4.95 18.609 3.877 18.344 2.852 L 16.892 3.228 C 17.125 4.131 17.25 5.078 17.25 6.056 L 18.75 6.056 Z"
  },
  tag: {
    vb: "0 0 18 18",
    d: "M 4 -1 C 1.239 -1 -1 1.239 -1 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 -1 Z M 9 -1 L 4 -1 L 4 1 L 9 1 L 9 -1 Z M -1 4 L -1 9 L 1 9 L 1 4 L -1 4 Z M 9.707 1.293 L 16.707 8.293 L 18.121 6.879 L 11.121 -0.121 L 9.707 1.293 Z M 16.707 9.707 C 17.098 9.317 17.098 8.683 16.707 8.293 L 18.121 6.879 C 19.293 8.05 19.293 9.95 18.121 11.121 L 16.707 9.707 Z M 9.707 16.707 L 16.707 9.707 L 18.121 11.121 L 11.121 18.121 L 9.707 16.707 Z M 8.293 16.707 C 8.683 17.098 9.317 17.098 9.707 16.707 L 11.121 18.121 C 9.95 19.293 8.05 19.293 6.879 18.121 L 8.293 16.707 Z M 1.293 9.707 L 8.293 16.707 L 6.879 18.121 L -0.121 11.121 L 1.293 9.707 Z M 1 9 C 1 9.257 1.097 9.512 1.293 9.707 L -0.121 11.121 C -0.707 10.536 -1 9.766 -1 9 L 1 9 Z"
  },
  phone: {
    vb: "0 0 18 18",
    d: "M 2 -1 C 0.343 -1 -1 0.343 -1 2 L 1 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 -1 Z M 5.279 -1 L 2 -1 L 2 1 L 5.279 1 L 5.279 -1 Z M 8.674 4.861 L 7.177 0.368 L 5.279 1 L 6.777 5.493 L 8.674 4.861 Z M 7.671 7.282 C 8.562 6.837 8.989 5.805 8.674 4.861 L 6.777 5.493 L 6.777 5.493 L 7.671 7.282 Z M 5.414 8.411 L 7.671 7.282 L 6.777 5.493 L 4.52 6.622 L 5.414 8.411 Z M 10.895 12.121 C 8.672 11.119 6.881 9.328 5.879 7.105 L 4.055 7.928 C 5.258 10.595 7.405 12.742 10.072 13.945 L 10.895 12.121 Z M 12.507 11.223 L 10.718 10.329 L 9.589 12.586 L 11.378 13.48 L 12.507 11.223 Z M 17 12.721 L 13.139 9.326 L 12.507 11.223 L 17 12.721 L 17 12.721 Z M 19 16 L 19 12.721 L 17 12.721 L 17 16 L 19 16 Z M 16 19 C 17.657 19 19 17.657 19 16 L 17 16 C 17 16.552 16.552 17 16 17 L 16 19 Z M 15 19 L 16 19 L 16 17 L 15 17 L 15 19 Z M -1 3 C -1 11.837 6.163 19 15 19 L 15 17 C 7.268 17 1 10.732 1 3 L -1 3 Z M -1 2 L -1 3 L 1 3 L 1 2 L -1 2 Z"
  },
  menu: {
    vb: "0 0 20 20",
    isLines: true
  }
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style
}) {
  const p = ICON_PATHS[name];
  if (!p) return null;
  const svgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: p.vb || '0 0 20 20',
    fill: 'none'
  };
  const inner = p.isLines ? [React.createElement('line', {
    key: 'l1',
    x1: 3,
    y1: 5,
    x2: 17,
    y2: 5,
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round'
  }), React.createElement('line', {
    key: 'l2',
    x1: 3,
    y1: 10,
    x2: 17,
    y2: 10,
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round'
  }), React.createElement('line', {
    key: 'l3',
    x1: 3,
    y1: 15,
    x2: 17,
    y2: 15,
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round'
  })] : React.createElement('path', {
    d: p.d,
    fill: color,
    fillRule: 'nonzero'
  });
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      lineHeight: 0,
      ...style
    }
  }, React.createElement('svg', svgProps, inner));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — Wide Fit Shoes footer component

function Footer() {
  const cols = [{
    heading: 'Shop',
    links: ['New In', 'Mens Wide Fit Shoes', 'Womens Wide Fit Shoes', 'Sale', 'All Brands']
  }, {
    heading: 'Help',
    links: ['Contact Us', 'FAQ', 'Delivery Information', 'Returns Policy', 'Size Guide']
  }, {
    heading: 'About',
    links: ['About Wide Fit Shoes', 'Our Story', 'Trustpilot Reviews', 'Careers', 'Blog']
  }];
  return React.createElement('footer', {
    style: {
      background: '#000',
      color: '#fff',
      padding: '56px 60px 32px',
      marginTop: 64
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      marginBottom: 48
    }
  },
  // Brand col
  React.createElement('div', null, React.createElement('img', {
    src: window.__logo('wfs-logo-white-new.png'),
    height: 40,
    alt: 'Wide Fit Shoes',
    style: {
      marginBottom: 16
    }
  }), React.createElement('p', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 14,
      color: '#999',
      lineHeight: 1.7,
      maxWidth: 280,
      marginBottom: 24
    }
  }, 'The UK\'s leading specialist wide fit shoe retailer. Hundreds of styles in E, 2E, 3E, 4E and 6E fittings.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'phone',
    size: 16,
    color: '#555'
  }), React.createElement('span', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 14,
      color: '#999'
    }
  }, '020 8907 1742'))),
  // Link cols
  ...cols.map(col => React.createElement('div', {
    key: col.heading
  }, React.createElement('h4', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontWeight: 600,
      fontSize: 14,
      color: '#fff',
      marginBottom: 16,
      letterSpacing: '0.02em'
    }
  }, col.heading), React.createElement('ul', {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.links.map(l => React.createElement('li', {
    key: l
  }, React.createElement('a', {
    href: '#',
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 14,
      color: '#999',
      textDecoration: 'none'
    }
  }, l))))))),
  // Bottom bar
  React.createElement('div', {
    style: {
      borderTop: '1px solid #222',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 13,
      color: '#555'
    }
  }, '© 2024 Wide Fit Shoes Ltd. All rights reserved.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 20
    }
  }, ['Privacy Policy', 'Cookie Policy', 'Terms of Service'].map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 13,
      color: '#555',
      textDecoration: 'none'
    }
  }, l)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Wide Fit Shoes navigation component

function Nav({
  dark = false,
  cartCount = 0
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const bg = dark ? '#000' : '#fff';
  const fg = dark ? '#fff' : '#1a2740';
  const borderColor = dark ? '#333' : '#ececec';
  const mutedColor = dark ? '#999' : '#737373';
  const logoSrc = dark ? window.__logo('wfs-logo-white-new.png') : window.__logo('wfs-logo-black-new.png');
  const fontStack = "'Swiss 721 BT','Hanken Grotesk',sans-serif";

  // Icon SVGs inline
  const MenuIcon = () => React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 20 16',
    fill: 'none',
    stroke: fg,
    strokeWidth: 1.8,
    strokeLinecap: 'round'
  }, React.createElement('line', {
    x1: 1,
    y1: 2,
    x2: 19,
    y2: 2
  }), React.createElement('line', {
    x1: 1,
    y1: 8,
    x2: 19,
    y2: 8
  }), React.createElement('line', {
    x1: 1,
    y1: 14,
    x2: 19,
    y2: 14
  }));
  const CloseIcon = () => React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: fg,
    strokeWidth: 1.8,
    strokeLinecap: 'round'
  }, React.createElement('line', {
    x1: 4,
    y1: 4,
    x2: 16,
    y2: 16
  }), React.createElement('line', {
    x1: 16,
    y1: 4,
    x2: 4,
    y2: 16
  }));
  const AccountIcon = ({
    color
  }) => React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: color || fg,
    strokeWidth: 1.6,
    strokeLinecap: 'round'
  }, React.createElement('circle', {
    cx: 10,
    cy: 6.5,
    r: 4
  }), React.createElement('path', {
    d: 'M1 19c0-4.97 4.03-9 9-9s9 4.03 9 9'
  }));
  const HeartIcon = ({
    color
  }) => React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: color || fg,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M17.5 5.5a4.5 4.5 0 00-6.36 0L10 6.64 8.86 5.5a4.5 4.5 0 00-6.36 6.36L10 19.27l7.5-7.41a4.5 4.5 0 000-6.36z'
  }));
  const BagIcon = ({
    color
  }) => React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 20 22',
    fill: 'none',
    stroke: color || fg,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M6 8V6a4 4 0 018 0v2'
  }), React.createElement('rect', {
    x: 2,
    y: 8,
    width: 16,
    height: 13,
    rx: 1
  }));
  const SearchIcon = ({
    color
  }) => React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: color || mutedColor,
    strokeWidth: 1.6,
    strokeLinecap: 'round'
  }, React.createElement('circle', {
    cx: 8.5,
    cy: 8.5,
    r: 6.5
  }), React.createElement('line', {
    x1: 13.5,
    y1: 13.5,
    x2: 19,
    y2: 19
  }));
  const navLinks = ['New In', 'Mens', 'Womens', 'Brands', 'Sale'];
  return React.createElement(React.Fragment, null,
  // Global style for responsive nav
  React.createElement('style', null, `
      .wfs-nav-desktop { display: flex; }
      .wfs-nav-mobile  { display: none; }
      .wfs-mobile-menu { display: none; }
      @media (max-width: 900px) {
        .wfs-nav-desktop { display: none !important; }
        .wfs-nav-mobile  { display: flex !important; }
        .wfs-mobile-menu.open { display: block !important; }
      }
    `), React.createElement('nav', {
    style: {
      background: bg,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }
  },
  // ── Utility bar (desktop only) ──
  React.createElement('div', {
    className: 'wfs-nav-desktop',
    style: {
      borderBottom: `1px solid ${borderColor}`,
      height: 38,
      padding: '0 40px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: fontStack,
      fontSize: 12,
      color: mutedColor,
      whiteSpace: 'nowrap'
    }
  }, '020 8907 1742  |  Contact us'), React.createElement('span', {
    style: {
      fontFamily: fontStack,
      fontSize: 12,
      color: mutedColor,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      whiteSpace: 'nowrap'
    }
  }, React.createElement(SearchIcon, null), 'United Kingdom (GBP £) ▾')),
  // ── Desktop main nav ──
  React.createElement('div', {
    className: 'wfs-nav-desktop',
    style: {
      height: 70,
      padding: '0 40px',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      overflow: 'hidden'
    }
  },
  // Logo
  React.createElement('img', {
    src: logoSrc,
    height: 36,
    alt: 'Wide Fit Shoes',
    style: {
      cursor: 'pointer',
      flexShrink: 0
    }
  }),
  // Nav links — nowrap, never break
  React.createElement('div', {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexShrink: 0
    }
  }, navLinks.map(link => React.createElement('a', {
    key: link,
    href: '#',
    style: {
      fontFamily: fontStack,
      fontSize: 14,
      color: link === 'Sale' ? '#e63329' : fg,
      textDecoration: 'none',
      fontWeight: link === 'Sale' ? 600 : 400,
      whiteSpace: 'nowrap'
    }
  }, link)), React.createElement('button', {
    style: {
      background: 'transparent',
      border: `1.5px solid ${fg}`,
      color: fg,
      fontFamily: fontStack,
      fontSize: 13,
      fontWeight: 600,
      padding: '7px 14px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, 'Find your fit')),
  // Right cluster
  React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: dark ? '#1a1a1a' : '#f4f6f5',
      height: 36,
      padding: '0 12px',
      gap: 8,
      width: 180
    }
  }, React.createElement(SearchIcon, null), React.createElement('input', {
    placeholder: 'Search Product or Brand',
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: fontStack,
      fontSize: 13,
      color: mutedColor,
      width: '100%'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14
    }
  }, React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    'aria-label': 'Account'
  }, React.createElement(AccountIcon, null)), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    'aria-label': 'Wishlist'
  }, React.createElement(HeartIcon, null)), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },
    'aria-label': 'Bag'
  }, React.createElement(BagIcon, null), cartCount > 0 && React.createElement('span', {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      background: '#1a2740',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      fontFamily: fontStack,
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount))))),
  // ── Mobile nav bar ──
  React.createElement('div', {
    className: 'wfs-nav-mobile',
    style: {
      height: 60,
      padding: '0 16px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('img', {
    src: logoSrc,
    height: 30,
    alt: 'Wide Fit Shoes'
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    },
    'aria-label': 'Account'
  }, React.createElement(AccountIcon, null)), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    },
    'aria-label': 'Wishlist'
  }, React.createElement(HeartIcon, null)), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    },
    'aria-label': 'Bag'
  }, React.createElement(BagIcon, null)), React.createElement('button', {
    onClick: () => setMenuOpen(o => !o),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    },
    'aria-label': 'Menu'
  }, menuOpen ? React.createElement(CloseIcon, null) : React.createElement(MenuIcon, null)))),
  // ── Mobile search bar ──
  React.createElement('div', {
    className: 'wfs-nav-mobile',
    style: {
      padding: '0 16px 10px',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: dark ? '#1a1a1a' : '#f4f6f5',
      height: 38,
      padding: '0 12px',
      gap: 8,
      width: '100%'
    }
  }, React.createElement(SearchIcon, null), React.createElement('input', {
    placeholder: 'Search Product or Brand',
    style: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: fontStack,
      fontSize: 13,
      color: mutedColor,
      width: '100%'
    }
  }))),
  // ── Mobile dropdown menu ──
  React.createElement('div', {
    className: `wfs-mobile-menu${menuOpen ? ' open' : ''}`,
    style: {
      background: bg,
      borderTop: `1px solid ${borderColor}`,
      padding: '8px 0 16px'
    }
  }, navLinks.map(link => React.createElement('a', {
    key: link,
    href: '#',
    onClick: () => setMenuOpen(false),
    style: {
      display: 'block',
      fontFamily: fontStack,
      fontSize: 15,
      color: link === 'Sale' ? '#e63329' : fg,
      textDecoration: 'none',
      fontWeight: link === 'Sale' ? 600 : 400,
      padding: '12px 16px',
      borderBottom: `1px solid ${borderColor}`
    }
  }, link)), React.createElement('div', {
    style: {
      padding: '12px 16px'
    }
  }, React.createElement('button', {
    style: {
      background: '#1a2740',
      color: '#fff',
      border: 'none',
      fontFamily: fontStack,
      fontSize: 14,
      fontWeight: 600,
      padding: '10px 20px',
      cursor: 'pointer',
      width: '100%'
    }
  }, 'Find your fit')))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductCard.jsx
try { (() => {
// ProductCard.jsx — Wide Fit Shoes product card (compact grid variant)

const DEFAULT_SWATCHES = [{
  bg: '#1e2f5e',
  name: 'Navy'
}, {
  bg: '#6b7560',
  name: 'Olive'
}, {
  bg: '#c9a87c',
  name: 'Tan'
}, {
  bg: '#f0ece6',
  name: 'Off White',
  light: true
}, {
  bg: '#7a1f38',
  name: 'Burgundy'
}, {
  bg: '#111111',
  name: 'Black'
}];
const DEFAULT_SIZES = ['3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5'];
const DEFAULT_WIDTHS = ['2E', '4E', '6E'];
function ProductCard({
  brand = 'New Balance',
  name = "Men's MX624NV4 Wide Fit Trainers",
  price = '£129.99',
  originalPrice = '£149.99',
  discount = '13% off',
  sale = true,
  waterproof = true,
  rating = 4.8,
  reviewCount = 166,
  sizes = DEFAULT_SIZES,
  widths = DEFAULT_WIDTHS,
  swatches = DEFAULT_SWATCHES,
  images = null
}) {
  const [slide, setSlide] = React.useState(0);
  const [wishlisted, setWishlisted] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState(sizes[5] || sizes[0]);
  const [selectedWidth, setSelectedWidth] = React.useState(widths[1] || widths[0]);
  const [selectedSwatch, setSelectedSwatch] = React.useState(0);
  const totalSlides = images ? images.length : 3;
  const font = "'Swiss 721 BT','Hanken Grotesk',sans-serif";
  function goTo(i) {
    setSlide((i % totalSlides + totalSlides) % totalSlides);
  }
  function renderStars(rating) {
    return [0, 1, 2, 3, 4].map(i => {
      const filled = rating >= i + 1;
      const half = !filled && rating >= i + 0.5;
      return React.createElement('div', {
        key: i,
        style: {
          width: 14,
          height: 14,
          background: half ? 'linear-gradient(90deg, #00b67a 50%, #ddd 50%)' : filled ? '#00b67a' : '#ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          flexShrink: 0
        }
      }, React.createElement('svg', {
        viewBox: '0 0 24 24',
        width: 9,
        height: 9,
        fill: '#fff'
      }, React.createElement('polygon', {
        points: '12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26'
      })));
    });
  }
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      border: '1px solid #e4e4e0',
      fontFamily: font,
      display: 'flex',
      flexDirection: 'column'
    }
  },
  // ── Image zone ──
  React.createElement('div', {
    style: {
      position: 'relative',
      background: '#e8edf4',
      height: 180,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      width: `${totalSlides * 100}%`,
      height: '100%',
      transform: `translateX(-${slide * (100 / totalSlides)}%)`,
      transition: 'transform 0.3s ease'
    }
  }, Array.from({
    length: totalSlides
  }).map((_, i) => React.createElement('div', {
    key: i,
    style: {
      width: `${100 / totalSlides}%`,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i === 0 ? '#e8edf4' : '#f4f6f5',
      flexShrink: 0
    }
  }, images && images[i] ? React.createElement('img', {
    src: images[i],
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : React.createElement('span', {
    style: {
      fontFamily: font,
      fontSize: 11,
      color: '#8ea3c2'
    }
  }, `Image ${i + 1}`)))),
  // Wishlist
  React.createElement('button', {
    onClick: () => setWishlisted(w => !w),
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.92)',
      border: `1.5px solid ${wishlisted ? '#e63329' : '#ddd'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 2
    }
  }, React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 20 20',
    fill: wishlisted ? '#e63329' : 'none',
    stroke: wishlisted ? '#e63329' : '#555',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M17.5 5.5a4.5 4.5 0 00-6.36 0L10 6.64 8.86 5.5a4.5 4.5 0 00-6.36 6.36L10 19.27l7.5-7.41a4.5 4.5 0 000-6.36z'
  }))),
  // Badges
  React.createElement('div', {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      zIndex: 2,
      alignItems: 'flex-end'
    }
  }, sale && React.createElement('span', {
    style: {
      background: '#e63329',
      color: '#fff',
      fontFamily: font,
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 7px',
      borderRadius: 3,
      letterSpacing: '0.3px'
    }
  }, 'SALE'), waterproof && React.createElement('span', {
    style: {
      background: '#1a9688',
      color: '#fff',
      fontFamily: font,
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 7px',
      borderRadius: 3,
      letterSpacing: '0.3px'
    }
  }, 'WATERPROOF')),
  // Arrows
  totalSlides > 1 && React.createElement(React.Fragment, null, React.createElement('button', {
    onClick: () => goTo(slide - 1),
    style: {
      position: 'absolute',
      left: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.85)',
      border: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 2
    }
  }, React.createElement('svg', {
    viewBox: '0 0 20 20',
    width: 10,
    height: 10,
    fill: 'none',
    stroke: '#444',
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('polyline', {
    points: '13,4 7,10 13,16'
  }))), React.createElement('button', {
    onClick: () => goTo(slide + 1),
    style: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.85)',
      border: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 2
    }
  }, React.createElement('svg', {
    viewBox: '0 0 20 20',
    width: 10,
    height: 10,
    fill: 'none',
    stroke: '#444',
    strokeWidth: 2.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('polyline', {
    points: '7,4 13,10 7,16'
  })))),
  // Dots
  totalSlides > 1 && React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: 6,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 4
    }
  }, Array.from({
    length: totalSlides
  }).map((_, i) => React.createElement('div', {
    key: i,
    onClick: () => goTo(i),
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: i === slide ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.2)',
      cursor: 'pointer'
    }
  })))),
  // ── Card body ──
  React.createElement('div', {
    style: {
      padding: '10px 12px 12px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  },
  // Brand
  React.createElement('p', {
    style: {
      fontSize: 9,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#e63329',
      fontWeight: 700,
      marginBottom: 3
    }
  }, brand),
  // Name
  React.createElement('p', {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#111',
      lineHeight: 1.3,
      marginBottom: 6
    }
  }, name),
  // Stars
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginBottom: 7
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 2
    }
  }, ...renderStars(rating)), React.createElement('span', {
    style: {
      fontSize: 11,
      color: '#888'
    }
  }, `${rating} (${reviewCount})`)),
  // Price
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 10
    }
  }, React.createElement('span', {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: '#111'
    }
  }, price), originalPrice && React.createElement('span', {
    style: {
      fontSize: 12,
      color: '#aaa',
      textDecoration: 'line-through'
    }
  }, originalPrice), discount && React.createElement('span', {
    style: {
      fontSize: 10,
      fontWeight: 700,
      background: '#fde8e6',
      color: '#c0392b',
      padding: '2px 5px',
      borderRadius: 3
    }
  }, discount)),
  // Sizes
  React.createElement('p', {
    style: {
      fontSize: 10,
      color: '#999',
      marginBottom: 5
    }
  }, 'Sizes'), React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginBottom: 8
    }
  }, sizes.map(s => React.createElement('div', {
    key: s,
    onClick: () => setSelectedSize(s),
    style: {
      minWidth: 30,
      height: 26,
      padding: '0 5px',
      borderRadius: 4,
      cursor: 'pointer',
      border: `1.5px solid ${selectedSize === s ? '#1a2740' : '#ddd'}`,
      background: selectedSize === s ? '#1a2740' : '#fff',
      color: selectedSize === s ? '#fff' : '#222',
      fontSize: 11,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, s))),
  // Widths
  React.createElement('p', {
    style: {
      fontSize: 10,
      color: '#999',
      marginBottom: 5
    }
  }, 'Widths'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      marginBottom: 8
    }
  }, widths.map(w => React.createElement('div', {
    key: w,
    onClick: () => setSelectedWidth(w),
    style: {
      minWidth: 30,
      height: 26,
      padding: '0 6px',
      borderRadius: 4,
      cursor: 'pointer',
      border: `1.5px solid ${selectedWidth === w ? '#1a2740' : '#ddd'}`,
      background: selectedWidth === w ? '#1a2740' : '#fff',
      color: selectedWidth === w ? '#fff' : '#222',
      fontSize: 11,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, w))),
  // Swatches
  React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 12
    }
  }, swatches.map((sw, i) => React.createElement('div', {
    key: i,
    onClick: () => setSelectedSwatch(i),
    title: sw.name,
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: sw.bg,
      cursor: 'pointer',
      border: sw.light ? '1.5px solid #ccc' : '1.5px solid transparent',
      outline: selectedSwatch === i ? '2px solid #1a2740' : '2px solid transparent',
      outlineOffset: 2
    }
  }))),
  // CTAs
  React.createElement('button', {
    style: {
      width: '100%',
      padding: '10px',
      background: '#1a2740',
      color: '#fff',
      border: 'none',
      borderRadius: 6,
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      marginBottom: 6,
      fontFamily: font
    }
  }, 'Add to basket'), React.createElement('button', {
    style: {
      width: '100%',
      padding: '9px',
      background: '#fff',
      color: '#111',
      border: '1.5px solid #bbb',
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: font
    }
  }, 'See more details')));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CollectionGrid.jsx
try { (() => {
// CollectionGrid.jsx — Featured products grid, announcement bar, category nav, promo strip

function AnnouncementBar({
  message = "FREE UK Delivery on orders over £50  |  Easy Returns  |  Wide Fit Specialists Since 1982"
}) {
  return React.createElement('div', {
    style: {
      background: '#1a2740',
      color: '#fff',
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 13,
      fontWeight: 500,
      textAlign: 'center',
      padding: '10px 20px',
      letterSpacing: '0.02em'
    }
  }, message);
}
function CategoryNav({
  active = 'All',
  onSelect
}) {
  const cats = ['All', 'Mens', 'Womens', 'Trainers', 'Boots', 'Sandals', 'Sale'];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid #dedede',
      padding: '0 60px',
      background: '#fff',
      overflowX: 'auto'
    }
  }, cats.map(cat => React.createElement('button', {
    key: cat,
    onClick: () => onSelect && onSelect(cat),
    style: {
      background: 'none',
      border: 'none',
      borderBottom: active === cat ? '2px solid #1a2740' : '2px solid transparent',
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 14,
      fontWeight: active === cat ? 600 : 400,
      color: active === cat ? '#1a2740' : '#555',
      padding: '14px 20px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      marginBottom: -1
    }
  }, cat)));
}
const PRODUCTS = [{
  name: 'Mens Wide Fit New Balance 990v6 Stability Trainers',
  price: '£149.99',
  originalPrice: '£199.99',
  sale: true,
  sizes: ['2E', '4E']
}, {
  name: 'Womens Wide Fit Clarks Cloudsteppers Slip-On Shoes',
  price: '£69.99',
  originalPrice: null,
  sale: false,
  isNew: true,
  sizes: ['E', '2E', '3E']
}, {
  name: 'Mens Wide Fit Dr Comfort Douglas Leather Oxford',
  price: '£119.99',
  originalPrice: '£149.99',
  sale: true,
  sizes: ['E', '2E', '4E']
}, {
  name: 'Womens Wide Fit Vionic Walker Sneaker',
  price: '£89.99',
  originalPrice: null,
  sale: false,
  sizes: ['2E', '3E']
}, {
  name: 'Mens Wide Fit Propét LifeWalker Strap Shoe',
  price: '£99.99',
  originalPrice: '£119.99',
  sale: true,
  sizes: ['2E', '4E', '6E']
}, {
  name: 'Womens Wide Fit SAS Tripad Comfort Mary Jane',
  price: '£109.99',
  originalPrice: null,
  sale: false,
  sizes: ['E', '2E']
}, {
  name: 'Mens Wide Fit Brooks Addiction Walker 2',
  price: '£129.99',
  originalPrice: null,
  sale: false,
  isNew: true,
  sizes: ['2E', '4E']
}, {
  name: 'Womens Wide Fit New Balance 928v3 Walking Shoe',
  price: '£79.99',
  originalPrice: '£99.99',
  sale: true,
  sizes: ['2E', '3E', '4E']
}];
function CollectionGrid({
  heading = "Featured Collection",
  subheading = "Our best-selling wide fit styles",
  products = PRODUCTS,
  cols = 4
}) {
  return React.createElement('section', {
    style: {
      padding: '56px 60px'
    }
  }, React.createElement('div', {
    style: {
      marginBottom: 32,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, React.createElement('div', null, React.createElement('h2', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontWeight: 500,
      fontSize: 36,
      color: '#322c2d',
      marginBottom: 8
    }
  }, heading), React.createElement('p', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 15,
      color: '#737373'
    }
  }, subheading)), React.createElement('button', {
    style: {
      background: 'none',
      border: '1px solid #322c2d',
      fontFamily: "'Lexend',sans-serif",
      fontSize: 14,
      fontWeight: 500,
      padding: '9px 20px',
      cursor: 'pointer',
      color: '#322c2d'
    }
  }, 'View all')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 16
    }
  }, products.map((p, i) => React.createElement(__ds_scope.ProductCard, {
    key: i,
    ...p,
    size: 'md'
  }))));
}
function PromoSection() {
  const promos = [{
    label: 'Free UK Delivery',
    sub: 'On all orders over £50',
    icon: 'truck'
  }, {
    label: 'Wide Fit Experts',
    sub: 'Specialists since 1982',
    icon: 'star'
  }, {
    label: 'Easy Returns',
    sub: '30-day hassle free returns',
    icon: 'check'
  }, {
    label: 'Secure Payment',
    sub: 'SSL encrypted checkout',
    icon: 'tag'
  }];
  return React.createElement('div', {
    style: {
      background: '#f4f6f5',
      padding: '32px 60px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, promos.map(p => React.createElement('div', {
    key: p.label,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement('div', {
    style: {
      width: 36,
      height: 36,
      background: '#e8edf4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 18,
    color: '#1a2740'
  })), React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 14,
      fontWeight: 600,
      color: '#322c2d'
    }
  }, p.label), React.createElement('div', {
    style: {
      fontFamily: "'Swiss 721 BT','Hanken Grotesk',sans-serif",
      fontSize: 13,
      color: '#737373',
      marginTop: 2
    }
  }, p.sub)))));
}
Object.assign(__ds_scope, { AnnouncementBar, CategoryNav, CollectionGrid, PromoSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CollectionGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), labels/titles are inline-editable,
// and any artboard can be opened in a fullscreen focus overlay (←/→/Esc).
// State persists to a .design-canvas.state.json sidecar via the host
// bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px}', '.dc-grip{cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{cursor:pointer;border-radius:4px;padding:3px 6px;display:flex;align-items:center;transition:background .12s}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-expand{position:absolute;bottom:100%;right:0;margin-bottom:5px;z-index:2;opacity:1;transition:background .12s;', '  height:26px;padding:0 10px;border-radius:5px;border:none;cursor:pointer;', '  background:rgba(0,0,0,.10);color:rgba(60,50,40,.85);display:flex;align-items:center;gap:5px;font-size:12px;font-weight:600;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif}', '.dc-expand:hover{background:rgba(201,100,66,.18);color:#c96442}', '[data-dc-slot]:hover .dc-expand{opacity:1}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, focused
// artboard). Order/titles/labels persist to a .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const srcIds = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (!aid) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const srcOrder = artboards.map(a => a.props.id ?? a.props.label);
  const sec = ctx && sid && ctx.section(sid) || {};
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 56px'
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow",
    style: {
      position: 'absolute',
      bottom: '100%',
      left: -4,
      marginBottom: 4,
      color: DC.label
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    onPointerDown: e => e.stopPropagation(),
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  })), "Expand"), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    const ns = sectionOrder[(secIdx + d + sectionOrder.length) % sectionOrder.length];
    const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
    if (first) ctx.setFocus(`${ns}/${first}`);
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;

  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function TweakColor({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
    type: "color",
    className: "twk-swatch",
    value: value,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.CategoryNav = __ds_scope.CategoryNav;

__ds_ns.CollectionGrid = __ds_scope.CollectionGrid;

__ds_ns.PromoSection = __ds_scope.PromoSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
