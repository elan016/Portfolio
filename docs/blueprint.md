# **App Name**: Midnight Portfolio

## Core Features:

- Core Content Structure Replication: Faithfully reproduce all sections from the original portfolio (About, Certifications, Speaking, Projects, Articles, Contact) maintaining layout, content hierarchy, and information parity.
- Responsive Design & Layout: Implement responsive breakpoints (mobile ≤640px, tablet 641–1024px, desktop ≥1025px) to ensure optimal viewing and interaction across devices. Collapsible nav on mobile.
- Enhanced Dark Theme Implementation: Implement a sleek, modern dark theme using the specified color palette (deep neutral background #0B0F14, elevated panels #0F1720, etc.), typography (Inter/Poppins), and glass/soft-elevation cards to enhance visual appeal and readability.
- Dynamic Content Loading & Handling: Load and manage portfolio content (certifications, projects, articles) from JSON/YAML files in a `/data` directory, enabling content updates without code modifications.
- Accessibility Optimization: Ensure the portfolio meets accessibility standards through keyboard navigation, focus states, semantic HTML, ARIA labels, and high-contrast color combinations for enhanced usability.
- Optimized Assets and Performance: Optimize images (AVIF/WebP) and lazy-load project previews to improve page load times. Implement static generation to minimize JS and enhance performance.
- Integrated SEO Features: Implement comprehensive SEO features, including meta tags (title, description, open graph), and structured data for articles/projects to improve search engine visibility.

## Style Guidelines:

- Primary color: White (#FFFFFF) as a contrasting highlight against the dark background, symbolizing Sayed's energy and modern DevOps expertise.
- Background: Black (#000000), creating a sophisticated, distraction-free environment for the portfolio.
- Accent color: Light Gray (#D3D3D3) provides subtle, eye-catching highlights, drawing attention to important elements such as certifications and projects.
- Headline font: 'Poppins' (sans-serif) in semi-bold/700 weight, offering a clean, contemporary feel. Note: currently only Google Fonts are supported.
- Body font: 'Inter' (sans-serif) in 400–500 weight, ensuring readability and a modern aesthetic for the content. Note: currently only Google Fonts are supported.
- Monochrome icons to complement the dark theme. Light strokes or light-mode variants on tech logos to ensure they read well against the dark background.
- Cards and panels with a glass/soft-elevation effect and rounded corners (18px radius). Subtle inner glow for depth.
- Subtle micro-animations on hover for project cards, and a fade-in effect on section scroll. Smooth theme toggle between dark default and light fallback. Prioritize reduced-motion-friendly animations.