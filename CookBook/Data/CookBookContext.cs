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
        public CookBookContext (DbContextOptions<CookBookContext> options)
            : base(options)
        {
        }

        public DbSet<CookBook.Models.Role> Role { get; set; } = default!;
        public DbSet<CookBook.Models.Recette> Recette { get; set; } = default!;
        public DbSet<CookBook.Models.Ingredient> Ingredient { get; set; } = default!;
        public DbSet<CookBook.Models.Categorie> Categorie { get; set; } = default!;
        public DbSet<CookBook.Models.Etapes> Etapes { get; set; } = default!;

        

    }
}
