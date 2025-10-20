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
        public DbSet<CookBook.Models.Categorie> Categorie { get; set; } = default!;
        public DbSet<CookBook.Models.Etapes> Etapes { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Role>()
                .HasMany(r => r.Utilisateurs)
                .WithOne(u => u.Role);

            modelBuilder.Entity<Recette>()
                .HasOne(r => r.categorie)
                .WithMany(c => c.Recettes);

            modelBuilder.Entity<Recette>()
                .HasOne(rec => rec.utilisateur)
                .WithMany(util => util.RecettesCrees);

            modelBuilder.Entity<Recette>()
                .HasMany(rec => rec.utilisateursFavoris)
                .WithMany(util => util.RecettesFavoris);

            modelBuilder.Entity<Recette>()
                .HasMany(rec => rec.etapes)
                .WithOne(etape => etape.Recette);

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

        }
    }
}
