import { HomepageData } from '@/lib/types/homepage';
const apiBaseUrl = process.env.API_DOMAIN;

export async function fetchHomeDatas(): Promise<HomepageData | { error: string }> {

  try {
    const res = await fetch(`${apiBaseUrl}/wp-json/get/page`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 30 }
    });
    console.log("res",res)
    if (!res.ok) {
      return { error: `API request failed with status ${res.status}` };
    }

    const data = await res.json();

    console.log("data123",data)
    return data;
  } catch (error: any) {
    console.error('Error fetching homepage data:', error);
    return { error: error?.message || 'Unknown error occurred' };
  }
}
