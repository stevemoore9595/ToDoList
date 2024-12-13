import { Component, OnInit } from '@angular/core';
import { ListService, List } from '../list.service';

@Component({
  selector: 'app-current-lists',
  templateUrl: './current-lists.component.html',
})
export class CurrentListsComponent implements OnInit {
  currentLists: List[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.fetchLists();
  }

  fetchLists() {
    this.listService.getCurrentLists().subscribe((lists) => {
      this.currentLists = lists;
    });
  }

  completeList(id: number) {
    this.listService.markAsCompleted(id).subscribe(() => {
      this.fetchLists();
    });
  }
}
