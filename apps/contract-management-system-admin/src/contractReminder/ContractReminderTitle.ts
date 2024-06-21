import { ContractReminder as TContractReminder } from "../api/contractReminder/ContractReminder";

export const CONTRACTREMINDER_TITLE_FIELD = "id";

export const ContractReminderTitle = (record: TContractReminder): string => {
  return record.id?.toString() || String(record.id);
};
