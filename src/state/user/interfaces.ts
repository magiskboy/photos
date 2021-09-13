export interface CurrentUser {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  profileUrl: string;
  username: string;
}

export interface UserState {
  currentUser?: CurrentUser;
}
