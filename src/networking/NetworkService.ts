import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { apiURL, headers, timeout } from '@/networking/config';
import { resInterceptor } from '@/networking/interceptors';

export class NetworkService {
  public client: AxiosInstance;
  public time = Date.now();
  constructor() {
    this.client = axios.create({ baseURL: apiURL, headers, timeout });
    this.client.interceptors.response.use(resInterceptor.onFulfill, resInterceptor.onReject);
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
