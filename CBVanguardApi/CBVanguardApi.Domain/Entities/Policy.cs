namespace CBVanguardApi.Domain.Entities
{
    public class Policy
    {
        public string? TariffItem { get; set; }
        public string? TariffDesc { get; set; }
        public string? TariffUnit { get; set; }
        public string? TariffImpPolicy { get; set; }
        public string? TariffImpCondition { get; set; }
        public string? TariffExpPolicy { get; set; }
        public string? TariffExpCondition { get; set; }
    }
} 