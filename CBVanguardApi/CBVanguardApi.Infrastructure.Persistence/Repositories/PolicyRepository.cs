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

        public async Task<Dictionary<string, object>> GetByTariffAsync(string tariffItem)
        {
            var policy = await _context.Policies.FindAsync(tariffItem);

            if (policy == null)
            {
                return new Dictionary<string, object>();
            }

            var cleanedPolicy = new Dictionary<string, object>();

            foreach (var property in policy.GetType().GetProperties())
            {
                var value = property.GetValue(policy);

                if (value != null)
                {
                    cleanedPolicy.Add(property.Name, value);
                }
            }

            return cleanedPolicy;
        }


        public async Task<IEnumerable<Policy>> GetPoliciesByTariffPrefixAsync(string prefix)
        {
            return await _context.Policies
                .Where(p => p.TariffItem.StartsWith(prefix)).OrderBy(p => p.TariffItem)
                .ToListAsync();
        }
    }
}