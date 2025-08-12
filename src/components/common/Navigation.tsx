'use client';

import {useState} from 'react';
import {Menu, X, ChevronDown} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {useTranslations} from 'next-intl';
import LocaleSwitcherMob from '../LocaleSwitcherMob';
import LocaleSwitcher from '../LocaleSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const t = useTranslations();
  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeNav = () => {
    setIsOpen(false);
    setOpenMenu(null);
  };

  const soccerTipsSubItems = [
    {
      key: 'freeSoccerTips',
      href: '/free-soccer-tips',
      label: t('freeSoccerTips')
    },
    {key: 'soccerTips1x2', href: '/soccer-tips-1x2', label: t('soccerTips1x2')},
    {
      key: 'premiumSoccerTips',
      href: '/premium-soccer-tips',
      label: t('premiumSoccerTips')
    },
    {
      key: 'seriesSoccerTips',
      href: '/series-soccer-tips',
      label: t('seriesSoccerTips')
    }
  ];

  const bookmakersSubItems = [
    {key: 'bettingBonus', href: '/betting-bonus', label: t('bettingBonus')}
  ];

  const blogSubItems = [
    {
      key: 'bettingExperience',
      href: '/betting-experience',
      label: t('bettingExperience')
    },
    {key: 'bettingGuide', href: '/betting-guide', label: t('bettingGuide')},
    {key: 'bettingNews', href: '/betting-news', label: t('bettingNews')}
  ];

  return (
    <header className="bg-[#0065cb] text-white px-4 md:shadow-[0px_4px_30px_0px_#00000040] sticky top-0 left-0 right-0 z-50">
      <nav className="max-w-8xl mx-auto h-full flex justify-between items-center lg:px-8">
        {/* Logo */}
        <div className="py-1 md:py-2">
          <Link href="/" onClick={closeNav} className="flex items-center">
            <Image
              alt="Wintips logo"
              loading="lazy"
              src="/images/logo-wintips.webp"
              width={190}
              height={36}
              className="mr-2 h-[50px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 m-0 h-full">
          <li className="h-full py-4">
            <Link
              href="/"
              onClick={closeNav}
              className="transition-colors inline-block w-full addhereActiveclass text-sm"
            >
              {t('nav_home')}
            </Link>
          </li>
          <li className="h-full relative group py-4">
            <button className="transition-colors flex items-center addhereActiveclass text-sm">
              {t('nav_soccerTips')}
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute rounded hidden group-hover:block min-w-48 bg-[#ffffff] shadow border-[1px solid #cecccc]">
              <ul className="px-4 py-2 flex flex-col gap-2">
                {soccerTipsSubItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={closeNav}
                      className="transition-colors text-sm text-gray-700 hover:text-[#60a5fa]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="h-full py-4">
            <Link
              href="/soccer-predictions"
              onClick={closeNav}
              className="transition-colors inline-block w-full addhereActiveclass text-sm"
            >
              {t('nav_predictions')}
            </Link>
          </li>
          <li className="h-full py-4">
            <Link
              href="/odds"
              onClick={closeNav}
              className="transition-colors inline-block w-full addhereActiveclass text-sm"
            >
              {t('nav_bettingTool')}
            </Link>
          </li>
          <li className="h-full py-4">
            <Link
              href="/bookmakers"
              onClick={closeNav}
              className="transition-colors inline-block w-full addhereActiveclass text-sm"
            >
              {t('nav_bookmakers')}
            </Link>
          </li>
          <li className="h-full py-4">
            <Link
              href="/blog"
              onClick={closeNav}
              className="transition-colors inline-block w-full text-sm"
            >
              {t('nav_blog')}
            </Link>
          </li>

          <li className="h-full py-4">
          
            <LocaleSwitcher />
           
          </li>

        </ul>

        {/* Mobile Menu Button */}
     <div className="flex gap-1 items-center md:hidden">
       <LocaleSwitcherMob />
    
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


        {/* Mobile Menu */}
        <div  className={clsx(
            'md:hidden fixed inset-0 bg-[#1a222d] z-50 transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-between p-3">
            <Link href="/" className="flex items-center">
              <Image
                alt="Wintips logo"
                loading="lazy"
                src="/images/logo-wintips.webp"
                width={190}
                height={36}
                className="mr-2 h-[50px] object-contain"
              />
            </Link>

            <button onClick={closeNav} aria-label="Close mobile menu">
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                href="/"
                onClick={closeNav}
                className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_home')}
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleMenu('soccer')}
                className="flex justify-between w-full text-sm hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_soccerTips')}
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${openMenu === 'soccer' ? 'rotate-180' : ''}`}
                />
              </button>
              {openMenu === 'soccer' && (
                <ul className="pl-4 flex flex-col gap-2 mt-2">
                  {soccerTipsSubItems.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={closeNav}
                        className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/soccer-predictions"
                onClick={closeNav}
                className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_predictions')}
              </Link>
            </li>
            <li>
              <Link
                href="/odds"
                onClick={closeNav}
                className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_bettingTool')}
              </Link>
            </li>

            <li>
              <button
                onClick={() => toggleMenu('bookmakers')}
                className="flex justify-between w-full text-sm hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_bookmakers')}
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${openMenu === 'bookmakers' ? 'rotate-180' : ''}`}
                />
              </button>
              {openMenu === 'bookmakers' && (
                <ul className="pl-4 flex flex-col gap-2 mt-2">
                  {bookmakersSubItems.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={closeNav}
                        className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleMenu('blog')}
                className="flex justify-between w-full text-sm hover:text-[#7BF179] transition-colors text-sm"
              >
                {t('nav_blog')}
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${openMenu === 'blog' ? 'rotate-180' : ''}`}
                />
              </button>
              {openMenu === 'blog' && (
                <ul className="pl-4 flex flex-col gap-2 mt-2">
                  {blogSubItems.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={closeNav}
                        className="text-sm block hover:text-[#7BF179] transition-colors text-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
  
          </ul>
        </div>
      </nav>
    </header>
  );
}
