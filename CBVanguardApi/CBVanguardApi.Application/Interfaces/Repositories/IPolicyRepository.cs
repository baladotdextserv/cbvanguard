using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IPolicyRepository
    {
        Task<IEnumerable<Policy>> GetAllAsync();
        Task<Policy> GetByIdAsync(string tariffItem);
    }
}