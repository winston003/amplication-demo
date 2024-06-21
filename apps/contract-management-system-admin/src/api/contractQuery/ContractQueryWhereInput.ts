import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractQueryWhereInput = {
  contract?: ContractWhereUniqueInput;
  criteria?: StringNullableFilter;
  id?: StringFilter;
  queryDate?: DateTimeNullableFilter;
  queryType?: "Option1";
};
