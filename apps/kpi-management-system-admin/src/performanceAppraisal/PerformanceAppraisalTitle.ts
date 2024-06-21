import { PerformanceAppraisal as TPerformanceAppraisal } from "../api/performanceAppraisal/PerformanceAppraisal";

export const PERFORMANCEAPPRAISAL_TITLE_FIELD = "applicant";

export const PerformanceAppraisalTitle = (
  record: TPerformanceAppraisal
): string => {
  return record.applicant?.toString() || String(record.id);
};
