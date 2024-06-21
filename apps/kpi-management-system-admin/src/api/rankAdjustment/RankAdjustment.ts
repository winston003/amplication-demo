import { Rank } from "../rank/Rank";

export type RankAdjustment = {
  adjustmentReason: string | null;
  createdAt: Date;
  effectiveDate: Date | null;
  id: string;
  rank?: Rank | null;
  updatedAt: Date;
};
