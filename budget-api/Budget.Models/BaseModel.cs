using System;
using System.ComponentModel.DataAnnotations;

namespace Budget.Models
{
    public class BaseModel
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public bool IsDeleted { get; set; }
        
        public DateTime? Updated { get; set; }

        [Required]
        public DateTime Created { get; set; }
    }
}