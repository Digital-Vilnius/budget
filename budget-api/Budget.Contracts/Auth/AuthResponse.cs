using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Auth
{
    public class AuthResponse
    {
        [Required]
        public string AccessToken { get; set; }
        
        [Required]
        public string RefreshToken { get; set; }
        
        [Required]
        public int UserId { get; set; }
    }
}