using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Budget.Contracts;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Repositories.Context;
using Microsoft.EntityFrameworkCore;

namespace Budget.Repositories
{
    public class BaseRepository<TModel> : IBaseRepository<TModel> where TModel : BaseModel
    {
        protected readonly SqlContext Context;
        
        protected BaseRepository(SqlContext context)
        {
            Context = context;
        }
        
        public async Task AddAsync(TModel model)
        {
            model.Created = DateTime.Now;
            await Context.Set<TModel>().AddAsync(model);
        }

        public void Delete(TModel model)
        {
            Context.Set<TModel>().Remove(model);
        }

        public void Update(TModel model)
        {
            model.Updated = DateTime.Now;
            Context.Set<TModel>().Update(model);
        }
        
        public async Task<TModel> GetAsync(Expression<Func<TModel, bool>> filter)
        {
            IQueryable<TModel> models = Context.Set<TModel>();
            models = FormatQuery(models);
            models = models.Where(model => model.IsDeleted == false);
            return await models.FirstOrDefaultAsync(filter);
        }
        
        public async Task<TModel> GetByIdAsync(int id)
        {
            IQueryable<TModel> models = Context.Set<TModel>();
            models = FormatQuery(models);
            models = models.Where(model => model.IsDeleted == false);
            return await models.FirstOrDefaultAsync(model => model.Id == id);
        }
        
        public async Task<List<TModel>> GetAsync()
        {
            IQueryable<TModel> models = Context.Set<TModel>();
            models = FormatQuery(models);
            models = models.Where(model => model.IsDeleted == false);
            return await models.ToListAsync();
        }
        
        public async Task<int> CountAsync()
        {
            IQueryable<TModel> models = Context.Set<TModel>();
            models = FormatQuery(models);
            models = models.Where(model => model.IsDeleted == false);
            return await models.CountAsync();
        }
        
        protected virtual IQueryable<TModel> FormatQuery(IQueryable<TModel> query)
        {
            return query;
        }
        
        protected IQueryable<TModel> ApplyPaging(IQueryable<TModel> query, Paging paging)
        {
            return paging.Limit == 0 ? query : query.Skip(paging.Offset).Take(paging.Limit);
        }
    }
}