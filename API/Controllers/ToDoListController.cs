using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

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
    public async Task<ActionResult<List<ToDoItemDto>>> AddItem([FromBody] ToDoItemDto toDoItemDto)
    {
        if (string.IsNullOrWhiteSpace(toDoItemDto.Item))
            return BadRequest("Item cannot be empty.");

        var newItem = new ToDoList { Item = toDoItemDto.Item };
        context.ToDoItems
        .Add(newItem);
        await context.SaveChangesAsync();

        var updatedList = context.ToDoItems
        .Where(x => x.IsDeleted == false)
        .Select(item => new ToDoItemDto
        {
            Item = item.Item,
            Id = item.Id,
            IsDeleted = item.IsDeleted,
            IsCompleted = item.IsCompleted,
        }).ToList();

        return Ok(updatedList);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCompletedStatus(int id, [FromBody] ToDoItemDto toDoItemDto)
    {
        var existingItem = await context.ToDoItems.FindAsync(id);

        if (existingItem == null)
        {
            return NotFound();
        }

        existingItem.IsCompleted = toDoItemDto.IsCompleted;  // Update the completed status

        await context.SaveChangesAsync();  // Save the changes to the database

        return NoContent();  // Return a success response
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
