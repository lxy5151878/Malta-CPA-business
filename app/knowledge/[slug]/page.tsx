import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KnowledgeArticleView from "@/components/KnowledgeArticleView";
import { getKnowledgeArticle, knowledgeArticles, localizedArticle } from "@/lib/knowledge";
import { absoluteUrl } from "@/lib/siteMeta";

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return {};
  const local = localizedArticle(article, "en");
  return {
    title: local.seoTitle,
    description: local.metaDescription,
    keywords: local.keywords,
    openGraph: {
      title: local.seoTitle,
      description: local.metaDescription,
      url: absoluteUrl(`/knowledge/${slug}`),
      siteName: "XLW Advisory",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: local.seoTitle,
      description: local.metaDescription,
    },
    alternates: {
      canonical: absoluteUrl(`/knowledge/${slug}`),
      languages: {
        en: absoluteUrl(`/knowledge/${slug}`),
        "zh-CN": absoluteUrl(`/zh/knowledge/${slug}`),
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) notFound();
  return <KnowledgeArticleView article={article} lang="en" />;
}
