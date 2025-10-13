namespace CookBook.Models
{
    public class Role
    {
        public int Id { get; set; }
        public string nom_role { get; set; }
        /* Les Rôles : Admin et Utilisateur */
        public ICollection<Utilisateur>? Utilisateurs { get; set; }
    }
}
