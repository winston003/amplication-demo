import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractVersionCreateInput = {
  changes?: string | null;
  contract?: ContractWhereUniqueInput | null;
  modificationDate?: Date | null;
  versionNumber?: number | null;
};
