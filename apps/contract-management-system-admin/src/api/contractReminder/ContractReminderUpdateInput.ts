import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractReminderUpdateInput = {
  contract?: ContractWhereUniqueInput | null;
  message?: string | null;
  reminderDate?: Date | null;
};
