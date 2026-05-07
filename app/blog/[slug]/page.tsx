import { notFound } from "next/navigation";

// All previously rendered blog posts were AI-generated SaaS filler with at least
// one fabricated case-study claim ("Zapeera Helped 1000+ Businesses"). They were
// removed in the Task 3 extension. Until real, pharmacy-focused articles exist,
// any /blog/[slug] request returns a 404 — which Next.js renders via app/not-found.tsx.
export default function BlogPostPage() {
  notFound();
}
