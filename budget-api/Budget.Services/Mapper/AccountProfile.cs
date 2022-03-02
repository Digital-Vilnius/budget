using System.Linq;
using AutoMapper;
using Budget.Contracts.Account;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class AccountProfile: Profile
    {
        public AccountProfile()
        {
            CreateMap<SaveAccountRequest, Account>();
            CreateMap<ListAccountsRequest, AccountsFilter>();
            
            CreateMap<Account, AccountDto>()
                .ForMember(
                    dest => dest.Balance,
                    opt => opt.MapFrom(src => src.Categories.SelectMany(category => category.Transactions).Sum(transaction => transaction.Amount))
                )
                .ForMember(
                    dest => dest.Incomes,
                    opt => opt.MapFrom(src => src.Categories.SelectMany(category => category.Transactions).Where(transaction => transaction.Amount > 0).Sum(transaction => transaction.Amount))
                )
                .ForMember(
                    dest => dest.Expenses,
                    opt => opt.MapFrom(src => src.Categories.SelectMany(category => category.Transactions).Where(transaction => transaction.Amount < 0).Sum(transaction => transaction.Amount))
                );
        }
    }
}