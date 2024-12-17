using CBVanguardApi.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CBVanguardApi.Application.Interfaces.Repositories
{
    public interface IHSCodeRepository
    {
        Task<IEnumerable<HsCode>> GetHSCodesByChapterNoAsync(int chapterNo);
        Task<IEnumerable<HsCode>> GetHSCodesByHeaderNoAsync(string headerNo);
        Task<IEnumerable<HsCode>> GetHSCodesBySubHeaderNoAsync(string subHeaderNo);
    }
} 