<<<<<<< HEAD
﻿namespace CookBook.Models
{
    public class Recette
    {
=======
namespace CookBook.Models
{
    public class Recette
    {
        public int Id { get; set; }
        public string titre_recette { get; set; }
        public string description_recette { get; set; }
        public string photo_recette { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public Utilisateur utilisateur { get; set; }
        public Categorie categorie { get; set; }
        public List<Etapes> etapes { get; set; }
>>>>>>> a44271190241a6fd919a6ef909a9213acb8f7bbf
    }
}
