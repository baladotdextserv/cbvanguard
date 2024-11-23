using Microsoft.EntityFrameworkCore;
using FocusTariff.Models;

public class FocusDbContext : DbContext
{
    public FocusDbContext(DbContextOptions<FocusDbContext> options) : base(options) { }

    public DbSet<HSCodes> HSCodes { get; set; }
}
