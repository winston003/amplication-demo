import { KpiClassificationWhereInput } from "./KpiClassificationWhereInput";
import { KpiClassificationOrderByInput } from "./KpiClassificationOrderByInput";

export type KpiClassificationFindManyArgs = {
  where?: KpiClassificationWhereInput;
  orderBy?: Array<KpiClassificationOrderByInput>;
  skip?: number;
  take?: number;
};
