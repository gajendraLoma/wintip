import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Aids() {
  const ads = [
    {
      src: "/images/Gif-banner-web-adds1.gif",
      alt: "Advertisement join wintips",
      href: "https://t.me/wintipscom",
    },
    {
      src: "/images/Gif-banner-web-adds2.gif",
      alt: "Advertisement W88",
      href: "https://www.w88nih.com/?affiliateid=49640",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {ads.map((ad, index) => (
        <Link
          key={index}
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-[50px] sm:h-[80px] overflow-hidden rounded-md"
        >
          <Image
            src={ad.src}
            alt={ad.alt}
            fill
            className="object-cover"
            priority
          />
        </Link>
      ))}
    </div>
  );
}
