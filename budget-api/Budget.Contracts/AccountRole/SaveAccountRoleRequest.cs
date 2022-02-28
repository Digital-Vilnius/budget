using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountRole
{
    public class SaveAccountRoleRequest
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public List<string> Permissions { get; set; }
        
        [Required]
        public int AccountId { get; set; }
    }
}