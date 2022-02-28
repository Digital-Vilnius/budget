using Budget.System.Authorization.Handlers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;

namespace Budget.System.DI
{
    public static class SystemModule
    {
        public static void RegisterDependencies(IServiceCollection services)
        {
            services.AddSingleton<IAuthorizationHandler, IsAccountOwnerAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, IsCategoryOwnerAuthorizationHandler>();
            services.AddSingleton<IAuthorizationHandler, IsTransactionOwnerAuthorizationHandler>();
        }
    }
}