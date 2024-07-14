export interface AuthResponseData {
  user: {
    id: string;
    fullName: string;
    email: string;
    createdAt: string;
  };
  token: string;
}
