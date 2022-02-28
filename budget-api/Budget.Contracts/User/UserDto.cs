using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.User
{
    public class UserDto : BaseDto
    {
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string FirstName { get; set; }
        
        [Required]
        public string LastName { get; set; }
    }
}