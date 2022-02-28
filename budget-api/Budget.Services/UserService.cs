using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        
        public async Task<ListResponse<TModel>> GetAsync<TModel>()
        {
            var users = await _userRepository.GetAsync();
            var usersCount = await _userRepository.CountAsync();

            var usersDtosList = _mapper.Map<List<User>, List<TModel>>(users);
            return new ListResponse<TModel>(usersDtosList, usersCount);
        }
    }
}