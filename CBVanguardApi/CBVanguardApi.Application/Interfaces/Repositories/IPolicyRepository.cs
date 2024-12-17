using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IPolicyRepository
    {
        Task<IEnumerable<Policy>> GetAllAsync();
        Task<Dictionary<string, object>> GetByTariffAsync(string tariffItem);
        Task<IEnumerable<Policy>> GetPoliciesByTariffPrefixAsync(string prefix);
    }
}