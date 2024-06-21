import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractQueryUpdateInput = {
  contract?: ContractWhereUniqueInput | null;
  criteria?: string | null;
  queryDate?: Date | null;
  queryType?: "Option1" | null;
};
