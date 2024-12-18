using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CBVanguardApi.Domain.Entities
{
    public class HsCode
    {
        public string? Hscode { get; set; }
        public string? Description { get; set; }
        public string? Unit { get; set; }
        public string? Basic { get; set; }
        public string? IGST { get; set; }
        public string? SWS { get; set; }
        public string? Policy { get; set; }
    }
}
