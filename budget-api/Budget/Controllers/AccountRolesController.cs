using System.Threading.Tasks;
using Budget.Contracts.AccountRole;
using Budget.Models.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Budget.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountRolesController : ControllerBase
    {
        private readonly IAccountRoleService _accountRoleService;

        public AccountRolesController(IAccountRoleService accountRoleService)
        {
            _accountRoleService = accountRoleService;
        }
        
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Add([FromBody] SaveAccountRoleRequest request)
        {
            var response = await _accountRoleService.AddAsync<AccountRoleDto>(request);
            return Ok(response);
        }
        
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> Edit([FromRoute] int id, [FromBody] SaveAccountRoleRequest request)
        {
            var response = await _accountRoleService.EditAsync<AccountRoleDto>(id, request);
            return Ok(response);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _accountRoleService.DeleteAsync(id);
            return Ok();
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> List([FromQuery] ListAccountRolesRequest request)
        {
            var response = await _accountRoleService.GetAsync<AccountRoleDto>(request);
            return Ok(response);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var response = await _accountRoleService.GetAsync<AccountRoleDto>(id);
            return Ok(response);
        }
    }
}