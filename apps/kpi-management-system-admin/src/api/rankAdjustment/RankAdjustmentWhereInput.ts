import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RankWhereUniqueInput } from "../rank/RankWhereUniqueInput";

export type RankAdjustmentWhereInput = {
  adjustmentReason?: StringNullableFilter;
  effectiveDate?: DateTimeNullableFilter;
  id?: StringFilter;
  rank?: RankWhereUniqueInput;
};
