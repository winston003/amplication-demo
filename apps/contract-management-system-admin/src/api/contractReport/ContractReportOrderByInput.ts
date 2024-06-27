import { SortOrder } from "../../util/SortOrder";

export type ContractReportOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  format?: SortOrder;
  generatedDate?: SortOrder;
  id?: SortOrder;
  reportName?: SortOrder;
  updatedAt?: SortOrder;
};
