using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Auth
{
    public class LoginRequest
    {
        [Required]
        public string Phone { get; set; }
    }
}