using System.Threading.Tasks;
using Budget.Contracts.AccountUser;
using Budget.Models.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Budget.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountUsersController : ControllerBase
    {
        private readonly IAccountUserService _accountUserService;

        public AccountUsersController(IAccountUserService accountUserService)
        {
            _accountUserService = accountUserService;
        }
        
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Add([FromBody] AddAccountUserRequest request)
        {
            var response = await _accountUserService.AddAsync<AccountUserDto>(request);
            return Ok(response);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Edit([FromRoute] int id, [FromBody] EditAccountUserRequest request)
        {
            var response = await _accountUserService.EditAsync<AccountUserDto>(id, request);
            return Ok(response);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _accountUserService.DeleteAsync(id);
            return Ok();
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> List([FromQuery] ListAccountUsersRequest request)
        {
            var response = await _accountUserService.GetAsync<AccountUserDto>(request);
            return Ok(response);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var response = await _accountUserService.GetAsync<AccountUserDto>(id);
            return Ok(response);
        }
    }
}