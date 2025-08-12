import React from "react";
import Link from "next/link";
import Sidebar from "@/components/layout/Sidebar";
import BigImageVideosSection from "@/components/videos/BigImageVideosSection";
import BettingGuideVideosSection from "@/components/videos/BettingGuideVideosSection";
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

export default function BettingGuideVideos() {


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

  const gridMatches = [
    "Rapid Wien vs Dundee United",
    "Rakow Czestochowa vs Maccabi Haifa",
    "Hajduk Split vs KS Dinamo Tirana",
    "Partizan Belgrade vs Hibernian",
    "Hajduk Split vs KS Dinamo Tirana",
    "Partizan Belgrade vs Hibernian",
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
                <span>Betting Guide Videos</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">Betting Guide Videos</h1>
              <p className="text-gray-700 mb-6">
            The Betting Guide Video page at Wintips is a rich resource of quality betting guide videos, specially designed to assist players in improving their betting skills and strategies. Whether you are a beginner or an experienced bettor, these video guide will provide in-depth and easy-to-understand knowledge on every aspect of betting. From how to read odds, popular bet types, to advanced strategies, all the information you need is available. The videos not only help you grasp the basic principles but also provide tips and techniques that you can apply in practice, optimizing your chances of winning and minimizing risks. With each video, Wintips is committed to providing the most updated and detailed information, ensuring you are always on the right track in your betting journey.
              </p>

              {/* Big Image Section */}
              <BigImageVideosSection
                mainMatch={mainMatch}
                sidebarMatches={sidebarMatches}
              />
              <div className="my-4" />
              <BettingGuideVideosSection gridMatches={gridMatches} />

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
