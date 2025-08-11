import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import BigImageVideosSection from "@/components/videos/BigImageVideosSection";
import VideoHighlights from "@/components/videos/VideoHighlights";
import FootballVideosSection from "@/components/videos/FootballVideosSection";
import BettingGuideVideosSection from "@/components/videos/BettingGuideVideosSection";

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

export default function VideosPage() {
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
                <span>Videos</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                Videos Football & Football Highlight
              </h1>
              <p className="text-gray-700 mb-6">
                Football Video Highlights Section: A curated collection of the
                fastest highlight videos from matches around the world, allowing
                you to replay game moments completely free of charge. Here, you
                can explore exciting clips, fun moments, skillful moves, and the
                most spectacular goals in the world of football. Additionally,
                Wintips.com provides instructional videos on betting strategies,
                helping you easily grasp useful tips to increase your chances of
                winning in football betting.
              </p>

              {/* Football Highlights Section Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="m-0 w-fit font-semibold text-[#323232] text-[22px] hover:text-blue-hover transition-all">
                  Football Highlights
                </h2>
                <Link
                  href={"/en/football-highlights/"}
                  className="bg-white p-0 text-sm font-normal text-[#666] flex items-center hover:text-blue-hover transition-colors"
                >
                  <span>View all</span>
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
                    className="ml-1"
                  >
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </Link>
              </div>

              {/* Big Image Section */}
              <BigImageVideosSection
                mainMatch={mainMatch}
                sidebarMatches={sidebarMatches}
              />

              <div className="my-4" />

              {/* Highlights Grid */}
              <VideoHighlights  />

              {/* Ads Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {[
                  {
                    src: "/images/Gif-banner-web-adds1.gif",
                    alt: "Advertisement Left",
                  },
                  {
                    src: "/images/Gif-banner-web-adds2.gif",
                    alt: "Advertisement Right",
                  },
                ].map((ad, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[50px] sm:h-[80px] overflow-hidden rounded-md"
                  >
                    <Image
                      src={ad.src}
                      alt={ad.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ))}
              </div>

              {/* Football Highlights Section Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="m-0 w-fit font-semibold text-[#323232] text-[22px] hover:text-blue-hover transition-all">
                  Football Videos
                </h2>
                <Link
                  href={"/en/football-videos/"}
                  className="bg-white p-0 text-sm font-normal text-[#666] flex items-center hover:text-blue-hover transition-colors"
                >
                  <span>View all</span>
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
                    className="ml-1"
                  >
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </Link>
              </div>

              <FootballVideosSection gridMatches={gridMatches} />

              {/* Betting Guide Section Header */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="m-0 w-fit font-semibold text-[#323232] text-[22px] hover:text-blue-hover transition-all">
                  Betting Guide Videos
                </h2>
                <Link
                  href={"/en/betting-guide-videos/"}
                  className="bg-white p-0 text-sm font-normal text-[#666] flex items-center hover:text-blue-hover transition-colors"
                >
                  <span>View all</span>
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
                    className="ml-1"
                  >
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </Link>
              </div>

              <BettingGuideVideosSection gridMatches={gridMatches} />
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
