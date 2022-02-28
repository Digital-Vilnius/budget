using AutoMapper;
using Budget.Contracts.Category;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class CategoryProfile: Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, CategoryDto>()
                .ForMember(
                    dest => dest.ChildrenCount,
                    opt => opt.MapFrom(src => src.Children.Count)
                );
            
            CreateMap<AddCategoryRequest, Category>();
            CreateMap<EditCategoryRequest, Category>();
            CreateMap<ListCategoriesRequest, CategoriesFilter>();
        }
    }
}