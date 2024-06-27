import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContractTemplateWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
