import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type KpiWhereInput = {
  classification?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  targetValue?: FloatNullableFilter;
  weight?: FloatNullableFilter;
};
