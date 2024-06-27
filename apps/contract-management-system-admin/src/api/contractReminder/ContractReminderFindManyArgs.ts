import { ContractReminderWhereInput } from "./ContractReminderWhereInput";
import { ContractReminderOrderByInput } from "./ContractReminderOrderByInput";

export type ContractReminderFindManyArgs = {
  where?: ContractReminderWhereInput;
  orderBy?: Array<ContractReminderOrderByInput>;
  skip?: number;
  take?: number;
};
