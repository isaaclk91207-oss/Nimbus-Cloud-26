# NimbusCloud — Myanmar Cloud Services Landing Page

A modern, responsive landing page for an independent cloud services brand in Myanmar.
Built with **React 18 + Vite + Tailwind CSS v3**.

---

## 📁 Project Structure

```
nimbus-cloud/
├── index.html                    # HTML entry point (fonts, meta tags, SEO)
├── vite.config.js                # Vite bundler config
├── tailwind.config.js            # Tailwind theme (colors, fonts, animations)
├── postcss.config.js             # PostCSS (Tailwind + Autoprefixer)
├── package.json
├── public/
│   └── favicon.svg               # Brand favicon
└── src/
    ├── main.jsx                  # React DOM entry point
    ├── App.jsx                   # Root — assembles all sections
    ├── styles/
    │   └── index.css             # Global CSS (Tailwind directives + custom classes)
    ├── data/
    │   └── content.js            # All static content (services, plans, nav, etc.)
    ├── hooks/
    │   └── index.js              # useScrolled, useInView, useScrollTo
    └── components/
        ├── index.js              # Barrel export for all components
        ├── Icons.jsx             # All SVG icon components + icon maps
        ├── Logo.jsx              # NimbusCloud brand mark + wordmark
        ├── FadeIn.jsx            # Scroll-triggered fade-up animation wrapper
        ├── SectionDivider.jsx    # Gradient horizontal rule between sections
        ├── Navbar.jsx            # Sticky nav with mobile drawer
        ├── Hero.jsx              # Hero section (headline, CTAs, stats)
        ├── Services.jsx          # 5 service cards + consultation CTA card
        ├── WhyUs.jsx             # Trust/differentiator section
        ├── Pricing.jsx           # 3-tier pricing cards
        ├── Contact.jsx           # Contact form + info + success state
        └── Footer.jsx            # 4-column footer with links + branding
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/` — ready to deploy to any static host.

### 4. Preview production build locally
```bash
npm run preview
```

---

## 🎨 Customisation Guide

### Brand name / logo
Edit `src/components/Logo.jsx` — change `Nimbus` and `Cloud` text.

### All page content (copy, services, pricing, contact info)
Edit `src/data/content.js` — single source of truth for all text data.

### Colors & fonts
Edit `tailwind.config.js` — the `brand` color scale and `fontFamily` keys.

### Global styles & animations
Edit `src/styles/index.css` — custom CSS classes, keyframes, hero background.

### Add a new section
1. Create `src/components/MySection.jsx`
2. Export it from `src/components/index.js`
3. Import and place it in `src/App.jsx`

---

## 🌐 Deployment

### Netlify (drag & drop)
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Self-hosted (Nginx)
```bash
npm run build
# Copy dist/ contents to your Nginx web root
# e.g. /var/www/html/nimbuscloud/
```

---

## 🔧 Tech Stack

| Tool         | Version | Purpose                        |
|--------------|---------|--------------------------------|
| React        | 18.x    | UI framework                   |
| Vite         | 5.x     | Dev server + bundler           |
| Tailwind CSS | 3.x     | Utility-first styling          |
| PostCSS      | 8.x     | CSS processing                 |
| Autoprefixer | 10.x    | CSS vendor prefixes            |

**Fonts (Google Fonts CDN):**
- `Sora` — display/headings (weights 600, 700, 800)
- `DM Sans` — body text (weights 300, 400, 500, 600, 700)

---

## 📝 Notes

- No backend required — the contact form currently shows a success UI on submit.
  To wire it up, replace the `onSubmit` handler in `src/components/Contact.jsx`
  with a `fetch()` call to your API, Formspree, Netlify Forms, or similar.
- All content is placeholder — replace email, phone, and address in `src/data/content.js`.
- The brand name "NimbusCloud" is a placeholder — update `Logo.jsx` and `index.html` meta tags.
