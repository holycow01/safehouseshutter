# SEO & Crawlability Guidelines
## Safehouse Shutter Impact Windows & Doors

This document outlines SEO best practices for maintaining and expanding the website.

---

## 1. URL Structure

### Clean URL Format
Use lowercase, hyphenated URLs that are descriptive and keyword-rich:

```
✅ Good URLs:
/services/impact-windows.html
/service-areas/plantation-fl.html
/blog/hurricane-preparation-tips.html

❌ Bad URLs:
/services/ImpactWindows.html
/service_areas/plantation_FL.html
/page?id=123
```

### URL Hierarchy
```
safehouseshutter.com/
├── index.html                          # Homepage
├── about.html                          # About Us
├── contact.html                        # Contact & Free Estimate
├── services.html                       # Services Overview
├── testimonials.html                   # Customer Reviews
├── blog.html                           # Blog Index
├── gallery.html                        # Project Gallery
├── services/
│   ├── impact-windows.html
│   ├── impact-doors.html
│   └── hurricane-shutters.html
├── service-areas/
│   ├── plantation-fl.html
│   ├── sunrise-fl.html
│   ├── fort-lauderdale-fl.html
│   ├── coral-springs-fl.html
│   ├── davie-fl.html
│   └── broward-county-fl.html
└── blog/
    └── [article-slug].html
```

---

## 2. Image Alt-Text Rules

### Requirements
Every `<img>` tag MUST have an `alt` attribute.

### Format Guidelines

**Product/Service Images:**
```html
<img src="images/impact-window-installation.jpg" 
     alt="Impact window installation in Plantation FL home by Safehouse Shutter">
```

**Before/After Images:**
```html
<img src="images/before-hurricane-damage.jpg" 
     alt="Home before impact window installation showing outdated single-pane windows">

<img src="images/after-impact-windows.jpg" 
     alt="Same home after impact window installation with new hurricane-rated windows">
```

**Team/Staff Photos:**
```html
<img src="images/harry-kuant.jpg" 
     alt="Harry Kuant, Owner and President of Safehouse Shutter">
```

**Gallery/Portfolio Images:**
```html
<img src="images/project-coral-springs-01.jpg" 
     alt="Accordion hurricane shutters installed on Coral Springs FL residence">
```

### Alt-Text Best Practices
1. **Be descriptive** — Describe what's in the image
2. **Include location** — Add city/county when relevant
3. **Include service type** — Mention the product/service shown
4. **Keep it natural** — Don't keyword stuff
5. **Keep under 125 characters** — Screen readers may truncate longer text
6. **Don't start with "Image of..." or "Picture of..."**

### Decorative Images
For purely decorative images (backgrounds, icons), use empty alt:
```html
<img src="images/decorative-wave.svg" alt="">
```

---

## 3. Internal Linking Strategy

### Link Architecture

**Homepage** should link to:
- All main service pages
- All primary service area pages
- About, Contact, Testimonials
- Featured blog posts (when available)

**Service Pages** should link to:
- Related services (impact windows ↔ impact doors ↔ hurricane shutters)
- Service areas where that service is offered
- Relevant testimonials
- Contact/Free Estimate page

**Service Area Pages** should link to:
- All services offered in that area
- Nearby service areas
- Local testimonials (if available)
- Contact page

**Blog Posts** should link to:
- Relevant service pages
- Related blog posts
- Service areas mentioned
- Contact/Free Estimate page

### Anchor Text Guidelines

**Use Descriptive Anchor Text:**
```html
✅ Good:
<a href="services/impact-windows.html">impact window installation</a>
<a href="service-areas/plantation-fl.html">hurricane shutters in Plantation FL</a>

❌ Bad:
<a href="services/impact-windows.html">click here</a>
<a href="services/impact-windows.html">learn more</a>
```

**Vary Anchor Text:**
Don't use the exact same anchor text for every link to a page:
- "impact windows"
- "impact window installation"
- "hurricane-rated windows"
- "impact windows in South Florida"

### Recommended Internal Links Per Page
- **Minimum:** 3-5 internal links
- **Maximum:** 15-20 internal links
- Focus on relevance over quantity

---

## 4. Schema.org Structured Data

### Required Schema Types by Page

| Page Type | Schema Types |
|-----------|--------------|
| Homepage | LocalBusiness, Organization, Service |
| About | AboutPage, LocalBusiness |
| Services | Service, LocalBusiness |
| Service Areas | LocalBusiness (with areaServed) |
| Testimonials | LocalBusiness, AggregateRating, Review |
| Contact | LocalBusiness, ContactPage |
| Blog Index | Blog, Organization |
| Blog Post | Article, FAQPage (if applicable) |
| FAQ sections | FAQPage |

### LocalBusiness Schema (Use on all pages)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Safehouse Shutter Impact Windows & Doors",
  "image": "https://safehouseshutter.com/images/logo.png",
  "telephone": "(954) 399-0262",
  "email": "info@safehouseshutter.com",
  "url": "https://safehouseshutter.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Plantation",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.1276,
    "longitude": -80.2331
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "areaServed": [
    {"@type": "City", "name": "Plantation"},
    {"@type": "City", "name": "Sunrise"},
    {"@type": "City", "name": "Fort Lauderdale"},
    {"@type": "City", "name": "Coral Springs"},
    {"@type": "City", "name": "Davie"},
    {"@type": "AdministrativeArea", "name": "Broward County"}
  ]
}
```

### FAQPage Schema (for pages with FAQ sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    }
  ]
}
```

---

## 5. Meta Tags Checklist

### Every Page Must Have:

```html
<!-- Title: 50-60 characters, primary keyword near start -->
<title>Impact Windows Installation in Plantation FL | Safehouse Shutter</title>

<!-- Description: 150-160 characters, include CTA -->
<meta name="description" content="Professional impact window installation in Plantation FL. Hurricane protection, energy efficiency, and security. Get a free estimate today.">

<!-- Canonical URL -->
<link rel="canonical" href="https://safehouseshutter.com/services/impact-windows.html">

<!-- Robots -->
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://safehouseshutter.com/services/impact-windows.html">
<meta property="og:title" content="Impact Windows Installation | Safehouse Shutter">
<meta property="og:description" content="Professional impact window installation in South Florida.">
<meta property="og:image" content="https://safehouseshutter.com/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
```

### Title Tag Formula
```
[Primary Keyword] in [Location] | Safehouse Shutter
OR
[Service/Page Name] | [Secondary Keyword] | Safehouse Shutter
```

---

## 6. Heading Structure

### Rules
1. **One H1 per page** — Contains primary keyword
2. **H2s for main sections** — Support the H1 topic
3. **H3s for subsections** — Break down H2 content
4. **Don't skip levels** — H1 → H2 → H3 (not H1 → H3)

### Example Structure
```
H1: Impact Windows Installation in South Florida

  H2: Benefits of Impact Windows
    H3: Hurricane Protection
    H3: Energy Efficiency
    H3: Home Security
  
  H2: Types of Impact Windows We Install
    H3: Single-Hung Windows
    H3: Casement Windows
  
  H2: Our Installation Process
  
  H2: Service Areas
  
  H2: Frequently Asked Questions
```

---

## 7. XML Sitemap Maintenance

### Location
`/sitemap.xml`

### Update When:
- Adding new pages
- Removing/redirecting pages
- Significant content updates

### Priority Guidelines
| Page Type | Priority |
|-----------|----------|
| Homepage | 1.0 |
| Service Pages | 0.9 |
| Contact Page | 0.9 |
| Service Area Pages | 0.8 |
| About Page | 0.8 |
| Testimonials | 0.7 |
| Blog Index | 0.7 |
| Blog Posts | 0.6 |
| Gallery | 0.6 |

---

## 8. Page Speed Considerations

### Image Optimization
- Use WebP format when possible
- Compress images (target < 200KB for most images)
- Specify width and height attributes
- Use lazy loading for below-fold images

```html
<img src="image.webp" 
     alt="Description" 
     width="800" 
     height="600" 
     loading="lazy">
```

### Critical CSS
- Inline critical CSS for above-fold content
- Defer non-critical CSS

### JavaScript
- Load scripts with `defer` attribute when possible
- Minimize third-party scripts

---

## 9. Local SEO Signals

### NAP Consistency
Ensure Name, Address, Phone are identical across:
- Website (footer, contact page)
- Google Business Profile
- Yelp, Facebook, other directories

**Standard Format:**
```
Safehouse Shutter Impact Windows & Doors
Plantation, FL
(954) 399-0262
```

### Location Signals in Content
- Mention service areas naturally in content
- Include local landmarks when relevant
- Reference Florida building codes
- Mention hurricane seasons/local weather

---

## 10. Content Quality Checklist

Before publishing any page:

- [ ] Unique title tag (50-60 chars)
- [ ] Unique meta description (150-160 chars)
- [ ] One H1 containing primary keyword
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] All images have descriptive alt text
- [ ] At least 3-5 internal links
- [ ] Call-to-action present
- [ ] Schema.org markup added
- [ ] Mobile-responsive
- [ ] Page loads in under 3 seconds
- [ ] No broken links
- [ ] Spelling/grammar checked

---

## 11. Files Reference

| File | Purpose |
|------|---------|
| `sitemap.xml` | XML sitemap for search engines |
| `robots.txt` | Crawler instructions |
| `SEO-GUIDELINES.md` | This document |

---

*Last Updated: January 6, 2026*

