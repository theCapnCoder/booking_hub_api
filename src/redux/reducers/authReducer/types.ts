import { User } from "../../../types/User";

export interface SignUpAccessData {
  user: {
    id: string;
    fullName: string;
    email: string;
    createdAt: string;
  };
  token: string;
}

export interface SignUpParams {
  fullName: string;
  email: string;
  password: string;
}

export interface SignIpParams {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | undefined;
  isLoading: boolean;
  error: string;
}
