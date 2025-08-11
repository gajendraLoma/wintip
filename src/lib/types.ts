// types.ts
export interface Bookmaker {
  rank: number;
  name: string;
  bonus: string;
  bonusDetail: string;
  reviews: string[];
  rating: number;
  votes: number;
  bonusValue: number;
  playerChoice: boolean;
}
