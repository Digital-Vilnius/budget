using Budget.Models.Services;
using Budget.Services.Mapper;
using Microsoft.Extensions.DependencyInjection;

namespace Budget.Services.DI
{
    public static class ServicesModule
    {
        public static void RegisterDependencies(IServiceCollection services)
        {
            services.AddAutoMapper(configure => {
                configure.AddProfile<BaseProfile>();
                configure.AddProfile<AuthProfile>();
                configure.AddProfile<TransactionProfile>();
                configure.AddProfile<CategoryProfile>();
                configure.AddProfile<AccountProfile>();
                configure.AddProfile<AccountUserProfile>();
                configure.AddProfile<AccountRoleProfile>();
                configure.AddProfile<UserProfile>();
            }, typeof(ServicesModule));
            
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<ITransactionService, TransactionService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IAccountUserService, AccountUserService>();
            services.AddScoped<IAccountRoleService, AccountRoleService>();
            services.AddScoped<IUserService, UserService>();
        }
    }
}