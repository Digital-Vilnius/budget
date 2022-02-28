using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Account;

namespace Budget.Models.Services
{
    public interface IAccountService
    {
        Task<ResultResponse<TModel>> AddAsync<TModel>(SaveAccountRequest request);
        Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveAccountRequest request);
        Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountsRequest request);
        Task<ResultResponse<TModel>> GetAsync<TModel>(int id);
        Task DeleteAsync(int id);
    }
}