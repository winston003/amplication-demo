import { RankAdjustment as TRankAdjustment } from "../api/rankAdjustment/RankAdjustment";

export const RANKADJUSTMENT_TITLE_FIELD = "id";

export const RankAdjustmentTitle = (record: TRankAdjustment): string => {
  return record.id?.toString() || String(record.id);
};
