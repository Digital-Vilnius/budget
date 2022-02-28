using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountRole
{
    public class ListAccountRolesRequest : ListRequest
    {
        [Required]
        public int AccountId { get; set; }
        
        public string? Keyword { get; set; }
    }
}