import { User } from '../../auth/models/user';
export const authFeatureKey = 'auth';

export class AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
  error: string | null;

  token: string;
  refreshToken: string;
  isRefreshing: boolean;

  constructor() {
    this.token = localStorage.getItem('token') || null;
    this.refreshToken = localStorage.getItem('refresh_token') || null;
    this.isRefreshing = false;
  }
}

