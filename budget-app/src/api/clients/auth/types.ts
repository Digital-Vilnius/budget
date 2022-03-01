export interface LoginRequest {
  phone: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface ConfirmCodeRequest {
  phone: string;
  code: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
}
