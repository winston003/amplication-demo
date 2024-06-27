import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
