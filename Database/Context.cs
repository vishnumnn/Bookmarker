using Microsoft.EntityFrameworkCore;
using System;

namespace Database
{
    public class Context : DbContext
    {
        public DbSet<FolderEntity> Blogs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=my_host;Database=my_db;Username=my_user;Password=my_pw");
    }
}
