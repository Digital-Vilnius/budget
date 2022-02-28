using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountRole
{
    public class AccountRolesFilter
    {
        [Required]
        public int AccountId { get; set; }
        
        public string? Keyword { get; set; }
    }
}