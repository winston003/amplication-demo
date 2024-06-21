import { QueryWhereInput } from "./QueryWhereInput";
import { QueryOrderByInput } from "./QueryOrderByInput";

export type QueryFindManyArgs = {
  where?: QueryWhereInput;
  orderBy?: Array<QueryOrderByInput>;
  skip?: number;
  take?: number;
};
