using System;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.Auth;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AuthService(IUserRepository userRepository, IMapper mapper, IUnitOfWork unitOfWork, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        
        public async Task LoginAsync(LoginRequest request)
        {
            var user = await _userRepository.GetAsync(user => user.Phone == request.Phone);
            if (user == null) throw new Exception("User is not found");

            user.Code = new Random().Next(0, 9999).ToString("D4");
            _userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task RegisterAsync(RegisterRequest request)
        {
            var duplicate = await _userRepository.GetAsync(user => user.Phone == request.Phone);
            if (duplicate != null) throw new Exception("User with this phone is already exist");
            
            var user = _mapper.Map<RegisterRequest, User>(request);
            user.Code = new Random().Next(0, 9999).ToString("D4");
            await _userRepository.AddAsync(user);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task<ResultResponse<AuthResponse>> ConfirmCodeAsync(ConfirmCodeRequest request)
        {
            var user = await _userRepository.GetAsync(user => user.Phone == request.Phone);
            if (user == null) throw new Exception("User is not found");
            
            if (user.Code != request.Code) throw new Exception("Code is invalid");

            user.Code = null;
            user.RefreshToken = _tokenService.GenerateRefreshToken();
            _userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();
            
            var tokens = new AuthResponse { RefreshToken = user.RefreshToken, AccessToken = _tokenService.GenerateToken(user.Id), UserId = user.Id };
            return new ResultResponse<AuthResponse>(tokens);
        }

        public async Task<ResultResponse<AuthResponse>> RefreshTokenAsync(RefreshTokenRequest request)
        {
            var user = await _userRepository.GetAsync(user => user.RefreshToken == request.RefreshToken);
            if (user == null) throw new Exception("User is not found");

            user.RefreshToken = _tokenService.GenerateRefreshToken();
            _userRepository.Update(user);
            await _unitOfWork.SaveChangesAsync();
            
            var tokens = new AuthResponse { RefreshToken = user.RefreshToken, AccessToken = _tokenService.GenerateToken(user.Id), UserId = user.Id };
            return new ResultResponse<AuthResponse>(tokens);
        }
    }
}