# Soroi Collection — Design Rules

## HTML-First Design Rule

All design work begins in HTML/CSS. Claude generates a complete single-file HTML design using the brand guidelines, inspiration references, and colour system. This HTML file is then converted to PDF via Puppeteer (`scripts/html-to-pdf.js`) and uploaded to Canva as a locked template layer.

**Never use Canva AI generation for brand design work.**

---

## Brand Guidelines by Property

### Soroi Blue Diani

**Fonts**
- Headlines / Titles: Cinzel (serif, elegant)
- Body / Supporting: Poppins (sans-serif, clean)

**Colour Palette**
| Name | Hex | Usage |
|------|-----|-------|
| Alice Blue | `#E9F5FF` | Background, light fills |
| Cloud White | `#FFFFFF` | Pure white space |
| Jordy Blue | `#93BFEF` | Secondary accent, dividers |
| Tufts Blue | `#468BE6` | Primary brand blue |
| Cobalt Blue | `#1A5799` | Dark blue, headlines |
| Bronze Gold | `#C4A265` | Accent only — use sparingly |

**Aesthetic:** Barefoot coastal luxury. Light, airy, minimal. Ocean-influenced without being kitsch. Bronze Gold is a premium accent — never use it as a fill.

---

### Soroi Amboseli

**Colour Palette**
| Name | Hex | Usage |
|------|-----|-------|
| Tsavo Earth | TBC | Pending confirmation |
| Savannah Sand | TBC | Pending confirmation |
| Mara Gold | TBC | Pending confirmation |

**Fonts:** TBC — confirm with Yasin before any Amboseli design work.

**Motifs:** Kilimanjaro silhouette is the hero visual. Maasai cultural references are central. Unit names (Olkeri through Emayian, Oldonyo, Enkang, Boma) are brand assets — use them in copy and wayfinding design.

**Flag:** If a brief requests Amboseli design work and hex values or fonts remain TBC, pause and surface the gap before generating.

---

### Soroi Mara Bush Camp, Soroi Private Wing, Soroi Luxury Migration Camp

**Brand specifics:** TBC — to be populated when Mara work begins.

**Known aesthetic notes:**
- Private Wing: Mahogany furniture, dark red/maroon and forest green furnishing themes. Most exclusive Mara property.
- Mara Bush Camp: Eco-conscious positioning, immersed in foliage. Earthy, natural palette expected.
- Luxury Migration Camp: Photography and migration season focus. Expect a more dramatic, high-contrast visual language.

---

### Soroi Lions Bluff Lodge, Soroi Leopards Lair, Soroi Cheetah Tented Camp

**Brand specifics:** TBC — to be populated when Tsavo/Lumo work begins.

**Known notes:**
- Lions Bluff: Spa and wellness. Elevated luxury in Lumo Conservancy. Panoramic Kenyan views.
- Leopards Lair: Rustic, intimate, character-led. Cozy cottages, not tents.
- Cheetah Tented Camp: Budget-friendlier. Yoga retreats. Panoramic sunset views from shared mess.

---

### Soroi Larsens Camp

**Brand specifics:** TBC — to be populated when Samburu work begins.

**Known notes:** Gold Eco-Rated. Named after explorer Eric Larsen. Boutique, refined. Expect a warm, exploratory palette — analogous to classic safari aesthetic.

---

### Soroi Samburu Lodge

**Brand specifics:** TBC — to be populated when Samburu Lodge work begins.

**Known notes:** Large-format property (50 rooms). Corporate and group capability. Design language should feel more structured and versatile than Larsens.

---

### Soroi Nairobi

**Brand specifics:** TBC — brand brief pending.

---

## General Design Do / Don't Rules

### Do
- Always use the property's defined font stack — no substitutions
- Maintain sufficient contrast between text and background (WCAG AA minimum)
- Use Bronze Gold (Diani) and equivalent accent colours sparingly — premium implies restraint
- Scale typography relative to canvas size — test at final export dimensions
- Name Canva fields following the `{property}_{section}_{field}_{index}` convention before handing off
- Export to correct dimensions per output type (see `data/rules/canva-rules.md`)
- Flag TBC brand values before starting any design that depends on them

### Don't
- Don't mix brand palettes across properties
- Don't use Canva AI generation for any brand design
- Don't invent hex values, fonts, or motifs for properties with TBC brand data
- Don't use decorative fonts not in the brand stack
- Don't use drop shadows or heavy gradients unless explicitly requested
- Don't over-style the HTML — the template is a locked layer, not the finished product

---

## PDF → Canva Pipeline Notes

1. HTML designs must be self-contained (all CSS inline or in a `<style>` block — no external CDN dependencies that may fail at PDF render time)
2. Use print-safe fonts — embed via `@font-face` or use system-safe fallbacks for PDF rendering
3. Puppeteer renders at the exact pixel dimensions specified — set these in the brief or default to A4 for print, 1080x1350 for Instagram
4. After PDF upload to Canva, the PDF becomes a locked background layer
5. Content fields are placed on top as editable text elements using the field naming convention
6. Never flatten the Canva file before review
