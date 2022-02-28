using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountRole
{
    public class AccountRoleDto : BaseDto
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public List<string> Permissions { get; set; }
    }
}