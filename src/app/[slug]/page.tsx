// // app/[slug]/page.tsx
// import { Metadata } from 'next';
// import { fetchHomePostData } from '../apis'; 
// import Link from "next/link";
// import Sidebar from '@/components/layout/Sidebar';
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const slug = params.slug;
//   const apiData = await fetchHomePostData(slug);

//   if ('error' in apiData) {
//     return {
//       title: 'Page Not Found - Wintips.com',
//       description: 'The requested page could not be found.',
//     };
//   }

//   return {
//     title: apiData.seo_title || apiData.title || 'Wintips.com',
//     description: apiData.seo_description || apiData.description || 'A specialized website for reviewing bookmakers...',
//     openGraph: {
//       title: apiData.seo_title || apiData.title,
//       description: apiData.seo_description || apiData.description,
//       images: [
//         {
//           url: apiData.image || 'https://static.wintips.com/images/wintips-page/10-9-2024/Avata-wintips1.jpg',
//           width: 800,
//           height: 600,
//           alt: apiData.title || 'wintips.com',
//         },
//       ],
//       url: `https://wintips.com/${slug}`,
//       type: 'article',
//     },
//     // Add twitter, robots, icons, etc., as in your homepage
//   };
// }

// export default async function PostPage({ params }: { params: { slug: string } }) {
//   const slug = params.slug;
//   const data = await fetchHomePostData(slug);

//   return (
//       <main className="min-h-screen bg-gray-50">
//          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//              {/* Main Content */}
//              <section className="lg:col-span-3 space-y-8">
//                <div className="bg-white px-4 md:px-8 py-6 max-w-[1280px] mx-auto">
//                  {/* Breadcrumb */}
//                  <nav className="flex text-sm text-gray-500 mb-2">
//                    <Link
//                      href="/"
//                      className="text-blue-600 hover:underline transition-colors"
//                    >
//                      Wintips
//                    </Link>
//                    <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      width="16"
//                      height="16"
//                      viewBox="0 0 24 24"
//                      fill="none"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      className="tabler-icon tabler-icon-chevron-right mx-1 relative bottom-[-3px]"
//                    >
//                      <path d="M9 6l6 6l-6 6"></path>
//                    </svg>
//                    <Link
//                      href="/blog"
//                      className="text-blue-600 hover:underline transition-colors"
//                    >
//                      Blog
//                    </Link>
   
//                    <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      width="16"
//                      height="16"
//                      viewBox="0 0 24 24"
//                      fill="none"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                      strokeLinecap="round"
//                      strokeLinejoin="round"
//                      className="tabler-icon tabler-icon-chevron-right mx-1 relative bottom-[-3px]"
//                    >
//                      <path d="M9 6l6 6l-6 6"></path>
//                    </svg>
//                    <span>Betting Guide</span>
//                  </nav>
   
//                  {/* Title & Description */}
//                  <h1 className="text-2xl font-bold mb-2">Betting Guide</h1>
//                  <p className="text-gray-700 mb-6">
//              Betting guide is a comprehensive section that provides readers with in-depth information and advice on various forms of betting. From sports betting to casino games, Betting guide covers a range of topics that are designed to help readers make informed decisions when placing bets.
   
//              Whether you are a beginner or an experienced bettor, Betting guide has something for everyone. With expert advice and practical tips, readers can stay up-to-date on the latest trends and developments in the world of betting, and make more informed and profitable betting decisions.
//                  </p>
   
//                </div>
//              </section>
   
//              {/* Sidebar */}
//              <aside className="lg:col-span-1">
//                <Sidebar />
//              </aside>
//            </div>
//          </div>
//        </main>
//   );
// }