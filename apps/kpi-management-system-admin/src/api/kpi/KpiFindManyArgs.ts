import { KpiWhereInput } from "./KpiWhereInput";
import { KpiOrderByInput } from "./KpiOrderByInput";

export type KpiFindManyArgs = {
  where?: KpiWhereInput;
  orderBy?: Array<KpiOrderByInput>;
  skip?: number;
  take?: number;
};
