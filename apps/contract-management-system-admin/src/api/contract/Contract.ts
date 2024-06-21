import { ContractApproval } from "../contractApproval/ContractApproval";
import { ContractPerformance } from "../contractPerformance/ContractPerformance";
import { ContractQuery } from "../contractQuery/ContractQuery";
import { ContractReminder } from "../contractReminder/ContractReminder";
import { ContractVersion } from "../contractVersion/ContractVersion";

export type Contract = {
  contractApprovals?: Array<ContractApproval>;
  contractPerformances?: Array<ContractPerformance>;
  contractQueries?: Array<ContractQuery>;
  contractReminders?: Array<ContractReminder>;
  contractVersions?: Array<ContractVersion>;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  template: string | null;
  title: string | null;
  updatedAt: Date;
  version: string | null;
};
