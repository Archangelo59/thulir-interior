import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FinalCta, Packages, PortfolioPreview, ServicesGrid, WhyComparison } from '@/components/sections';
import { FaqJsonLd } from '@/components/seo';
import { blogs, metadataFor, pages, projects } from '@/lib/site-data';

export function generateStaticParams() { return pages.map((page) => ({ slug: page.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = pages.find((item) => item.slug === params.slug);
  if (!page) return {};
  return metadataFor(page.title, page.description, page.slug);
}

export default function StaticPage({ params }: { params: { slug: string } }) {
  const page = pages.find((item) => item.slug === params.slug);
  if (!page) notFound();
  const faqs = [
    { question: 'Does THULIR serve all Chennai locations?', answer: 'Yes. THULIR serves Adyar, Anna Nagar, OMR, Velachery, T Nagar and surrounding Chennai neighborhoods.' },
    { question: 'Can I book a free consultation?', answer: 'Yes. Use the booking form, call button or WhatsApp CTA to request a free 3D design consultation.' }
  ];
  return (
    <main>
      <FaqJsonLd items={faqs} />
      <section className="organic-bg py-24"><div className="container-pad"><p className="eyebrow">THULIR Interior Work</p><h1 className="mt-4 max-w-4xl font-serif text-6xl text-thulir-forest">{page.title}</h1><p className="mt-6 max-w-3xl text-xl leading-8 text-thulir-charcoal/72">{page.description}</p></div></section>
      {params.slug === 'services' && <ServicesGrid />}
      {params.slug === 'portfolio' && <PortfolioPreview />}
      {params.slug === 'case-studies' && <CaseStudies />}
      {params.slug === 'pricing-guide' && <><Packages /><Calculator /></>}
      {params.slug === 'why-choose-thulir' && <WhyComparison />}
      {params.slug === 'blog' && <BlogIndex />}
      {params.slug === 'contact' && <ContactForm />}
      {!['services','portfolio','case-studies','pricing-guide','why-choose-thulir','blog','contact'].includes(params.slug) && <GenericContent slug={params.slug} />}
      <FinalCta />
    </main>
  );
}

function GenericContent({ slug }: { slug: string }) {
  const copy: Record<string, string[]> = {
    'about-us': ['THULIR blends new-growth optimism with architectural discipline, Tamil hospitality and premium craftsmanship.', 'Our Chennai team manages design, BOQ transparency, manufacturing coordination and handover quality.'],
    'meet-the-team': ['Design directors, project managers, site engineers and artisans collaborate from first brief to after-sales support.', 'Every project has a single point of accountability and documented milestones.'],
    testimonials: ['Client videos, Google review highlights and handover stories are designed into this page for trust-building.', 'The module is ready for live Google Reviews API integration.'],
    careers: ['We hire interior designers, 3D visualizers, site supervisors, CRM executives and craft-focused project managers.', 'Send your portfolio and Chennai site experience to hello@thulirinterior.com.'],
    'privacy-policy': ['We collect consultation details only to respond to project inquiries, share brochures and improve customer experience.', 'Lead information is handled with care and can be removed on request.'],
    terms: ['Website content is for general planning guidance. Final pricing depends on site measurement, scope and selected materials.', 'Consultations, quotes and warranties are confirmed in written project documents.'],
    'thank-you': ['Thank you for contacting THULIR. Our design team will respond shortly by call or WhatsApp.', 'Meanwhile, explore our portfolio and pricing guide.']
  };
  return <section className="container-pad py-20"><div className="grid gap-6 md:grid-cols-2">{(copy[slug] || ['Premium content section prepared for CMS editing.', 'This page is SEO-ready with schema, internal links and conversion CTAs.']).map((p) => <article className="luxury-card p-8" key={p}><p className="text-xl leading-8 text-thulir-charcoal/75">{p}</p></article>)}</div></section>;
}

function CaseStudies() {
  return <section className="container-pad py-20"><div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((p) => <article className="luxury-card p-8" key={p.title}><p className="eyebrow">{p.location}</p><h2 className="mt-4 font-serif text-3xl">{p.title}</h2><ul className="mt-5 space-y-2 text-thulir-charcoal/70"><li>Client problem and design challenge</li><li>Mood board, floor plan and 3D renders</li><li>Before photos, after photos and testimonial</li><li>{p.budget} budget · {p.timeline}</li></ul></article>)}</div></section>;
}

function Calculator() {
  return <section className="bg-thulir-sand py-20"><div className="container-pad"><h2 className="font-serif text-5xl text-thulir-forest">Quick cost calculator</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{['2BHK: ₹6L–₹14L', '3BHK: ₹10L–₹28L', 'Villa: ₹22L+'].map((item) => <div className="rounded-[2rem] bg-white p-8 text-2xl font-black text-thulir-primary" key={item}>{item}</div>)}</div></div></section>;
}

function BlogIndex() {
  return <section className="container-pad py-20"><div className="grid gap-5 md:grid-cols-3">{blogs.map((b) => <Link className="luxury-card p-8" key={b.slug} href={`/blog/${b.slug}`}><p className="eyebrow">{b.category}</p><h2 className="mt-4 font-serif text-3xl">{b.title}</h2></Link>)}</div></section>;
}

function ContactForm() {
  return <section className="container-pad py-20"><form className="luxury-card mx-auto grid max-w-3xl gap-5 p-8" action="/thank-you"><input className="rounded-2xl border p-4" aria-label="Name" placeholder="Name" /><input className="rounded-2xl border p-4" aria-label="Phone" placeholder="Phone / WhatsApp" /><select className="rounded-2xl border p-4" aria-label="Project type"><option>2BHK</option><option>3BHK</option><option>Villa</option><option>Commercial</option></select><textarea className="rounded-2xl border p-4" aria-label="Message" placeholder="Tell us about your dream space" rows={5} /><button className="rounded-full bg-thulir-primary px-6 py-4 font-bold text-white">Book Free 3D Design Consultation</button></form></section>;
}
