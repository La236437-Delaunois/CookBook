using CookBook.Data;
using CookBook.Models;
using Humanizer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CookBook.Controllers
{
    /**
     * Contrôleur pour gérer les opérations CRUD sur les étapes des recettes.
     */
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EtapesController : ControllerBase
    {
        private readonly CookBookContext _context;

        public EtapesController(CookBookContext context)
        {
            _context = context;
        }
        private int CurrentUserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

        private bool IsAdmin => User.IsInRole("Admin");

        private async Task<bool> UserOwnsRecetteAsync(int recetteId)
        {
            var ownerId = await _context.Recette
                .Where(r => r.Id == recetteId)
                .Select(r => r.utilisateurId)
                .SingleOrDefaultAsync();

            if (ownerId == null) return false;
            return ownerId == CurrentUserId;
        }

        private async Task<bool> UserOwnsEtapeAsync(int etapeId)
        {
            var ownerId = await _context.Etapes
                .Where(e => e.Id == etapeId)
                .Select(e => e.Recette.utilisateurId)
                .SingleOrDefaultAsync();

            if (ownerId == null) return false;
            return ownerId == CurrentUserId;
        }

        // GET: api/Etapes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Etapes>>> GetEtapes()
        {
            return await _context.Etapes.ToListAsync();
        }

        // GET: api/Etapes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Etapes>> GetEtapes(int id)
        {
            var etapes = await _context.Etapes.FindAsync(id);

            if (etapes == null)
            {
                return NotFound();
            }

            return etapes;
        }

        /**
         * Met à jour une étape.
         * Seul l'owner de la recette ou un admin peut effectuer cette opération.
         * 
         * @param id L'ID de l'étape à mettre à jour.
         * @param etapes L'objet étape avec les nouvelles données.
         */
        // PUT: api/Etapes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEtapes(int id, Etapes etapes)
        {
            if (id != etapes.Id) return BadRequest();

            // Charger l'étape avec la recette pour éviter tout spoof de RecetteId
            var existing = await _context.Etapes
                .Include(e => e.Recette)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (existing == null) return NotFound();

            // Autoriser seulement l'owner ou un admin
            if (!IsAdmin && existing.Recette.utilisateurId != CurrentUserId)
                return Forbid();

            // Mise à jour "whitelist": on ne permet pas de changer la recette liée
            existing.titre_etape = etapes.titre_etape;
            existing.description_etape = etapes.description_etape;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // POST: api/Etapes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /**
         * Crée une nouvelle étape.
         * Seul l'owner de la recette ou un admin peut effectuer cette opération.
         * 
         * @param etapes L'objet étape à créer.
         */
        [HttpPost]
        public async Task<ActionResult<Etapes>> PostEtapes(Etapes etapes)
        {
            // Vérifier que l'utilisateur est bien owner de la recette ciblée
            if (!IsAdmin && !await UserOwnsRecetteAsync(etapes.Id_recette))
                return Forbid();
            _context.Etapes.Add(etapes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEtapes", new { id = etapes.Id }, etapes);
        }

        // DELETE: api/Etapes/5
        /**
         * Supprime une étape.
         * Seul l'owner de la recette ou un admin peut effectuer cette opération.
         * 
         * @param id L'ID de l'étape à supprimer.
         */
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEtapes(int id)
        {
            var etapes = await _context.Etapes
                .Include(e => e.Recette)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (etapes == null) return NotFound();

            if (!IsAdmin && etapes.Recette.utilisateurId != CurrentUserId)
                return Forbid();

            _context.Etapes.Remove(etapes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EtapesExists(int id)
        {
            return _context.Etapes.Any(e => e.Id == id);
        }
    }
}
