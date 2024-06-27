import { ContractApprovalCreateNestedManyWithoutContractsInput } from "./ContractApprovalCreateNestedManyWithoutContractsInput";
import { ContractPerformanceCreateNestedManyWithoutContractsInput } from "./ContractPerformanceCreateNestedManyWithoutContractsInput";
import { ContractQueryCreateNestedManyWithoutContractsInput } from "./ContractQueryCreateNestedManyWithoutContractsInput";
import { ContractReminderCreateNestedManyWithoutContractsInput } from "./ContractReminderCreateNestedManyWithoutContractsInput";
import { ContractVersionCreateNestedManyWithoutContractsInput } from "./ContractVersionCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  contractApprovals?: ContractApprovalCreateNestedManyWithoutContractsInput;
  contractPerformances?: ContractPerformanceCreateNestedManyWithoutContractsInput;
  contractQueries?: ContractQueryCreateNestedManyWithoutContractsInput;
  contractReminders?: ContractReminderCreateNestedManyWithoutContractsInput;
  contractVersions?: ContractVersionCreateNestedManyWithoutContractsInput;
  description?: string | null;
  status?: "Option1" | null;
  template?: string | null;
  title?: string | null;
  version?: string | null;
};
