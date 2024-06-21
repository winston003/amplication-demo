import { SortOrder } from "../../util/SortOrder";

export type PerformanceAppraisalOrderByInput = {
  applicant?: SortOrder;
  createdAt?: SortOrder;
  goalAchievement?: SortOrder;
  id?: SortOrder;
  reviewComment?: SortOrder;
  selfEvaluation?: SortOrder;
  status?: SortOrder;
  supervisorComment?: SortOrder;
  updatedAt?: SortOrder;
};
