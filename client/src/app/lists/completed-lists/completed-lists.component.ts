import { Component, OnInit } from '@angular/core';
import { ListService, List } from '../list.service';

@Component({
  selector: 'app-completed-lists',
  templateUrl: './completed-lists.component.html',
})
export class CompletedListsComponent implements OnInit {
  completedLists: List[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getCompletedLists().subscribe((lists) => {
      this.completedLists = lists;
    });
  }
}
