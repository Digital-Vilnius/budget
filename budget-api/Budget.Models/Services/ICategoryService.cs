using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Category;

namespace Budget.Models.Services
{
    public interface ICategoryService
    {
        Task<ResultResponse<TModel>> AddAsync<TModel>(AddCategoryRequest request);
        Task<ResultResponse<TModel>> EditAsync<TModel>(int id, EditCategoryRequest request);
        Task<ListResponse<TModel>> GetAsync<TModel>(ListCategoriesRequest request);
        Task<ResultResponse<TModel>> GetAsync<TModel>(int id);
        Task DeleteAsync(int id);
    }
}