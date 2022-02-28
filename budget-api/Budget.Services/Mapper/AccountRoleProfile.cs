using AutoMapper;
using Budget.Contracts.AccountRole;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class AccountRoleProfile: Profile
    {
        public AccountRoleProfile()
        {
            CreateMap<AccountRole, AccountRoleDto>();
            CreateMap<SaveAccountRoleRequest, AccountRole>();
            CreateMap<ListAccountRolesRequest, AccountRolesFilter>();
        }
    }
}