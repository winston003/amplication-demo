import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RankAdjustmentListRelationFilter } from "../rankAdjustment/RankAdjustmentListRelationFilter";
import { RankPromotionListRelationFilter } from "../rankPromotion/RankPromotionListRelationFilter";

export type RankWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  rankAdjustments?: RankAdjustmentListRelationFilter;
  rankPromotions?: RankPromotionListRelationFilter;
  requirements?: StringNullableFilter;
  responsibilities?: StringNullableFilter;
};
