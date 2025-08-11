// pages/series-soccer-tips-statistics.js
import Link from "next/link";
export default function SeriesSoccerTipsStatistics() {
  return (
    <div className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
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
        <span>Series Soccer Tips Statistics</span>
      </nav>

      {/* Title & Description */}
      <h1 className="text-2xl font-bold mb-2">Series Soccer Tips Statistics</h1>

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Monthly Statistics */}
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Monthly statistics</h2>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
            </select>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Month/Year</th>
                <th>Win</th>
                <th>Lose</th>
                <th>Win Rate</th>
                <th>Profit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  month: "08/2025",
                  win: 7,
                  lose: 0,
                  rate: "100%",
                  profit: "+$3,180",
                  profitClass: "text-green-600",
                },
                {
                  month: "07/2025",
                  win: 30,
                  lose: 1,
                  rate: "97%",
                  profit: "-$3,485",
                  profitClass: "text-red-600",
                },
                {
                  month: "06/2025",
                  win: 31,
                  lose: 0,
                  rate: "100%",
                  profit: "+$12,190",
                  profitClass: "text-green-600",
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-2">{row.month}</td>
                  <td>{row.win}</td>
                  <td>{row.lose}</td>
                  <td
                    className={
                      row.rate === "100%" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {row.rate}
                  </td>
                  <td className={row.profitClass}>{row.profit}</td>
                  <td>
                    <a href="#" className="text-blue-500 hover:underline">
                      🔗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats Overview */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-center font-semibold mb-4">
            Last 12 Months Performance Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { label: "TOTAL SERIES", value: "+339" },
              { label: "TIPS WIN", value: "+335" },
              { label: "TOTAL PROFIT", value: "+$87,090" },
              { label: "VIP MEMBER", value: "+10,868" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg p-4 text-center shadow-sm"
              >
                <p className="text-green-600 text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-700 mb-4">
            <strong>
              7 years - Over 10,000 members - Profit over $150,000 per years
            </strong>
          </p>
          <p className="text-center text-gray-600 text-sm mb-4">
            More than 10 experts combined with support software to monitor more
            than 1,000 matches a day to choose the 5 matches with the highest
            win rate. <br />
            Series Soccer Tips is the best choice if you want to earn money from
            football betting. Active since 2017 more than 10,000 members from 50
            countries have participated, all of them feel happy.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <h2 className="mt-8 mb-4 font-semibold text-lg">
        Series Soccer Tips Statistics
      </h2>
      <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50 text-left">
              <th className="py-2 px-3">Series</th>
              <th className="px-3">Time/League</th>
              <th className="px-3">Match</th>
              <th className="px-3">Tips/Odds</th>
              <th className="px-3">Score</th>
              <th className="px-3">Profit</th>
              <th className="px-3">Status</th>
              <th className="px-3">View</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                series: "2526 (X1)",
                league: "07/08 UZB D1",
                match: "KK QoQon vs Neftchi Fargona",
                tips: "Over 2.5",
                odds: "0.93",
                score: "1 - 2",
                profit: "+$465",
                status: "WIN",
              },
              {
                series: "2525 (X3)",
                league: "06/08 POL Cup",
                match: "Chojniczanka vs Rekord BB",
                tips: "Over 2.5",
                odds: "0.96",
                score: "2 - 3",
                profit: "+$420",
                status: "WIN",
              },
            ].map((row, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2 px-3">{row.series}</td>
                <td className="px-3">{row.league}</td>
                <td className="px-3">{row.match}</td>
                <td className="px-3">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {row.tips}
                  </span>
                  <div className="text-xs text-gray-500">Odds: {row.odds}</div>
                </td>
                <td className="px-3">{row.score}</td>
                <td className="px-3 text-green-600">{row.profit}</td>
                <td className="px-3">
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                    {row.status}
                  </span>
                </td>
                <td className="px-3">
                  <a href="#" className="text-blue-500 hover:underline">
                    🔗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
