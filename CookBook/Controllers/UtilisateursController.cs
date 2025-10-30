using CookBook.Data;
using CookBook.Models;
using CookBook.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilisateursController : ControllerBase
    {
        private readonly CookBookContext _context;

        public UtilisateursController(CookBookContext context)
        {
            _context = context;
        }

        // GET: api/Utilisateurs
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Utilisateur>>> GetUtilisateur()
        {
            return await _context.Utilisateur
                                 .Include(u => u.Role)
                                 .ToListAsync();
        }

        // GET: api/Utilisateurs/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Utilisateur>> GetUtilisateur(int id)
        {
            var utilisateur = await _context.Utilisateur
                                            .Include(u => u.Role)
                                            .FirstOrDefaultAsync(u => u.Id == id);

            if (utilisateur == null)
            {
                return NotFound();
            }

            return utilisateur;
        }

        // PUT: api/Utilisateurs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> PutUtilisateur(int id, Utilisateur utilisateur)
        {
            if (id != utilisateur.Id)
            {
                return BadRequest();
            }

            _context.Entry(utilisateur).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtilisateurExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Utilisateurs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Utilisateur>> PostUtilisateur(Utilisateur utilisateur)
        {
            if (!_context.Role.Any(r => r.Id == utilisateur.RoleId)) 
            {
                return BadRequest("RoleId invalide.");
            }
                

            if (utilisateur.MotDePasse != null)
            {
                var salt = BCrypt.Net.BCrypt.GenerateSalt();
                utilisateur.MotDePasse = BCrypt.Net.BCrypt.HashPassword(utilisateur.MotDePasse, salt);
            }

            _context.Utilisateur.Add(utilisateur);
            await _context.SaveChangesAsync();

            await _context.Entry(utilisateur).Reference(u => u.Role).LoadAsync();


            return CreatedAtAction("GetUtilisateur", new { id = utilisateur.Id }, utilisateur);
        }

        [HttpPost("/login")]
        [AllowAnonymous]
        public async Task<ActionResult<Utilisateur>> Login([FromForm] string Pseudo, [FromForm] string MotDePasse)
        {
            var userExists = UserExists(Pseudo, MotDePasse);
            if (userExists == null)
            {
                return BadRequest();
            }
            else
            {
                // Generate Token and return it 
                var token = new AuthorizationService().CreateToken(userExists);
                // TODO: Create JSON Model class for returning token structured
                return Ok(token);
            }
        }

        private Utilisateur UserExists(string username, string password)
        {
            var user = _context.Utilisateur.First(u => u.Pseudo == username);
            if (user != null && BCrypt.Net.BCrypt.Verify(password, user.MotDePasse))
            {
                return user;
            }
            return null;
        }


        // DELETE: api/Utilisateurs/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteUtilisateur(int id)
        {
            var utilisateur = await _context.Utilisateur.FindAsync(id);
            if (utilisateur == null)
            {
                return NotFound();
            }

            _context.Utilisateur.Remove(utilisateur);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UtilisateurExists(int id)
        {
            return _context.Utilisateur.Any(e => e.Id == id);
        }
    }
}
