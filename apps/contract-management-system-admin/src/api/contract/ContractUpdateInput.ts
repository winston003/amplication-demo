import { ContractApprovalUpdateManyWithoutContractsInput } from "./ContractApprovalUpdateManyWithoutContractsInput";
import { ContractPerformanceUpdateManyWithoutContractsInput } from "./ContractPerformanceUpdateManyWithoutContractsInput";
import { ContractQueryUpdateManyWithoutContractsInput } from "./ContractQueryUpdateManyWithoutContractsInput";
import { ContractReminderUpdateManyWithoutContractsInput } from "./ContractReminderUpdateManyWithoutContractsInput";
import { ContractVersionUpdateManyWithoutContractsInput } from "./ContractVersionUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  contractApprovals?: ContractApprovalUpdateManyWithoutContractsInput;
  contractPerformances?: ContractPerformanceUpdateManyWithoutContractsInput;
  contractQueries?: ContractQueryUpdateManyWithoutContractsInput;
  contractReminders?: ContractReminderUpdateManyWithoutContractsInput;
  contractVersions?: ContractVersionUpdateManyWithoutContractsInput;
  description?: string | null;
  status?: "Option1" | null;
  template?: string | null;
  title?: string | null;
  version?: string | null;
};
