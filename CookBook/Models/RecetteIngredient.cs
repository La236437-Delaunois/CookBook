using System.Text.Json.Serialization;

namespace CookBook.Models
{
    public class RecetteIngredient
    {
        public int recetteId { get; set; }
        public Recette recette { get; set; }

        public int ingredientId { get; set; }

        [JsonIgnore]
        public Ingredient ingredient { get; set; }

        // Quantité de l'ingrédient dans la recette (ex: "2 tasses", "1 cuillère à soupe", etc.)
        public string quantite { get; set; }
    }
}
