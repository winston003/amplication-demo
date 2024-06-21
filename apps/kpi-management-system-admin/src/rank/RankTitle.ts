import { Rank as TRank } from "../api/rank/Rank";

export const RANK_TITLE_FIELD = "name";

export const RankTitle = (record: TRank): string => {
  return record.name?.toString() || String(record.id);
};
