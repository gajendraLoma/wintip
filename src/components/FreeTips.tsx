"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
const mockTips = [
  {
    time: "07/08 06:30",
    league: "USL CH",
    homeTeam: "Hartford Athletic",
    awayTeam: "Miami FC",
    tip: "Hartford Athletic -0.75",
    odds: "0.90",
    site: "Oddsbet.com",
    rating: 4,
  },
  {
    time: "07/08 05:00",
    league: "Copa do Brasil",
    homeTeam: "Atletico Mineiro",
    awayTeam: "Flamengo",
    tip: "Flamengo -0.25",
    odds: "0.88",
    site: "Soccersite.com",
    rating: 4,
  },
  {
    time: "07/08 02:00",
    league: "UEFA CL",
    homeTeam: "Nice",
    awayTeam: "Benfica",
    tip: "Nice +0.25",
    odds: "0.85",
    site: "Forebet.com",
    rating: 4,
  },
  {
    time: "07/08 02:00",
    league: "UEFA CL",
    homeTeam: "Feyenoord",
    awayTeam: "Fenerbahce",
    tip: "Feyenoord -0.25",
    odds: "0.88",
    site: "Windrawwin.com",
    rating: 4,
  },
  {
    time: "07/08 02:00",
    league: "UEFA CL",
    homeTeam: "Feyenoord",
    awayTeam: "Fenerbahce",
    tip: "Over 2.75",
    odds: "1.00",
    site: "Ball-lock.com",
    rating: 4,
  },
];

export default function FreeTips() {
  const t = useTranslations();

  return (
    <section className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("timeLeague")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("match")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("tips")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("odds")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("premiumSite")}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {t("result")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockTips.map((tip, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {tip.time}
                  </div>
                  <div className="text-sm text-gray-500">{tip.league}</div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">H</span>
                    </div>
                    <span className="text-sm font-medium">{tip.homeTeam}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-red-600">A</span>
                    </div>
                    <span className="text-sm font-medium">{tip.awayTeam}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-[#227ad3] hover:text-blue-800 cursor-pointer">
                    {tip.tip}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-gray-900">
                    {tip.odds}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <a
                    href="#"
                    className="md:text-sm font-semibold text-[#227ad3] max-md:text-[12px]"
                  >
                    {tip.site}
                  </a>

                  <div className="flex items-center text-[#227ad3] text-sm ml-1">
                    {[...Array(tip.rating)].map((_, starIdx) => (
                      <span key={starIdx}>★</span>
                    ))}
                  </div>
                </td>

                <td className="px-4 py-4">
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
      </div>

      <div className="px-6 py-4 bg-gray-50 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          {t("viewMore")}
        </button>
      </div>
    </section>
  );
}
