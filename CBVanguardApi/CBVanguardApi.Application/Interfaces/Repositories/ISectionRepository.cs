using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface ISectionRepository
    {
        Task<Section> GetSectionByNumberAsync(int sectionNo);
        Task<IEnumerable<Section>> GetAllSectionsAsync();
    }
} 