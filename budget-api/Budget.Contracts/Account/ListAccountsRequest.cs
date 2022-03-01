using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Account
{
    public class ListAccountsRequest
    {
        [Required]
        public int UserId { get; set; }
    }
}