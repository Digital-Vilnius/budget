using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Transaction;

namespace Budget.Models.Services
{
    public interface ITransactionService
    {
        Task<ResultResponse<TModel>> AddAsync<TModel>(SaveTransactionRequest request);
        Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveTransactionRequest request);
        Task<ListResponse<TModel>> GetAsync<TModel>(ListTransactionsRequest request);
        Task<ResultResponse<TModel>> GetAsync<TModel>(int id);
        Task DeleteAsync(int id);
    }
}