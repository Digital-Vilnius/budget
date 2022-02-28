using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountUser
{
    public class AddAccountUserRequest
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
        
        [Required]
        public int RoleId { get; set; }
        
        [Required]
        public int AccountId { get; set; }
    }
}