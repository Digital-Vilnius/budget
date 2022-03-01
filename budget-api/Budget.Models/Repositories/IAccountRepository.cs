using System.Collections.Generic;
using System.Threading.Tasks;
using Budget.Contracts.Account;

namespace Budget.Models.Repositories
{
    public interface IAccountRepository : IBaseRepository<Account>
    {
        Task<List<Account>> GetAsync(AccountsFilter filter);
        Task<int> CountAsync(AccountsFilter filter);
    }
}