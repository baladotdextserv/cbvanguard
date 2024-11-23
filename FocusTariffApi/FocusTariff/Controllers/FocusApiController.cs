using Microsoft.AspNetCore.Mvc;
using FocusTariff.Models;

namespace FocusTariff.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FocusApiController : ControllerBase
    {
        private readonly FocusDbContext _context;

        public FocusApiController(FocusDbContext context)
        {
            _context = context;
        }

        // GET: api/FocusApi
        [HttpGet]
        public ActionResult<IEnumerable<HSCodes>> Get()
        {
            return _context.HSCodes.ToList();
        }

        // GET: api/FocusApi/85
        [HttpGet("{id}")]
        public ActionResult<HSCodes> Get(int id)
        {
            var hsCode = _context.HSCodes.FirstOrDefault(x => x.Chapter == id);
            if (hsCode == null)
                return NotFound();

            return hsCode;
        }

        //Get api/FocusApi/hs/hs_code
        [HttpGet("hs/{code}")]
        public ActionResult<HSCodes> GetByHSCode(string code)
        {
            var hsCode = _context.HSCodes.FirstOrDefault(x => x.HS_Code == code);
            if (hsCode == null)
                return NotFound();

            return hsCode;
        }


    }
}
