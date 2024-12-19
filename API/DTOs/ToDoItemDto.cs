using System;

namespace API.DTOs;

public class ToDoItemDto
{
    public int Id { get; set; }
    public required string Item { get; set; } 
    public bool IsDeleted { get; set; }
}

