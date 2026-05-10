export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'thulir-demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-05-10',
  useCdn: true
};

export const latestBlogsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3]{title, slug, category, excerpt}`;
export const portfolioQuery = `*[_type == "project"] | order(completedAt desc){title, slug, location, budget, timeline, images, materials}`;

export async function sanityFetch<T>(_query: string): Promise<T | null> {
  // CMS-ready seam: wire this to Sanity's HTTP API or @sanity/client when project credentials are available.
  return null;
}
