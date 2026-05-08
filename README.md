# Cadence AI — VSL Landing Page

A high-conversion VSL (video sales letter) landing page for **Cadence AI**, an outbound platform that books 30+ qualified calls a month on autopilot.

**Live site:** https://vsl-cadence-ai.vercel.app

## Stack

- Static HTML, served as-is (no build step)
- React 18 loaded via CDN, JSX transformed in-browser by Babel Standalone
- Hand-rolled CSS (`styles.css`, `scroll-anim.css`) — Inter / Inter Tight / JetBrains Mono from Google Fonts
- Vanilla JS for cursor glow + scroll animations (`scroll.js`)

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Entry point, mounts the React app, wires up nav + cursor glow |
| `index_v1_dark.html` | Earlier dark-mode draft, kept for reference |
| `icons.jsx` | Inline SVG icon set used across sections |
| `sections-1.jsx` | Hero, Trust bar, embedded VSL block |
| `sections-2.jsx` | Funnel, Metrics, Features |
| `sections-3.jsx` | Tech depth, Live dashboard, Testimonials, Final CTA, Footer |
| `styles.css` | Design tokens, layout, component styles |
| `scroll-anim.css` | Reveal-on-scroll keyframes |
| `scroll.js` | IntersectionObserver-driven scroll reveals |
| `vercel.json` | Vercel config (clean URLs, no trailing slash) |

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushed to Vercel — production URL above. Any push to `main` can be wired to auto-deploy via the Vercel dashboard.
