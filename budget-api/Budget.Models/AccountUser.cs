using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class AccountUser : BaseModel
    {
        [Required]
        public int UserId { get; set; }
        public User User { get; set; }

        [Required]
        public int RoleId { get; set; }
        public AccountRole Role { get; set; }
        
        [Required]
        public bool IsOwner { get; set; }
        
        [Required]
        public string Status { get; set; }
        
        public List<Category> CreatedCategories { get; set; }
        public List<Transaction> CreatedTransactions { get; set; }
        public List<Transaction> OwnedTransactions { get; set; }
    }
}