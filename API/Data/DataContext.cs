using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; }
    public DbSet<ListEntity> Lists { get; set; }
}
// public class ListDbContext(DbContextOptions<ListDbContext> options) : DbContext(options)
// {
    
// }