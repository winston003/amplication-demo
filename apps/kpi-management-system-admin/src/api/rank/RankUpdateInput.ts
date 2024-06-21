import { RankAdjustmentUpdateManyWithoutRanksInput } from "./RankAdjustmentUpdateManyWithoutRanksInput";
import { RankPromotionUpdateManyWithoutRanksInput } from "./RankPromotionUpdateManyWithoutRanksInput";

export type RankUpdateInput = {
  name?: string | null;
  rankAdjustments?: RankAdjustmentUpdateManyWithoutRanksInput;
  rankPromotions?: RankPromotionUpdateManyWithoutRanksInput;
  requirements?: string | null;
  responsibilities?: string | null;
};
