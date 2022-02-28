using System;
using System.ComponentModel.DataAnnotations;

namespace Budget.Contracts.Transaction
{
    public class ListTransactionsRequest : ListRequest
    {
        [Required]
        public int AccountId { get; set; }
        
        public int? CategoryId { get; set; }
        public decimal? AmountFrom { get; set; }
        public decimal? AmountTo { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public int? OwnerId { get; set; }
    }
}