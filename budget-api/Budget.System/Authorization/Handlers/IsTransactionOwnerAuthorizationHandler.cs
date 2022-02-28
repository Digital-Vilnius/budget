using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Budget.Models;
using Budget.System.Authorization.Requirements;
using Microsoft.AspNetCore.Authorization;

namespace Budget.System.Authorization.Handlers
{
    public class IsTransactionOwnerAuthorizationHandler : AuthorizationHandler<IsTransactionOwner, Transaction>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsTransactionOwner requirement, Transaction transaction)
        {
            var userId = context.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
            var isOwner = userId != null && transaction.CreatedById == int.Parse(userId);
            
            if (isOwner) context.Succeed(requirement);
            return Task.FromResult(0);
        }
    }
}