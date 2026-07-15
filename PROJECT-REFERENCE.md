# Soroi Review Programme — Master Reference

Compiled 2026-07-14. Canonical data source: `data/review-links.json` — every deliverable pulls links from there.

## Review links — all properties

| Property | TripAdvisor review link | Google review link |
|---|---|---|
| Mara Bush Camp | https://www.tripadvisor.com/UserReviewEdit-d1816384?m=66883 | https://search.google.com/local/writereview?placeid=ChIJXQ-Y7jT6LBgR1iGYcqNv3jg |
| Private Wing | https://www.tripadvisor.com/UserReviewEdit-d3839970?m=66883 | https://search.google.com/local/writereview?placeid=ChIJ5Ui8tiT3LBgRL0_OmjMJZNs |
| Luxury Migration Camp | https://www.tripadvisor.com/UserReviewEdit-d25066857?m=66883 | https://search.google.com/local/writereview?placeid=ChIJOWpw0GT7LBgRaJ0biv5Sv_8 |
| Lions Bluff Lodge | https://www.tripadvisor.com/UserReviewEdit-d1532515?m=66883 | https://search.google.com/local/writereview?placeid=ChIJ6zkckFjjOBgRWuhyIK-Nqps |
| Leopards Lair | https://www.tripadvisor.com/UserReviewEdit-d23376512?m=66883 | https://search.google.com/local/writereview?placeid=ChIJg7pDsdHjOBgRI7a9tu80I2A |
| Cheetah Tented Camp | https://www.tripadvisor.com/UserReviewEdit-d23375119?m=66883 | https://search.google.com/local/writereview?placeid=ChIJbZ5E05wXLxgRtRtwA4xjAs0 |
| Larsens Camp | https://www.tripadvisor.com/UserReviewEdit-d597389?m=66883 | https://search.google.com/local/writereview?placeid=ChIJ9eKaDmaNiBcRr3ZXhYEIjUA |
| Samburu Lodge | https://www.tripadvisor.com/UserReviewEdit-d33325014?m=66883 | https://search.google.com/local/writereview?placeid=ChIJX32AdwCPiBcRueP53l5VM0s |
| Soroi Amboseli | https://www.tripadvisor.com/UserReviewEdit-d34465046?m=66883 | https://search.google.com/local/writereview?placeid=ChIJBwcLDwCZMBgRH4UuDWHSw0o |
| Soroi Blue Diani | https://www.tripadvisor.com/UserReviewEdit-d34465047?m=66883 | https://search.google.com/local/writereview?placeid=ChIJWxMKwdFFQBgRLC5EdagNqww |

- TripAdvisor IDs d1816384–d597389 (first 7): decoded from the old bookmark cards' QRs and verified.
- Samburu Lodge d33325014: found via listing search. Amboseli d34465046 & Diani d34465047: listing URLs supplied by Yasin (new listings, July 2026).
- Google place IDs: extracted from Google Maps and verified against listing names.
- Note: Leopards Lair's Google listing is named "Soroi Leopard Lair" (singular) — correction pending in Google Business Profile.

## Planned adventure-page URLs (for NFC mats — not yet live)

`soroi.com/review/{slug}` per property — slugs: `mara-bush-camp`, `private-wing`, `luxury-migration-camp`, `lions-bluff`, `leopards-lair`, `cheetah-tented-camp`, `larsens-camp`, `samburu-lodge`, `amboseli`, `diani`. Pages built in `adventure-pages/`; hosting + bridge redirects with web team (see `adventure-pages/README-web-team.md`).

## QR code assets

| Asset | Location | Notes |
|---|---|---|
| **Vector QR masters (use these)** | `assets/tripadvisor-qr/svg/{slug}_{tripadvisor|google}_qr.svg` | 20 files, generated from review-links.json. Tsavo Earth `#3D2B1F` modules; Diani's pair in Cobalt `#1A5799` |
| Old QR raster crops (archive) | `assets/tripadvisor-qr/{slug}_tripadvisor_qr.png` | 7 files decoded from the old Canva bookmarks — superseded, don't print from these |
| Asset manifest | `assets/tripadvisor-qr/README.md` | Full extraction history |

Every QR on every finished deliverable has been machine-decoded from the rendered artwork and checked against review-links.json (tent cards 2026-07-07, checkout cards 2026-07-13).

## Deliverables inventory (all in `outputs/pending-review/tripadvisor-cards/`)

| Deliverable | Files | Status |
|---|---|---|
| A6 tent cards (on-table) | `{slug}-review-tent-card.html/.pdf` × 10 | Built, QR-verified, pending review |
| Checkout keepsake cards (85×55mm, with gift) | `checkout-cards/` × 10 + README with print spec | Built, QR-verified, pending review |
| Tent cards presentation | `Soroi Review Tent Cards.pptx` (10 slides) | Ready |
| Adventure mats presentation | `Soroi Adventure Mats.pptx` (10 slides, incl. NFC explainer + YouTube link slide) | Ready |
| Adventure pages (NFC landing) | `adventure-pages/{slug}.html` × 10 + web-team README | Built; awaiting hosting |
| Mat commissioning brief | `artisan-brief-adventure-mat.md` | Ready; maker/budget TBC |
| Concept plan | `CONCEPTS-BEYOND-THE-CARD.md` | Current (mat direction; 10-object archive at bottom) |
| Mockups + Gemini prompts | `mockup-assets/` (20 face PNGs, 4 card mockups, 2 mat mockups, 1 tap shot, MOCKUP-GUIDE.md) | — |

Old Canva design (superseded): DAGAB1XVRnM "TripAdvisor Bookmark style 6.5×21cm NOT IN USE" — https://canva.link/c4g8hepo7ejxnjy

## GPS coordinates (on checkout card fronts, from Google Maps place data)

Mara Bush Camp 1.4032°S 35.1109°E · Private Wing 1.4025°S 35.1122°E · Luxury Migration Camp 1.3992°S 35.1107°E · Lions Bluff 3.5009°S 38.2071°E · Leopards Lair 3.4878°S 38.2072°E · Cheetah Tented Camp 3.4885°S 38.2056°E · Larsens Camp 0.5716°N 37.5711°E · Samburu Lodge 0.5724°N 37.5372°E · Amboseli 2.6665°S 37.2108°E · Soroi Blue 4.2718°S 39.5971°E

## Open items

1. Yasin: review/approve tent cards + checkout cards → print orders (specs in the two READMEs)
2. Web team: confirm `soroi.com/review/{slug}` scheme, host pages or set bridge redirects
3. Mats: choose leather maker + two cooperatives (prototypes: Soroi Blue, Samburu Lodge); budget/deadline in brief
4. NFC tags: buy NTAG213 25mm stickers, program with final soroi.com URLs, write-lock, label per property
5. Google Business Profile: fix "Soroi Leopard Lair" → "Soroi Leopards Lair"
6. Optional: official platform logos in Canva pass; Diani "OUR SAFARI" → "OUR STAY" swap if wanted
