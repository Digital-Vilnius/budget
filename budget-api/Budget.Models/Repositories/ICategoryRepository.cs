using System.Collections.Generic;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Category;

namespace Budget.Models.Repositories
{
    public interface ICategoryRepository : IBaseRepository<Category>
    {
        Task<List<Category>> GetAsync(CategoriesFilter filter, Paging? paging = null);
        Task<int> CountAsync(CategoriesFilter filter);
    }
}