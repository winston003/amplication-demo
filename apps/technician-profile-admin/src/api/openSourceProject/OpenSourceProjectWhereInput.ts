import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OpenSourceProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  projectName?: StringNullableFilter;
  projectUrl?: StringNullableFilter;
};
