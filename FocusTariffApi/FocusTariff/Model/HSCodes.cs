using System.ComponentModel.DataAnnotations;


namespace FocusTariff.Models
{
    public class HSCodes
    {
        [Key]
        public string HS_Code { get; set; }

        public int Chapter { get; set; }
        public string Description { get; set; }
        public string Unit_of_Measurement { get; set; }
    }
}
