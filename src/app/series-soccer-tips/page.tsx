"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import SeriesSection from "@/components/SeriesSection";
import RecordSeriesSection from "@/components/RecordSeries";

export default function SeriesSoccerTips() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [testiIndex, setTestiIndex] = useState(0);

  const testimonials = [
    {
      text: `WOWWWW!!! it's really a good option for everyone. I have been making profit every day and last month I have made 4000$ easily.`,
      author: "Wolfgang",
    },
    {
      text: `The product is really special. I have been participating for 10 years and signed up for VIP because of its benefits.`,
      author: "Eduarda",
    },
  ];

  const faqs = [
    {
      q: "What types of tips are provided in the Series Soccer Tips section?",
      a: `The Series Soccer Tips section provides a range of tips, including over/under goals and Asian Handicap bets. Each tip is meticulously analyzed and selected to increase your chances of success.`,
    },
    {
      q: "How does the Series Soccer Tips system work?",
      a: `A set of 5 tips is delivered each day (X1 - X5). Follow bankroll suggestions to manage staking and potential martingale progression.`,
    },
    {
      q: "When does the Series Soccer Tips start?",
      a: `Tips are spaced at least two hours apart. Check the table's 'Time/League' column for accurate times.`,
    },
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
                <span>Series Soccer Tips</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">Series Soccer Tips</h1>
              <p className="text-gray-700 mb-6">
                Series Soccer Tips is a premium and exclusive feature on{" "}
                <Link
                  href="https://www.wintips.com"
                  className="text-blue-600 hover:underline"
                >
                  Wintips.com
                </Link>{" "}
                — a unique offering you won’t find on any other football
                prediction platform. We curate the top 5 highest-winning soccer
                tips each day, carefully spaced at least two hours apart, and
                apply a proven Martingale (folding bet) strategy to maximize
                results.
                <span className="text-blue-600 font-medium">
                  WinTips.Com
                </span>{" "}
                This specialized system, developed and refined by our team of
                betting experts over many years, delivers an impressive 99%
                daily win rate. With just a VIP account at WinTips.Com, players
                can follow a clear plan: prepare their bankroll, define
                realistic goals, and follow our method for simple, consistent
                daily profits.
              </p>

              {/* Header + two-column layout */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left / Main */}
                <main className="flex-1">
                  {/* Live Series Table */}
                     <SeriesSection />
                  {/* How To Play (martingale progression) */}
                  <section className="bg-white rounded-lg shadow p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-3">
                      How to play SERIES SOCCER TIPS? How to make $500 per day
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Follow our guide and achieve a 99% win rate! There will be
                      5 series of free tips every day on WinTips.Com: (X1 - X2 -
                      X3 - X4 - X5)
                    </p>
                    {/* Progression boxes */}
                    <div className="overflow-x-auto">
                      <div className="flex items-center gap-3 justify-between md:justify-start">
                        {/* Box list */}
                        {["$500", "$1000", "$2000", "$4000", "$8000"].map(
                          (amt, i) => (
                            <div key={i} className="flex-shrink-0">
                              <div className="w-[120px] md:w-[140px] bg-gray-50 border rounded-lg p-3 text-center">
                                <div className="text-sm text-gray-500">{`X${
                                  i + 1
                                }`}</div>
                                <div className="text-lg font-bold mt-1">
                                  {amt}
                                </div>
                                <div className="mt-2 text-green-600 font-semibold">
                                  PROFIT $500
                                </div>
                                <div className="mt-2">
                                  <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">
                                    STOP NOW
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      {/* Arrows for desktop */}
                      <div className="hidden md:flex items-center justify-between mt-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex-1 text-center">
                            <svg
                              width="40"
                              height="20"
                              viewBox="0 0 24 24"
                              className="mx-auto"
                            >
                              <path
                                d="M2 12h18"
                                stroke="#9CA3AF"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16 6l6 6-6 6"
                                stroke="#9CA3AF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                      {/* Mobile stacked explanation */}
                      <div className="md:hidden mt-4 text-xs text-gray-600">
                        Starting initial bet:{" "}
                        <span className="font-semibold">$500</span>. Each step
                        doubles the stake; if you win at any step you stop and
                        lock a profit of $500.
                      </div>
                    </div>
                  </section>
                  {/* Record Series Table */}
                  <section className=" ">
                    <div className="p-4">
                      <h3 className="font-semibold">
                        Record Series Soccer Tips
                      </h3>
                    </div>
                    <RecordSeriesSection />
                 
                    <button className="my-4 text-[#222] border rounded p-3 mx-auto flex" type="button">
                    <span className="text-sm text-blue-600">View More</span>
                    </button>

                  </section>
                  {/* Testimonials */}
                  <section className="bg-white rounded-lg shadow p-6 mb-6">
                    <h3 className="font-semibold mb-4">Testimonials</h3>
                    <div className="relative">
                      <div className="min-h-[120px]">
                        <blockquote className="text-sm italic text-gray-700">
                          “{testimonials[testiIndex].text}”
                        </blockquote>
                        <div className="mt-4 font-semibold">
                          — {testimonials[testiIndex].author}
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 flex gap-2">
                        <button
                          onClick={() =>
                            setTestiIndex((i) => Math.max(0, i - 1))
                          }
                          className="p-2 rounded bg-gray-100"
                        >
                          ◀
                        </button>
                        <button
                          onClick={() =>
                            setTestiIndex((i) =>
                              Math.min(testimonials.length - 1, i + 1)
                            )
                          }
                          className="p-2 rounded bg-gray-100"
                        >
                          ▶
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* FAQ */}
                  <section className="bg-white rounded-lg shadow p-6 mb-8">
                    <h3 className="font-semibold mb-4">
                      Frequently asked questions
                    </h3>
                    <div className="space-y-2">
                      {faqs.map((f, i) => (
                        <div key={i} className="border rounded">
                          <button
                            onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                            className="w-full text-left px-4 py-3 flex justify-between items-center"
                          >
                            <span className="font-medium">{f.q}</span>
                            <span className="text-sm text-gray-500">
                              {faqOpen === i ? "-" : "+"}
                            </span>
                          </button>
                          {faqOpen === i && (
                            <div className="px-4 py-3 text-sm text-gray-600 border-t">
                              {f.a}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                </main>
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
