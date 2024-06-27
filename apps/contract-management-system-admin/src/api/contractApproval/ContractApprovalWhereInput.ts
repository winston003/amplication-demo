import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ContractApprovalWhereInput = {
  approvalDate?: DateTimeNullableFilter;
  approver?: StringNullableFilter;
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
};
