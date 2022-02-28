using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Transaction;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class TransactionRepository : BaseRepository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(SqlContext context) : base(context)
        {
        }
        
        protected override IQueryable<Transaction> FormatQuery(IQueryable<Transaction> query)
        {
            return query
                .Include(transaction => transaction.Category)
                .ThenInclude(category => category.Children)
                .Include(transaction => transaction.Category)
                .ThenInclude(category => category.Parent)
                .Include(transaction => transaction.Owner)
                .ThenInclude(accountUser => accountUser!.User)
                .Include(transaction => transaction.CreatedBy)
                .ThenInclude(accountUser => accountUser.User);
        }

        public async Task<List<Transaction>> GetAsync(TransactionsFilter filter, Paging paging)
        {
            IQueryable<Transaction> query = Context.Set<Transaction>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            query = query.OrderByDescending(transaction => transaction.Date);
            query = ApplyPaging(query, paging);
            return await query.ToListAsync();
        }

        public async Task<int> CountAsync(TransactionsFilter filter)
        {
            IQueryable<Transaction> query = Context.Set<Transaction>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            return await query.CountAsync();
        }
        
        private static IQueryable<Transaction> ApplyFilter(IQueryable<Transaction> query, TransactionsFilter filter)
        {
            query = query.Where(transaction => transaction.IsDeleted == false);
            query = query.Where(transaction => transaction.Category.AccountId == filter.AccountId);
            if (filter.DateFrom.HasValue) query = query.Where(transaction => transaction.Date >= filter.DateFrom.Value);
            if (filter.DateTo.HasValue) query = query.Where(transaction => transaction.Date <= filter.DateTo.Value);
            if (filter.AmountFrom.HasValue) query = query.Where(transaction => transaction.Amount >= filter.AmountFrom.Value);
            if (filter.AmountTo.HasValue) query = query.Where(transaction => transaction.Amount <= filter.AmountTo.Value);
            if (filter.CategoryId.HasValue) query = query.Where(transaction => transaction.CategoryId == filter.CategoryId.Value);
            if (filter.OwnerId.HasValue) query = query.Where(transaction => transaction.OwnerId == filter.OwnerId.Value);
            return query;
        }
    }
}