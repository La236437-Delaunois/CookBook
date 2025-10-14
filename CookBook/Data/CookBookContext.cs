using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CookBook.Models;

namespace CookBook.Data
{
    public class CookBookContext : DbContext
    {
        public CookBookContext(DbContextOptions<CookBookContext> options)
            : base(options)
        {
        }

        public DbSet<CookBook.Models.Role> Role { get; set; } = default!;
        public DbSet<CookBook.Models.Recette> Recette { get; set; } = default!;
        public DbSet<CookBook.Models.Ingredient> Ingredient { get; set; } = default!;
        public DbSet<CookBook.Models.RecetteIngredient> RecetteIngredients { get; set; } = default!;
        public DbSet<CookBook.Models.RecetteFavoris> RecetteFavoris { get; set; } = default!;
        public DbSet<CookBook.Models.Categorie> Categorie { get; set; } = default!;
        public DbSet<CookBook.Models.Etapes> Etapes { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<RecetteIngredient>()
                .HasKey(recing => new { recing.recetteId, recing.ingredientId });

            // (table intermédiaire) Pour relier les recettes avec cette table intermédiaire
            modelBuilder.Entity<RecetteIngredient>()
                .HasOne(recing => recing.recette) //pas de HasMany car on est dans la table intermédiaire
                .WithMany(rec => rec.recetteIngredients)
                .HasForeignKey(recing => recing.recetteId);

            // (table intermédiaire) Pour relier les ingrédients avec cette table intermédiaire
            modelBuilder.Entity<RecetteIngredient>()
                .HasOne(recing => recing.ingredient)
                .WithMany(ing => ing.recetteIngredients)
                .HasForeignKey(recing => recing.ingredientId);


            modelBuilder.Entity<RecetteFavoris>()
                .HasKey(recfav => new { recfav.utilisateurId, recfav.recetteId });

            // (table intermédiaire) Pour relier les utilisateurs avec cette table intermédiaire
            modelBuilder.Entity<RecetteFavoris>()
                .HasOne(recfav => recfav.utilisateur)
                .WithMany(util => util.recetteFavoris)
                .HasForeignKey(recfav => recfav.utilisateurId);

            // (table intermédiaire) Pour relier les recettes avec cette table intermédiaire
            modelBuilder.Entity<RecetteFavoris>()
                .HasOne(recfav => recfav.recette)
                .WithMany(r => r.recetteFavoris)
                .HasForeignKey(recfav => recfav.recetteId);

            modelBuilder.Entity<Recette>()
                .HasOne(r => r.categorie)
                .WithMany(c => c.Recettes)
                .HasForeignKey(r => r.CategorieId);
        }
    }
}
