using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.Account;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;
using Microsoft.AspNetCore.Http;

namespace Budget.Services
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;
        private readonly HttpContext? _httpContext;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AccountService
        (
            IAccountRepository accountRepository, 
            IMapper mapper, 
            IUnitOfWork unitOfWork,
            IHttpContextAccessor httpContextAccessor
        )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _accountRepository = accountRepository;
            _httpContext = httpContextAccessor.HttpContext;
        }
        
        public async Task<ResultResponse<TModel>> AddAsync<TModel>(SaveAccountRequest request)
        {
            var userId = _httpContext?.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
            if (userId == null) throw new Exception("User is not logged in");
            
            var account = _mapper.Map<SaveAccountRequest, Account>(request);

            var role = new AccountRole { Name = "Owner", Permissions = new List<string>(), Created = DateTime.Now };
            var owner = new AccountUser { Role = role, IsOwner = true, Status = "Active", Created = DateTime.Now, UserId = int.Parse(userId) };
            account.Users = new List<AccountUser> { owner };
            account.Roles = new List<AccountRole> { role };

            await _accountRepository.AddAsync(account);
            await _unitOfWork.SaveChangesAsync();
            
            var accountDto = _mapper.Map<Account, TModel>(account);
            return new ResultResponse<TModel>(accountDto);
        }

        public async Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveAccountRequest request)
        {
            var account = await _accountRepository.GetByIdAsync(id);
            if (account == null) throw new Exception("Account is not found");
            
            account = _mapper.Map(request, account);
            
            _accountRepository.Update(account);
            await _unitOfWork.SaveChangesAsync();
            
            var accountDto = _mapper.Map<Account, TModel>(account);
            return new ResultResponse<TModel>(accountDto);
        }

        public async Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountsRequest request)
        {
            var isPaging = request.Limit.HasValue && request.Offset.HasValue;
            
            Paging? paging = null;
            if (isPaging) paging = _mapper.Map<ListAccountsRequest, Paging>(request);
            
            var filter = _mapper.Map<ListAccountsRequest, AccountsFilter>(request);

            var accounts = await _accountRepository.GetAsync(filter, paging);
            var accountsCount = await _accountRepository.CountAsync(filter);

            var accountsDtosList = _mapper.Map<List<Account>, List<TModel>>(accounts);
            return new ListResponse<TModel>(accountsDtosList, accountsCount);
        }

        public async Task<ResultResponse<TModel>> GetAsync<TModel>(int id)
        {
            var account = await _accountRepository.GetByIdAsync(id);
            if (account == null) throw new Exception("Account is not found");
            
            var accountDto = _mapper.Map<Account, TModel>(account);
            return new ResultResponse<TModel>(accountDto);
        }

        public async Task DeleteAsync(int id)
        {
            var account = await _accountRepository.GetByIdAsync(id);
            if (account == null) throw new Exception("Account is not found");
            
            _accountRepository.Delete(account);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}