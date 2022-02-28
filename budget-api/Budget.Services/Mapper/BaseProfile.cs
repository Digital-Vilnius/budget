using AutoMapper;
using Budget.Contracts;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class BaseProfile : Profile
    {
        public BaseProfile()
        {
            CreateMap<ListRequest, Paging>();
            CreateMap<BaseModel, BaseDto>();
        }
    }
}