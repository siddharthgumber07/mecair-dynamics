

## Plan: Integrate Logo, Match Theme, Remove AI Feel, Add Professional Animations

### Overview
Integrate the uploaded logo, tune colors to match it, break the repetitive "AI template" patterns across all sections, and add polished animations that feel hand-crafted.

### 1. Logo Integration
- Copy `user-uploads://logo2.png` to `src/assets/logo.png`
- **Header.tsx**: Replace the orange "M" square (line 38-40) with `<img src={logo} className="h-9 w-auto" />`
- **Footer.tsx**: Same replacement (line 25)

### 2. Color Theme Tuning
Adjust `src/index.css` CSS variables to match the logo's teal-blue tone:
- `--primary`: shift from `213 58% 20%` to ~`200 55% 22%` (deeper teal-blue matching the gear)
- `--industrial-dark`: adjust to `200 55% 14%`
- `--ring`: match new primary
- Keep the safety orange accent as-is (already matches the wrench element)

### 3. Break the "AI-Generated" Look
The current site has a very uniform, cookie-cutter feel: every section uses the same layout (centered label + heading + paragraph + uniform card grid). Changes:

- **Hero.tsx**: Left-align content on desktop, add a subtle animated counter/stat bar at the bottom edge
- **About.tsx**: Use a two-column layout (text left, stats right in a vertical stack with dividers) instead of centered text + 4-stat row
- **WhyChooseUs.tsx**: Alternate card sizes -- make 2 featured cards span wider, vary the visual treatment (e.g., first card has a colored left border, others have icon backgrounds)
- **Products.tsx**: Use a tabbed or category-based layout instead of identical 6-card grid; spare parts section gets a horizontal scrollable chip bar
- **Services.tsx**: Use an alternating left-right layout (icon + text blocks) instead of uniform card grid. Or use numbered steps with a connecting line
- **Team.tsx**: Leadership cards get a horizontal layout (side-by-side photo area + text), technical team uses a simpler inline list
- **Contact.tsx**: Add a subtle background pattern or angled divider; style the info column with a dark background panel

- **General**: Vary section padding, remove the identical "uppercase accent label + h2 + p" pattern from every section (some sections use inline labels, some skip the subtitle, some lead with a bold stat instead)

### 4. Professional Animations (tailwind.config.ts + components)
Add new keyframes and use them thoughtfully:

**New keyframes**:
- `slide-in-left` / `slide-in-right`: horizontal reveals for alternating layouts
- `counter-up`: for stat numbers (scale + fade)
- `draw-line`: for decorative line/border animations (width from 0 to 100%)
- `stagger-fade`: children fade in with CSS stagger

**Usage**:
- Hero: text slides in from left, CTA buttons fade up with stagger
- About stats: numbers animate with `counter-up` when visible
- Cards: use `slide-in-left`/`slide-in-right` for alternating service blocks
- Section dividers: subtle `draw-line` animation on decorative accent lines
- Hover effects: cards get a subtle `translateY(-4px)` lift with shadow transition, not just shadow change

**CSS additions in index.css**:
- Add `@layer utilities` classes for staggered children animations
- Add subtle grain/noise texture on hero overlay for depth

### 5. Additional Polish
- Add a thin accent-colored top border to the header on scroll
- Mobile menu: slide-in from right instead of instant appear
- Footer social icons: add hover lift animation
- Smooth section transitions with varied background treatments (not just alternating white/grey)

### Files Modified
| File | Changes |
|------|---------|
| `src/assets/logo.png` | New file (copied from upload) |
| `src/index.css` | Updated CSS variables, new utility classes, texture |
| `tailwind.config.ts` | New keyframes and animations |
| `src/components/Header.tsx` | Logo image, scroll border |
| `src/components/Footer.tsx` | Logo image |
| `src/components/Hero.tsx` | Left-aligned layout, new animations |
| `src/components/About.tsx` | Two-column layout |
| `src/components/WhyChooseUs.tsx` | Varied card treatments |
| `src/components/Products.tsx` | Category-based layout |
| `src/components/Services.tsx` | Alternating layout |
| `src/components/Team.tsx` | Horizontal leadership cards |
| `src/components/Contact.tsx` | Dark info panel styling |
| `src/hooks/useScrollReveal.ts` | Add direction parameter for left/right reveals |

