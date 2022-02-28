using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.AccountRole;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class AccountRoleService : IAccountRoleService
    {
        private readonly IAccountRoleRepository _accountRoleRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AccountRoleService(IAccountRoleRepository accountRoleRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _accountRoleRepository = accountRoleRepository;
        }
        
        public async Task<ResultResponse<TModel>> AddAsync<TModel>(SaveAccountRoleRequest request)
        {
            var accountRole = _mapper.Map<SaveAccountRoleRequest, AccountRole>(request);

            await _accountRoleRepository.AddAsync(accountRole);
            await _unitOfWork.SaveChangesAsync();
            
            var accountRoleDto = _mapper.Map<AccountRole, TModel>(accountRole);
            return new ResultResponse<TModel>(accountRoleDto);
        }

        public async Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveAccountRoleRequest request)
        {
            var accountRole = await _accountRoleRepository.GetByIdAsync(id);
            if (accountRole == null) throw new Exception("Account role is not found");
            
            accountRole = _mapper.Map(request, accountRole);
            
            _accountRoleRepository.Update(accountRole);
            await _unitOfWork.SaveChangesAsync();
            
            var accountRoleDto = _mapper.Map<AccountRole, TModel>(accountRole);
            return new ResultResponse<TModel>(accountRoleDto);
        }

        public async Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountRolesRequest request)
        {
            var filter = _mapper.Map<ListAccountRolesRequest, AccountRolesFilter>(request);
            var paging = _mapper.Map<ListAccountRolesRequest, Paging>(request);

            var accountRoles = await _accountRoleRepository.GetAsync(filter, paging);
            var accountRolesCount = await _accountRoleRepository.CountAsync(filter);

            var accountRolesDtosList = _mapper.Map<List<AccountRole>, List<TModel>>(accountRoles);
            return new ListResponse<TModel>(accountRolesDtosList, accountRolesCount);
        }

        public async Task<ResultResponse<TModel>> GetAsync<TModel>(int id)
        {
            var accountRole = await _accountRoleRepository.GetByIdAsync(id);
            if (accountRole == null) throw new Exception("Account role is not found");
            
            var accountRoleDto = _mapper.Map<AccountRole, TModel>(accountRole);
            return new ResultResponse<TModel>(accountRoleDto);
        }

        public async Task DeleteAsync(int id)
        {
            var accountRole = await _accountRoleRepository.GetByIdAsync(id);
            if (accountRole == null) throw new Exception("Account role is not found");
            
            _accountRoleRepository.Delete(accountRole);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}