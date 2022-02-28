using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts
{
    public class ListRequest
    {
        [Required]
        public int Limit { get; set; }
        
        [Required]
        public int Offset { get; set; }
    }
}