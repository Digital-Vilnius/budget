using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountUser;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class AccountUserRepository : BaseRepository<AccountUser>, IAccountUserRepository
    {
        public AccountUserRepository(SqlContext context) : base(context)
        {
        }
        
        protected override IQueryable<AccountUser> FormatQuery(IQueryable<AccountUser> query)
        {
            return query
                .Include(accountUser => accountUser.Role)
                .Include(accountUser => accountUser.User);
        }

        public async Task<List<AccountUser>> GetAsync(AccountUsersFilter filter, Paging paging)
        {
            IQueryable<AccountUser> query = Context.Set<AccountUser>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            query = query.OrderByDescending(accountUser => accountUser.User.FirstName + accountUser.User.LastName);
            query = ApplyPaging(query, paging);
            return await query.ToListAsync();
        }

        public async Task<int> CountAsync(AccountUsersFilter filter)
        {
            IQueryable<AccountUser> query = Context.Set<AccountUser>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            return await query.CountAsync();
        }
        
        private static IQueryable<AccountUser> ApplyFilter(IQueryable<AccountUser> query, AccountUsersFilter filter)
        {
            query = query.Where(accountUser => accountUser.IsDeleted == false);
            query = query.Where(accountUser => accountUser.Role.AccountId == filter.AccountId);
            if (filter.Keyword != null) query = query.Where(accountUser => accountUser.User.FirstName.Contains(filter.Keyword) || accountUser.User.LastName.Contains(filter.Keyword));
            return query;
        }
    }
}