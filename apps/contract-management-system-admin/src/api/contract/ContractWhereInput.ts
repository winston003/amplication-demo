import { ContractApprovalListRelationFilter } from "../contractApproval/ContractApprovalListRelationFilter";
import { ContractPerformanceListRelationFilter } from "../contractPerformance/ContractPerformanceListRelationFilter";
import { ContractQueryListRelationFilter } from "../contractQuery/ContractQueryListRelationFilter";
import { ContractReminderListRelationFilter } from "../contractReminder/ContractReminderListRelationFilter";
import { ContractVersionListRelationFilter } from "../contractVersion/ContractVersionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContractWhereInput = {
  contractApprovals?: ContractApprovalListRelationFilter;
  contractPerformances?: ContractPerformanceListRelationFilter;
  contractQueries?: ContractQueryListRelationFilter;
  contractReminders?: ContractReminderListRelationFilter;
  contractVersions?: ContractVersionListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  template?: StringNullableFilter;
  title?: StringNullableFilter;
  version?: StringNullableFilter;
};
