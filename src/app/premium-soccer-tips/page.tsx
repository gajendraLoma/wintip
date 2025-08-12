import Sidebar from "@/components/layout/Sidebar";
import Link from "next/link";
export default function PremiumSoccerTips() {
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
                <span>Premium soccer tips</span>
              </nav>

              {/* Title & Description */}
              <h1 className="text-2xl font-bold mb-2">
                Premium Soccer Tips - The Best Soccer Tips Today, Shared For
                Free
              </h1>
              <p className="text-gray-700 mb-6">
                In the competitive world of soccer betting, access to accurate
                and reliable tips can significantly enhance your chances of
                winning. Many bettors look for trusted website football tips
                that provide expert insights to guide their decisions. While
                free tips are abundant, premium soccer tips stand out for their
                in-depth analysis and strategic value. One such website is
                Wintips, a leading website that offers premium soccer tips for
                free, helping bettors improve their success with expert guidance
                tailored to maximize winning potential. Let’s dive into how
                Wintips and other premium tip providers can elevate your betting
                game.
              </p>

              {/* Filter */}
              <div className="flex flex-wrap gap-2 items-center mb-6">
                <span className="font-semibold">Filter:</span>
                <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">
                  Today
                </button>
                <input
                  type="date"
                  className="border text-sm px-2 py-1 rounded"
                  defaultValue="2025-08-07"
                />
                <select className="border text-sm px-2 py-1 rounded">
                  <option>Select Source</option>
                  <option>Mypersonaltips.com</option>
                  <option>Asianbestadvice.com</option>
                </select>
                <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">
                  Search
                </button>
              </div>

              {/* Premium Tip Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    site: "Mypersonaltips.com",
                    color: "text-green-600",
                    time: "08/08 01:15",
                    league: "UEFA ECL",
                    teamA: "Lausanne",
                    teamB: "Astana",
                    oddsVal: "-:-",
                    odds: null,
                    btn: "Sign in to view",
                  },
                  {
                    site: "Asianbestadvice.com",
                    color: "text-green-600",
                    time: "08/08 00:00",
                    league: "UEFA ECL",
                    teamA: "AIK Solna",
                    teamB: "Gyori ETO",
                    oddsVal: "-:-",
                    odds: null,
                    btn: "Sign in to view",
                  },
                  {
                    site: "TipsForecast.com",
                    color: "text-blue-600",
                    time: "07/08 00:30",
                    league: "UEFA CL",
                    teamA: "Ludogorets",
                    teamB: "Ferencvarosi",
                    oddsVal: "0 : 0",
                    odds: "Under 2.25",
                    oddVal: "0.88",
                    btn: null,
                  },
                  {
                    site: "Mypersonaltips.com",
                    color: "text-green-600",
                    time: "07/08 00:00",
                    league: "NOR AL",
                    teamA: "Asane Fotball",
                    teamB: "Lyn Oslo",
                    oddsVal: "0 : 2",
                    odds: "Over 2.75",
                    oddVal: "0.82",
                    btn: null,
                  },
                  {
                    site: "WinsDelivery.com",
                    color: "text-blue-600",
                    time: "07/08 01:00",
                    league: "UEFA CL",
                    teamA: "RB Salzburg",
                    teamB: "Club Brugge",
                    oddsVal: "0 : 1",
                    odds: "Over 2.75",
                    oddVal: "0.83",
                    btn: null,
                  },
                  {
                    site: "Asianbestadvice.com",
                    color: "text-green-600",
                    time: "07/08 00:00",
                    league: "NOR AL",
                    teamA: "Start",
                    teamB: "Odd",
                    oddsVal: "2 : 0",
                    odds: "Start -0.75",
                    oddVal: "0.88",
                    btn: null,
                  },
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 shadow-sm flex flex-col gap-3"
                  >
                    <div
                      className={`flex items-center gap-2 text-sm font-semibold ${tip.color}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.086l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {tip.site}
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{tip.time}</span>
                      <span>{tip.league}</span>
                    </div>
                    <div className="flex justify-around text-xs text-gray-500">
                      <span>{tip.teamA}</span>
                      <span>{tip.oddsVal}</span>
                      <span>{tip.teamB}</span>
                    </div>
                    <hr className="border-gray-200" />
                    {tip.btn ? (
                      <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded flex items-center justify-center gap-1 self-center">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 12H9m12 0c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z" />
                        </svg>
                        {tip.btn}
                      </button>
                    ) : (
                      <div className="flex justify-between items-center">
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                          {tip.odds}
                        </span>
                        <span className="text-xs text-gray-500">
                          {tip.oddVal}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* View More */}
              <div className="text-center mb-6">
                <button className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:underline">
                  View More +
                </button>
              </div>

              {/* Website Soccer Tips Premium */}
              <div className="mb-6">
                <h2 className="text-base font-bold mb-3">
                  <span className="text-blue-600">▸</span> Website Soccer Tips
                  Premium
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bestsoccertips.com HOT",
                    "Kingsoccertips.com NEW",
                    "Premiumsoccertips.net",
                    "Under2Goals.uk",
                    "PredictionsNow.com",
                    "Mypersonaltips.com",
                    "WinsDelivery.com",
                    "Asianbestadvice.com",
                  ].map((site, idx) => (
                    <div
                      key={idx}
                      className="border rounded-full px-4 py-1 text-xs bg-gray-100 text-gray-700 flex items-center gap-1"
                    >
                      {site.includes("HOT") && (
                        <span className="text-red-500 font-bold">HOT</span>
                      )}
                      {site.includes("NEW") && (
                        <span className="text-red-500 font-bold">NEW</span>
                      )}
                      <span>
                        {site.replace(" HOT", "").replace(" NEW", "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What are premium soccer tips */}
              <div className="mb-6">
                <h2 className="text-base font-bold mb-3">
                  <span className="text-blue-600">▸</span> What are premium
                  soccer tips?
                </h2>
                <p className="text-gray-700 mb-4">
                  Premium soccer tips refer to expert-researched betting advice
                  provided by professional tipsters or specialized platforms.
                  Unlike free tips, which are often generalized, premium tips
                  are based on detailed data analysis, team performance
                  statistics, player form, and other variables. The insights
                  provided in premium tips are often tailored to specific types
                  of bettors, ranging from beginners to seasoned professionals.
                </p>
               
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
