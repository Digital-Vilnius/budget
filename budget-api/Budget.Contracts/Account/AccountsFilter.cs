using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Account
{
    public class AccountsFilter
    {
        [Required]
        public int UserId { get; set; }
    }
}