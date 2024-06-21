import { ContractTemplateWhereInput } from "./ContractTemplateWhereInput";
import { ContractTemplateOrderByInput } from "./ContractTemplateOrderByInput";

export type ContractTemplateFindManyArgs = {
  where?: ContractTemplateWhereInput;
  orderBy?: Array<ContractTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
