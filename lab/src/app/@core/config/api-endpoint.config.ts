import { IAPIEndpoint } from './../interfaces/api-endpoint.interface';
import { APP_CONFIG } from "./app.config";

export const API_BASE_URL = APP_CONFIG.apiBaseUrl;

export const API_ENDPOINT: IAPIEndpoint = {
  auth: {
    login: '/auth/login',
    unit: '/unit'
  },
};
