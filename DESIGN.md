---
name: Silicon Ledger
colors:
  surface: '#f7fafc'
  surface-dim: '#d7dadc'
  surface-bright: '#f7fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f6'
  surface-container: '#ebeef0'
  surface-container-high: '#e5e9eb'
  surface-container-highest: '#e0e3e5'
  on-surface: '#181c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f3'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#00677e'
  on-secondary: '#ffffff'
  secondary-container: '#00d2fd'
  on-secondary-container: '#005669'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2e'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#b4ebff'
  secondary-fixed-dim: '#3cd7ff'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#d4e4fc'
  tertiary-fixed-dim: '#b8c8e0'
  on-tertiary-fixed: '#0d1c2e'
  on-tertiary-fixed-variant: '#39485c'
  background: '#f7fafc'
  on-background: '#181c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for a premium semiconductor news portal, targeting industry professionals, investors, and engineers. The brand personality is **authoritative, analytical, and forward-looking**. It balances the clinical precision of the semiconductor industry with the high-stakes energy of financial journalism.

The visual style is **Corporate / Modern** with a subtle **Tech-Infused Minimalism**. It draws inspiration from the structured information density of major Asian portals (like Naver) but elevates it with a deep, sophisticated color palette and high-end typography found in global financial broadsheets. The goal is to evoke trust and provide a focused, distraction-free reading experience for complex technical data.

## Colors

The palette is derived from the hardware and illumination of silicon fabrication. 
- **Deep Tech Blue (#0A192F):** Used for primary headers, navigation, and core brand elements to establish authority.
- **Glowing Cyan (#00D4FF):** A high-visibility accent color used sparingly for interactive states, key data highlights, and breaking news indicators.
- **Crisp Silver & Neutrals:** A range of cool grays and silvers ensure the data-heavy layout remains legible and professional. 

While the default mode is **Light** for maximum readability of long-form articles, the deep blue is used in large blocks (like the global header) to provide visual grounding.

## Typography

The typography strategy prioritizes legibility and structural hierarchy. **Hanken Grotesk** is used for headlines and labels to provide a sharp, contemporary "tech" feel that remains highly professional. **Noto Sans** is used for body copy to ensure comfortable reading across long technical reports and news briefs.

- **Headlines:** Use tight letter-spacing and heavier weights to command attention.
- **Body Copy:** Maintains a generous line-height to prevent eye strain during long-form reading.
- **Labels:** Set in uppercase with increased letter-spacing for category tags and data markers.

## Layout & Spacing

This design system utilizes a **12-column fixed-width grid** for desktop to mimic the structured, reliable layout of financial portals. On tablet and mobile, it transitions to a fluid system.

- **Desktop (1280px+):** 12 columns, 24px gutters. News is organized into a primary 8-column main feed and a 4-column sidebar for market data and "trending" lists.
- **Tablet (768px - 1024px):** 8-column fluid grid. Sidebars reflow below primary content.
- **Mobile (<768px):** 4-column fluid grid. Margins shrink to 16px to maximize real estate for text.

Information density is "Medium-High." Use generous vertical rhythm (stack-lg) between distinct sections, but tight internal spacing (stack-sm) within cards to group related data points.

## Elevation & Depth

To maintain a "clean and data-driven" look, elevation is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Base Layer:** The global background is a very light neutral (#F7FAFC).
- **Surface Layer:** News cards and content containers use a pure white (#FFFFFF) background with a 1px border (#E0E0E0).
- **Interactive Depth:** When a card is hovered, apply a very soft, diffused ambient shadow (0px 4px 20px rgba(10, 25, 47, 0.05)) and a 1px Cyan (#00D4FF) border highlight.
- **Global Header:** Uses a solid Deep Blue (#0A192F) with no shadow, creating a strong "anchor" at the top of the interface.

## Shapes

The shape language is **precise and subtle**. A "Soft" roundedness (4px) is applied to most UI elements (cards, input fields, buttons) to avoid the aggression of sharp corners while remaining far more professional and "engineered" than pill-shaped or highly rounded alternatives.

- **Buttons & Inputs:** 4px radius.
- **News Image Thumbnails:** 4px radius to match containers.
- **Status Tags (e.g., "Breaking"):** 2px radius for a sharper, more urgent feel.

## Components

### Buttons
- **Primary:** Deep Blue background, white text. No gradient. 4px radius.
- **Secondary:** Transparent background, 1px Silver border, Deep Blue text.
- **Action/Accent:** Cyan background for "Subscribe" or "Live" indicators to draw immediate attention.

### Cards
- News snippets should feature a 1:1 or 16:9 image on the left/top, followed by a Category Label (Cyan), Headline (Deep Blue), and a 2-line excerpt.
- Ensure a clear 24px padding inside all cards.

### Navigation & Search
- **Search Bar:** Centrally located in the header. Large, with a 1px silver border and a Cyan search icon. 
- **Mega Menu:** Use a clean, multi-column layout for semiconductor sub-sectors (Logic, Memory, Foundry, Equipment).

### Data Elements
- **Stock Ticker:** A thin horizontal bar below the main nav, scrolling or static, displaying key semiconductor stock prices (NVDA, TSM, ASML) using green/red for trends but keeping the text in Deep Blue for consistency.