using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using CBVanguardApi.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBVanguardApi.Infrastructure.Persistence.Repositories
{
    public class HsCodeRepository : IHSCodeRepository
    {
        private readonly ApplicationDbContext _context;

        public HsCodeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HsCode>> GetHSCodesByChapterNoAsync(int chapterNo)
        {
            var result = await (from policy in _context.Policies
                                where policy.TariffItem.StartsWith(chapterNo.ToString()) && policy.TariffItem.Length == 4
                                select new
                                {
                                    Hscode = policy.TariffItem,
                                    Description = policy.TariffDesc,
                                    Unit = policy.TariffUnit
                                }).ToListAsync();

            return result.Select(r => new HsCode
            {
                Hscode = r.Hscode,
                Description = r.Description,
                Unit = r.Unit,
                Basic = null,
                IGST = null,
                SWS = null,
                Policy = null
            });
        }

        public async Task<IEnumerable<HsCode>> GetHSCodesByHeaderNoAsync(string headerNo)
        {
            var result = await (from policy in _context.Policies
                                where policy.TariffItem.StartsWith(headerNo) && policy.TariffItem.Length == 6
                                select new
                                {
                                    Hscode = policy.TariffItem,
                                    Description = policy.TariffDesc,
                                    Unit = policy.TariffUnit
                                }).ToListAsync();

            return result.Select(r => new HsCode
            {
                Hscode = r.Hscode,
                Description = r.Description,
                Unit = r.Unit,
                Basic = null,
                IGST = null,
                SWS = null,
                Policy = null
            });
        }

        public async Task<IEnumerable<HsCode>> GetHSCodesBySubHeaderNoAsync(string subHeaderNo)
        {
            var result = await (from policy in _context.Policies
                                where policy.TariffItem.StartsWith(subHeaderNo) && policy.TariffItem.Length == 8
                                select new
                                {
                                    Hscode = policy.TariffItem,
                                    Description = policy.TariffDesc,
                                    Unit = policy.TariffUnit
                                }).ToListAsync();

            return result.Select(r => new HsCode
            {
                Hscode = r.Hscode,
                Description = r.Description,
                Unit = r.Unit,
                Basic = null,
                IGST = null,
                SWS = null,
                Policy = null
            });
        }
    }
}