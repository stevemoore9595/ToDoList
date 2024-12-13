using System;

namespace API.Entities;

public class ListEntity
{
    public int Id { get; set; }
    public required string UserName { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

