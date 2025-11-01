using CookBook.Data;
using CookBook.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CookBook.Controllers
{
    /**
     * Contrôleur pour gérer les opérations CRUD sur les associations entre recettes et ingrédients.
     */
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RecetteIngredientsController : ControllerBase
    {
        private readonly CookBookContext _context;

        public RecetteIngredientsController(CookBookContext context)
        {
            _context = context;
        }

        // GET: api/RecetteIngredients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecetteIngredient>>> GetRecetteIngredients()
        {
            return await _context.RecetteIngredients.ToListAsync();
        }

        // GET: api/RecetteIngredients/5/7
        [HttpGet("{recetteId}/{ingredientId}")]
        public async Task<ActionResult<RecetteIngredient>> GetRecetteIngredient(int recetteId, int ingredientId)
        {
            var recetteIngredient = await _context.RecetteIngredients.FindAsync(recetteId, ingredientId);

            if (recetteIngredient == null)
            {
                return NotFound();
            }

            return recetteIngredient;
        }

        // GET: api/RecetteIngredients/Recette/5
        [HttpGet("Recette/{recetteId}")]
        public async Task<ActionResult<IEnumerable<RecetteIngredient>>> GetIngredientsByRecette(int recetteId)
        {
            var ingredients = await _context.RecetteIngredients
                .Where(ri => ri.recetteId == recetteId)
                .ToListAsync();

            if (ingredients.Count == 0)
            {
                return NotFound();
            }

            return ingredients;
        }

        // PUT: api/RecetteIngredients/5/7
        [HttpPut("{recetteId}/{ingredientId}")]
        public async Task<IActionResult> PutRecetteIngredient(int recetteId, int ingredientId, RecetteIngredient recetteIngredient)
        {
            if (recetteId != recetteIngredient.recetteId || ingredientId != recetteIngredient.ingredientId)
            {
                return BadRequest();
            }

            _context.Entry(recetteIngredient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecetteIngredientExists(recetteId, ingredientId))
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

        /**
         * Crée une nouvelle association entre une recette et un ingrédient.
         * Vérifie d'abord si l'association existe déjà pour éviter les doublons.
         * 
         * @param recetteIngredient L'association recette/ingrédient à créer.
         */
        // POST: api/RecetteIngredients
        [HttpPost]
        public async Task<ActionResult<RecetteIngredient>> PostRecetteIngredient(RecetteIngredient recetteIngredient)
        {
            if (RecetteIngredientExists(recetteIngredient.recetteId, recetteIngredient.ingredientId))
            {
                return Conflict("Cette association recette/ingrédient existe déjà.");
            }

            _context.RecetteIngredients.Add(recetteIngredient);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                throw;
            }

            return CreatedAtAction(
                nameof(GetRecetteIngredient),
                new { recetteId = recetteIngredient.recetteId, ingredientId = recetteIngredient.ingredientId },
                recetteIngredient
            );
        }

        // DELETE: api/RecetteIngredients/5/7
        [HttpDelete("{recetteId}/{ingredientId}")]
        public async Task<IActionResult> DeleteRecetteIngredient(int recetteId, int ingredientId)
        {
            var recetteIngredient = await _context.RecetteIngredients.FindAsync(recetteId, ingredientId);
            if (recetteIngredient == null)
            {
                return NotFound();
            }

            _context.RecetteIngredients.Remove(recetteIngredient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecetteIngredientExists(int recetteId, int ingredientId)
        {
            return _context.RecetteIngredients.Any(e => e.recetteId == recetteId && e.ingredientId == ingredientId);
        }
    }
}
