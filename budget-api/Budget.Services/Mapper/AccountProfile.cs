using AutoMapper;
using Budget.Contracts.Account;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class AccountProfile: Profile
    {
        public AccountProfile()
        {
            CreateMap<Account, AccountDto>();
            CreateMap<SaveAccountRequest, Account>();
            CreateMap<ListAccountsRequest, AccountsFilter>();
        }
    }
}