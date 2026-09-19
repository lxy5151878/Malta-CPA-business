import type { Metadata } from "next";
import { getSiteCopy } from "@/lib/siteCopy";
import BookKeepingPageView from "@/app/bookkeeping/BookKeepingPageView";

export function generateMetadata(): Metadata {
  const copy = getSiteCopy("zh");
  const meta = copy.pages.bookkeeping.meta;
  return { title: meta.title, description: meta.description };
}

export default function Page() {
  return <BookKeepingPageView lang="zh" />;
}