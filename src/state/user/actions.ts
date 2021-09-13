import { Dispatch } from 'redux';
import { IAction } from '../interfaces';
import { CurrentUser } from './interfaces';
import { loginUser, fetchUserInfo } from 'services/user';
import { setToken } from 'services/api';

export const USER_SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SetCurrentUserAction = (payload: CurrentUser): IAction<CurrentUser> => {
  return { type: USER_SET_CURRENT_USER, payload: payload };
};

export interface LoginPayload {
  email: string;
  password: string;
}

export const LoginAction = (payload: LoginPayload) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const data = await loginUser(payload);
    if (data?.accessToken) {
      setToken(data.accessToken);
      const currentUser = await fetchUserInfo({ userId: 'me' });
      dispatch(SetCurrentUserAction(currentUser));
    }
  };
};
