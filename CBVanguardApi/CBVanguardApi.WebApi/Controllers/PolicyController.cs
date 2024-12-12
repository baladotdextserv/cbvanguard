using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery] string tariffItemId)
        {
            if (tariffItemId.Length == 8)
            {
                var policy = await _policyRepository.GetByTariffAsync(tariffItemId);
                if (policy == null) return NotFound();
                return Ok(policy);
            }
            return BadRequest();
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var policies = await _policyRepository.GetAllAsync();
            return Ok(policies);
        }

        [HttpGet("by-prefix")]
        public async Task<IActionResult> GetPoliciesByPrefix([FromBody] string prefix)
        {
            var policies = await _policyRepository.GetPoliciesByTariffPrefixAsync(prefix);
            if (policies == null || !policies.Any())
            {
                return NotFound();
            }
            return Ok(policies);
        }
    }
}