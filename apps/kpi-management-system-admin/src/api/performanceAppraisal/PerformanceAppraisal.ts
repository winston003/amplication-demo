export type PerformanceAppraisal = {
  applicant: string | null;
  createdAt: Date;
  goalAchievement: string | null;
  id: string;
  reviewComment: string | null;
  selfEvaluation: string | null;
  status?: "Option1" | null;
  supervisorComment: string | null;
  updatedAt: Date;
};
