# Green Lawn Solutions Inc.

## Verified business facts
- Family-owned lawn care, landscaping and outdoor insect-control business in Harrison, Maine. Established in 2017; led by Steven and Debra Thomas.
- Confirmed service area: Lakes Region, Oxford Hills and Western Maine. Residential and commercial properties.
- Services: organic tick and mosquito control; fertilizer and weed control; mowing; spring/fall cleanup; landscape design and construction; lawn repair.
- Phone: (207) 583-7502. Published email: greenlawnsolution@yahoo.com. Mailing address: P.O. Box 33, Harrison, ME 04040.
- Main source, checked October 15, 2026: https://www.greenlawnsolutionsinc.net/
- Services and booking: https://www.greenlawnsolutionsinc.net/book-online
- Tick/mosquito description: https://www.greenlawnsolutionsinc.net/booking-calendar/pest-control
- Fertilizer description: https://www.greenlawnsolutionsinc.net/booking-calendar/fertilizer-weed-control
- Do not claim treatments are harmless, chemical-free, pet-safe, guaranteed, or effective for a specified duration. No product details or treatment schedule verified. Do not turn individual customer experiences into guarantees.

## Existing site functions and issues
| Function | Observed behavior | Proposed handling |
| --- | --- | --- |
| Navigation | Open/close menu with Home and Book Online | Accessible compact navigation and mobile drawer |
| Service booking | Five named services link to individual Wix booking calendars; slot availability and completed bookings not tested | Preserve existing booking URLs. Do not invent a scheduling backend |
| Testimonials | Three static testimonial rows on desktop, with no slider controls in inspected DOM or section | Optional new keyboard/touch carousel. Clearly separate the redesign from current behavior |
| Pay Now | Opens embedded Wix cashier checkout displaying $1.00 | Confirm intended payment workflow before implementing payment. Do not reproduce fixed $1 checkout or embed session URLs |
| Apply Now | Two-page downloadable job-application PDF | Preserve public PDF link in footer: https://www.greenlawnsolutionsinc.net/_files/ugd/d03380_b4166ac9b4654e49a98d29c48653246e.pdf |
| Email | Displays real Yahoo address but homepage mailto points to info@mysite.com | Use the verified displayed address if email functionality is authorized |
| Social | Facebook icon links to facebook.com/wix | Omit until actual company profile is verified |
| Policy links | Privacy, accessibility, terms and refund labels lead back to homepage | Do not represent these as valid policy documents |
| Placeholder content | Heading 1, Service 6, customized, future copyright year | Omit from concept |
| Homepage CTAs | Explore More and Learn More buttons present | Replace vague labels with useful section navigation and inquiry actions |
- No visible inquiry form in the inspected homepage. No testimonial slider was found on the original site. The concept adds a touch/keyboard carousel. No star ratings verified.

## Project and deployment
- Shared starter successfully cloned from https://github.com/NickRoyOfficial/prospect-starter . React + TypeScript + Vite + Tailwind + shadcn/ui + Lucide are already installed in the starter source and lockfile.
- Local checkout: green-lawn-solutions. Original remote renamed to starter to prevent accidental prospect pushes into shared source.
- Prospect target repository: https://github.com/NickRoyOfficial/green-lawn-solutions . Initial main head c1834f7782ef64d62986b1caa14b8c14ac400296, containing only README.md.
- Prospect branch: main. origin points to the prospect; starter points to the shared foundation.
- Cloudflare Worker name: green-lawn-solutions, matching the prospect repository. Dashboard/review URL: not created yet. User plans to create the Cloudflare app after source is ready.
- wrangler.jsonc now targets green-lawn-solutions and serves dist/.
- Verified starter Cloudflare Git workflow: repository root /; empty build command; deploy command npm run deploy. Deploy script builds dist. Node >=22.12.
- Conversion goal: ask about property care or reach existing service booking. Hero inquiry should prepare a reviewable draft in concept mode; no test inquiry to company and no false delivery state.
- Independent prospect concept, not an authorized official launch. Keep noindex.

## Implemented direction
- Distinct from the last landscaping concept: light, editorial composition with warm ivory, forest green, restrained lime, generous image crops and precise typography. Preserve existing brand logo.
- Hero: 100svh with 100vh fallback, including navigation. Split composition: clear local lawn-care/insect-control positioning and compact service inquiry alongside the supplied front-lawn photograph. Allow content growth at very short viewports and enlarged text.
- Services: five purposeful photo-led cards with mixed proportions and Lucide icons. No fabricated service named Service 6.
- Tick and mosquito feature: dark forest-green section with shield detail from the existing logo, clear service information, and a useful inquiry action. Do not invent treatment processes or safety claims.
- Photo section: mixed-size company-site image gallery with accessible lightbox or carousel. Keep source mapping here; do not claim authorship or specific projects.
- Story/service area: portrait of owners, concise family-business story, verified regions.
- Testimonials: use genuine source-backed testimonials under source quotation limits. Optional carousel as a redesign feature, not a claim about the original website. No invented ratings.
- Closing inquiry/footer: tap-to-call, source-backed contact details, existing booking and application links. Preserve payments only after workflow is clarified.
- Motion: subtle image entrances, CSS hover states, accessible slider controls and reduced-motion handling. No scroll hijacking or heavy animation dependencies.
- User supplied the prospect repository after the compact section plan. The page implements that direction. Desktop, mobile and short mobile layouts were visually inspected.

## Asset map
| File under public/assets | Subject / source | Proposed use and limitations |
| --- | --- | --- |
| green-lawn-solutions-logo.svg | Vector trace of supplied company raster; transparent; black, green and red paths | Header/footer; retain proportions, original typography and phone. Not a redesign. No embedded bitmap or font dependency |
| front-lawn.webp | Supplied c6065f45 image, 732 x 548 | Main hero crop; avoid full-screen desktop enlargement |
| pond-landscape.webp | Supplied 9749a419 image, 936 x 524 | Landscape card/gallery |
| lakeside-lawn.webp | Supplied 3a19eeff image, 624 x 854; person applying an outdoor treatment near a lake | Vertical gallery/feature |
| owners.webp | Supplied 05280ed image, 584 x 602 | Our story portrait; do not infer individual identities beyond company source |
| garden-path.webp | Additional existing company-site asset 9a2e8665, 1080 x 810 | Landscape image feature |
| mulched-bed.webp | Additional existing company-site asset e80c46a8, 1080 x 810 | Cleanup/landscaping imagery, no unsupported project claims |
| company-truck.webp | Additional existing company-site asset db9c23f8, 945 x 714 | Company context; do not name depicted people |
- Retrieved but excluded: f95f7f69 garden panorama, 1920 x 1080. Grand formal-estate setting is less representative of the proposed Maine residential positioning; authorship unverified.
- All site photo source URLs: https://static.wixstatic.com/media/d03380_<asset-id>~mv2.jpg (db9c23f8 source uses .jpeg). Complete IDs retained in original uploaded filenames and research record.

## Build and verification
- React page built with supplied and company-site photos; self-hosted Manrope and DM Serif Display fonts with OFL licenses.
- Existing starter controls reused for buttons, inputs, labels, mobile sheet, dialogs, accordion and carousel.
- Inquiry prepares a reviewable mailto draft to the published company email; no automatic submission. No test inquiry was sent.
- Native form inputs are 16px on mobile to avoid automatic focus zoom.
- Gallery supports arrow buttons, left/right keys and Escape; closing returns focus to the opening photo. Inquiry dialog returns focus to its submit control.
- CSS entrances, hover motion and a slowly rotating dashed orbit; reduced motion disables animations and keeps content visible.
- Corrected inherited checks to recognize Vite public asset paths and distinguish JSX object literals from unresolved template tokens.
- Noindex and independent concept disclosure retained.

## Pending
- Source prepared for the verified main branch. Final checks: npm run check, all 5 node tests, production build, and all 18 Playwright browser tests passed.
- User creates Cloudflare Worker from the GitHub repository; deployment/live review cannot be verified before that exists.
- Confirm payment intent and connect a real inquiry endpoint before any authorized official launch. Current concept retains booking links and links customer payments to the original site.
