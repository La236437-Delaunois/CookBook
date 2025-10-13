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
    }
}
