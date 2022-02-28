using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class User : BaseModel
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        public string? Code { get; set; }
        
        public string? RefreshToken { get; set; }

        public List<AccountUser> UserAccounts { get; set; }
    }
}