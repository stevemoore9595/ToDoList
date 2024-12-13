using System;

namespace API.DTOs;

public class ListDto
{
    public int Id { get; set; }
    public required string UserName { get; set; }
    public bool IsCompleted { get; set; }
}

