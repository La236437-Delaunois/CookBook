using System.Text.Json.Serialization;

namespace CookBook.Models
{
    /**
     * Classe représentant un ingrédient utilisé dans les recettes.
     */
    public class Ingredient
    {
        public int Id { get; set; }
        public string nom_ingredient { get; set; }

        // Liste des recettes utilisant cet ingrédient (avec leur quantité)
        [JsonIgnore]
        public List<RecetteIngredient> recetteIngredients { get; set; } = new List<RecetteIngredient>();
    }
}
