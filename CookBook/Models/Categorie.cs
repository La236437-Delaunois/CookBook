namespace CookBook.Models
{
    public class Categorie
    {
        // Id de la catégorie
        public int Id { get; set; }
        // Nom de la catégorie "
        public string nom_categorie { get; set; }

        public List<Recette> Recettes { get; set; }
    }
}
