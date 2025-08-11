import React from 'react';
import {getPredictions} from '@/app/apis/services/prediction';
import Link from 'next/link';
import BettingBonusTable from '@/components/bookmakers/BettingBonusTable';
export async function generateMetadata() {
  const data = await getPredictions(1, 50);
  const {items} = data;
  return {
    title: 'Best Soccer Predictions Today – Expert Stats & Winning Tips!',
    description:
      'Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.',
    openGraph: {
      title: 'Best Soccer Predictions Today – Expert Stats & Winning Tips!',
      description:
        'Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.',
      url: 'https://wintips.com/predictions',
      siteName: 'Wintips',
      images: items.length > 0 ? [items[0].featureImage] : [],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Soccer Predictions Today – Expert Stats & Winning Tips!',
      description:
        'Stay updated with the latest soccer predictions, match analysis, bookmaker reviews, and precise head-to-head predictions for today and tomorrow! Curated by experts at Wintips.',
      images: items.length > 0 ? [items[0].featureImage] : []
    }
  };
}

export default function BettingBonus() {
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
          <span>
            {' '}
            Best Bookmaker Bonuses & Promotions – Daily Updated Deals
          </span>
        </nav>

        {/* Title & Description */}
        <h1 className="text-2xl font-bold mb-2">
          Best Bookmaker Bonuses & Promotions – Daily Updated Deals
        </h1>
        <p className="text-gray-700 mb-6">
          Betting bonus at Wintips.com – A site specializing in compiling the
          hottest promotions today with many attractive promotions. Stay
          constantly updated with the highest and latest promotions from
          reputable bookmakers, sports bookmakers and redemption games. Bonus
          promotions are offered by bookmakers to attract new members, while
          retaining old members who are using the services that the bookmaker
          provides. At
          <Link
            href="https://www.wintips.com"
            className="text-blue-600 hover:underline"
          >
            Wintips.com
          </Link>{' '}
          , we will not only provide you with the latest and most attractive
          promotion information, but also the promotions that are considered the
          most valuable for players.
        </p>

        {/* Table Header */}

        <BettingBonusTable />
      </div>
    </div>
  );
}
