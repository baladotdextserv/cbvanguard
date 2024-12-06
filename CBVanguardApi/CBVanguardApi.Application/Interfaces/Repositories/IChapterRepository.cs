using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain;
using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IChapterRepository
    {
        Task<IEnumerable<string>> GetDistinctChaptersAsync();
        Task<Chapter> GetChapterByNumberAsync(string chapterNo);
    }
} 