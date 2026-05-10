import Link from 'next/link';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { brand } from '@/lib/site-data';

export function StickyCtas() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-2 rounded-full border border-white/40 bg-thulir-forest/95 p-2 text-xs font-bold text-white shadow-glow backdrop-blur md:inset-x-auto md:right-5 md:grid-cols-1 md:rounded-3xl">
      <Link className="focus-ring flex items-center justify-center gap-2 rounded-full bg-white/10 px-3 py-3" href={`tel:${brand.phone.replace(/\s/g, '')}`}><Phone size={16} /> Call</Link>
      <Link className="focus-ring flex items-center justify-center gap-2 rounded-full bg-thulir-primary px-3 py-3" href={`https://wa.me/${brand.whatsapp}`}><MessageCircle size={16} /> WhatsApp</Link>
      <Link className="focus-ring flex items-center justify-center gap-2 rounded-full bg-thulir-accent px-3 py-3 text-thulir-forest" href="/contact"><Calendar size={16} /> Book</Link>
    </div>
  );
}
