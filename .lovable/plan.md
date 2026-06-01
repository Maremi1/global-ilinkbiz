

# iLink Global — Corporate Website Plan

## Visual Direction
- **Theme**: Dark navy base (`#0a1428`-ish) with light blue / cyan accents (`#7DD3FC`, `#38BDF8`)
- **Glassmorphism**: Frosted glass cards with subtle borders, backdrop blur, soft inner glow
- **Interactive 3D background**: Animated floating shapes (spheres, cubes, torus) using react-three-fiber that subtly react to cursor movement
- **Radial glares**: Multiple soft cyan/blue radial gradient glows pulsing behind content
- **Micro-interactions**: Hover lifts, glow on hover, smooth fade-ins on scroll
- **Typography**: Clean modern sans (Inter / Space Grotesk for headings)

## Site Structure (separate routes for SEO)

1. **/** — Home
   - Hero: "Structuring a Global Ecosystem" + tagline, glass CTA buttons, 3D shapes background
   - Quick stats: 4 countries, 3 tiers, 100% chain of custody
   - Brief intro to the 3-layer architecture with glass cards
   - Footprint teaser (Africa map preview)

2. **/architecture** — The Holding Architecture
   - 3-Tier diagnostic (Global / International / National) as interactive glass cards
   - The Equity Tree visualization (iLink Global → International → 4 national entities)
   - Functional comparison table in a glass panel

3. **/footprint** — Global Footprint
   - Interactive Africa map with glowing nodes for Rwanda (HQ), Ghana, Ethiopia, Tanzania
   - HQ card: Vision Arcade Executive Suites, Kigali, Rwanda
   - Per-country glass cards

4. **/operations** — Operational Ecosystem
   - 4 sectors as glass cards: Knowledge & Tech · Global Trade · Infrastructure · Core Support
   - The IP Shield section (Macro layer)
   - Meso layer: Investment Holding, Strategic Oversight, Expansion Engine, Capital Funnel
   - Revenue Flow + Value Creation Loop diagrams (rebuilt as animated SVG)

5. **/contact** — Contact
   - Glass contact form, email `info@ilinkbiz.com`, website `global.ilinkbiz.com`
   - HQ address, social placeholders

## Shared Components
- **Glass Navbar** — sticky, blurred, with active link glow
- **AnimatedBackground** — react-three-fiber canvas (floating low-poly shapes, slow rotation, parallax on mouse) + CSS radial glares layer
- **GlassCard** — reusable frosted card with hover glow
- **Footer** — glass strip with logo, links, contact

## Tech
- TanStack Start routes (one file per page, full SEO meta per route)
- `@react-three/fiber` + `@react-three/drei` for 3D background
- Tailwind utilities + custom glass + glow classes in `styles.css`
- Light scroll-reveal animations (CSS / framer-motion-light approach)

## Content sourced directly from the PDF
All copy (3-tier table, equity tree, IP shield items, 4 operational sectors, revenue model, HQ address, contact) pulled verbatim from the provided architecture document.

