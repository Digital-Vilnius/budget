using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Category
{
    public class EditCategoryRequest
    {
        [Required]
        public string Name { get; set; }

        public int? ParentId { get; set; }
    }
}