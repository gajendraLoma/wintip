'use client';

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const bookmakers = [
  {
    name: 'W88.com',
    cover: '/images/w88.png',
    bonus: '200$',
    color: 'bg-blue-500'
  },
  {
    name: 'FUN88',
    cover: '/images/fun88.png',
    bonus: '230$',
    color: 'bg-cyan-500'
  },
  {
    name: 'fb88',
    cover: '/images/fb88.png',
    bonus: '100$',
    color: 'bg-green-500'
  },
  {
    name: 'M88',
    cover: '/images/m88.png',
    bonus: '210$',
    color: 'bg-gray-800'
  },
  {
    name: 'BK8',
    cover: '/images/bk88.png',
    bonus: '100$',
    color: 'bg-blue-600'
  }
];

const videos = [
  {
    title: '111The Best FIFA World Cup Goals Scored in Stoppage Time',
    thumbnail: '/images/m88.png'
  },
  {
    title: "Relive Cristiano Ronaldo's iconic moments through highlight clips",
    thumbnail: '/images/fifa.webp'
  },
  {
    title: 'Lionel Messi - The Master of Dribbles',
    thumbnail: '/images/fifa.webp'
  },
  {
    title: '33 Greatest Goals in Football History',
    thumbnail: '/images/fifa.webp'
  }
];

const news = [
  {
    title: 'Find out which teams have never been relegated from the Premier...',
    thumbnail: '/images/fifa.webp'
  },
  {
    title: 'List of top 10 English football clubs that no longer exist',
    thumbnail: '/images/fifa.webp'
  },
  {
    title: 'Ranked top 7 best national football teams of all time',
    thumbnail: '/images/fifa.webp'
  },
  {
    title: 'List of top 6 worst football team in the Premier League',
    thumbnail: '/images/fifa.webp'
  }
];

export default function Sidebar() {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      {/* Top Bookmakers */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t('topBookmakers')}
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {bookmakers.map((bookmaker, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#eaf4ff] rounded-lg pr-3"
            >
              <div className="flex items-center space-x-3 rounded-[5px] ">
                <div
                  className={`inline-block h-[90px] w-[90px] shrink-0 ${bookmaker.color} rounded flex items-center justify-center text-white text-xs font-bold`}
                >
                  <Image
                    src={bookmaker.cover}
                    alt=""
                    width={90}
                    height={90}
                    className="rounded"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('bonusUpTo')}</div>
                  <div className="font-bold text-lg animate-zoom-pulse">
                    {bookmaker.bonus}
                  </div>
                </div>
              </div>
              <button
                className="h-7 w-[90px] rounded-[14px] bg-white p-0 text-xs text-blue-500 hover:bg-white flex items-center justify-center gap-x-1 animate-btn-swing"
                type="button"
              >
                <span>
                  <span className="flex items-center">
                    <span className="text-blue-500">{t('playNow')}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon text-blue-500"
                    >
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Join Now Banner */}

      <div className="grid grid-cols-1 w-full py-1">
        <Link
          href="https://t.me/wintipscom"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full overflow-hidden rounded-md aspect-[4/3] sm:aspect-[16/19]"
        >
          <Image
            src="/images/banner-group-wintipsgif-sidenav.webp"
            alt="banner-group-wintipsgif"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </Link>
      </div>

      {/* Football Videos */}
      {/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t("footballVideos")}
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {videos.map((video, index) => (
            <div key={index} className="flex space-x-3 group">
              <div className="relative flex-shrink-0">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={100}
                  height={60}
                  className="w-20 h-12 object-cover rounded"
                />
                <div className="absolute bottom-1 left-1 inline-block transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/images/playerIcon.png"
                    alt="Player"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Betting Guide Videos */}
      {/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t("bettingGuideVideos")}
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {videos.map((video, index) => (
            <div key={index} className="flex space-x-3 group">
              <div className="relative flex-shrink-0">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                width={100}
                  height={60}
                  className="w-20 h-12 object-cover rounded"
                />
                <div className="absolute bottom-1 left-1 inline-block transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/images/playerIcon.png"
                    alt="Player"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Sports News */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t('sportsNews')}
          </h3>
        </div>

        <div className="p-4 space-y-4">
          {news.map((video, index) => (
            <div key={index} className="flex space-x-3 group">
              <div className="relative flex-shrink-0">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={100}
                  height={60}
                  className="w-16 h-16  object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Betting */}
      {/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t("sportsBetting")}
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {videos.map((video, index) => (
            <div key={index} className="flex space-x-3 group">
              <div className="relative flex-shrink-0">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                    width={100}
                  height={60}
                  className="w-16 h-16 object-cover rounded"
                />
             
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Betting Tool */}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-white py-2 border-b">
          <h3 className="font-bold text-gray-900 flex items-center">
            <Image
              src="/svg/ChevronRight.svg"
              alt="Chevron"
              className="mr-1"
              width={20}
              height={20}
            />
            {t('bettingTool')}
          </h3>
        </div>

        <div className="p-3 space-y-2">
          <Link
            href="odds"
            className="reset-link flex items-center rounded-[5px] bg-[#f5f5f5] px-2 py-[10px] text-[15px] hover:bg-[#f2f9ff]"
          >
            <p className="m-0 flex h-[38px] w-[38px] items-center justify-center">
              <img
                src="/images/Vector-Smart-Object1.webp"
                alt="Drops Odds icon"
                loading="lazy"
                width="36"
                height="20"
                className="h-5 w-5 object-contain"
              />
            </p>

            <h3>{t('dropsOdds')}</h3>
          </Link>

          <Link
            href="soccer-predictions"
            className="reset-link flex items-center rounded-[5px] bg-[#f5f5f5] px-2 py-[10px] text-[15px] hover:bg-[#f2f9ff]"
          >
            <p className="m-0 flex h-[38px] w-[38px] items-center justify-center">
              <img
                src="/images/Vector-Smart-Object2.webp"
                alt="Soccer Predictions icon"
                loading="lazy"
                width="36"
                height="20"
                className="h-5 w-5 object-contain"
              />
            </p>
            <h3>{t('soccerPredictions')}</h3>
          </Link>

          <Link
            href="premium-soccer-tips"
            className="reset-link flex items-center rounded-[5px] bg-[#f5f5f5] px-2 py-[10px] text-[15px] hover:bg-[#f2f9ff]"
          >
            <p className="m-0 flex h-[38px] w-[38px] items-center justify-center">
              <img
                src="/images/Vector-Smart-Object3.webp"
                alt="Soccer Tips icon"
                loading="lazy"
                width="36"
                height="20"
                className="h-5 w-5 object-contain"
              />
            </p>
            <h3>{t('soccerTips')}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
