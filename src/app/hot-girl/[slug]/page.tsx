"use client";

import React from "react";
import Link from "next/link";
const HotGirlsDetails = () => {
  return (
    <div className="flex-1 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4 py-6">
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
          <span>Hot Girl</span>
        </nav>

        {/* Title & Description */}
        <h1 className="text-2xl font-bold mb-2">
        She’s not sunshine - she’s lightning in a bikini
        </h1>
        <p className="text-gray-700 mb-6">
          <Link
            href="https://www.wintips.com"
            className="text-blue-600 hover:underline"
          >
          She’s not sunshine - she’s lightning in a bikini
          </Link>{" "}
          (or Football Predictions) – Stay updated with the latest match
          analysis, bookmaker reviews, and precise head-to-head predictions for
          today and tomorrow! Curated by experts at Wintips, we provide in-depth
          insights on national and international tournaments, helping you track
          trends and make smarter betting decisions. Explore high-quality
          football predictions, optimize your betting strategy, and boost your
          chances of winning today!
        </p>
      </div>
    </div>
  );
};

export default HotGirlsDetails;
