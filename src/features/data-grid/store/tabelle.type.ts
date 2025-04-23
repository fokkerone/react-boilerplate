export enum SubscriptionType {
  Subscription = 'subscription',
  OneTimePurchase = 'oneTimePurchase',
}

export interface TabelleData {
  id: string;
  colors: string[];
  tags: string[];
  text: string;
  likesCount: number;
  normalizedHash: string;
  createdAt: string;
}
