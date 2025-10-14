namespace CookBook.Models
{
    public class RecetteFavoris
    {
        // Clé étrangère vers l'utilisateur
        public int utilisateurId { get; set; }
        // Objet de navigation vers l'utilisateur
        public Utilisateur utilisateur { get; set; }

        public int recetteId { get; set; }
        public Recette recette { get; set; }
    }
}
