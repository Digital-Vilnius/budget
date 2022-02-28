using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Account
{
    public class SaveAccountRequest
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Currency { get; set; }
    }
}