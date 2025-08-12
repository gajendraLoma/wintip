import React from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import BigImageVideosSection from "@/components/videos/BigImageVideosSection";
import VideoHighlights from "@/components/videos/VideoHighlights";
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

export default function FootballHighlights() {
  const filters = [
    "All",
    "English Premier League",
    "UEFA Champions League",
    "UEFA Europa League",
    "Spanish La Liga",
    "German Bundesliga",
    "Italian Serie A",
    "France Ligue 1",
    "Liga Portugal 1",
    "AFC Champions League",
    "UEFA Nations League",
  ];

  const mainMatch = {
    title: "Atalanta vs Parma, Prediction & Betting Tips",
    banner:
      "https://static.wintips.com/images/wintips-page/5-24-2025/atalanta-vs-parma-prediction.webp",
  };

  const sidebarMatches = [
    "Empoli vs Verona",
    "Torino vs AS Roma",
    "Venezia vs Juventus",
    "Lazio vs Lecce",
    "Udinese vs Fiorentina",
  ];



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
                <span>Football Highlights</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                Football Highlights: Premier League, La Liga, Champions
                League...
              </h1>
              <p className="text-gray-700 mb-6">
                Football Highlight is a football highlight video aggregator,
                quickly and accurately updating all highlight videos from
                tournaments around the world. Users can easily review important
                situations, beautiful goals, and remarkable moves from the
                latest matches, including major tournaments such as Premier
                League, La Liga, Serie A, Bundesliga, Champions League, and many
                other tournaments. We will provide a convenient experience for
                football fans, helping you not miss any moments of the king
                sport. Join us to explore fiery matches, watch talented moves,
                impressive goals, and tense matches from the world’s top
                tournaments.
              </p>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      tag === "All"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "text-gray-600 border-gray-300"
                    } cursor-pointer hover:bg-blue-100`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Big Image Section */}
              <BigImageVideosSection
                mainMatch={mainMatch}
                sidebarMatches={sidebarMatches}
              />
              <div className="my-4" />
              <VideoHighlights />

              {/* Pagination */}
                <Pagination />

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
