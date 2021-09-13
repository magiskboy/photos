import { USER_SET_CURRENT_USER } from './actions';
import { UserState, CurrentUser } from './interfaces';
import { IAction } from '../interfaces';

const doSetCurrentUser = (state: UserState, payload: CurrentUser): UserState => {
  return {
    ...state,
    currentUser: payload,
  };
};

const initialState: UserState = {
  currentUser: undefined,
};

const userReducer = (
  state: UserState = initialState,
  // eslint-disable-next-line
  { type, payload }: IAction<any>,
): UserState => {
  switch (type) {
    case USER_SET_CURRENT_USER:
      return doSetCurrentUser(state, payload);

    default:
  }
  return state;
};

export default userReducer;
