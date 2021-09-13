import { api } from './api';
import * as mock from './user.mock';

export interface LoginResponse {
  accessToken?: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  return mock.mockLoginUser();
};

interface FetchUserInfoParams {
  userId: string;
}

export interface UserInfoResponse {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
  profileUrl: string;
  username: string;
}

export const fetchUserInfo = async (payload: FetchUserInfoParams): Promise<UserInfoResponse> => {
  return mock.mockFetchUserInfo();
};
