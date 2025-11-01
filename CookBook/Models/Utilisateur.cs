using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.Text.Json.Serialization;

namespace CookBook.Models
{
    /**
     * Classe représentant un utilisateur de l'application CookBook.
     */
    public class Utilisateur
    {
        public int Id { get; set; }
        public string Pseudo { get; set; }
        public string Email { get; set; }
        public string MotDePasse { get; set; }

        public int RoleId { get; set; }

        [ValidateNever]
        public Role Role { get; set; }

        /* Liste des recettes créées par l'utilisateur */
        [JsonIgnore]
        public ICollection<Recette>? RecettesCrees { get; set; }
        /* Liste des recettes favorites de l'utilisateur */
        [JsonIgnore]
        public ICollection<Recette>? RecettesFavoris { get; set; }
    }
}
