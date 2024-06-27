import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profilePicture: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
