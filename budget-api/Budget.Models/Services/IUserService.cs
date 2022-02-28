using System.Threading.Tasks;
using Budget.Contracts;

namespace Budget.Models.Services
{
    public interface IUserService
    {
        Task<ListResponse<TModel>> GetAsync<TModel>();
    }
}