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

        // PUT: api/RecetteIngredients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecetteIngredient(int id, RecetteIngredient recetteIngredient)
        {
            if (id != recetteIngredient.recetteId)
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
                if (!RecetteIngredientExists(id))
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

        // POST: api/RecetteIngredients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecetteIngredient>> PostRecetteIngredient(RecetteIngredient recetteIngredient)
        {
            _context.RecetteIngredients.Add(recetteIngredient);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RecetteIngredientExists(recetteIngredient.recetteId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRecetteIngredient", new { id = recetteIngredient.recetteId }, recetteIngredient);
        }

        // DELETE: api/RecetteIngredients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecetteIngredient(int id)
        {
            var recetteIngredient = await _context.RecetteIngredients.FindAsync(id);
            if (recetteIngredient == null)
            {
                return NotFound();
            }

            _context.RecetteIngredients.Remove(recetteIngredient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecetteIngredientExists(int id)
        {
            return _context.RecetteIngredients.Any(e => e.recetteId == id);
        }
    }
}
