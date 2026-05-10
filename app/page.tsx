import { FinalCta, Hero, Packages, PortfolioPreview, ProcessTimeline, ServicesGrid, SocialProofAndBlogs, TrustStats, WhyComparison } from '@/components/sections';
import { LocalBusinessJsonLd } from '@/components/seo';

export default function Home() {
  return (
    <main>
      <LocalBusinessJsonLd />
      <Hero />
      <TrustStats />
      <WhyComparison />
      <ServicesGrid />
      <PortfolioPreview />
      <Packages />
      <ProcessTimeline />
      <SocialProofAndBlogs />
      <FinalCta />
    </main>
  );
}
