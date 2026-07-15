# TripAdvisor Review QR Codes

Extracted 2026-07-07 from the old Canva design "Soroi Collection TripAdvisor Bookmark style 6.5 x 21cm NOT IN USE" (design ID `DAGAB1XVRnM`, https://canva.link/c4g8hepo7ejxnjy).

Each QR is a TripAdvisor "write a review" deep link (`UserReviewEdit-d{location_id}?m=66883`). All crops verified to still scan correctly after extraction.

| File | Property | Decoded URL |
|------|----------|-------------|
| `mara-bush-camp_tripadvisor_qr.png` | Soroi Mara Bush Camp | www.tripadvisor.com/UserReviewEdit-d1816384?m=66883 |
| `private-wing_tripadvisor_qr.png` | Soroi Private Wing (Mara Bush Camp Private Wing) | www.tripadvisor.com/UserReviewEdit-d3839970?m=66883 |
| `luxury-migration-camp_tripadvisor_qr.png` | Soroi Luxury Migration Camp | www.tripadvisor.com/UserReviewEdit-d25066857?m=66883 |
| `lions-bluff_tripadvisor_qr.png` | Soroi Lions Bluff Lodge | www.tripadvisor.com/UserReviewEdit-d1532515?m=66883 |
| `leopards-lair_tripadvisor_qr.png` | Soroi Leopards Lair | www.tripadvisor.com/UserReviewEdit-d23376512?m=66883 |
| `cheetah-tented-camp_tripadvisor_qr.png` | Soroi Cheetah Tented Camp | www.tripadvisor.com/UserReviewEdit-d23375119?m=66883 |
| `larsens-camp_tripadvisor_qr.png` | Soroi Larsens Camp | www.tripadvisor.com/UserReviewEdit-d597389?m=66883 |

## Properties not in the old design (all resolved 2026-07-07)

- Soroi Samburu Lodge (`samburu-lodge`) — TripAdvisor d33325014 (found via listing search)
- Soroi Amboseli (`amboseli`) — TripAdvisor d34465046 (URL provided by Yasin; new listing)
- Soroi Blue Diani (`diani`) — TripAdvisor d34465047 (URL provided by Yasin; new listing)
- Soroi Nairobi — does not exist yet (per Yasin, 2026-07-07); out of scope

## Regenerated vector QRs

`svg/` holds crisp regenerated QR codes for all 10 properties × 2 platforms (TripAdvisor + Google review links), generated from `data/review-links.json` — the canonical source for all review URLs. Diani's QRs use Cobalt Blue `#1A5799` modules (coastal palette); all others use Tsavo Earth `#3D2B1F`. Use these for print, not the raster crops above.

## Note on regeneration

Since the target URLs are decoded, crisp new QR codes can be regenerated at any size/colour for print instead of reusing these raster crops (~620px, extracted from a 4000px-tall page export). The crops scan fine but regeneration is recommended for final print output.
