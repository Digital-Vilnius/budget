using AutoMapper;
using Budget.Contracts.Transaction;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class TransactionProfile : Profile
    {
        public TransactionProfile()
        {
            CreateMap<Transaction, TransactionDto>();
            CreateMap<SaveTransactionRequest, Transaction>();
            CreateMap<ListTransactionsRequest, TransactionsFilter>();
        }
    }
}