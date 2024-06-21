import { Contract } from "../contract/Contract";

export type ContractReminder = {
  contract?: Contract | null;
  createdAt: Date;
  id: string;
  message: string | null;
  reminderDate: Date | null;
  updatedAt: Date;
};
