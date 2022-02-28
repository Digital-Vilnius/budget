using System;
using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Transaction
{
    public class SaveTransactionRequest
    {
        [Required]
        public string Description { get; set; }
        
        [Required]
        public decimal Amount { get; set; }
        
        [Required]
        public int CategoryId { get; set; }
        
        [Required]
        public int CreatedById { get; set; }
        
        [Required]
        public DateTime Date { get; set; }
        
        public int? OwnerId { get; set; }
    }
}