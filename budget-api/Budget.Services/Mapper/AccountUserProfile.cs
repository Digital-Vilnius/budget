using AutoMapper;
using Budget.Contracts.AccountUser;
using Budget.Models;

namespace Budget.Services.Mapper
{
    public class AccountUserProfile: Profile
    {
        public AccountUserProfile()
        {
            CreateMap<AccountUser, AccountUserDto>()
                .ForMember(
                    dest => dest.Phone,
                    opt => opt.MapFrom(src => src.User.Phone)
                )
                .ForMember(
                    dest => dest.FirstName,
                    opt => opt.MapFrom(src => src.User.FirstName)
                )
                .ForMember(
                    dest => dest.LastName,
                    opt => opt.MapFrom(src => src.User.LastName)
                );

            CreateMap<AddAccountUserRequest, AccountUser>();
            CreateMap<EditAccountUserRequest, AccountUser>();
            CreateMap<ListAccountUsersRequest, AccountUsersFilter>();
        }
    }
}