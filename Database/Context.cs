using Microsoft.EntityFrameworkCore;
using System;
using Interfaces;

namespace Interfaces
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
        }
        public DbSet<FolderEntity> Folders { get; set; }

        public DbSet<Bookmark> Bookmarks { get; set; }
    }
}
