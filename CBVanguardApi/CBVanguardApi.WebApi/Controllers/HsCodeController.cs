using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/hscode/header")]
    public class HsCodeController : ControllerBase
    {
        private readonly IHSCodeRepository _hsCodeRepository;

        public HsCodeController(IHSCodeRepository hsCodeRepository)
        {
            _hsCodeRepository = hsCodeRepository;
        }

        [HttpGet("{chapterNo}")]
        public async Task<IActionResult> GetHSCodesByChapterNo(int chapterNo)
        {
            var hsCodes = await _hsCodeRepository.GetHSCodesByChapterNoAsync(chapterNo);
            return Ok(hsCodes);
        }

        [HttpGet("sub/{headerNo}")]
        public async Task<IActionResult> GetHSCodesByHeaderNo(string headerNo)
        {
            var hsCodes = await _hsCodeRepository.GetHSCodesByHeaderNoAsync(headerNo);
            return Ok(hsCodes);
        }

        [HttpGet("sub/ritc/{subHeaderNo}")]
        public async Task<IActionResult> GetHSCodesBySubHeaderNo(string subHeaderNo)
        {
            var hsCodes = await _hsCodeRepository.GetHSCodesBySubHeaderNoAsync(subHeaderNo);
            return Ok(hsCodes);
        }
    }
} 