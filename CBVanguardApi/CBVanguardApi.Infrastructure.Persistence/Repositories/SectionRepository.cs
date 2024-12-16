using CBVanguardApi.Application.Interfaces.Repositories;
using CBVanguardApi.Infrastructure.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using CBVanguardApi.Domain.Entities;
using Microsoft.EntityFrameworkCore.Internal;

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

        public async Task<IEnumerable<Section>> GetSectionsByChapterIdAsync(int chapterId)
        {
            var result = await (from section in _context.Sections
                join chapter in _context.Chapters
                    on section.name equals chapter.section_name
                where chapter.no == chapterId
                select new
                {
                    section_no = section.no,
                    section_name = section.name,
                    section_description = section.description,
                    section_from = section.@from,
                    section_to = section.to,
                    section_issue_date = section.issue_date,
                    section_issue_by = section.issue_by,
                }).ToListAsync();

            if (result != null && result.Any()) 
            {
                return result.Select(r => new Section
                {
                    no = r.section_no,
                    name = r.section_name,
                    description = r.section_description,
                    from = r.section_from,
                    to = r.section_to,
                    issue_date = r.section_issue_date,
                    issue_by = r.section_issue_by,
                });
            }

            return Enumerable.Empty<Section>(); 
        }

    }
} 