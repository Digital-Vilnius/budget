using System.Collections.Generic;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Transaction;

namespace Budget.Models.Repositories
{
    public interface ITransactionRepository : IBaseRepository<Transaction>
    {
        Task<List<Transaction>> GetAsync(TransactionsFilter filter, Paging paging);
        Task<int> CountAsync(TransactionsFilter filter);
    }
}