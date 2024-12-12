using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Domain.Entities;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;

namespace CBVanguardApi.Infrastructure.Persistence.Repositories
{
    public class PolicyRepository : IPolicyRepository
    {
        private readonly ApplicationDbContext _context;

        public PolicyRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Policy>> GetAllAsync()
        {
            return await _context.Policies.ToListAsync();
        }

        public async Task<Policy> GetByTariffAsync(string tariffItem)
        {
            var policy = await _context.Policies.FindAsync(tariffItem);
            return policy ?? new Policy();
        }

        public async Task<IEnumerable<Policy>> GetPoliciesByTariffPrefixAsync(string prefix)
        {
            return await _context.Policies
                .Where(p => p.TariffItem.StartsWith(prefix)).OrderBy(p => p.TariffItem)
                .ToListAsync();
        }
    }
}