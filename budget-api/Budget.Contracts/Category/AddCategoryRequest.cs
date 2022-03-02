using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Category
{
    public class AddCategoryRequest
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Color { get; set; }
        
        [Required]
        public int AccountId { get; set; }
        
        [Required]
        public int CreatedById { get; set; }
        
        public int? ParentId { get; set; }
    }
}