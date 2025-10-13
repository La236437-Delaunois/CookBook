namespace CookBook.Models
{
    public class Recette
    {
        public int Id { get; set; }
        public string titre_recette { get; set; }
        public string description_recette { get; set; }
        public string photo_recette { get; set; }
        public List<Ingredient> Ingredients { get; set; }

    }
}
