using System;
using System.ComponentModel.DataAnnotations;
using Budget.Contracts.AccountUser;
using Budget.Contracts.Category;

namespace Budget.Contracts.Transaction
{
    public class TransactionDto : BaseDto
    {
        [Required]
        public CategoryDto Category { get; set; }
        
        [Required]
        public string Description { get; set; }
        
        [Required]
        public decimal Amount { get; set; }
        
        [Required]
        public DateTime Date { get; set; }

        [Required]
        public AccountUserDto CreatedBy { get; set; }
        
        public AccountUserDto? Owner { get; set; }
    }
}