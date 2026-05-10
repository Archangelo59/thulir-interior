import type { Metadata } from 'next';

export const brand = {
  name: 'THULIR Interior Work',
  shortName: 'THULIR',
  meaning: 'new growth / fresh sprout',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@thulirinterior.com',
  address: 'Chennai, Tamil Nadu',
  city: 'Chennai',
  keywords: [
    'luxury interior designer Chennai',
    '3BHK interior design Chennai',
    'home interior design cost Chennai',
    'commercial interior designer Chennai',
    'false ceiling design Chennai'
  ]
};

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing-guide' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' }
];

export const stats = [
  { value: '12+', label: 'Years of craft-led expertise' },
  { value: '420+', label: 'Chennai spaces transformed' },
  { value: '96%', label: 'On-time handover record' },
  { value: '4.9/5', label: 'Client satisfaction score' }
];

export const services = [
  { slug: 'residential-interior-design', title: 'Residential Interior Design', desc: 'Luxury interiors for 2BHK, 3BHK, premium apartments and villas.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'commercial-interior-design', title: 'Commercial Interior Design', desc: 'High-trust offices, clinics, restaurants and retail experiences.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'modular-kitchen', title: 'Modular Kitchen', desc: 'Elegant kitchens engineered around Chennai family rituals.', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'bedroom-interiors', title: 'Bedroom Interiors', desc: 'Calm private suites with warm storage, lighting and textile layers.', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'living-room-design', title: 'Living Room Design', desc: 'Statement social spaces with premium finishes and flexible seating.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'wardrobe-design', title: 'Wardrobe Design', desc: 'Custom wardrobes with disciplined storage and luxury detailing.', image: 'https://images.unsplash.com/photo-1556597249-cd6a997737df?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'pooja-room-design', title: 'Pooja Room Design', desc: 'Tamil cultural warmth expressed through serene sacred corners.', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'kids-room-design', title: 'Kids Room Design', desc: 'Safe, playful rooms that grow with children and routines.', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'home-renovation', title: 'Home Renovation', desc: 'Before-after transformations with predictable timelines and finish quality.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80' }
];

export const packages = [
  { name: 'THULIR Sage', price: '₹4.5L–₹8L', ideal: 'Starter 2BHK refresh', materials: 'BWR ply, laminate, essential hardware', features: ['Space planning', 'Modular kitchen', '2 wardrobes', 'Basic false ceiling'] },
  { name: 'THULIR Amber', price: '₹8L–₹14L', ideal: 'Premium 2BHK / compact 3BHK', materials: 'HDHMR/BWP options, acrylic accents, branded hardware', features: ['3D design', 'Kitchen + wardrobes', 'Living room feature wall', 'Lighting plan'] },
  { name: 'THULIR Forest', price: '₹14L–₹28L', ideal: 'Luxury 3BHK and villas', materials: 'Veneer, PU, quartz, soft-close systems', features: ['Full-home interiors', 'Pooja and study', 'Premium ceiling', 'Managed installation'] },
  { name: 'THULIR Elite', price: 'Custom', ideal: 'Bespoke villas and signature homes', materials: 'Curated imported finishes and artisan detailing', features: ['Design director involvement', 'Custom furniture', 'Smart home readiness', 'White-glove handover'] }
];

export const projects = [
  { title: 'Adyar Courtyard Apartment', category: 'Living Rooms', location: 'Adyar', budget: '₹18L', timeline: '55 days', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80' },
  { title: 'OMR Family Kitchen', category: 'Kitchens', location: 'OMR', budget: '₹7.5L', timeline: '28 days', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Anna Nagar Wardrobe Suite', category: 'Wardrobes', location: 'Anna Nagar', budget: '₹5.2L', timeline: '21 days', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Velachery Calm Bedroom', category: 'Bedrooms', location: 'Velachery', budget: '₹6L', timeline: '25 days', image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80' },
  { title: 'T Nagar Clinic Studio', category: 'Commercial', location: 'T Nagar', budget: '₹22L', timeline: '60 days', image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Mylapore Pooja Niche', category: 'Pooja', location: 'Mylapore', budget: '₹2.8L', timeline: '12 days', image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80' }
];

export const process = ['Consultation', 'Site Visit', '3D Design', 'Material Selection', 'Manufacturing', 'Installation', 'Handover'];

export const blogs = [
  { slug: 'home-interior-design-cost-chennai', title: 'Home Interior Design Cost in Chennai: 2026 Guide', category: 'Budget Guides' },
  { slug: '3bhk-interior-design-chennai', title: 'How to Plan a Premium 3BHK Interior in Chennai', category: 'Interior Tips' },
  { slug: 'false-ceiling-design-chennai', title: 'False Ceiling Design Ideas for Chennai Apartments', category: 'Material Guides' }
];

export const locations = ['Adyar', 'Anna Nagar', 'OMR', 'Velachery', 'T Nagar'];

export const pages = [
  { slug: 'about-us', title: 'About Us', description: 'Meet the Chennai studio growing beautiful spaces with Tamil warmth, modern architecture and disciplined execution.' },
  { slug: 'meet-the-team', title: 'Meet the Team', description: 'Design directors, project managers, artisans and site engineers behind every THULIR handover.' },
  { slug: 'services', title: 'Services Overview', description: 'Residential, commercial, kitchen, wardrobe, pooja, kids room and renovation services in Chennai.' },
  { slug: 'portfolio', title: 'Portfolio', description: 'A masonry-style showcase of kitchens, bedrooms, wardrobes, living rooms, renovations and commercial spaces.' },
  { slug: 'case-studies', title: 'Case Studies', description: 'Detailed transformation stories with challenges, mood boards, budgets, timelines and testimonials.' },
  { slug: 'pricing-guide', title: 'Pricing Guide', description: 'Transparent starter, premium, luxury and bespoke interior packages for Chennai homes.' },
  { slug: 'testimonials', title: 'Testimonials', description: 'Video testimonials, Google review highlights and proof from homeowners across Chennai.' },
  { slug: 'blog', title: 'Blog', description: 'SEO-first interior tips, Chennai design trends, budget guides, material guides and before-after stories.' },
  { slug: 'careers', title: 'Careers', description: 'Join THULIR as we build a premium interior design studio rooted in craft and care.' },
  { slug: 'contact', title: 'Contact', description: 'Book a free 3D design consultation, call or WhatsApp THULIR Interior Work in Chennai.' },
  { slug: 'why-choose-thulir', title: 'Why Choose THULIR', description: 'Compare THULIR with typical contractors and large interior chains across quality, price and support.' },
  { slug: 'privacy-policy', title: 'Privacy Policy', description: 'How THULIR collects, protects and uses consultation and lead information.' },
  { slug: 'terms', title: 'Terms', description: 'Terms for using the THULIR website and requesting interior design consultations.' },
  { slug: 'thank-you', title: 'Thank You', description: 'Thank you for contacting THULIR. Our design team will respond shortly.' }
];

export function metadataFor(title: string, description: string, path = ''): Metadata {
  return {
    title: `${title} | ${brand.shortName} Interior Work`,
    description,
    keywords: brand.keywords,
    alternates: { canonical: `https://thulirinterior.com/${path}` },
    openGraph: {
      title: `${title} | ${brand.shortName}`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://thulirinterior.com/${path}`
    }
  };
}
