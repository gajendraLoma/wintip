import BookmakerCard from "../../components/BookmakerCard";
import Link from "next/link";
const BettingBonus = () => {
  const bookmakers = [
    {
      rank: 1,
      name: "W88",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 20%",
      bonusDescription: "Up to $200 in Saba Sports",
      backgroundColor: "bg-blue-500",
    },
    {
      rank: 2,
      name: "Fun88",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 100%",
      bonusDescription: "Up to $230 welcome bonus",
      backgroundColor: "bg-orange-500",
    },
    {
      rank: 3,
      name: "FB88",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 100%",
      bonusDescription: "Bonus up to $100 first deposit",
      backgroundColor: "bg-green-500",
    },
    {
      rank: 4,
      name: "M88",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 150%",
      bonusDescription: "Welcome bonus up to $210",
      backgroundColor: "bg-gray-800",
    },
    {
      rank: 5,
      name: "BK8",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 100%",
      bonusDescription: "Bonus up to $100 first deposit",
      backgroundColor: "bg-blue-600",
    },
    {
      rank: 26,
      name: "Pinnacle",
      logo: "/images/Banner-Home-Page3.webp",
      rating: 5,
      bonus: "Get 10%",
      bonusDescription: "Cashback up to $200",
      backgroundColor: "bg-gray-200",
    },
  ];

  return (
    <div className="flex-1 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-2">
             <Link href="/" className="text-blue-600 hover:underline">
                  Wintips
                </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-chevron-right mx-1 relative bottom-[-3px]"
          >
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
          <span>Best Bookmaker Bonuses & Promotions – Daily Updated Deals</span>
        </nav>

        {/* Title & Description */}
        <h1 className="text-2xl font-bold mb-2">
          Best Bookmaker Bonuses & Promotions – Daily Updated Deals
        </h1>
        <p className="text-gray-700 mb-6">
          Betting bonus at Wintips.com – A site specializing in compiling the
          hottest promotions today with many attractive promotions. Stay
          constantly updated with the highest and latest promotions from
          reputable bookmakers, sports bookmakers and redemption games. Bonus
          promotions are offered by bookmakers to attract new members, while
          retaining old members who are using the services that the bookmaker
          provides. At
          <Link
            href="https://www.wintips.com"
            className="text-blue-600 hover:underline"
          >
            Wintips.com
          </Link>{" "}
          , we will not only provide you with the latest and most attractive
          promotion information, but also the promotions that are considered the
          most valuable for players.
        </p>

        {/* Table Header */}
        <div className="mb-6">
          <div className="hidden md:flex items-center p-4 bg-gray-50 border-b font-medium text-gray-700">
            <div className="w-12">Top</div>
            <div className="w-80">Bookmaker</div>
            <div className="flex-1 px-6">Bonus</div>
            <div className="w-32 text-center">Get Offer</div>
          </div>

          {/* Bookmaker List */}
          <div className="divide-y divide-gray-100">
            {bookmakers.map((bookmaker) => (
              <BookmakerCard
                key={bookmaker.rank}
                rank={bookmaker.rank}
                name={bookmaker.name}
                rating={bookmaker.rating}
                bonus={bookmaker.bonus}
                bonusDescription={bookmaker.bonusDescription}
                backgroundColor={bookmaker.backgroundColor}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="p-4 text-center border-t">
            <button className="text-blue-700 hover:underline">
              View More +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingBonus;
