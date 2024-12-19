using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using API.DTOs;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ToDoListController(DataContext context) : BaseApiController
{

    [HttpGet]
   public async Task<ActionResult<List<ToDoList>>> GetToDoItems()
{
    var items = await context.ToDoItems
        .Where(item => !item.IsDeleted)
        .ToListAsync();

    return Ok(items);
}

    [HttpPost]
    public async Task<IActionResult> AddItem([FromBody] ToDoItemDto toDoItemDto)
    {
        if (string.IsNullOrWhiteSpace(toDoItemDto.Item))
            return BadRequest("Item cannot be empty.");

        var newItem = new ToDoList { Item = toDoItemDto.Item };
        context.ToDoItems
        .Add(newItem);
        await context.SaveChangesAsync();

        return Ok(await context.ToDoItems
        
            .Select(item => new ToDoItemDto { Item = item.Item })
            .ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> RemoveItem(int id)
    {
        var item = await context.ToDoItems
        .FindAsync(id);
        if (item == null)
        {
            return NotFound("Item not found.");
        }
        item.IsDeleted = true;
    await context.SaveChangesAsync();

    return NoContent();
    }
}
