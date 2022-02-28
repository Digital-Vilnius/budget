using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Budget.Contracts;
using Budget.Contracts.Transaction;
using Budget.Models;
using Budget.Models.Repositories;
using Budget.Models.Services;

namespace Budget.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TransactionService(ITransactionRepository transactionRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _transactionRepository = transactionRepository;
        }
        
        public async Task<ResultResponse<TModel>> AddAsync<TModel>(SaveTransactionRequest request)
        {
            var transaction = _mapper.Map<SaveTransactionRequest, Transaction>(request);

            await _transactionRepository.AddAsync(transaction);
            await _unitOfWork.SaveChangesAsync();
            
            var transactionDto = _mapper.Map<Transaction, TModel>(transaction);
            return new ResultResponse<TModel>(transactionDto);
        }

        public async Task<ResultResponse<TModel>> EditAsync<TModel>(int id, SaveTransactionRequest request)
        {
            var transaction = await _transactionRepository.GetByIdAsync(id);
            if (transaction == null) throw new Exception("Transaction is not found");
            
            transaction = _mapper.Map(request, transaction);
            
            _transactionRepository.Update(transaction);
            await _unitOfWork.SaveChangesAsync();
            
            var transactionDto = _mapper.Map<Transaction, TModel>(transaction);
            return new ResultResponse<TModel>(transactionDto);
        }

        public async Task<ListResponse<TModel>> GetAsync<TModel>(ListTransactionsRequest request)
        {
            var filter = _mapper.Map<ListTransactionsRequest, TransactionsFilter>(request);
            var paging = _mapper.Map<ListTransactionsRequest, Paging>(request);

            var transactions = await _transactionRepository.GetAsync(filter, paging);
            var transactionsCount = await _transactionRepository.CountAsync(filter);

            var transactionsDtosList = _mapper.Map<List<Transaction>, List<TModel>>(transactions);
            return new ListResponse<TModel>(transactionsDtosList, transactionsCount);
        }

        public async Task<ResultResponse<TModel>> GetAsync<TModel>(int id)
        {
            var transaction = await _transactionRepository.GetByIdAsync(id);
            if (transaction == null) throw new Exception("Transaction is not found");
            
            var transactionDto = _mapper.Map<Transaction, TModel>(transaction);
            return new ResultResponse<TModel>(transactionDto);
        }

        public async Task DeleteAsync(int id)
        {
            var transaction = await _transactionRepository.GetByIdAsync(id);
            if (transaction == null) throw new Exception("Transaction is not found");
            
            _transactionRepository.Delete(transaction);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}