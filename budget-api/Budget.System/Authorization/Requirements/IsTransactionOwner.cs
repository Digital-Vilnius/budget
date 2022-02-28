using Microsoft.AspNetCore.Authorization;

namespace Budget.System.Authorization.Requirements
{
    public class IsTransactionOwner : IAuthorizationRequirement
    {
    }
}