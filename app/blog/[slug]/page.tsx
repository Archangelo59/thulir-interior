import { notFound } from 'next/navigation';
import { FinalCta } from '@/components/sections';
import { FaqJsonLd } from '@/components/seo';
import { blogs, metadataFor } from '@/lib/site-data';

export function generateStaticParams() { return blogs.map((blog) => ({ slug: blog.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) return {};
  return metadataFor(blog.title, `${blog.title} by THULIR Interior Work, optimized for Chennai homeowners.`, `blog/${blog.slug}`);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) notFound();
  const faqs = [{ question: 'Why choose THULIR for Chennai interiors?', answer: 'THULIR combines premium design, transparent BOQs, material clarity and accountable handover support.' }];
  return <main><FaqJsonLd items={faqs} /><article className="container-pad py-24"><p className="eyebrow">{blog.category}</p><h1 className="mt-4 max-w-4xl font-serif text-6xl text-thulir-forest">{blog.title}</h1><div className="prose prose-lg mt-10 max-w-3xl"><p>Chennai homes need interiors that balance heat, humidity, storage, family rituals and premium style. THULIR approaches every project through site measurement, mood boards, material specification, 3D visualization and milestone-led execution.</p><p>For luxury interior designer Chennai searches, this article is structured with cost clarity, material guidance, local examples and next-step consultation CTAs.</p><h2>Planning checklist</h2><ul><li>Define room-wise priorities and budget range.</li><li>Compare plywood, HDHMR, veneer, laminate, acrylic and PU finishes.</li><li>Ask for timelines, warranty and after-sales process in writing.</li></ul></div></article><FinalCta /></main>;
}
