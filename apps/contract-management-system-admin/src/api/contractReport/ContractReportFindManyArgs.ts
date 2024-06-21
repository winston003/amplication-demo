import { ContractReportWhereInput } from "./ContractReportWhereInput";
import { ContractReportOrderByInput } from "./ContractReportOrderByInput";

export type ContractReportFindManyArgs = {
  where?: ContractReportWhereInput;
  orderBy?: Array<ContractReportOrderByInput>;
  skip?: number;
  take?: number;
};
