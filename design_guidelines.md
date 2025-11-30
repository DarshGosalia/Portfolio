# Engineering Student Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern developer/designer portfolios (Linear's typography + Notion's clean layouts + GitHub's technical credibility). Professional, achievement-oriented aesthetic that appeals to technical recruiters.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, professional, excellent readability
- **Accent Font**: JetBrains Mono (Google Fonts) - for code snippets and technical tags
- **Hierarchy**:
  - Hero headline: text-6xl md:text-7xl font-bold
  - Section titles: text-4xl md:text-5xl font-bold
  - Subsection headers: text-2xl font-semibold
  - Body text: text-lg leading-relaxed
  - Project cards: text-xl font-semibold (titles), text-base (descriptions)
  - Skill tags: text-sm font-medium

## Layout System
**Spacing Primitives**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for all spacing
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl mx-auto px-6 md:px-8
- Component gaps: gap-8 md:gap-12 for grids
- Card padding: p-6 md:p-8

## Component Library

### Hero Section
- Full-viewport height (min-h-screen) with centered content
- Large hero image as background (modern engineering/technology workspace - circuit boards, CAD models, or abstract tech patterns)
- Overlay gradient for text readability
- Name + title in prominent typography
- Two-button CTA layout: "View Projects" (primary) + "Download Resume" (secondary)
- Buttons with backdrop-blur-md bg-white/10 for glass effect over image
- Subtle scroll indicator at bottom

### Navigation
- Fixed header with blur backdrop (backdrop-blur-md bg-white/80)
- Desktop: horizontal links with smooth-scroll behavior
- Mobile: hamburger menu transforming to full-screen overlay
- Active section highlighting via scroll spy

### About Section
- Two-column layout (md:grid-cols-2): Professional photo left, content right
- Photo: rounded-2xl with subtle shadow, 400x400px minimum
- Bulleted achievement highlights with custom bullet points (→ arrow icons from Heroicons)

### Skills Section
- Four-category grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each category card with icon header + skill list
- Skill items as pill-shaped tags (rounded-full px-4 py-2)
- Icons from Heroicons (code, wrench, chart-bar, users for categories)

### Projects Showcase
- Masonry-style grid of 6 projects (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: Project thumbnail image (16:9 ratio), title, 2-3 line description, tech tag pills
- Expandable modal on click with full project details
- Modal includes: larger images, problem/solution/results sections, GitHub + demo links
- Tech tags using JetBrains Mono font

### Education Section
- Single-column centered layout with university logo
- Timeline-style presentation if multiple institutions
- Course highlights in 3-column grid (grid-cols-1 md:grid-cols-3)

### Contact Section
- Centered layout with large social icons (96x96px from Font Awesome)
- Icon grid for LinkedIn, GitHub, Email (grid-cols-3 gap-8)
- Resume download button prominent and centered
- Location and availability status

## Images
**Hero Image**: Large background image (1920x1080 minimum) showing modern engineering workspace, technology, or abstract tech patterns - should convey innovation and professionalism. Apply dark overlay (bg-black/40) for text contrast.

**About Photo**: Professional headshot or casual professional photo (400x400px), well-lit, neutral background

**Project Thumbnails**: 6 images (800x450px each, 16:9 ratio) showing project interfaces, prototypes, or results. Screenshots of working projects preferred.

**University Logo**: Clean SVG or high-res PNG (200x200px) for education section

## Animations
- Smooth scroll behavior for navigation
- Fade-in on scroll for section content (use Intersection Observer)
- Hover lift effect on project cards (translate-y-1 transition)
- Modal slide-in from bottom animation
- No excessive animations - maintain professional feel

## Interaction Patterns
- Project cards: Hover reveals "View Details" overlay
- Modal: Click outside or X button to close, ESC key support
- Resume button: Immediate download, no form required
- All external links open in new tabs (target="_blank")
- Smooth scroll offset for fixed header (scroll-margin-top)

## Mobile Optimization
- Stack all multi-column layouts to single column
- Hamburger menu: Heroicons bars-3 icon
- Touch-friendly tap targets (min 44x44px)
- Optimized image sizes via srcset
- Full-width project cards on mobile

This design creates a visually impressive, recruiter-friendly portfolio that balances technical credibility with modern aesthetics.