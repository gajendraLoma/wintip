// components/common/Footer.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { fetchAllFooterData } from '@/app/apis';
import { MenuData, MenuItem } from '@/lib/types/menu';


export default function Footer() {
  const [footerData, setFooterData] = useState<{ [key: string]: MenuData | { error: string } }>({});
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllFooterData();
      setFooterData(data);
    };
    loadData();
  }, []);

  const getLabel = (lang: MenuItem['lang'], currentLocale: string) => {
    const langItem = lang.find((l) => l[currentLocale]);
    return langItem ? langItem[currentLocale] : lang[0]?.[Object.keys(lang[0])[0]] || '';
  };

  const renderFooterSection = (location: string) => {
    const data = footerData[location];
    if (!data || 'error' in data) return null;

    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">
         {data.title ? getLabel(data.title, locale) : ''}
        </h3>
        <ul className="space-y-2 text-sm text-gray-400">
          {data.result.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className="hover:text-white transition-colors">
                {getLabel(item.lang, locale)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            {renderFooterSection('footer-1')}
            {renderFooterSection('footer-2')}
            {renderFooterSection('footer-3')}
            {renderFooterSection('footer-4')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {renderFooterSection('footer-5')}
            {renderFooterSection('footer-6')}
            {renderFooterSection('footer-7')}
            {renderFooterSection('footer-8')}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
           asas   {t('copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}