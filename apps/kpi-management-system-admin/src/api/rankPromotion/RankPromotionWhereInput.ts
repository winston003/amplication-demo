import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RankWhereUniqueInput } from "../rank/RankWhereUniqueInput";

export type RankPromotionWhereInput = {
  applicant?: StringNullableFilter;
  applicationDate?: DateTimeNullableFilter;
  approvalStatus?: "Option1";
  id?: StringFilter;
  rank?: RankWhereUniqueInput;
  reviewCommittee?: StringNullableFilter;
};
