using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Account
{
    public class ListAccountsRequest : ListRequest
    {
        [Required]
        public int UserId { get; set; }
        
        public string? Keyword { get; set; }
    }
}