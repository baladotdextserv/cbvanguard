using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IPolicyRepository
    {
        Task<IEnumerable<Policy>> GetAllAsync();
        Task<Policy> GetByTariffAsync(string tariffItem);
        Task<IEnumerable<Policy>> GetPoliciesByTariffPrefixAsync(string prefix);
    }
}