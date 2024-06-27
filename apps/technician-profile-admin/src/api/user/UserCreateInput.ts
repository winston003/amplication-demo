import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
};
