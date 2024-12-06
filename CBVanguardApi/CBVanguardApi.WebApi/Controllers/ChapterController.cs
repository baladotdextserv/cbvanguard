using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChapterController : ControllerBase
    {
        private readonly IChapterRepository _chapterRepository;

        public ChapterController(IChapterRepository chapterRepository)
        {
            _chapterRepository = chapterRepository;
        }

        [HttpGet("distinct")]
        public async Task<IActionResult> GetDistinctChapters()
        {
            var chapters = await _chapterRepository.GetDistinctChaptersAsync();
            return Ok(chapters);
        }

        [HttpGet("{chapterNo}")] // New endpoint
        public async Task<IActionResult> GetChapterByNumber(string chapterNo)
        {
            var chapter = await _chapterRepository.GetChapterByNumberAsync(chapterNo);
            if (chapter == null) return NotFound();
            return Ok(chapter);
        }
    }
} 