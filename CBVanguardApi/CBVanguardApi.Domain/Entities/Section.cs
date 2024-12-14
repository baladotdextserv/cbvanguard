namespace CBVanguardApi.Domain.Entities
{
    public class Section
    {
        public int no { get; set; }
        public string description { get; set; }
        public string notes { get; set; }
        public DateTime from { get; set; }
        public DateTime to { get; set; }
        public DateTime issue_date { get; set; }
        public DateTime issue_by { get; set; }
    }
} 