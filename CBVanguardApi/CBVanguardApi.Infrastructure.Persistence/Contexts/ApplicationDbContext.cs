using CBVanguardApi.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CBVanguardApi.Infrastructure.Persistence.Contexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Policy> Policies { get; set; }
        public DbSet<Chapter> Chapters { get; set; }
        public DbSet<Section> Sections { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Policy>().ToTable("cbv_policy");
            modelBuilder.Entity<Policy>().HasKey(p => p.TariffItem);

            modelBuilder.Entity<Chapter>().ToTable("chapter");
            modelBuilder.Entity<Chapter>().HasKey(c => c.no);

            modelBuilder.Entity<Section>().ToTable("section");
            modelBuilder.Entity<Section>().HasKey(s => s.no);

            base.OnModelCreating(modelBuilder);
        }
    }
} 