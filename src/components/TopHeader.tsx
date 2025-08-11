'use client';

import {useTranslations} from 'next-intl';
import {User} from 'lucide-react';
import LocaleSwitcher from './LocaleSwitcher';
import Link from 'next/link';

export default function TopHeader() {
  const t = useTranslations();
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <Link
              href="/football-highlights"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
            >
              <span>⚽</span>
              <span>{t('footballHighlights')}</span>
            </Link>
            <Link
              href="/betting-bonus"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
            >
              <span>💰</span>
              <span>{t('bettingBonus')}</span>
            </Link>
            <Link
              href="/hot-girl"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
            >
              <span>🔥</span>
              <span>{t('hotGirls')}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="" style={{zIndex: '9999'}}>
              <LocaleSwitcher />
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span className="text-xs">GMT +7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
