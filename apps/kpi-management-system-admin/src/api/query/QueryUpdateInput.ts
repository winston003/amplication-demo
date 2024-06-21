import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueryUpdateInput = {
  details?: string | null;
  queryDate?: Date | null;
  queryType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
