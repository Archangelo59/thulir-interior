import Image from 'next/image';
import Link from 'next/link';
import { brand, navItems } from '@/lib/site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-thulir-forest/10 bg-thulir-ivory/90 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="THULIR home">
          <Image src="/logo-thulir.svg" alt="THULIR Interior Work logo" width={150} height={63} priority className="h-14 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-thulir-forest lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <Link className="focus-ring rounded-full hover:text-thulir-primary" key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="focus-ring rounded-full bg-thulir-forest px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-thulir-primary" href={`https://wa.me/${brand.whatsapp}`}>WhatsApp Now</Link>
      </div>
    </header>
  );
}
