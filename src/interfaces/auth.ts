export interface IAuth {
  username?: string | null;
  password?: string | null;
  accessToken: string | null;
  sessionScope: string | null;
}
