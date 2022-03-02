using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Account
{
    public class AccountDto : BaseDto
    {
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Currency { get; set; }
        
        [Required]
        public decimal Balance { get; set; }
        
        [Required]
        public decimal Incomes { get; set; }
        
        [Required]
        public decimal Expenses { get; set; }
    }
}