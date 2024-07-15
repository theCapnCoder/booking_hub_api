import { User } from "../../../types/User";

export interface SignUpParams {
  fullName: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | undefined;
  isLoading: boolean;
  error: string;
}

export interface RejectValue {
  message: string;
  status?: number;
}
