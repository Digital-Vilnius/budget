using System.Collections.Generic;

namespace Budget.Contracts
{
    public class ListResponse<T> : ResultResponse<List<T>>
    {
        public int Count { get; set; }

        public ListResponse(List<T> result, int count) : base(result) => Count = count;
    }
}