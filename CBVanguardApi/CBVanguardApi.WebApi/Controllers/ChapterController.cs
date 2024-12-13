using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
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
                section_no = chapter.section_no,
                notes = chapter.notes
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllChapters()
        {
            var chapters = await _chapterRepository.GetAllChaptersAsync();
            return Ok(chapters);
        }
    }
}