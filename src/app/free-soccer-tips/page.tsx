"use client";

import Sidebar from "@/components/Sidebar";
import FreeTips from "@/components/FreeTips";
import Link from "next/link";
export default function FreeSoccerTips() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white px-4 md:px-8 py-6 max-w-[1280px] mx-auto">
              {/* Breadcrumb */}
              <nav className="flex text-sm text-gray-500 mb-2">
                  <Link href="/" className="text-blue-600 hover:underline">
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
                <span>Free soccer tips</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                The best quality free soccer tips for today and tomorrow
              </h1>
              <p className="text-gray-700 mb-6">
                <a href="#" className="text-blue-600 underline">
                  Wintips
                </a>{" "}
                is a site that provides free, high-quality soccer tips every
                day, cooperating with the world’s leading football information
                sources...
              </p>

              {/* FILTER BAR */}
            

              {/* TIPS TABLE */}
              <FreeTips />

              {/* COMPILATION */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">
                  Compilation of the best free tips websites
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Oddspedia.com",
                    "Ball-lock.com",
                    "Betstudy.com",
                    "Shark1x2.com",
                    "Typersi.com",
                    "Olbg.com",
                    "Sportytrader.com",
                    "Blogabet.com",
                    "Suatips.com",
                    "Sportsprediction.asia",
                  ].map((site, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-neutral-100 md:px-8 md:py-3 text-sm font-light hover:bg-sky-50 hover:text-blue-500 whitespace-nowrap overflow-ellipsis max-md:py-[10px] max-md:px-5"
                    >
                      {site}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
