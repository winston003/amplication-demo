import { Contract } from "../contract/Contract";

export type ContractPerformance = {
  contract?: Contract | null;
  createdAt: Date;
  id: string;
  milestone: string | null;
  recordedDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
