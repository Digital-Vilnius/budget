using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Auth
{
    public class RefreshTokenRequest
    {
        [Required]
        public string AccessToken { get; set; }
        
        [Required]
        public string RefreshToken { get; set; }
    }
}