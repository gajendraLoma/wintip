'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-white">

    
      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        
           <div>
              <h3 className="text-lg font-semibold mb-4">{t('soccerTipsTool')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('premiumSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('freeSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerTips1x2')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerPredictions')}</a></li>
              </ul>
            </div>

            {/* Soccer Tips & Tool */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('soccerTipsTool')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('premiumSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('freeSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerTips1x2')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerPredictions')}</a></li>
              </ul>
            </div>

            {/* Bookmaker & Betting Guides */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('bookmakerBettingGuides')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('topBookmakers')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('bettingBonus')}</a></li>
              </ul>
            </div>

            {/* Wintips.com */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('wintipsCom')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('termsConditions')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('siteMap')}</a></li>
              </ul>
            </div>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
           <div>
              <h3 className="text-lg font-semibold mb-4">{t('soccerTipsTool')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('premiumSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('freeSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerTips1x2')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerPredictions')}</a></li>
              </ul>
            </div>

            {/* Soccer Tips & Tool */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('soccerTipsTool')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('premiumSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('freeSoccerTips')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerTips1x2')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('soccerPredictions')}</a></li>
              </ul>
            </div>

            {/* Bookmaker & Betting Guides */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('bookmakerBettingGuides')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('topBookmakers')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('bettingBonus')}</a></li>
              </ul>
            </div>

            {/* Wintips.com */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('wintipsCom')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('termsConditions')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('siteMap')}</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
}