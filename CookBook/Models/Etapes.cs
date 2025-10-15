namespace CookBook.Models
{
    public class Etapes
    {
        public int Id { get; set; } 
        public int titre_etape { get; set; }
        public string description_etape { get; set; }
        public int Id_recette { get; set; }
        public Recette Recette  { get; set; }


    }
}
