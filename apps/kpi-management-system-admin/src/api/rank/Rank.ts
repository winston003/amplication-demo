import { RankAdjustment } from "../rankAdjustment/RankAdjustment";
import { RankPromotion } from "../rankPromotion/RankPromotion";

export type Rank = {
  createdAt: Date;
  id: string;
  name: string | null;
  rankAdjustments?: Array<RankAdjustment>;
  rankPromotions?: Array<RankPromotion>;
  requirements: string | null;
  responsibilities: string | null;
  updatedAt: Date;
};
