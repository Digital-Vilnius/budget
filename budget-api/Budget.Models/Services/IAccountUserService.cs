using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountUser;

namespace Budget.Models.Services
{
    public interface IAccountUserService
    {
        Task<ResultResponse<TModel>> AddAsync<TModel>(AddAccountUserRequest request);
        Task<ResultResponse<TModel>> EditAsync<TModel>(int id, EditAccountUserRequest request);
        Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountUsersRequest request);
        Task<ResultResponse<TModel>> GetAsync<TModel>(int id);
        Task DeleteAsync(int id);
    }
}