using System;

namespace Budget.Contracts
{
    public class BaseDto
    {
        public int Id { get; set; }
        
        public DateTime? Updated { get; set; }
        
        public DateTime Created { get; set; }
    }
}