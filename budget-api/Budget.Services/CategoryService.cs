using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.Category;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _categoryRepository = categoryRepository;
        }
        
        public async Task<ResultResponse<TModel>> AddAsync<TModel>(AddCategoryRequest request)
        {
            var category = _mapper.Map<AddCategoryRequest, Category>(request);

            await _categoryRepository.AddAsync(category);
            await _unitOfWork.SaveChangesAsync();
            
            var categoryDto = _mapper.Map<Category, TModel>(category);
            return new ResultResponse<TModel>(categoryDto);
        }

        public async Task<ResultResponse<TModel>> EditAsync<TModel>(int id, EditCategoryRequest request)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) throw new Exception("Category is not found");
            
            category = _mapper.Map(request, category);
            
            _categoryRepository.Update(category);
            await _unitOfWork.SaveChangesAsync();
            
            var categoryDto = _mapper.Map<Category, TModel>(category);
            return new ResultResponse<TModel>(categoryDto);
        }

        public async Task<ListResponse<TModel>> GetAsync<TModel>(ListCategoriesRequest request)
        {
            var filter = _mapper.Map<ListCategoriesRequest, CategoriesFilter>(request);
            var paging = _mapper.Map<ListCategoriesRequest, Paging>(request);

            var categories = await _categoryRepository.GetAsync(filter, paging);
            var categoriesCount = await _categoryRepository.CountAsync(filter);

            var categoriesDtosList = _mapper.Map<List<Category>, List<TModel>>(categories);
            return new ListResponse<TModel>(categoriesDtosList, categoriesCount);
        }

        public async Task<ResultResponse<TModel>> GetAsync<TModel>(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) throw new Exception("Category is not found");
            
            var categoryDto = _mapper.Map<Category, TModel>(category);
            return new ResultResponse<TModel>(categoryDto);
        }

        public async Task DeleteAsync(int id)
        {
            var category = await _categoryRepository.GetByIdAsync(id);
            if (category == null) throw new Exception("Category is not found");
            
            _categoryRepository.Delete(category);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}