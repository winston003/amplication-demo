import { ContractPerformanceWhereInput } from "./ContractPerformanceWhereInput";
import { ContractPerformanceOrderByInput } from "./ContractPerformanceOrderByInput";

export type ContractPerformanceFindManyArgs = {
  where?: ContractPerformanceWhereInput;
  orderBy?: Array<ContractPerformanceOrderByInput>;
  skip?: number;
  take?: number;
};
