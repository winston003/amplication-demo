import { RankWhereInput } from "./RankWhereInput";
import { RankOrderByInput } from "./RankOrderByInput";

export type RankFindManyArgs = {
  where?: RankWhereInput;
  orderBy?: Array<RankOrderByInput>;
  skip?: number;
  take?: number;
};
