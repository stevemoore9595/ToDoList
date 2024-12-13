import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListService } from '../../_services/list.service';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [FormsModule, NgModule, BrowserModule],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.css'
})
export class CreateListComponent {
  listService = inject(ListService);
  newListName = '';

  addList() {
    if (this.newListName.trim()) {
      this.listService.addList(this.newListName).subscribe(() => {
        this.newListName = '';
      });
    }
  }
}

