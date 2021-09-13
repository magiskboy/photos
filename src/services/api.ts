import axios, { AxiosResponse } from 'axios';

const LS_TOKEN = 'PHOTOS_ACCESS_TOKEN';
const API_SUCCESS_CODE = 'SUCCESS';

export interface ApiResponse {
  code: string;
  message?: string;
  // eslint-disable-next-line
  data?: any;
}

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: window.PHOTOS_API_TIMEOUT,
  headers: {
    authorization: '',
  },
});

export const setToken = (token: string): void => {
  localStorage.setItem(LS_TOKEN, token);
};

const getToken = (): string | null => {
  return localStorage.getItem(LS_TOKEN);
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const {
      data: { code, message },
    } = response;

    if (code !== API_SUCCESS_CODE) {
      return Promise.reject(new Error(`${code}: ${message}`));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
