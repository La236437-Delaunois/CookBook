using System.Text.Json.Serialization;

namespace CookBook.Models
{
    /**
     * Classe représentant un rôle attribué à un utilisateur.
     */
    public class Role
    {
        public int Id { get; set; }
        public string nom_role { get; set; }
        /* Les Rôles : Admin et Utilisateur */

        [JsonIgnore]
        public ICollection<Utilisateur>? Utilisateurs { get; set; }
    }
}
