using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Infrastructure.Persistence.Repositories
{
    public class SectionRepository : ISectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Section> GetSectionByNumberAsync(int sectionNo)
        {
            return await _context.Sections
                .FirstOrDefaultAsync(s => s.no == sectionNo);
        }

        public async Task<IEnumerable<Section>> GetAllSectionsAsync()
        {
            return await _context.Sections
                .OrderBy(s => s.no)
                .ToListAsync();
        }
    }
} 