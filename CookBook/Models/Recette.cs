namespace CookBook.Models
{
    public class Recette
    {
        public int Id { get; set; }
        public string titre_recette { get; set; }
        public string description_recette { get; set; }
        public string photo_recette { get; set; }

        public int utilisateurId { get; set; }
        public Utilisateur utilisateur { get; set; }

        public int CategorieId { get; set; }
        public Categorie categorie { get; set; }

        // Liste des étapes de la recette
        public List<Etapes> etapes { get; set; } = new List<Etapes>();

        // Liste des ingrédients de la recette (avec leur quantité)
        public List<RecetteIngredient> recetteIngredients { get; set; } = new List<RecetteIngredient>();
    }
}
