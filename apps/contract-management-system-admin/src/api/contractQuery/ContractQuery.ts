import { Contract } from "../contract/Contract";

export type ContractQuery = {
  contract?: Contract | null;
  createdAt: Date;
  criteria: string | null;
  id: string;
  queryDate: Date | null;
  queryType?: "Option1" | null;
  updatedAt: Date;
};
