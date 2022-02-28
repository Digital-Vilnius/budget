using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountUser
{
    public class ListAccountUsersRequest : ListRequest
    {
        [Required]
        public int AccountId { get; set; }
        
        public string? Keyword { get; set; }
    }
}