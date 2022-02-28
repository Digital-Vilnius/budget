using System.Threading.Tasks;
using Budget.Contracts.User;
using Budget.Models.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Budget.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> List()
        {
            var response = await _userService.GetAsync<UserDto>();
            return Ok(response);
        }
    }
}