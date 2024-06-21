import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractPerformanceWhereInput = {
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  milestone?: StringNullableFilter;
  recordedDate?: DateTimeNullableFilter;
  status?: "Option1";
};
