using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/chapter")]
    public class ChapterController : ControllerBase
    {
        private readonly IChapterRepository _chapterRepository;

        public ChapterController(IChapterRepository chapterRepository)
        {
            _chapterRepository = chapterRepository;
        }

        [HttpGet("{chapterNo}")]
        public async Task<IActionResult> GetChapterByNumber(int chapterNo)
        {
            var chapter = await _chapterRepository.GetChapterByNumberAsync(chapterNo);
            if (chapter == null) return NotFound();

            var response = new
            {
                no = chapter.no,
                section_name = chapter.section_name,
                name = chapter.name,
                description = chapter.description,
                from = chapter.from ?? DateTime.MinValue,
                to = chapter.to ?? DateTime.MinValue,
                issue_date = chapter.issue_date ?? DateTime.MinValue,
                issue_by = chapter.issue_by ?? DateTime.MinValue
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllChapters()
        {
            var chapters = await _chapterRepository.GetAllChaptersAsync();
            return Ok(chapters);
        }
        
        [HttpGet("section")]
        public async Task<IActionResult> GetById([FromQuery] string name)
        {
            var chapters = await _chapterRepository.GetChaptersBySectionAsync(name);
    
            if (chapters == null || !chapters.Any())
                return NotFound();
        
            return Ok(chapters);
        }

    }
}