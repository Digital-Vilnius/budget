using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Category
{
    public class ListCategoriesRequest : ListRequest
    {
        [Required]
        public int AccountId { get; set; }
        
        public int? ParentId { get; set; }
    }
}