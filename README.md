# Ecofusion Outsourcing — Website

A 9-page static site: Home, About, three Service pages (Cruise Ship Careers,
Air Hostess & Cabin Crew, Hospitality Management), Reviews, Careers, Blog,
and Contact. Pure HTML/CSS/JS — no build step. Open `index.html` in a
browser, or upload the whole folder to any static host.

## Structure
```
index.html
about.html
services-cruise.html
services-aviation.html
services-hospitality.html
reviews.html
careers.html
blog.html
contact.html
assets/
  css/style.css      — design system (colors, type, components)
  js/main.js         — nav toggle, scroll reveals, active-link highlight
  img/               — logo + the three photos you provided
```

## Before this goes live, please replace:

**Contact details** (appears in the footer of every page, plus contact.html):
- `[Email Address]`
- `[Phone Number]`
- `[Street Address], Gurugram, India`

**Reviews page (`reviews.html`)** — the six testimonials are sample
placeholder text written to show layout/tone only. Swap in real
candidate and hiring-partner feedback.

**Careers page (`careers.html`)** — the four job cards are placeholder
examples. Swap in your actual current openings (title, location, apply
link).

**Blog page (`blog.html`)** — the six post cards are sample topics/excerpts
to show layout. Replace with real articles, and link each card's `href="#"`
to the actual post.

**Contact form** — the form in `contact.html` is markup only; it doesn't
submit anywhere yet. Wire it to your email service / form backend of choice
(e.g. Formspree, Netlify Forms, or a custom endpoint) by setting the
`<form>` tag's `action` and `method`.

**Social links** — the Instagram/LinkedIn/Facebook icons in every footer
point to `#`. Update the `href`s once accounts exist.

## Design notes
- Colors, type and component styles all live in `assets/css/style.css`
  under `:root` — change a value once and it updates everywhere.
- Palette: Deep Aubergine `#26061A`, Rich Maroon `#5F0F40`, Dusty Lavender
  `#D9C5D1`, Pale Rose `#EFE7EC`, Crisp White `#FFFFFF`.
- Fonts: Fraunces (headings) + Inter (body), loaded from Google Fonts.
- Fully responsive with a mobile nav menu; respects reduced-motion
  preferences; visible keyboard focus states throughout.
