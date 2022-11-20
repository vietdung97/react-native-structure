import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { apiURL, headers, timeout } from '@/networking/config';
import { requestInterceptor, responseInterceptor } from '@/networking/interceptors';
export class NetworkService {
  public client: AxiosInstance;
  constructor() {
    this.client = axios.create({ baseURL: apiURL, headers, timeout });
    this.client.interceptors.response.use(responseInterceptor.onFulfill, responseInterceptor.onReject);
    this.client.interceptors.request.use(requestInterceptor.onFulfill, requestInterceptor.onReject);
  }

  setAccessToken(token: string) {
    this.client.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  clearAccessToken() {
    delete this.client.defaults.headers.common.authorization;
  }

  request({ method, url, data, ...config }: AxiosRequestConfig<any>) {
    return this.client.request({ method, url, data, ...config });
  }
}

export const networkService = new NetworkService();
