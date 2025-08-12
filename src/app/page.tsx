import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import FreeTips from '@/components/FreeTips';
import Sidebar from '@/components/layout/Sidebar';
import Aids from '@/components/common/Aids';
import PredectionList from '@/components/predection/PredectionList';
import VideoHighlights from '@/components/videos/VideoHighlights';
import BettingGENSection from '@/components/BettingGENSection';

const SectionHeader = ({ title, href }: { title: string; href: string }) => (
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold final text-gray-900 hover:text-blue-hover transition-all">
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

export async function generateMetadata(): Promise<Metadata> {
  // Placeholder for fetching real API data later
  const apiData = await fetchHomepageData();

  return {
    title: apiData?.title || 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
    description: apiData?.description || 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      minimumScale: 1,
      userScalable: false,
    },
    openGraph: {
      title: apiData?.ogTitle || 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
      description: apiData?.ogDescription || 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
      images: [
        {
          url: apiData?.ogImage || 'https://static.wintips.com/images/wintips-page/10-9-2024/Avata-wintips1.jpg',
          width: 800,
          height: 600,
          alt: apiData?.ogImageAlt || 'wintips.com',
        },
      ],
      url: 'https://wintips.com/',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: apiData?.twitterTitle || 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
      description: apiData?.twitterDescription || 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
      images: [
        {
          url: apiData?.twitterImage || 'https://static.wintips.com/images/wintips-page/10-9-2024/Avata-wintips1.jpg',
          width: 800,
          height: 600,
          alt: apiData?.twitterImageAlt || 'wintips.com',
        },
      ],
    },
    icons: [
      { url: '/logo32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo192.png', sizes: '192x192', type: 'image/png' },
    ],
  };
}

// Placeholder API fetch function (replace with your real endpoint)
async function fetchHomepageData() {
  try {
    // Simulate API call; replace with real endpoint like: await fetch('https://api.wintips.com/homepage').then(res => res.json());
    return {
      title: 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
      description: 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
      ogTitle: 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
      ogDescription: 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
      ogImage: 'https://static.wintips.com/images/wintips-page/10-9-2024/Avata-wintips1.jpg',
      ogImageAlt: 'wintips.com',
      twitterTitle: 'Wintips.com - The world’s leading site for soccer tips, predictions, and bookmaker odds insights.',
      twitterDescription: 'A specialized website for reviewing bookmakers, sharing betting experiences, giving football predictions, and providing links to the world\'s number one bookmakers.',
      twitterImage: 'https://static.wintips.com/images/wintips-page/10-9-2024/Avata-wintips1.jpg',
      twitterImageAlt: 'wintips.com',
    };
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return {}; // Fallback to default values
  }
}

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