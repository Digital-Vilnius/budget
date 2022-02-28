using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountUser
{
    public class AccountUsersFilter
    {
        [Required]
        public int AccountId { get; set; }
        
        public string? Keyword { get; set; }
    }
}