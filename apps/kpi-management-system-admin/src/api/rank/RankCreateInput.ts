import { RankAdjustmentCreateNestedManyWithoutRanksInput } from "./RankAdjustmentCreateNestedManyWithoutRanksInput";
import { RankPromotionCreateNestedManyWithoutRanksInput } from "./RankPromotionCreateNestedManyWithoutRanksInput";

export type RankCreateInput = {
  name?: string | null;
  rankAdjustments?: RankAdjustmentCreateNestedManyWithoutRanksInput;
  rankPromotions?: RankPromotionCreateNestedManyWithoutRanksInput;
  requirements?: string | null;
  responsibilities?: string | null;
};
