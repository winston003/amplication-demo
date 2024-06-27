import { ContractQueryWhereInput } from "./ContractQueryWhereInput";
import { ContractQueryOrderByInput } from "./ContractQueryOrderByInput";

export type ContractQueryFindManyArgs = {
  where?: ContractQueryWhereInput;
  orderBy?: Array<ContractQueryOrderByInput>;
  skip?: number;
  take?: number;
};
