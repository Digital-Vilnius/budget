using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Category
{
    public class CategoryDto : BaseDto
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Color { get; set; }
        
        [Required]
        public int TransactionsCount { get; set; }
        
        [Required]
        public decimal Balance { get; set; }

        [Required]
        public int ChildrenCount { get; set; }
        
        public CategoryDto? Parent { get; set; }
    }
}