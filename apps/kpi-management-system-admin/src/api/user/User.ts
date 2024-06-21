import { Query } from "../query/Query";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  queries?: Array<Query>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
