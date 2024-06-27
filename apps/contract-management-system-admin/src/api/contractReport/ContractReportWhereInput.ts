import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContractReportWhereInput = {
  content?: StringNullableFilter;
  format?: "Option1";
  generatedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  reportName?: StringNullableFilter;
};
