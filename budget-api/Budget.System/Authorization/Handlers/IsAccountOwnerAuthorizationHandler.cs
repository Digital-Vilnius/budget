using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Budget.Models;
using Budget.System.Authorization.Requirements;
using Microsoft.AspNetCore.Authorization;

namespace Budget.System.Authorization.Handlers
{
    public class IsAccountOwnerAuthorizationHandler : AuthorizationHandler<IsAccountOwner, Account> 
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsAccountOwner requirement, Account account)
        {
            var userId = context.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
            var isOwner = userId != null && account.Users.FirstOrDefault((user) => user.IsOwner)!.UserId == int.Parse(userId);
            
            if (isOwner) context.Succeed(requirement);
            return Task.FromResult(0);
        }
    }
}