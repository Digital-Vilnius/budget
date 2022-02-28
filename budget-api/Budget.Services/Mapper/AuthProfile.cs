using AutoMapper;
using Budget.Contracts.Auth;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class AuthProfile : Profile
    {
        public AuthProfile()
        {
            CreateMap<RegisterRequest, User>();
        }
    }
}