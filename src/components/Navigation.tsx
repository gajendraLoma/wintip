'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

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
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          <div className="flex items-center">
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                {t('nav_home')}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 transition-colors font-medium text-sm focus:outline-none">
                  {t('nav_soccerTips')}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-800 shadow-lg rounded-md p-1 mt-2">
                  {soccerTipsSubItems.map((item) => (
                    <DropdownMenuItem key={item.key} className="hover:bg-gray-100 rounded px-4 py-2 cursor-pointer">
                      <Link href={item.href} className="block w-full h-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/soccer-predictions" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                {t('nav_predictions')}
              </Link>
              <Link href="/odds" className="text-white hover:text-blue-200 transition-colors font-medium relative text-sm">
                {t('nav_bettingTool')}
                <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs px-1 rounded">New</span>
              </Link>
              {/* <Link href="/bookmakers" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                {t('bookmakers')}
              </Link> */}
         
                <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 transition-colors font-medium text-sm focus:outline-none">
                  {t('nav_bookmakers')}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-800 shadow-lg rounded-md p-1 mt-2">
                  {bookmakersSubItems.map((item) => (
                    <DropdownMenuItem key={item.key} className="hover:bg-gray-100 rounded px-4 py-2 cursor-pointer">
                      <Link href={item.href} className="block w-full h-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
     



              {/* <Link href="/videos" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                {t('videos')}
              </Link> */}

              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 transition-colors font-medium text-sm focus:outline-none">
                  {t('nav_videos')}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-800 shadow-lg rounded-md p-1 mt-2">
                  {videosSubItems.map((item) => (
                    <DropdownMenuItem key={item.key} className="hover:bg-gray-100 rounded px-4 py-2 cursor-pointer">
                      <Link href={item.href} className="block w-full h-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>


              {/* <Link href="/blog" className="text-white hover:text-blue-200 transition-colors font-medium text-sm">
                {t('blog')}
              </Link> */}

              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-blue-200 transition-colors font-medium text-sm focus:outline-none">
                  {t('nav_blog')}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-800 shadow-lg rounded-md p-1 mt-2">
                  {blogSubItems.map((item) => (
                    <DropdownMenuItem key={item.key} className="hover:bg-gray-100 rounded px-4 py-2 cursor-pointer">
                      <Link href={item.href} className="block w-full h-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>



            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-700/90 backdrop-blur-md rounded-lg mt-2 shadow-lg animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_home')}
              </Link>
              <DropdownMenu open={isOpen}>
                <DropdownMenuTrigger className="block px-3 py-2 text-white hover:text-blue-200 transition-colors w-full text-left">
                  {t('nav_soccerTips')}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-gray-800 shadow-lg rounded-md p-1 mt-1">
                  {soccerTipsSubItems.map((item) => (
                    <DropdownMenuItem key={item.key} className="hover:bg-gray-100 rounded px-4 py-2 cursor-pointer">
                      <Link href={item.href} className="block w-full h-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/predictions" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_predictions')}
              </Link>
              <Link href="/betting-tool" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_bettingTool')}
              </Link>
              <Link href="/bookmakers" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_bookmakers')}
              </Link>
              <Link href="/videos" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_videos')}
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-white hover:text-blue-200 transition-colors">
                {t('nav_blog')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}