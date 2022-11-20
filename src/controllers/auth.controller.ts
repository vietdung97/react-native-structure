import { IUser } from '@/stores/types/auth.type';
import { networkService } from './../networking/NetworkService';
import { ApiRoutes } from './api-routes';

export class AuthController {
  constructor() {}

  login({ email, password, signupCode }: { email: string; password: string; signupCode?: string }) {
    return networkService.request<IUser>({
      method: 'POST',
      url: ApiRoutes.authentication.login,
      data: { email, password, signupCode },
    });
  }
}

export const authController = new AuthController();
