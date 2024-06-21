import { Rank } from "../rank/Rank";

export type RankPromotion = {
  applicant: string | null;
  applicationDate: Date | null;
  approvalStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  rank?: Rank | null;
  reviewCommittee: string | null;
  updatedAt: Date;
};
