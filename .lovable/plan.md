

# Turn this into a live site & sell it to Willistown Auto Repair

Here's a concrete plan to take the demo from a Lovable preview to a polished, paid-for live site.

## Phase 1 — Polish before you pitch (recommended, ~30 min of edits)

A few quick fixes will make the demo dramatically more convincing in a sales meeting:

1. **Replace placeholder contact info with real data**
   - Confirm the real phone number, address, and hours from their Google Business Profile (current placeholders: `(610) 647-1234`, `123 West Chester Pike`).
   - Update `Contact.tsx`, `Footer.tsx`, `Nav.tsx`, `Hero.tsx`.
2. **Wire the contact form to actually send**
   - Right now the form just shows a success state — nothing is sent. Two options:
     - **Lovable Cloud + Resend** (recommended): store submissions in a `leads` table and email Jason on every submit.
     - **Formspree / Web3Forms** (no backend): paste an endpoint URL, zero config.
3. **Swap the embedded map** to the real shop address.
4. **Add a favicon + social share image** (the hero image works great as `og:image`).
5. **Optional SEO bumps**: LocalBusiness JSON-LD schema, sitemap.xml, robots.txt — big help for a local service business showing up in "mechanic near me" searches.

## Phase 2 — Publish the site

1. In the Lovable editor, click **Publish** (top-right).
2. You'll get a free `.lovable.app` URL immediately — perfect for sharing in your sales pitch as a live demo.

## Phase 3 — Connect a custom domain

The owner will need a real domain (e.g. `willistownauto.com`).

- **Easiest path**: buy the domain directly inside Lovable (**Project Settings → Domains → Buy new domain**). Lovable auto-configures DNS and SSL.
- **If they already own one** (or buy from Namecheap/GoDaddy): in **Project Settings → Domains → Connect Domain**, enter the domain, then add the A records (`@` and `www` → `185.158.133.1`) and the `_lovable` TXT record at their registrar. SSL provisions automatically.
- **Note**: Custom domains require a **Pro plan or higher** on Lovable.

## Phase 4 — Hand off to the client (the "sell it" part)

You have two viable business models:

### Option A — One-time build + monthly hosting (recommended)
- Charge a one-time build fee (typical range for a local-business site like this: **$1,500–$4,000**).
- Charge a monthly retainer (**$50–$150/mo**) that covers your Lovable Pro plan, domain renewal, content edits, and uptime.
- **You** keep the Lovable workspace; they just get the live site. Easiest for ongoing edits.

### Option B — Transfer ownership
- Charge a higher one-time fee (**$3,000–$6,000**) and transfer the project to their own Lovable workspace (or export the code via GitHub).
- They handle their own hosting/domain bills going forward.
- Use **Project Settings → Transfer to workspace** in Lovable, or connect GitHub and hand them the repo.

### Sales-pitch tips for the meeting
- Lead with the **live URL on your phone** — showing beats telling.
- Compare to their current presence (likely an outdated site or just a Google listing).
- Frame it around **lead generation**: a working "Schedule Service" form = more booked appointments.
- Mention the 4.9★ social proof is already wired in — you've done the homework.

---

## What I'd do right now (in build mode)

If you approve, I'll:

1. **Wire the contact form to Lovable Cloud** (saves leads to a database + emails Jason via Resend so submissions actually go somewhere).
2. **Add LocalBusiness JSON-LD schema** + favicon + `og:image` for SEO and link previews.
3. **Add a placeholder block** at the top of `Contact.tsx` / `Footer.tsx` flagging the phone/address/hours fields you need to confirm with the real business before publishing.

Then you'll click **Publish** yourself, and we can connect a domain when you're ready.

## Open questions

Before I start Phase 1, I need to know:

- Do you want the contact form to **email submissions** (needs Lovable Cloud + a Resend API key), or is the no-backend Formspree route fine?
- Do you have the **real phone number, address, and hours** for Willistown Auto Repair, or should I leave the current placeholders and flag them with TODOs?
- Are you planning to **keep ownership** of the Lovable project (Option A) or **transfer it** to the client (Option B)? This affects how I set up things like the domain.

