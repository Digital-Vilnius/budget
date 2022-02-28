using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Budget.Models
{
    public class Transaction : BaseModel
    {
        [Required]
        public string Description { get; set; }
        
        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Amount { get; set; }
        
        [Required]
        public DateTime Date { get; set; }
        
        [Required]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        
        [Required]
        public int CreatedById { get; set; }
        public AccountUser CreatedBy { get; set; }
        
        public int? OwnerId { get; set; }
        public AccountUser? Owner { get; set; }
    }
}