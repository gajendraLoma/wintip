import React from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import BigImageBlogSection from "@/components/blog/BigImageBlogSection";
import GridViewSection from "@/components/blog/GridViewSection";
import ListViewSection from "@/components/blog/ListViewSection";

import Pagination from "@/components/videos/Pagination";

export async function generateMetadata() {
  const meta = {
    title: "Best Soccer Predictions Today – Expert Stats & Winning Tips!",
    description:
      "Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.",
    openGraph: {
      title: "Best Soccer Predictions Today – Expert Stats & Winning Tips!",
      description:
        "Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.",
      url: "https://wintips.com/predictions",
      siteName: "Wintips",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Soccer Predictions Today – Expert Stats & Winning Tips!",
      description:
        "Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.",
    },
  };
  return meta;
}
export default function BettingGuideDetails() {
 
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <section className="lg:col-span-3 space-y-8">
            <div className="bg-white px-4 md:px-8 py-6 max-w-[1280px] mx-auto">
              {/* Breadcrumb */}
              <nav className="flex text-sm text-gray-500 mb-2">
                <Link
                  href="/"
                  className="text-blue-600 hover:underline transition-colors"
                >
                  Wintips
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right mx-1 relative bottom-[-3px]"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:underline transition-colors"
                >
                  Blog
                </Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-chevron-right mx-1 relative bottom-[-3px]"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
                <span>Betting Guide</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">Betting Guide</h1>
              <p className="text-gray-700 mb-6">
          Betting guide is a comprehensive section that provides readers with in-depth information and advice on various forms of betting. From sports betting to casino games, Betting guide covers a range of topics that are designed to help readers make informed decisions when placing bets.

          Whether you are a beginner or an experienced bettor, Betting guide has something for everyone. With expert advice and practical tips, readers can stay up-to-date on the latest trends and developments in the world of betting, and make more informed and profitable betting decisions.
              </p>

            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </div>
    </main>
  );
}
