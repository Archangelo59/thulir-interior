import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';
import { blogs, brand, packages, process, projects, services, stats } from '@/lib/site-data';

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-thulir-forest text-white">
      <video className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-thulir-forest via-thulir-forest/70 to-transparent" />
      <div className="container-pad flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-thulir-accent">Luxury interior designer Chennai</p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Grow Beautiful Spaces.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/82">Premium Interior Design for Chennai Homes & Workspaces.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link className="focus-ring rounded-full bg-thulir-accent px-7 py-4 font-bold text-thulir-forest" href="/contact">Book Free Consultation</Link><Link className="focus-ring rounded-full border border-white/30 px-7 py-4 font-bold" href={`https://wa.me/${brand.whatsapp}`}>WhatsApp Now</Link></div>
        </div>
      </div>
    </section>
  );
}

export function TrustStats() {
  return <AnimatedSection className="container-pad grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4">{stats.map((s) => <div className="luxury-card p-7" key={s.label}><div className="font-serif text-5xl text-thulir-primary">{s.value}</div><p className="mt-3 text-sm font-semibold uppercase tracking-widest text-thulir-charcoal/65">{s.label}</p></div>)}</AnimatedSection>;
}

export function WhyComparison() {
  const rows = [['Design quality', 'Editorial, bespoke, site-specific', 'Depends on crew', 'Standardized catalogue'], ['Materials', 'Documented premium specs', 'Often opaque', 'Package-led'], ['Pricing transparency', 'Room-wise BOQ and ranges', 'Low upfront clarity', 'Add-on heavy'], ['Timeline', 'Milestone managed', 'Unstructured', 'Queue dependent'], ['Warranty', 'Written warranty', 'Informal', 'Limited by package'], ['After-sales support', 'Dedicated post-handover care', 'Ad hoc', 'Ticket based']];
  return <AnimatedSection className="bg-thulir-sand py-20"><div className="container-pad"><p className="eyebrow">Why THULIR</p><h2 className="mt-4 max-w-3xl font-serif text-5xl text-thulir-forest">Not a contractor. A premium design studio with accountable execution.</h2><div className="mt-10 overflow-hidden rounded-[2rem] border border-thulir-forest/10 bg-white"><table className="w-full min-w-[760px] text-left"><thead className="bg-thulir-forest text-white"><tr><th className="p-5">Factor</th><th className="p-5">THULIR</th><th className="p-5">Typical Contractors</th><th className="p-5">Cookscape</th></tr></thead><tbody>{rows.map((r) => <tr className="border-t border-thulir-forest/10" key={r[0]}>{r.map((c, i) => <td className={`p-5 ${i === 1 ? 'font-bold text-thulir-primary' : ''}`} key={c}>{c}</td>)}</tr>)}</tbody></table></div></div></AnimatedSection>;
}

export function ServicesGrid() {
  return <AnimatedSection className="container-pad py-20"><p className="eyebrow">Services</p><h2 className="mt-4 font-serif text-5xl text-thulir-forest">Crafted rooms, full homes and growth-ready workspaces.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{services.map((s) => <Link href={`/services/${s.slug}`} className="luxury-card group overflow-hidden" key={s.slug}><div className="relative h-64"><Image src={s.image} alt={`${s.title} by THULIR in Chennai`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-6"><h3 className="font-serif text-3xl text-thulir-forest">{s.title}</h3><p className="mt-3 text-thulir-charcoal/70">{s.desc}</p></div></Link>)}</div></AnimatedSection>;
}

export function PortfolioPreview() {
  const cats = ['Kitchens', 'Bedrooms', 'Wardrobes', 'Living Rooms', 'Renovations', 'Pooja', 'Commercial'];
  return <AnimatedSection className="bg-thulir-forest py-20 text-white"><div className="container-pad"><p className="eyebrow text-thulir-accent">Portfolio</p><h2 className="mt-4 font-serif text-5xl">Masonry-style transformations across Chennai.</h2><div className="mt-8 flex flex-wrap gap-3">{cats.map((c) => <span className="rounded-full border border-white/20 px-4 py-2 text-sm" key={c}>{c}</span>)}</div><div className="mt-10 columns-1 gap-5 md:columns-3">{projects.map((p) => <article className="mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-white/10" key={p.title}><div className="relative h-80"><Image src={p.image} alt={`${p.title} ${p.category} project in ${p.location}`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" /></div><div className="p-6"><p className="text-thulir-accent">{p.category} · {p.location}</p><h3 className="mt-2 font-serif text-3xl">{p.title}</h3><p className="mt-2 text-white/70">{p.budget} · {p.timeline} · materials and before/after slider ready.</p></div></article>)}</div></div></AnimatedSection>;
}

export function Packages() {
  return <AnimatedSection className="container-pad py-20"><p className="eyebrow">Signature packages</p><h2 className="mt-4 font-serif text-5xl text-thulir-forest">Transparent ranges for confident decisions.</h2><div className="mt-10 grid gap-5 lg:grid-cols-4">{packages.map((p) => <article className="luxury-card p-7" key={p.name}><h3 className="font-serif text-3xl text-thulir-forest">{p.name}</h3><p className="mt-3 text-2xl font-black text-thulir-primary">{p.price}</p><p className="mt-3 text-sm uppercase tracking-widest text-thulir-charcoal/60">{p.ideal}</p><p className="mt-4 text-thulir-charcoal/70">{p.materials}</p><ul className="mt-5 space-y-2">{p.features.map((f) => <li key={f}>• {f}</li>)}</ul></article>)}</div></AnimatedSection>;
}

export function ProcessTimeline() {
  return <AnimatedSection className="organic-bg py-20"><div className="container-pad"><p className="eyebrow">Process</p><h2 className="mt-4 font-serif text-5xl text-thulir-forest">Seven accountable milestones from idea to handover.</h2><div className="mt-10 grid gap-4 md:grid-cols-7">{process.map((step, i) => <div className="rounded-[1.5rem] bg-white p-5 shadow-glow" key={step}><span className="text-sm font-black text-thulir-primary">0{i + 1}</span><h3 className="mt-4 font-serif text-2xl">{step}</h3></div>)}</div></div></AnimatedSection>;
}

export function SocialProofAndBlogs() {
  return <AnimatedSection className="container-pad grid gap-10 py-20 lg:grid-cols-2"><div><p className="eyebrow">Video testimonials & Google reviews</p><h2 className="mt-4 font-serif text-5xl text-thulir-forest">Built on trust, documented in every handover.</h2><div className="mt-8 rounded-[2rem] bg-thulir-forest p-8 text-white"><p className="text-3xl font-serif">“The 3D design matched the final home, and the team kept every promise.”</p><p className="mt-4 text-white/70">Google reviews API-ready module · 4.9/5 rating placeholder</p></div></div><div><p className="eyebrow">Latest blogs</p><div className="mt-8 space-y-4">{blogs.map((b) => <Link href={`/blog/${b.slug}`} className="block rounded-[1.5rem] border border-thulir-forest/10 p-6 transition hover:bg-thulir-sand" key={b.slug}><p className="text-sm font-bold text-thulir-primary">{b.category}</p><h3 className="mt-2 font-serif text-3xl">{b.title}</h3></Link>)}</div></div></AnimatedSection>;
}

export function FinalCta() {
  return <section className="bg-thulir-primary py-20 text-white"><div className="container-pad text-center"><p className="eyebrow text-thulir-accent">Free 3D design consultation</p><h2 className="mt-4 font-serif text-6xl">Let’s Grow Your Dream Space.</h2><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link className="rounded-full bg-white px-7 py-4 font-bold text-thulir-forest" href={`tel:${brand.phone.replace(/\s/g, '')}`}>Call</Link><Link className="rounded-full border border-white/40 px-7 py-4 font-bold" href={`https://wa.me/${brand.whatsapp}`}>WhatsApp</Link><Link className="rounded-full bg-thulir-accent px-7 py-4 font-bold text-thulir-forest" href="/contact">Book Consultation</Link></div></div></section>;
}
