using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IChapterRepository
    {
        Task<Chapter> GetChapterByNumberAsync(int chapterNo);
        Task<IEnumerable<Chapter>> GetAllChaptersAsync();
    }
} 