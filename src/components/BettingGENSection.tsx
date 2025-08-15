'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface CategoryItem {
  title: string;
  featured_image: string;
  slug: string;
  published_date: string;
}

interface BettingThreeInOneSectionProps {
  data?: {
    category_left?: CategoryItem[];
    category_middle_data?: CategoryItem[];
    category_right_data?: CategoryItem[];
  };
}

export default function BettingThreeInOneSection({ data }: BettingThreeInOneSectionProps) {
  const t = useTranslations();
const ImgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
console.log("ImgBaseUrl",ImgBaseUrl)
  const hasValidData = (category?: CategoryItem[]): category is CategoryItem[] =>
    Array.isArray(category) && category.length > 0 && category.every(item =>
      item.title && item.featured_image && item.slug && item.published_date
    );

  const sections = [
    {
      title: t('bettingGuide'),
      items: hasValidData(data?.category_left) ? data.category_left : null,
    },
    {
      title: t('bettingExperience'),
      items: hasValidData(data?.category_middle_data) ? data.category_middle_data : null,
    },
    {
      title: t('bettingNews'),
      items: hasValidData(data?.category_right_data) ? data.category_right_data : null,
    },
  ].filter((section): section is { title: string; items: CategoryItem[] } => section.items !== null);

  if (sections.length === 0) {
    return null; 
  }

  return (
    <div className="">
      <div className="grid gap-10 md:grid-cols-3">
        {sections.map((section, index) => {
        const featuredImage= ImgBaseUrl + section.items[0].featured_image

        console.log("featuredImage",featuredImage)
         return(
          <div key={index}>
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-4">
              <div className="relative h-48 w-full transition-transform duration-300 hover:scale-[1.03]">
                <Image
                  src={featuredImage}
                  alt={section.items[0].title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <Link
                href={`/${section.items[0].slug}`}
                className="font-semibold text-black hover:text-[#60a5fa] block"
              >
                <h3>{section.items[0].title}</h3>
              </Link>
              <hr />
              <ul className="text-sm space-y-1 text-gray-700">
                {section.items.slice(1).map((item, subIndex) => (
                  <li key={subIndex} className="py-2">
                    <Link href={`/${item.slug}`} className="flex hover:text-[#60a5fa]">
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
                      <h3>{item.title}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

       )}
        )}
      </div>
    </div>
  );
}