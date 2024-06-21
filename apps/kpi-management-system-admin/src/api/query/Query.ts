import { User } from "../user/User";

export type Query = {
  createdAt: Date;
  details: string | null;
  id: string;
  queryDate: Date | null;
  queryType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
