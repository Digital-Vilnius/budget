using System.Collections.Generic;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountRole;

namespace Budget.Models.Repositories
{
    public interface IAccountRoleRepository : IBaseRepository<AccountRole>
    {
        Task<List<AccountRole>> GetAsync(AccountRolesFilter filter, Paging paging);
        Task<int> CountAsync(AccountRolesFilter filter);
    }
}