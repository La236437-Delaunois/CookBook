using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CookBook.Data;
using CookBook.Models;

namespace CookBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EtapesController : ControllerBase
    {
        private readonly CookBookContext _context;

        public EtapesController(CookBookContext context)
        {
            _context = context;
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

        // PUT: api/Etapes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEtapes(int id, Etapes etapes)
        {
            if (id != etapes.Id)
            {
                return BadRequest();
            }

            _context.Entry(etapes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EtapesExists(id))
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

        // POST: api/Etapes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Etapes>> PostEtapes(Etapes etapes)
        {
            _context.Etapes.Add(etapes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEtapes", new { id = etapes.Id }, etapes);
        }

        // DELETE: api/Etapes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEtapes(int id)
        {
            var etapes = await _context.Etapes.FindAsync(id);
            if (etapes == null)
            {
                return NotFound();
            }

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
