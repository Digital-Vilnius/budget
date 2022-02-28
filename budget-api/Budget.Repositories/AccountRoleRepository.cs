using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountRole;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class AccountRoleRepository : BaseRepository<AccountRole>, IAccountRoleRepository
    {
        public AccountRoleRepository(SqlContext context) : base(context)
        {
        }
        
        public async Task<List<AccountRole>> GetAsync(AccountRolesFilter filter, Paging paging)
        {
            IQueryable<AccountRole> query = Context.Set<AccountRole>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            query = query.OrderByDescending(accountRole => accountRole.Name);
            query = ApplyPaging(query, paging);
            return await query.ToListAsync();
        }

        public async Task<int> CountAsync(AccountRolesFilter filter)
        {
            IQueryable<AccountRole> query = Context.Set<AccountRole>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            return await query.CountAsync();
        }
        
        private static IQueryable<AccountRole> ApplyFilter(IQueryable<AccountRole> query, AccountRolesFilter filter)
        {
            query = query.Where(accountUser => accountUser.IsDeleted == false);
            query = query.Where(accountRole => accountRole.AccountId == filter.AccountId);
            if (filter.Keyword != null) query = query.Where(accountRole => accountRole.Name.Contains(filter.Keyword));
            return query;
        }
    }
}