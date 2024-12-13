import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
})
export class CreateListComponent {
  newListName = '';

  constructor(private listService: ListService) {}

  addList() {
    if (this.newListName.trim()) {
      this.listService.addList(this.newListName).subscribe(() => {
        this.newListName = '';
      });
    }
  }
}

