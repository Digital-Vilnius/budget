using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.AccountUser;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class AccountUserService : IAccountUserService
    {
        private readonly IAccountUserRepository _accountUserRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AccountUserService(IAccountUserRepository accountUserRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _accountUserRepository = accountUserRepository;
        }
        
        public async Task<ResultResponse<TModel>> AddAsync<TModel>(AddAccountUserRequest request)
        {
            var accountUser = _mapper.Map<AddAccountUserRequest, AccountUser>(request);

            await _accountUserRepository.AddAsync(accountUser);
            await _unitOfWork.SaveChangesAsync();
            
            var accountUserDto = _mapper.Map<AccountUser, TModel>(accountUser);
            return new ResultResponse<TModel>(accountUserDto);
        }

        public async Task<ResultResponse<TModel>> EditAsync<TModel>(int id, EditAccountUserRequest request)
        {
            var accountUser = await _accountUserRepository.GetByIdAsync(id);
            if (accountUser == null) throw new Exception("Account user is not found");
            
            accountUser = _mapper.Map(request, accountUser);
            
            _accountUserRepository.Update(accountUser);
            await _unitOfWork.SaveChangesAsync();
            
            var accountUserDto = _mapper.Map<AccountUser, TModel>(accountUser);
            return new ResultResponse<TModel>(accountUserDto);
        }

        public async Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountUsersRequest request)
        {
            var filter = _mapper.Map<ListAccountUsersRequest, AccountUsersFilter>(request);
            var paging = _mapper.Map<ListAccountUsersRequest, Paging>(request);

            var accountUsers = await _accountUserRepository.GetAsync(filter, paging);
            var accountUsersCount = await _accountUserRepository.CountAsync(filter);

            var accountUsersDtosList = _mapper.Map<List<AccountUser>, List<TModel>>(accountUsers);
            return new ListResponse<TModel>(accountUsersDtosList, accountUsersCount);
        }

        public async Task<ResultResponse<TModel>> GetAsync<TModel>(int id)
        {
            var accountUser = await _accountUserRepository.GetByIdAsync(id);
            if (accountUser == null) throw new Exception("Account user is not found");
            
            var accountUserDto = _mapper.Map<AccountUser, TModel>(accountUser);
            return new ResultResponse<TModel>(accountUserDto);
        }

        public async Task DeleteAsync(int id)
        {
            var accountUser = await _accountUserRepository.GetByIdAsync(id);
            if (accountUser == null) throw new Exception("Account user is not found");
            
            _accountUserRepository.Delete(accountUser);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}