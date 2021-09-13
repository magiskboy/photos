export {};

declare global {
  interface Window {
    PHOTOS_BASE_URL: string;
    PHOTOS_API_TIMEOUT: number;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
