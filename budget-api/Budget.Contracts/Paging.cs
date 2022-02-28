using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts
{
    public class Paging
    {
        [Required]
        public int Limit { get; set; }
        
        [Required]
        public int Offset { get; set; }
    }
}