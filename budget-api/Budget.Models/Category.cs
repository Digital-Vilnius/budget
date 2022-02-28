using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class Category : BaseModel
    {
        [Required]
        public string Name { get; set; }
        
        public int? ParentId { get; set; }
        public Category? Parent { get; set; }
        
        [Required]
        public int CreatedById { get; set; }
        public AccountUser CreatedBy { get; set; }
        
        [Required]
        public int AccountId { get; set; }
        public Account Account { get; set; }
        
        public List<Transaction> Transactions { get; set; }
        public List<Category> Children { get; set; }
    }
}