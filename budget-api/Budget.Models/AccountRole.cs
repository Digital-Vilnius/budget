using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class AccountRole : BaseModel
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public int AccountId { get; set; }
        public Account Account { get; set; }
        
        [Required]
        public List<string> Permissions { get; set; }
        
        public List<AccountUser> Users { get; set; }
    }
}