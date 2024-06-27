import { Contract } from "../contract/Contract";

export type ContractVersion = {
  changes: string | null;
  contract?: Contract | null;
  createdAt: Date;
  id: string;
  modificationDate: Date | null;
  updatedAt: Date;
  versionNumber: number | null;
};
