import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const requiredSourceFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/[slug]/page.tsx',
  'app/services/[slug]/page.tsx',
  'components/sections.tsx',
  'lib/site-data.ts',
  'public/logo-thulir.svg'
];

const missing = requiredSourceFiles.filter((file) => !existsSync(file));
if (missing.length > 0) {
  console.error(`Static build failed. Missing source files: ${missing.join(', ')}`);
  process.exit(1);
}

const brand = {
  name: 'THULIR Interior Work',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@thulirinterior.com'
};

const pages = [
  ['', 'Luxury Interior Designer Chennai', 'Grow Beautiful Spaces. Premium interior design for Chennai homes and workspaces.'],
  ['about-us', 'About Us', 'A Chennai studio rooted in nature, luxury, Tamil warmth and disciplined execution.'],
  ['meet-the-team', 'Meet the Team', 'Design directors, project managers, artisans and site engineers behind every handover.'],
  ['services', 'Services Overview', 'Residential, commercial, kitchen, bedroom, wardrobe, pooja, kids room and renovation interiors.'],
  ['portfolio', 'Portfolio', 'Premium kitchens, bedrooms, wardrobes, living rooms, renovations, pooja and commercial spaces.'],
  ['case-studies', 'Case Studies', 'Transformation stories with problem, challenge, mood board, floor plan, renders, budget and testimonial.'],
  ['pricing-guide', 'Pricing Guide', 'Transparent Starter, Premium, Luxury and Bespoke interior packages for Chennai homes.'],
  ['testimonials', 'Testimonials', 'Video testimonials, Google review highlights and social proof from Chennai clients.'],
  ['blog', 'Blog', 'Interior tips, Chennai design trends, budget guides, material guides and before/after stories.'],
  ['careers', 'Careers', 'Join a premium Chennai interior studio built around craft, care and accountability.'],
  ['contact', 'Contact', 'Book a free 3D design consultation with THULIR Interior Work.'],
  ['why-choose-thulir', 'Why Choose THULIR', 'Compare THULIR with typical contractors and large interior chains.'],
  ['privacy-policy', 'Privacy Policy', 'How THULIR handles consultation and lead information.'],
  ['terms', 'Terms', 'Website and consultation terms for THULIR Interior Work.'],
  ['thank-you', 'Thank You', 'Thank you for contacting THULIR. Our design team will respond shortly.']
];

const services = [
  ['services/residential-interior-design', 'Residential Interior Design Chennai'],
  ['services/commercial-interior-design', 'Commercial Interior Design Chennai'],
  ['services/modular-kitchen', 'Modular Kitchen Chennai'],
  ['services/bedroom-interiors', 'Bedroom Interiors Chennai'],
  ['services/living-room-design', 'Living Room Design Chennai'],
  ['services/wardrobe-design', 'Wardrobe Design Chennai'],
  ['services/pooja-room-design', 'Pooja Room Design Chennai'],
  ['services/kids-room-design', 'Kids Room Design Chennai'],
  ['services/home-renovation', 'Home Renovation Chennai']
];

const blogs = [
  ['blog/home-interior-design-cost-chennai', 'Home Interior Design Cost in Chennai: 2026 Guide'],
  ['blog/3bhk-interior-design-chennai', 'How to Plan a Premium 3BHK Interior in Chennai'],
  ['blog/false-ceiling-design-chennai', 'False Ceiling Design Ideas for Chennai Apartments']
];

const allRoutes = [...pages, ...services.map(([slug, title]) => [slug, title, 'Premium interior design service by THULIR in Chennai.']), ...blogs.map(([slug, title]) => [slug, title, 'SEO-first interior design article by THULIR.'])];

function html({ slug, title, description }) {
  const canonical = `https://thulirinterior.com/${slug}`.replace(/\/$/, '/');
  const isHome = slug === '';
  return `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} | THULIR Interior Work</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta name="theme-color" content="#0F2B14" />
  <style>
    :root{--primary:#1F7A2E;--accent:#36E000;--forest:#0F2B14;--sand:#F4EFE5;--ivory:#FFFDF8;--charcoal:#222222}*{box-sizing:border-box}body{margin:0;background:var(--ivory);color:var(--charcoal);font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif}a{color:inherit}.wrap{max-width:1180px;margin:auto;padding:0 22px}.nav{position:sticky;top:0;z-index:10;background:rgba(255,253,248,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(15,43,20,.1)}.nav .wrap{height:82px;display:flex;align-items:center;justify-content:space-between}.logo{height:54px}.btn{display:inline-flex;border-radius:999px;padding:14px 22px;font-weight:800;text-decoration:none}.btn.primary{background:var(--accent);color:var(--forest)}.btn.dark{background:var(--forest);color:#fff}.hero{min-height:${isHome ? '78vh' : '48vh'};display:grid;align-items:center;background:radial-gradient(circle at 15% 10%,rgba(54,224,0,.16),transparent 28rem),linear-gradient(135deg,var(--ivory),var(--sand))}.eyebrow{text-transform:uppercase;letter-spacing:.3em;color:var(--primary);font-size:12px;font-weight:900}.hero h1{font-family:Georgia,serif;font-size:clamp(48px,9vw,110px);line-height:.94;margin:18px 0;color:var(--forest);max-width:920px}.lead{font-size:clamp(18px,2.2vw,26px);line-height:1.55;max-width:780px;color:rgba(34,34,34,.72)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;padding:70px 0}.card{border:1px solid rgba(15,43,20,.1);border-radius:30px;background:rgba(255,255,255,.72);padding:28px;box-shadow:0 24px 80px rgba(15,43,20,.12)}.card h2,.card h3{font-family:Georgia,serif;color:var(--forest);font-size:30px;margin:0 0 12px}.section-dark{background:var(--forest);color:white;padding:80px 0}.section-dark h2{font-family:Georgia,serif;font-size:clamp(40px,6vw,72px);margin:0 0 24px}.sticky{position:fixed;right:18px;bottom:18px;display:flex;gap:8px;background:rgba(15,43,20,.95);padding:8px;border-radius:999px}.sticky a{font-size:13px;color:white;text-decoration:none;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.12)}footer{background:var(--forest);color:white;padding:44px 0 88px}@media(max-width:720px){.nav .links{display:none}.sticky{left:10px;right:10px;justify-content:center}.hero{min-height:68vh}}
  </style>
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: brand.name, telephone: brand.phone, email: brand.email, address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' }, areaServed: ['Adyar', 'Anna Nagar', 'OMR', 'Velachery', 'T Nagar'], priceRange: '₹₹₹' })}</script>
</head>
<body>
  <header class="nav"><div class="wrap"><a href="/"><img class="logo" src="/logo-thulir.svg" alt="THULIR Interior Work logo" /></a><nav class="links"><a href="/services/">Services</a> · <a href="/portfolio/">Portfolio</a> · <a href="/pricing-guide/">Pricing</a> · <a href="/contact/">Contact</a></nav><a class="btn dark" href="https://wa.me/${brand.whatsapp}">WhatsApp</a></div></header>
  <main>
    <section class="hero"><div class="wrap"><p class="eyebrow">Luxury interior designer Chennai</p><h1>${isHome ? 'Grow Beautiful Spaces.' : title}</h1><p class="lead">${description}</p><p><a class="btn primary" href="/contact/">Book Free Consultation</a> <a class="btn dark" href="https://wa.me/${brand.whatsapp}">WhatsApp Now</a></p></div></section>
    <section class="wrap grid"><article class="card"><h2>Premium design</h2><p>Nature-led, editorial and architectural interiors with Tamil cultural warmth.</p></article><article class="card"><h2>Transparent pricing</h2><p>Room-wise BOQ, clear package ranges and accountable project milestones.</p></article><article class="card"><h2>Conversion-ready</h2><p>Sticky WhatsApp, call and consultation CTAs for qualified Chennai leads.</p></article><article class="card"><h2>SEO-first</h2><p>Local keywords, canonical pages, schema and sitemap generated for search visibility.</p></article></section>
    <section class="section-dark"><div class="wrap"><p class="eyebrow" style="color:var(--accent)">Why THULIR</p><h2>This is not a contractor. This is a premium design studio.</h2><p class="lead" style="color:rgba(255,255,255,.78)">Services include residential interiors, commercial interiors, modular kitchens, bedroom interiors, wardrobe design, pooja rooms, kids rooms and home renovation.</p></div></section>
  </main>
  <footer><div class="wrap"><img class="logo" src="/logo-thulir.svg" alt="THULIR logo" style="background:#fff;border-radius:18px;padding:8px" /><p>${brand.phone} · ${brand.email} · Chennai, Tamil Nadu</p></div></footer>
  <div class="sticky"><a href="tel:${brand.phone.replace(/\s/g, '')}">Call</a><a href="https://wa.me/${brand.whatsapp}">WhatsApp</a><a href="/contact/">Book</a></div>
</body>
</html>`;
}

async function writeRoute(slug, title, description) {
  const dir = path.join(outDir, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html({ slug, title, description }));
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp('public', outDir, { recursive: true });

for (const [slug, title, description] of allRoutes) {
  await writeRoute(slug, title, description);
}

const sitemap = allRoutes.map(([slug]) => `  <url><loc>https://thulirinterior.com/${slug}</loc></url>`.replace('//</loc>', '/</loc>')).join('\n');
await writeFile(path.join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await writeFile(path.join(outDir, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://thulirinterior.com/sitemap.xml\n');
await writeFile(path.join(outDir, '404.html'), html({ slug: '', title: 'Page Not Found', description: 'The requested THULIR page was not found. Use the navigation to continue exploring our Chennai interior design services.' }));

console.log(`Built ${allRoutes.length} static routes to ${path.relative(process.cwd(), outDir)}/`);
console.log('Tip: run `npm install` and `npm run build:next` when registry access is available for the full Next.js production build.');
