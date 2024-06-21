import { QueryWhereInput } from "./QueryWhereInput";

export type QueryListRelationFilter = {
  every?: QueryWhereInput;
  some?: QueryWhereInput;
  none?: QueryWhereInput;
};
