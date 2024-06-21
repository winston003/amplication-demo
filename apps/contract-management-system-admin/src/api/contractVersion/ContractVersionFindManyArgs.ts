import { ContractVersionWhereInput } from "./ContractVersionWhereInput";
import { ContractVersionOrderByInput } from "./ContractVersionOrderByInput";

export type ContractVersionFindManyArgs = {
  where?: ContractVersionWhereInput;
  orderBy?: Array<ContractVersionOrderByInput>;
  skip?: number;
  take?: number;
};
