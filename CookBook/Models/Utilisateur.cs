using System.Text.Json.Serialization;

namespace CookBook.Models
{
    public class Utilisateur
    {
        public int Id { get; set; }
        public string Pseudo { get; set; }
        public string Email { get; set; }
        public string MotDePasse { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }

        /* Listes de recette*/
        [JsonIgnore]
        public ICollection<Recette> RecettesCrees { get; set; }
        [JsonIgnore]
        public ICollection<Recette> RecettesFavoris { get; set; }
    }
}
