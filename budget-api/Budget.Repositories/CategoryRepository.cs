using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Contracts.Category;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class CategoryRepository : BaseRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(SqlContext context) : base(context)
        {
        }
        
        protected override IQueryable<Category> FormatQuery(IQueryable<Category> query)
        {
            return query
                .Include(category => category.Parent)
                .Include(category => category.Children)
                .Include(category => category.CreatedBy)
                .Include(category => category.Transactions);
        }

        public async Task<List<Category>> GetAsync(CategoriesFilter filter, Paging paging)
        {
            IQueryable<Category> query = Context.Set<Category>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            query = query.OrderByDescending(category => category.Name);
            query = ApplyPaging(query, paging);
            return await query.ToListAsync();
        }

        public async Task<int> CountAsync(CategoriesFilter filter)
        {
            IQueryable<Category> query = Context.Set<Category>();
            query = FormatQuery(query);
            query = ApplyFilter(query, filter);
            return await query.CountAsync();
        }
        
        private static IQueryable<Category> ApplyFilter(IQueryable<Category> query, CategoriesFilter filter)
        {
            query = query.Where(category => category.IsDeleted == false);
            query = query.Where(category => category.AccountId == filter.AccountId);
            if (filter.ParentId.HasValue) query = query.Where(category => category.ParentId == filter.ParentId.Value);
            return query;
        }
    }
}