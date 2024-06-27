import { SortOrder } from "../../util/SortOrder";

export type ContractReminderOrderByInput = {
  contractId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  reminderDate?: SortOrder;
  updatedAt?: SortOrder;
};
