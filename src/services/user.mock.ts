import { LoginResponse, UserInfoResponse } from './user';

export const mockLoginUser = (): LoginResponse => {
  return {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  };
};

export const mockFetchUserInfo = (): UserInfoResponse => {
  return {
    id: '001',
    lastName: 'Nguyen Khac',
    firstName: 'Thanh',
    email: 'nguyenkhacthanh244@gmail.com',
    profileUrl:
      'https://lh3.googleusercontent.com/a-/AOh14GiOiLUW-E3sVAQsj46HsH1l9AevQsiztJrD6UP9vg=s288-p-rw-no',
    username: 'thanh.nk',
  };
};
