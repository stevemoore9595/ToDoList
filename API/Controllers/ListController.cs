using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using API.DTOs;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ListController(DataContext context) : BaseApiController
{
    private readonly DataContext _context = context;

    [HttpGet("current")]
    public ActionResult<IEnumerable<ListDto>> GetCurrentLists()
    {
        var lists = _context.Lists.Where(l => !l.IsCompleted).Select(l => new ListDto
        {
            Id = l.Id,
            UserName = l.UserName,
            IsCompleted = l.IsCompleted
        }).ToList();
        return Ok(lists);
    }

    [HttpGet("completed")]
    public ActionResult<IEnumerable<ListDto>> GetCompletedLists()
    {
        var lists = _context.Lists.Where(l => l.IsCompleted).Select(l => new ListDto
        {
            Id = l.Id,
            UserName = l.UserName,
            IsCompleted = l.IsCompleted
        }).ToList();
        return Ok(lists);
    }

    [HttpPost]
    public ActionResult AddList([FromBody] ListDto newList)
    {
        var entity = new ListEntity
        {
            UserName = newList.UserName,
            IsCompleted = newList.IsCompleted
        };
        _context.Lists.Add(entity);
        _context.SaveChanges();
        return Ok();
    }

    [HttpPut("{id}")]
    public ActionResult MarkAsCompleted(int id)
    {
        var list = _context.Lists.FirstOrDefault(l => l.Id == id);
        if (list == null)
            return NotFound();

        list.IsCompleted = true;
        _context.SaveChanges();
        return Ok();
    }
}
