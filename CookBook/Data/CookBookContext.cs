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

        public DbSet<CookBook.Models.Utilisateur> Utilisateur { get; set; } = default!;
        public DbSet<CookBook.Models.Role> Role { get; set; } = default!;
    }
}
