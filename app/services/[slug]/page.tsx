import { notFound } from 'next/navigation';
import { FinalCta, ProcessTimeline } from '@/components/sections';
import { FaqJsonLd } from '@/components/seo';
import { metadataFor, services } from '@/lib/site-data';
import Image from 'next/image';

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return metadataFor(`${service.title} Chennai`, `${service.desc} Book a premium 3D design consultation with THULIR.`, `services/${service.slug}`);
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const faqs = [
    { question: `How much does ${service.title.toLowerCase()} cost in Chennai?`, answer: 'Pricing depends on room size, materials, hardware and finish level. THULIR shares a room-wise BOQ and package range before execution.' },
    { question: 'Do you provide 3D designs before work starts?', answer: 'Yes. Every qualified consultation includes concept direction and 3D design planning before manufacturing and installation.' }
  ];
  return (
    <main>
      <FaqJsonLd items={faqs} />
      <section className="organic-bg py-24"><div className="container-pad grid items-center gap-10 lg:grid-cols-2"><div><p className="eyebrow">Luxury Interior Designer Chennai</p><h1 className="mt-4 font-serif text-6xl text-thulir-forest">{service.title}</h1><p className="mt-6 text-xl leading-8 text-thulir-charcoal/72">{service.desc} We combine nature-inspired warmth, premium material specification and accountable site execution.</p></div><div className="relative h-[480px] overflow-hidden rounded-[2.5rem] shadow-glow"><Image src={service.image} alt={`${service.title} Chennai premium THULIR interior`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div></div></section>
      <section className="container-pad grid gap-6 py-20 md:grid-cols-3"><article className="luxury-card p-8"><h2 className="font-serif text-3xl">Design quality</h2><p className="mt-3 text-thulir-charcoal/70">Editorial layouts, ergonomic planning, mood boards and finish schedules.</p></article><article className="luxury-card p-8"><h2 className="font-serif text-3xl">Materials</h2><p className="mt-3 text-thulir-charcoal/70">BWR/BWP plywood, HDHMR, veneer, PU, acrylic, quartz and branded hardware options.</p></article><article className="luxury-card p-8"><h2 className="font-serif text-3xl">Timeline</h2><p className="mt-3 text-thulir-charcoal/70">Milestone-managed site visit, 3D design, material selection, manufacturing and handover.</p></article></section>
      <ProcessTimeline />
      <FinalCta />
    </main>
  );
}
