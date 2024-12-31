import { Component } from '@angular/core';
import { ToDoService } from '../_services/to-do.service';
import { ToDoItemDto } from '../_services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  newItem: string = '';
  toDoList: ToDoItemDto[] = [];

  constructor(private toDoService: ToDoService) {
    this.getItems();
  }

  // Get all to do items from the backend
  getItems() {
    this.toDoService.GetToDoItems().subscribe({
      next: (data) => {
        console.log(data);
        this.toDoList = data;
        this.toDoList.forEach(x => console.log(x));
      },
      error: (err) => {
        console.error('Error fetching todo list:', err);
      },
    });
  }

  // Add a new item to the to do list
  addItem() {
    if (this.newItem) {
      const newItem: ToDoItemDto = { item: this.newItem };
      this.toDoService.addItem(newItem).subscribe({
        next: (data) => {
          this.toDoList = data;
          this.newItem = '';
        },
        error: (err) => {
          console.error('Error adding item:', err);
        },
      });
    }
  }

  updateCompletedStatus(id: number | undefined, event: Event): void {
    if (id === undefined) {
      console.error('Invalid id');
      return;
    }

    const inputElement = event.target as HTMLInputElement;  // Type-cast to HTMLInputElement
    const isCompleted = inputElement.checked;  // Access the 'checked' property

    const updatedItem: ToDoItemDto = {
      id, item: '', isCompleted,
    };

    this.toDoService.updateCompletedStatus(updatedItem).subscribe({
      next: () => {
        this.getItems(); // Refresh the list to show the updated status
      },
      error: (err) => {
        console.error('Error updating completed status:', err);
      }
    });
  }

  // Remove an item from to do list
  removeItem(id: number | undefined): void {
    console.log(id);
    if (id !== undefined) {
      this.toDoService.removeItem(id).subscribe({
        next: () => {
          this.toDoList = this.toDoList.filter(item => item.id !== id);
        },
        error: (err) => {
          console.error('Error removing item:', err);
        },
      });
    } else {
      console.error('Item Id is undefined');
    }
  }
}
