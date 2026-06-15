# Soroi Assistant — Claude Code Instructions

## Project Purpose

Soroi Assistant automates creative production across the full Soroi Collection portfolio of luxury safari and coastal properties in Kenya.

Yasin is the graphic designer and creative director. The assistant handles design generation, content population, asset management, and publishing pipelines so Yasin can focus on creative direction and polishing.

**Pipeline trigger:** A brief JSON file dropped into `briefs/` is passed to `orchestrator/index.js` as a CLI argument. The orchestrator reads it, validates required fields, determines `property` and `output_type`, reads data sources in parallel, generates output, flags Yasin for review, and on approval sends to Canva for final polish and publish.

---

## Full Property Portfolio

### Maasai Mara
*Location: Olare Orok River, Big Cat Territory, near Olkiombo airstrip*

**Soroi Mara Bush Camp** (`mara-bush-camp`)
12 luxury eco-conscious tents all facing the Olare Orok River, plus Bush Wing (4 simpler tents), 2 family tents. Fully immersed in tree foliage. Eco-conscious positioning.

**Soroi Private Wing** (`private-wing`)
12 luxury tents for maximum privacy. 8 river-facing tents, 4 forest-facing tents, 2 family tents. Mahogany furniture, dark red/maroon and forest green furnishing themes. Most exclusive Mara offering.

**Soroi Luxury Migration Camp** (`luxury-migration-camp`)
10 luxury tents along the riverbank. 8 triple tents, 2 family units. River-facing, four-poster beds, private verandahs. Photographer's lounge with charging points. Positioned around the Great Migration season.

---

### Tsavo / Lumo Conservancy
*Location: Lumo Community Wildlife Sanctuary, edge of Tsavo*

**Soroi Lions Bluff Lodge** (`lions-bluff`)
Luxury lodge nestled in lush greenery with panoramic Kenyan views. Spa and wellness facilities. Rail safari accessible from Nairobi (SGR to Voi).

**Soroi Leopards Lair** (`leopards-lair`)
Cozy cottages for a rustic, intimate safari experience. Also rail safari accessible. In the heart of Lumo Conservancy near the Taita Hills. More intimate, character-led positioning.

**Soroi Cheetah Tented Camp** (`cheetah-tented-camp`)
6 twin tents and 2 family tents. Unfenced, on the lower slopes below Lions Bluff. Budget-friendlier option in the Lumo cluster. Panoramic sunset views from the shared mess area. Yoga retreats hosted here.

---

### Samburu
*Location: Samburu Game Reserve*

**Soroi Larsens Camp** (`larsens-camp`)
12 luxury tents, 2 family units, 2 deluxe luxury tented suites. Named after explorer Eric Larsen. Boutique, Gold Eco-Rated. Opened July 2024. Small and refined — boutique luxury positioning.

**Soroi Samburu Lodge** (`samburu-lodge`)
50 rooms total: 32 standard rooms, 10 superior rooms, 3 family units. Suited to corporate getaways, conferences, and incentive trips. Opened July 2025. Larger-scale, group-capable property.

---

### Amboseli
*Location: Amboseli National Park, facing Kilimanjaro and Mount Meru*

**Soroi Amboseli** (`amboseli`)
Pre-launch luxury tented camp. 16 units:
- 13 Safari Luxury Walk-in Tents with Maasai names: Olkeri, Olari, Olan, Oleng, Olengo, Olodwa, Olomas, Oloitiko, Oloololo, Olosho, Olpejeta, Olmoti, Emayian
- 1 Deluxe/Honeymoon Suite: Oldonyo
- 2 Two-Bedroom Family Units: Enkang and Boma

Forested setting. Kilimanjaro is the hero visual motif. Maasai cultural references are central to the brand.

---

### Coastal

**Soroi Blue Diani** (`diani`)
Boutique beachfront retreat on Kenya's south coast. Barefoot coastal luxury aesthetic. Active brand work: wine and cocktail menu redesigned in coastal minimal style.

---

### Nairobi

**Soroi Nairobi** (`nairobi`)
New urban luxury experience. Immersive natural African landscape aesthetic in an urban setting. [TBC — brand brief pending.]

---

## Brand System

### Soroi Blue Diani
- **Fonts:** Cinzel (titles/headlines), Poppins (body)
- **Colours:**
  - Alice Blue `#E9F5FF`
  - Cloud White `#FFFFFF`
  - Jordy Blue `#93BFEF`
  - Tufts Blue `#468BE6`
  - Cobalt Blue `#1A5799`
  - Bronze Gold `#C4A265` (accent)

### Soroi Amboseli
- **Palette names:** Tsavo Earth, Savannah Sand, Mara Gold
- **Hex values:** TBC — confirm with Yasin before using
- **Motifs:** Kilimanjaro silhouette, Maasai cultural references, Maasai unit names
- **Fonts:** TBC

### All Other Properties
Brand details are to be populated per property as work begins. See `data/rules/design-rules.md` for known partial rules.

**Rule:** If a brief references a property with incomplete brand rules, flag the gap explicitly before proceeding. Do not invent brand colours, fonts, or motifs.

---

## Design Pipeline

| Step | Action | Tool/Script |
|------|--------|-------------|
| 1 | HTML design | Claude generates full single-file HTML/CSS design using brand guidelines, inspo references, and colour system |
| 2 | PDF export | `scripts/html-to-pdf.js` converts HTML to PDF using Puppeteer |
| 3 | Canva import | PDF uploaded to Canva as the locked visual template layer |
| 4 | Content population | Canva MCP editing tools populate text fields from Excel or JSON data source using named autofill fields |
| 5 | Review | Yasin reviews, approves or redirects. Errors corrected via further MCP prompts or manual polish in Canva |

**Never use Canva AI generation for brand design work. Always design in HTML first.**

---

## Canva Field Naming Convention

All Canva autofill field labels follow this schema:

```
{property}_{section}_{field}_{index}
```

Examples:
```
diani_cocktails_name_01
diani_wine_price_01
amboseli_rooms_description_03
mara_social_headline_01
larsens_factsheet_tagline_01
private-wing_brochure_body_02
```

Rules:
- Property slug must match exactly: `diani`, `amboseli`, `mara-bush-camp`, `private-wing`, `luxury-migration-camp`, `lions-bluff`, `leopards-lair`, `cheetah-tented-camp`, `larsens-camp`, `samburu-lodge`, `nairobi`
- Index is always two digits: `_01`, `_02`, `_03`
- All lowercase, hyphens only within property slug (no underscores in slugs)
- This convention is deterministic — no pattern-matching at runtime

Always apply this convention when labelling new templates. Document new field names in `data/rules/canva-rules.md`.

---

## Brief System

**Trigger:** Drop a JSON brief into `briefs/` and run:
```bash
node orchestrator/index.js briefs/my-brief.json
```

The orchestrator:
1. Reads and parses the brief
2. Validates required fields: `job_id`, `property`, `output_type`, `status`
3. Checks `status === "ready"` before proceeding
4. Validates `property` against the known slug list
5. Reads data sources in parallel (copy library, design rules, image index)
6. Routes to the correct generation script based on `output_type`

**Output types:**
- `instagram_post`
- `facebook_post`
- `newsletter`
- `whatsapp`
- `factsheet`
- `menu`
- `brochure`
- `social_video`

**Brief template:** See `briefs/_brief-template.json`

---

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/generate-post.js` | Social post generation (image or video mode) |
| `scripts/generate-factsheet.js` | Factsheet / PDF generation |
| `scripts/generate-menu.js` | Menu pipeline (HTML → PDF → Canva) |
| `scripts/generate-brochure.js` | Brochure pipeline |
| `scripts/html-to-pdf.js` | Shared Puppeteer utility for HTML → PDF conversion |

---

## Data Sources

| Path | Contents |
|------|---------|
| `data/image-index.json` | Index of all physical drive assets |
| `data/copy-library/{property}.md` | Offer text, taglines, T&Cs per property |
| `data/rules/design-rules.md` | Brand guidelines and design rules |
| `data/rules/copy-rules.md` | Tone of voice and copy rules |
| `data/rules/canva-rules.md` | Canva field naming, template IDs, export settings |

---

## Review Workflow

1. All generated outputs land in `outputs/pending-review/`
2. Yasin reviews and either:
   - **Approves** → file moved to `outputs/approved/`
   - **Redirects** → prompt revisions, regenerate, return to step 1
3. Never mark a task complete until the output file exists in `outputs/pending-review/`
4. Always explicitly flag the output for review — never silently complete

---

## Epistemic Rule

Never present generated, inferred, or speculated content as fact.

Label assumptions at the sentence level:
- `[Inference]` — logical conclusion from available data
- `[Speculation]` — plausible but not grounded in data
- `[Unverified]` — sourced from brief or prior context but not confirmed

If information is missing, surface the gap explicitly. Do not fill it silently.

---

## Known Gaps (as of project init)

- Amboseli hex values for Tsavo Earth, Savannah Sand, Mara Gold: **TBC**
- Amboseli fonts: **TBC**
- All Mara property brand specifics beyond general colour notes: **TBC**
- Tsavo / Lumo property brand specifics: **TBC**
- Samburu Lodge brand specifics: **TBC**
- Nairobi brand brief: **TBC — pending**
- `data/image-index.json` entries: to be populated as assets are indexed
- Canva template IDs: to be added to `data/rules/canva-rules.md` as templates are created
