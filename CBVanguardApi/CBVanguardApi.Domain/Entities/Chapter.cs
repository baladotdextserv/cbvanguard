namespace CBVanguardApi.Domain.Entities
{
    public class Chapter
    {
        public int no { get; set; } 
        public int section_no { get; set; } 
        public string notes { get; set; } 
        public DateTime from { get; set; } 
        public DateTime to { get; set; } 
        public DateTime issue_date { get; set; } 
        public DateTime issue_by { get; set; } 
    }
}