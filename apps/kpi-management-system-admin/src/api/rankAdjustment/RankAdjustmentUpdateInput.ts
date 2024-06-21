import { RankWhereUniqueInput } from "../rank/RankWhereUniqueInput";

export type RankAdjustmentUpdateInput = {
  adjustmentReason?: string | null;
  effectiveDate?: Date | null;
  rank?: RankWhereUniqueInput | null;
};
