using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.AccountRole;

namespace Budget.Models.Services
{
    public interface IAccountRoleService
    {
        Task<ResultResponse<TModel>> AddAsync<TModel>(SaveAccountRoleRequest request);
        Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveAccountRoleRequest request);
        Task<ListResponse<TModel>> GetAsync<TModel>(ListAccountRolesRequest request);
        Task<ResultResponse<TModel>> GetAsync<TModel>(int id);
        Task DeleteAsync(int id);
    }
}