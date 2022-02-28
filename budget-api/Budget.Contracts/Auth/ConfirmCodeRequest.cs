using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Auth
{
    public class ConfirmCodeRequest
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string Code { get; set; }
    }
}