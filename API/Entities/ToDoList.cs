using System;

namespace API.Entities;

public class ToDoList
{
    public int Id { get; set; }
    public required string Item { get; set; }
    public bool IsDeleted { get; set; }
}

