import { OpenSourceProjectWhereInput } from "./OpenSourceProjectWhereInput";
import { OpenSourceProjectOrderByInput } from "./OpenSourceProjectOrderByInput";

export type OpenSourceProjectFindManyArgs = {
  where?: OpenSourceProjectWhereInput;
  orderBy?: Array<OpenSourceProjectOrderByInput>;
  skip?: number;
  take?: number;
};
