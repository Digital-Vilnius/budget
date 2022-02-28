export interface LoginRequest {
  phone: string;
}

export interface RegisterRequest {
  accountName: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface ConfirmCodeRequest {
  phone: string;
  code: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
