using System.Text.Json.Serialization;

namespace CookBook.Models
{
    /**
     * Classe représentant une catégorie de recettes.
     */
    public class Categorie
    {
        // Id de la catégorie
        public int Id { get; set; } 
        // Nom de la catégorie "
        public string nom_categorie { get; set; }
        [JsonIgnore]
        public List<Recette> Recettes { get; set; } = new List<Recette>();
    }
}
