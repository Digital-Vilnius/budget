using System.ComponentModel.DataAnnotations;
using Budget.Contracts.AccountRole;

namespace Budget.Contracts.AccountUser
{
    public class AccountUserDto : BaseDto
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        [Required]
        public string Status { get; set; }
        
        [Required]
        public AccountRoleDto Role { get; set; }
    }
}