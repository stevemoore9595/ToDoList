import { Component, inject, OnInit } from '@angular/core';
import { List, ListService } from '../../_services/list.service';

@Component({
  selector: 'app-completed-lists',
  standalone: true,
  imports: [],
  templateUrl: './completed-lists.component.html',
  styleUrl: './completed-lists.component.css'
})
export class CompletedListsComponent implements OnInit {
  listService = inject(ListService);
  completedLists: List[] = [];

  ngOnInit() {
    this.listService.getCompletedLists().subscribe((lists) => {
      this.completedLists = lists;
    });
  }
}
