'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const t = useTranslations();

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const soccerTipsSubItems = [
    { key: 'freeSoccerTips', href: '/free-soccer-tips', label: t('freeSoccerTips') },
    { key: 'soccerTips1x2', href: '/soccer-tips-1x2', label: t('soccerTips1x2') },
    { key: 'premiumSoccerTips', href: '/premium-soccer-tips', label: t('premiumSoccerTips') },
    { key: 'seriesSoccerTips', href: '/series-soccer-tips', label: t('seriesSoccerTips') },
    { key: 'seriesTipsStatistics', href: '/statistics', label: t('seriesTipsStatistics') },
    { key: 'planPricing', href: '/plan-pricing', label: t('planPricing') },
  ];

  const bookmakersSubItems = [
    { key: 'bettingBonus', href: '/betting-bonus', label: t('bettingBonus') },
  ];

  const videosSubItems = [
    { key: 'footballHighlights', href: '/football-highlights', label: t('footballHighlights') },
    { key: 'footballVideos', href: '/football-videos', label: t('footballVideos') },
    { key: 'bettingGuideVideos', href: '/betting-guide-videos', label: t('bettingGuideVideos') },
  ];

  const blogSubItems = [
    { key: 'bettingExperience', href: '/betting-experience', label: t('bettingExperience') },
    { key: 'bettingGuide', href: '/betting-guide', label: t('bettingGuide') },
    { key: 'bettingNews', href: '/betting-news', label: t('bettingNews') },
  ];

  return (
    <nav className="bg-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <Link href="/" className="flex items-center">
            <Image
              alt="Wintips logo"
              loading="lazy"
              width={190}
              height={36}
              src="/images/logo-wintips.webp"
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/">{t('nav_home')}</Link>
            <Link href="/soccer-tips-1x2">{t('nav_soccerTips')}</Link>
            <Link href="/soccer-predictions">{t('nav_predictions')}</Link>
            <Link href="/odds">{t('nav_bettingTool')}</Link>
            <Link href="/bookmakers">{t('nav_bookmakers')}</Link>
            <Link href="/videos">{t('nav_videos')}</Link>
            <Link href="/blog">{t('nav_blog')}</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-blue-200 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer with Animation */}
      <div
        className={clsx(
          "fixed inset-0 z-50 flex",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Overlay with fade animation */}
        <div
          className={clsx(
            "fixed inset-0 bg-black transition-opacity duration-300",
            isOpen ? "opacity-50" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={clsx(
            "relative w-72 bg-gray-900 text-white p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Register / Login */}
          <div className="flex space-x-2 mt-8">
            <button className="bg-blue-500 flex-1 py-2 rounded-lg hover:bg-blue-600 transition">
              Register
            </button>
            <button className="bg-gray-700 flex-1 py-2 rounded-lg hover:bg-gray-600 transition">
              Login
            </button>
          </div>

          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Quick Links */}
          <div className="flex justify-between mt-4 text-sm">
            <Link href="/football-highlights" className="flex flex-col items-center hover:text-blue-400 transition">
              ⚽ <span>{t('footballHighlights')}</span>
            </Link>
            <Link href="/betting-bonus" className="flex flex-col items-center hover:text-blue-400 transition">
              💰 <span>{t('bettingBonus')}</span>
            </Link>
            <Link href="/hot-girl" className="flex flex-col items-center hover:text-blue-400 transition">
              🔥 <span>{t('hotGirls')}</span>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="mt-6 space-y-2">
            <button
              onClick={() => toggleMenu('soccer')}
              className="flex justify-between w-full py-2 border-b border-gray-700 hover:text-blue-400 transition"
            >
              {t('nav_soccerTips')} <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === 'soccer' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'soccer' && (
              <div className="pl-4 space-y-1 animate-fadeIn">
                {soccerTipsSubItems.map((item) => (
                  <Link key={item.key} href={item.href} className="block py-1 text-sm hover:text-blue-400 transition">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/soccer-predictions" className="block py-2 border-b border-gray-700 hover:text-blue-400 transition">
              {t('nav_predictions')}
            </Link>

            <Link href="/odds" className="block py-2 border-b border-gray-700 hover:text-blue-400 transition">
              {t('nav_bettingTool')}
            </Link>

            <button
              onClick={() => toggleMenu('bookmakers')}
              className="flex justify-between w-full py-2 border-b border-gray-700 hover:text-blue-400 transition"
            >
              {t('nav_bookmakers')} <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === 'bookmakers' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'bookmakers' && (
              <div className="pl-4 space-y-1 animate-fadeIn">
                {bookmakersSubItems.map((item) => (
                  <Link key={item.key} href={item.href} className="block py-1 text-sm hover:text-blue-400 transition">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => toggleMenu('videos')}
              className="flex justify-between w-full py-2 border-b border-gray-700 hover:text-blue-400 transition"
            >
              {t('nav_videos')} <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === 'videos' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'videos' && (
              <div className="pl-4 space-y-1 animate-fadeIn">
                {videosSubItems.map((item) => (
                  <Link key={item.key} href={item.href} className="block py-1 text-sm hover:text-blue-400 transition">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => toggleMenu('blog')}
              className="flex justify-between w-full py-2 border-b border-gray-700 hover:text-blue-400 transition"
            >
              {t('nav_blog')} <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === 'blog' ? 'rotate-180' : ''}`} />
            </button>
            {openMenu === 'blog' && (
              <div className="pl-4 space-y-1 animate-fadeIn">
                {blogSubItems.map((item) => (
                  <Link key={item.key} href={item.href} className="block py-1 text-sm hover:text-blue-400 transition">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
