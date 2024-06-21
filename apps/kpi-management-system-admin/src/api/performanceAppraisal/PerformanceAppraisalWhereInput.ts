import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PerformanceAppraisalWhereInput = {
  applicant?: StringNullableFilter;
  goalAchievement?: StringNullableFilter;
  id?: StringFilter;
  reviewComment?: StringNullableFilter;
  selfEvaluation?: StringNullableFilter;
  status?: "Option1";
  supervisorComment?: StringNullableFilter;
};
