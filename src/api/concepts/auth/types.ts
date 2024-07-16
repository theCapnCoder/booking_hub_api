import { User } from "../../../types/User";

export interface AuthResponseData {
  user: User;
  token: string;
}

export interface AuthUserResponseData extends User {}
