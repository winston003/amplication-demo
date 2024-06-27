import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractReminderWhereInput = {
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  reminderDate?: DateTimeNullableFilter;
};
