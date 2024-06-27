import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type IntegrationWhereInput = {
  apiEndpoint?: StringNullableFilter;
  id?: StringFilter;
  integrationDate?: DateTimeNullableFilter;
  systemName?: StringNullableFilter;
};
