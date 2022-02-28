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

export interface RefreshToken {
  refreshToken: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
