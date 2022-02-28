using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.AccountUser
{
    public class EditAccountUserRequest
    {
        [Required]
        public int RoleId { get; set; }
    }
}