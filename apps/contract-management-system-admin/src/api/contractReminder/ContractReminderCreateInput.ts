import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type ContractReminderCreateInput = {
  contract?: ContractWhereUniqueInput | null;
  message?: string | null;
  reminderDate?: Date | null;
};
