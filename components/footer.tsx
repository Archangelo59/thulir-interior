import Image from 'next/image';
import Link from 'next/link';
import { brand, locations, services } from '@/lib/site-data';

export function Footer() {
  return (
    <footer className="bg-thulir-forest pb-24 pt-16 text-white md:pb-12">
      <div className="container-pad grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Image src="/logo-thulir.svg" alt="THULIR Interior Work logo" width={180} height={75} className="rounded-2xl bg-white p-3" />
          <p className="mt-5 max-w-sm text-white/75">Premium interior design for Chennai homes and workspaces. THULIR means {brand.meaning}; every project is planned as fresh growth.</p>
          <p className="mt-5 font-tamil text-thulir-accent">சென்னையின் நம்பகமான பிரீமியம் இன்டீரியர் ஸ்டுடியோ</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div><h3 className="font-serif text-2xl">Services</h3><ul className="mt-4 space-y-2 text-white/75">{services.slice(0, 6).map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></div>
          <div><h3 className="font-serif text-2xl">Locations</h3><ul className="mt-4 space-y-2 text-white/75">{locations.map((l) => <li key={l}>{l} Interior Design</li>)}</ul></div>
          <div><h3 className="font-serif text-2xl">Contact</h3><ul className="mt-4 space-y-2 text-white/75"><li>{brand.phone}</li><li>{brand.email}</li><li>{brand.address}</li><li><Link href="/privacy-policy">Privacy</Link> · <Link href="/terms">Terms</Link></li></ul></div>
        </div>
      </div>
    </footer>
  );
}
