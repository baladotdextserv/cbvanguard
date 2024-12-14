using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/section")]
    public class SectionController : ControllerBase
    {
        private readonly ISectionRepository _sectionRepository;

        public SectionController(ISectionRepository sectionRepository)
        {
            _sectionRepository = sectionRepository;
        }

        [HttpGet("{sectionNo}")]
        public async Task<IActionResult> GetSectionByNumber(int sectionNo)
        {
            var section = await _sectionRepository.GetSectionByNumberAsync(sectionNo);
            if (section == null) return NotFound();

            var response = new
            {
                no = section.no,
                description = section.description,
                notes = section.notes
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSections()
        {
            var sections = await _sectionRepository.GetAllSectionsAsync();
            return Ok(sections);
        }
    }
} 