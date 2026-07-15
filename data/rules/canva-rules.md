# Soroi Assistant — Canva Workflow Rules

## Non-Negotiable Rules

1. **Never use Canva AI generation** for brand design work. The design layer always comes from Claude-generated HTML → PDF.
2. All text fields must be named before handoff using the field naming convention below.
3. Always verify field names against this document before populating a template.
4. Export settings must match the output type — do not export at wrong dimensions.

---

## Field Naming Convention

**Schema:**
```
{property}_{section}_{field}_{index}
```

**Rules:**
- `property` — exact property slug (see list below)
- `section` — the content section or design block (e.g. `cocktails`, `rooms`, `social`, `factsheet`)
- `field` — the data point being populated (e.g. `name`, `price`, `description`, `headline`, `tagline`)
- `index` — always two digits, zero-padded: `01`, `02`, `03`

**Property slugs (exact):**
```
diani
amboseli
mara-bush-camp
private-wing
luxury-migration-camp
lions-bluff
leopards-lair
cheetah-tented-camp
larsens-camp
samburu-lodge
nairobi
```

---

## Field Name Examples by Property and Output Type

### Diani — Menu
```
diani_cocktails_name_01
diani_cocktails_description_01
diani_cocktails_price_01
diani_wine_name_01
diani_wine_origin_01
diani_wine_price_01
diani_wine_glass_price_01
```

### Amboseli — Room Listing
```
amboseli_rooms_name_01
amboseli_rooms_description_01
amboseli_rooms_price_01
amboseli_rooms_capacity_01
```

### Mara — Social Post
```
mara-bush-camp_social_headline_01
mara-bush-camp_social_body_01
mara-bush-camp_social_cta_01
private-wing_social_headline_01
luxury-migration-camp_social_headline_01
```

### Larsens — Factsheet
```
larsens-camp_factsheet_tagline_01
larsens-camp_factsheet_intro_01
larsens-camp_factsheet_highlight_01
larsens-camp_factsheet_highlight_02
larsens-camp_factsheet_highlight_03
larsens-camp_factsheet_rate_01
larsens-camp_factsheet_validity_01
```

### Samburu Lodge — Conference Sheet
```
samburu-lodge_conference_headline_01
samburu-lodge_conference_capacity_01
samburu-lodge_conference_amenity_01
samburu-lodge_conference_rate_01
```

### Lions Bluff — Spa Menu
```
lions-bluff_spa_treatment_name_01
lions-bluff_spa_treatment_duration_01
lions-bluff_spa_treatment_price_01
```

### Cheetah — Social
```
cheetah-tented-camp_social_headline_01
cheetah-tented-camp_social_offer_01
cheetah-tented-camp_social_cta_01
```

---

## Template Population Workflow

1. Claude generates HTML design → Puppeteer exports PDF → PDF uploaded to Canva
2. In Canva, PDF is set as the locked background layer
3. Text fields are placed as editable elements on top of the PDF layer
4. Each field is named according to the convention above
5. Content is populated via Canva MCP editing tools using a JSON or Excel data source
6. After population, content is reviewed in Canva before any export

---

## Export Settings by Output Type

| Output Type | Dimensions | Format | Notes |
|-------------|------------|--------|-------|
| `instagram_post` | 1080 × 1350 px | PNG or JPG | Portrait format, 4:5 ratio |
| `instagram_story` | 1080 × 1920 px | PNG or JPG | 9:16 ratio |
| `facebook_post` | 1200 × 630 px | PNG or JPG | Landscape, link preview safe |
| `facebook_story` | 1080 × 1920 px | PNG or JPG | Same as IG story |
| `newsletter` | 600 px wide | HTML or PNG slices | Email-safe width |
| `whatsapp` | 800 × 800 px min | JPG | Keep file size under 5MB |
| `factsheet` | A4 (210 × 297 mm) | PDF | Print-ready, 300 DPI |
| `menu` | A4 or custom | PDF | Confirm dimensions per brief |
| `brochure` | A4 or DL | PDF | Confirm fold and bleed per brief |
| `social_video` | 1080 × 1350 px | MP4 | 15–30 sec, confirm frame rate |

---

## Canva Template IDs

To be populated as templates are created. Add entries here in format:

```
{property}_{output_type}: {canva-design-id}
```

Example:
```
diani_menu: [TBC — add after first Diani menu template is created in Canva]
amboseli_instagram_post: [TBC]
larsens-camp_factsheet: [TBC]
```

---

## Notes

- Canva MCP tools can: get design content, start/commit editing transactions, perform editing operations, upload assets, export designs
- Always start an editing transaction before making changes and commit or cancel when done
- Never leave an open uncommitted transaction
- If a Canva operation fails, cancel the transaction before retrying
