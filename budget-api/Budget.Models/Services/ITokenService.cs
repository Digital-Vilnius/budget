namespace Budget.Models.Services
{
    public interface ITokenService
    {
        public string GenerateToken(int id);
        public string GenerateRefreshToken();
    }
}