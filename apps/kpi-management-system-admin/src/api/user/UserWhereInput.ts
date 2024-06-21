import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueryListRelationFilter } from "../query/QueryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  queries?: QueryListRelationFilter;
  username?: StringFilter;
};
