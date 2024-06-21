import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractPerformanceUpdateInput = {
  contract?: ContractWhereUniqueInput | null;
  milestone?: string | null;
  recordedDate?: Date | null;
  status?: "Option1" | null;
};
