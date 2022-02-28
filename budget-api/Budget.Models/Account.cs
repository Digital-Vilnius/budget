using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class Account : BaseModel
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Currency { get; set; }
        
        public List<AccountUser> Users { get; set; }
        public List<AccountRole> Roles { get; set; }
        public List<Category> Categories { get; set; }
    }
}