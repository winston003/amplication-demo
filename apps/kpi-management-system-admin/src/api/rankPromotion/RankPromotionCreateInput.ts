import { RankWhereUniqueInput } from "../rank/RankWhereUniqueInput";

export type RankPromotionCreateInput = {
  applicant?: string | null;
  applicationDate?: Date | null;
  approvalStatus?: "Option1" | null;
  rank?: RankWhereUniqueInput | null;
  reviewCommittee?: string | null;
};
