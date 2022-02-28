using System.Collections.Generic;
using Budget.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Budget.Repositories.Context
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnAccountRoleModelCreating(modelBuilder);
            OnAccountUserModelCreating(modelBuilder);
            OnCategoryModelCreating(modelBuilder);
            OnTransactionModelCreating(modelBuilder);
            OnUserModelCreating(modelBuilder);
        }
        
        private static void OnAccountRoleModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<AccountRole>()
                .HasIndex(accountRole => new {accountRole.AccountId, accountRole.Name})
                .IsUnique();

            modelBuilder.Entity<AccountRole>()
                .HasOne(accountRole => accountRole.Account)
                .WithMany(account => account.Roles)
                .HasForeignKey(accountRole => accountRole.AccountId)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder
                .Entity<AccountRole>()
                .Property(accountRole => accountRole.Permissions)
                .HasConversion(
                    permissions => JsonConvert.SerializeObject(permissions),
                    permissions => JsonConvert.DeserializeObject<List<string>>(permissions) ?? new List<string>()
                );
        }
        
        private static void OnAccountUserModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<AccountUser>()
                .HasIndex(accountUser => new {accountUser.UserId, accountUser.RoleId})
                .IsUnique();

            modelBuilder.Entity<AccountUser>()
                .HasOne(accountUser => accountUser.User)
                .WithMany(user => user.UserAccounts)
                .HasForeignKey(accountUser => accountUser.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<AccountUser>()
                .HasOne(accountUser => accountUser.Role)
                .WithMany(accountRole => accountRole.Users)
                .HasForeignKey(accountUser => accountUser.RoleId)
                .OnDelete(DeleteBehavior.Restrict);
        }
        
        private static void OnCategoryModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Category>()
                .HasIndex(category => new {category.Name, category.AccountId})
                .IsUnique();
            
            modelBuilder.Entity<Category>()
                .HasOne(category => category.Parent)
                .WithMany(parent => parent.Children)
                .HasForeignKey(category => category.ParentId)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<Category>()
                .HasOne(category => category.CreatedBy)
                .WithMany(accountUser => accountUser.CreatedCategories)
                .HasForeignKey(category => category.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<Category>()
                .HasOne(category => category.Account)
                .WithMany(account => account.Categories)
                .HasForeignKey(category => category.AccountId)
                .OnDelete(DeleteBehavior.Restrict);
        }

        private static void OnTransactionModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>()
                .HasOne(transaction => transaction.Category)
                .WithMany(category => category.Transactions)
                .HasForeignKey(transaction => transaction.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<Transaction>()
                .HasOne(transaction => transaction.CreatedBy)
                .WithMany(accountUser => accountUser.CreatedTransactions)
                .HasForeignKey(transaction => transaction.CreatedById)
                .OnDelete(DeleteBehavior.Restrict);
            
            modelBuilder.Entity<Transaction>()
                .HasOne(transaction => transaction.Owner)
                .WithMany(accountUser => accountUser.OwnedTransactions)
                .HasForeignKey(transaction => transaction.OwnerId)
                .OnDelete(DeleteBehavior.Restrict);
        }

        private static void OnUserModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .HasIndex(user => user.Phone)
                .IsUnique();
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<AccountUser> AccountUsers { get; set; }
        public DbSet<AccountRole> AccountRoles { get; set; }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}