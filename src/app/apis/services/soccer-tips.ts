// apis/tips.ts
import { ApiResponse, TipsResponse } from '@/lib/types/tips';

const apiBaseUrl = process.env.API_DOMAIN;

export async function fetchTipsData(page: number = 1, limit: number = 15): Promise<ApiResponse> {
  try {
    const res = await fetch(`${apiBaseUrl}/api/tips/?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 30 },
    });
    console.log('res', res);
    if (!res.ok) {
      return { error: `API request failed with status ${res.status}` };
    }

    const data = await res.json();
    console.log('data123', data);
    return data;
  } catch (error: unknown) {
    console.error('Error fetching tips data:', error);
    return { error: (error instanceof Error ? error.message : 'Unknown error occurred') };
  }
}