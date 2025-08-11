"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function SoccerTips1x2() {
  const [tips] = useState([
    {
      time: "08/08 02:00",
      league: "UEFA ECL",
      match: "Lame vs Santa Clara",
      tip: "2",
      odds: "1.42",
      rate: 5,
      status: "win",
    },
    {
      time: "08/08 01:30",
      league: "UEFA ECL",
      match: "Craiova vs Spartak Trnava",
      tip: "1",
      odds: "1.65",
      rate: 4,
      status: "win",
    },
    {
      time: "08/08 00:30",
      league: "UEFA ECL",
      match: "Lugano vs Celje",
      tip: "1",
      odds: "1.50",
      rate: 4,
      status: "lose",
    },
    // Add more rows as needed...
  ]);
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
                <span>1x2 Soccer Tips</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                1x2 Soccer Tips, Free 1×2 Tips With The Highest Win Rate Every
                Day
              </h1>
              <p className="text-gray-700 mb-6">
                What are soccer tips 1x2? 1×2 betting is the type of bet you
                will find in the field of football betting. This concept sounds
                easy to understand, but you’ll need to consider how to bet
                effectively if you want to become a pro. There are many 1X2
                betting tips that you can use to find the best bets. You can
                search for many of these betting tips 1×2 for free through{" "}
                <Link
                  href="https://www.wintips.com"
                  className="text-blue-600 hover:underline"
                >
                  Wintips.com
                </Link>{" "}
                website. You can use these tips to make informed choices about
                the games you want to participate in and bet on. However, to
                make it work, you need to understand how the soccer tips 1×2
                form works. The concept is quite simple and brings considerable
                profits.
              </p>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Table */}
                <div className="flex-1 overflow-x-auto border rounded-lg shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left font-semibold text-gray-700">
                      <tr>
                        <th className="p-4 whitespace-nowrap">Time</th>
                        <th className="p-4 whitespace-nowrap">League</th>
                        <th className="p-4 whitespace-nowrap">Match</th>
                        <th className="p-4 whitespace-nowrap">Tips</th>
                        <th className="p-4 whitespace-nowrap">Odds</th>
                        <th className="p-4 whitespace-nowrap">Rate</th>
                        <th className="p-4 whitespace-nowrap">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tips.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="p-4">{row.time}</td>
                          <td className="p-4">{row.league}</td>
                          <td className="p-4">{row.match}</td>
                          <td className="p-4 max-md:leading-none max-md:min-h-[16px] max-md:text-[12px] md:text-center text-sm max-md:text-xstext-[#323232] text-[#227ad3] font-semibold">
                            {row.tip}
                          </td>
                          <td className="p-4">{row.odds}</td>
                          <td className="p-4">
                            <div className="flex items-center text-blue-500 text-base">
                              {[...Array(row.rate)].map((_, starIdx) => (
                                <span key={starIdx}>★</span>
                              ))}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="relative mx-auto flex h-[30px] w-[30px] max-md:w-[25px] max-md:h-[25px] items-center justify-center rounded-full border border-solid border-[#ddd]">
                              <Image
                                alt="loading"
                                loading="lazy"
                                width={19}
                                height={18}
                                src="/images/loading-icon-new.gif"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Add More button below the table */}
                  <div className="p-4 text-center text-[#228be6] font-medium hover:underline cursor-pointer">
                    View More +
                  </div>
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
