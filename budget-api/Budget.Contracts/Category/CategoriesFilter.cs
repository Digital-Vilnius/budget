using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Category
{
    public class CategoriesFilter
    {
        [Required]
        public int AccountId { get; set; }
        
        public string? Keyword { get; set; }
        public int? ParentId { get; set; }
    }
}