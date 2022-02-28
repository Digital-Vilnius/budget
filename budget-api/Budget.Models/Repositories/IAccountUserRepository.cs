using System.Collections.Generic;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountUser;

namespace Budget.Models.Repositories
{
    public interface IAccountUserRepository : IBaseRepository<AccountUser>
    {
        Task<List<AccountUser>> GetAsync(AccountUsersFilter filter, Paging paging);
        Task<int> CountAsync(AccountUsersFilter filter);
    }
}