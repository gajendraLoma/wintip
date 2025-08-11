"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/videos/Pagination";

export default function HotGirls() {
  const gridMatches = [
    { cover: "/images/hotgirl1.webp", title: "Rapid Wien vs Dundee United" },
    { cover: "/images/hotgirl2.webp", title: "Rakow Czestochowa vs Maccabi Haifa" },
    { cover: "/images/hotgirl3.webp", title: "Hajduk Split vs KS Dinamo Tirana" },
    { cover: "/images/hotgirl4.webp", title: "Partizan Belgrade vs Hibernian" },
    { cover: "/images/hotgirl5.webp", title: "Hajduk Split vs KS Dinamo Tirana" },
    { cover: "/images/hotgirl6.webp", title: "Partizan Belgrade vs Hibernian" },
  ];

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
                <span>Hot Girl</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                Hottest Compilation of Beautiful Girls Videos Today
              </h1>
              <p className="text-gray-700 mb-6">
                Girls always carry within them many different beauties, each with
                a unique charm and strong personality, making each one different
                from the other. Hence, there are various types of beautiful
                girls, and everyone has their own preferences. Today, Wintips
                brings you a set of Gorgeous Girls Videos - Compilation of 100+
                Stunning Videos for you to admire.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {gridMatches.map((match, i) => (
                  <Link
                    key={i}
                    href={`/matches`}
                    className="rounded-md grid gap-2 items-start group cursor-pointer"
                  >
                    {/* Image wrapper */}
                    <div className="relative overflow-hidden rounded-md aspect-[16/22]">
                      <Image
                        src={match.cover}
                        alt={match.title}
                        fill
                        className="object-cover w-full h-full"
                      />

                      {/* Player icon wrapper */}
                      <div className="absolute bottom-2 left-2 inline-block transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src="/images/playerIcon.png"
                          alt="Player"
                          width={48}
                          height={48}
                          className="w-10 sm:w-12"
                        />
                      </div>
                    </div>

                    {/* Title text */}
                    <p className="text-sm sm:text-base font-medium text-gray-800 transition-colors duration-300 group-hover:text-[#60a5fa] line-clamp-2">
                      {match.title}, Prediction & Betting Tips
                    </p>
                  </Link>
                ))}
              </div>

              <Pagination />
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}