import { RankWhereUniqueInput } from "../rank/RankWhereUniqueInput";

export type RankAdjustmentCreateInput = {
  adjustmentReason?: string | null;
  effectiveDate?: Date | null;
  rank?: RankWhereUniqueInput | null;
};
