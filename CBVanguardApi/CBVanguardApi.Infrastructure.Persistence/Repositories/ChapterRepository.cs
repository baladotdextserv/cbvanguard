using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<IEnumerable<string>> GetDistinctChaptersAsync()
        {
            return await _context.Policies
                .Select(p => p.TariffItem.Substring(0, 2))
                .Distinct()
                .OrderBy(chapter => chapter)
                .ToListAsync();
        }

        public async Task<Chapter> GetChapterByNumberAsync(string chapterNo)
        {
            return await _context.Chapters
                .FirstOrDefaultAsync(c => c.chapter_no == chapterNo);
        }
    }
}