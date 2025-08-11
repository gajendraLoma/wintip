'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import FreeTips from '@/components/FreeTips';
import Sidebar from '@/components/Sidebar';
import Aids from '@/components/common/Aids';
import PredectionList from '@/components/predection/PredectionList';
import VideoHighlights from '@/components/videos/VideoHighlights';
import BettingGENSection from '@/components/BettingGENSection';

const SectionHeader = ({ title, href }: { title: string; href: string }) => (
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-hover transition-all">
      {title}
    </h2>
    <Link
      href={href}
      className="text-sm text-[#666] hover:text-blue-hover flex items-center"
    >
      <span>View All</span>
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
);

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">

            <Hero />

              <h2 className="text-2xl font-bold text-gray-900">
                {t('freeTipsTitle')}
              </h2>
              <FreeTips />
               <Aids />
              <SectionHeader title={t('predictionsTitle')} href="/soccer-predictions/" />
              <PredectionList />
              <SectionHeader title={t('highlightsTitle')} href="/football-highlights/" />
              <VideoHighlights />
              <BettingGENSection />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
