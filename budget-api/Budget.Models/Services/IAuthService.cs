﻿using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Auth;

namespace Budget.Models.Services
{
    public interface IAuthService
    {
        Task LoginAsync(LoginRequest request);
        Task RegisterAsync(RegisterRequest request);
        Task<ResultResponse<TokenResponse>> ConfirmCodeAsync(ConfirmCodeRequest request);
        Task<ResultResponse<TokenResponse>> RefreshTokenAsync(RefreshTokenRequest request);
    }
}