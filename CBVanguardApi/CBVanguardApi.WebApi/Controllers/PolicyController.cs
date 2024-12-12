using CBVanguardApi.Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CBVanguardApi.WebApi.Controllers
{
    [ApiController]
    [Route("api/policy")]
    public class PolicyController : ControllerBase
    {
        private readonly IPolicyRepository _policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            _policyRepository = policyRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetById([FromQuery] string tariffItem)
        {
            if (tariffItem.Length == 8)
            {
                var policy = await _policyRepository.GetByTariffAsync(tariffItem);
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

        [HttpGet("{tariffPrefix}")]
        public async Task<IActionResult> GetPoliciesByPrefix(string tariffPrefix)
        {
            var policies = await _policyRepository.GetPoliciesByTariffPrefixAsync(tariffPrefix);
            if (policies == null || !policies.Any())
            {
                return NotFound();
            }
            return Ok(policies);
        }
    }
}