import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KpiClassificationWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  name?: StringNullableFilter;
};
