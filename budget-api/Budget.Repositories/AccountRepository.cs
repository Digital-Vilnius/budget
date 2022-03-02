using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Account;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class AccountRepository : BaseRepository<Account>, IAccountRepository
    {
        public AccountRepository(SqlContext context) : base(context)
        {
        }
        
        protected override IQueryable<Account> FormatQuery(IQueryable<Account> query)
        {
            return query
                .Include(account => account.Users)
                .Include(account => account.Categories)
                .ThenInclude(category => category.Transactions);
        }

        public async Task<List<Account>> GetAsync(AccountsFilter filter, Paging? paging = null)
        {
            IQueryable<Account> query = Context.Set<Account>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            query = query.OrderByDescending(account => account.Name);
            if (paging != null) query = ApplyPaging(query, paging);
            return await query.ToListAsync();
        }

        public async Task<int> CountAsync(AccountsFilter filter)
        {
            IQueryable<Account> query = Context.Set<Account>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            return await query.CountAsync();
        }
        
        private static IQueryable<Account> ApplyFilter(IQueryable<Account> query, AccountsFilter filter)
        {
            query = query.Where(account => account.IsDeleted == false);
            query = query.Where(account => account.Users.Select((user) => user.UserId).Contains(filter.UserId));
            return query;
        }
    }
}