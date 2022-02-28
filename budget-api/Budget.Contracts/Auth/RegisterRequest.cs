using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Auth
{
    public class RegisterRequest
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
    }
}