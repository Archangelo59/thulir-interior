import { brand, services } from '@/lib/site-data';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    image: 'https://thulirinterior.com/logo-thulir.svg',
    telephone: brand.phone,
    email: brand.email,
    address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    areaServed: ['Adyar', 'Anna Nagar', 'OMR', 'Velachery', 'T Nagar'],
    priceRange: '₹₹₹',
    makesOffer: services.map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title } }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
