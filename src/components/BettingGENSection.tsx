'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function BettingThreeInOneSection() {
  const t = useTranslations();

  const sections = [
    {
      title: t("bettingGuide"),
      items: [
        {
          image: '/images/withdraw-beebet1.webp',
          alt: 'BeeBet',
          mainLink: 'How to withdraw money from Beebet quickly and securely',
          subLinks: [
            'Step-by-Step instructions to fund your BeeBet account',
            'How to register on BeeBet: A Step-by-Step guide',
            'BetOnline.ag withdrawal: How to cash out your winnings fast',
            'Quick & Secure deposits on BetOnline.ag - Everything you need to know'
          ]
        }
      ]
    },
    {
      title: t("bettingExperience"),
      items: [
        {
          image: '/images/withdraw-beebet2.webp',
          alt: 'Volume Betting',
          mainLink:
            'Volume betting tips: How to read money flow to escape the bookmaker trap',
          subLinks: [
            'How to play series soccer tips - How to make $100 per day',
            'Guide to bankroll management sports betting for beginners',
            'What is a bonus bet in sports betting and how does it work?',
            'Understanding negative odds and betting on the favorite'
          ]
        }
      ]
    },
    {
      title: t("bettingNews"),
      items: [
        {
          image: '/images/withdraw-beebet3.webp',
          alt: 'Cameroon Bookmakers',
          mainLink: 'Top 6 Cameroon betting sites best options for players',
          subLinks: [
            'List of top 5 Ivory Coast betting sites in 2025',
            'Top 6 best betting sites in Tanzania you should know',
            'Top 5 most reputable betting site Lebanon today',
            'Discover the top 6 betting websites in Kosovo'
          ]
        }
      ]
    }
  ];

  return (
    <div className="">
      <div className="grid gap-10 md:grid-cols-3">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-4">
              <div className="relative h-48 w-full transition-transform duration-300 hover:scale-[1.03]">
                <Image
                  src={section.items[0].image}
                  alt={section.items[0].alt}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <Link
                href="#"
                className="font-semibold text-black hover:text-[#60a5fa] block"
              >
                <h3>{section.items[0].mainLink}</h3>
              </Link>
              <hr />
              <ul className="text-sm space-y-1 text-gray-700">
                {section.items[0].subLinks.map((subLink, subIndex) => (
                  <li key={subIndex} className="py-2">
                    <Link href="#" className="flex hover:text-[#60a5fa]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 shrink-0"
                      >
                        <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                      <h3>{subLink}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
