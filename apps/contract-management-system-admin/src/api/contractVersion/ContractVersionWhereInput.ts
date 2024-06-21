import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContractVersionWhereInput = {
  changes?: StringNullableFilter;
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  modificationDate?: DateTimeNullableFilter;
  versionNumber?: IntNullableFilter;
};
