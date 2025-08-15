'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface AidsProps {
  data?: {
    banner_middle?: {
      left_url: string;
      left_image: string;
      right_url: string;
      right_image: string;
    };
  };
}

export default function Aids({ data }: AidsProps) {
  const t = useTranslations();

  
  if (!data?.banner_middle || 
      !data.banner_middle.left_url || 
      !data.banner_middle.left_image || 
      !data.banner_middle.right_url || 
      !data.banner_middle.right_image) {
    return null;
  }


  const { left_url, left_image, right_url, right_image } = data.banner_middle;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <Link
        href={left_url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-[50px] sm:h-[80px] overflow-hidden rounded-md"
      >
        <Image
          src={left_image}
          alt={'Left Advertisement Banner' }
          fill
          className="object-cover"
          priority
        />
      </Link>
      <Link
        href={right_url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-[50px] sm:h-[80px] overflow-hidden rounded-md"
      >
        <Image
          src={right_image}
          alt={'Right Advertisement Banner'}
          fill
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}