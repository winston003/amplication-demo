import { QueryUpdateManyWithoutUsersInput } from "./QueryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  queries?: QueryUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
