import { RankPromotion as TRankPromotion } from "../api/rankPromotion/RankPromotion";

export const RANKPROMOTION_TITLE_FIELD = "applicant";

export const RankPromotionTitle = (record: TRankPromotion): string => {
  return record.applicant?.toString() || String(record.id);
};
