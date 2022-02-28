using AutoMapper;
using Budget.Contracts.User;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>();
        }
    }
}