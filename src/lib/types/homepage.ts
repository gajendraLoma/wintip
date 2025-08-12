// lib/types/homepage.ts
export interface HomepageData {
  title: string;
  seo_title: string;
  description: string;
  image: string;
  post_date: string;
  content: string;
  type: string;
  banner_top: {
    title: string;
    link: string;
    description: string;
    image: string;
  };
  banner_middle: {
    left_url: string;
    left_image: string;
    right_url: string;
    right_image: string;
  };
  category_left: string[];
  category_middle_data: string[];
  // Add other fields as needed based on the full JSON structure
}

export type ApiResponse = HomepageData | { error: string };