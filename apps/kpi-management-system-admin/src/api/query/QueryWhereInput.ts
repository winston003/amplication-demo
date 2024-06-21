import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueryWhereInput = {
  details?: StringNullableFilter;
  id?: StringFilter;
  queryDate?: DateTimeNullableFilter;
  queryType?: "Option1";
  user?: UserWhereUniqueInput;
};
