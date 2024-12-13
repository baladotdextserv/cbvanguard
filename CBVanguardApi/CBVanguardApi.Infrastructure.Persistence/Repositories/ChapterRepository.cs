using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain.Entities;

namespace CBVanguardApi.Infrastructure.Persistence.Repositories
{
    public class ChapterRepository : IChapterRepository
    {
        private readonly ApplicationDbContext _context;

        public ChapterRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Chapter> GetChapterByNumberAsync(int chapterNo)
        {
            return await _context.Chapters
                .FirstOrDefaultAsync(c => c.no == chapterNo);
        }

        public async Task<IEnumerable<Chapter>> GetAllChaptersAsync()
        {
            return await _context.Chapters
                .OrderBy(c => c.no)
                .ToListAsync();
        }
    }
}