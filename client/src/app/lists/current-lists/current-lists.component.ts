import { Component, inject, OnInit } from '@angular/core';
import { List, ListService } from '../../_services/list.service';

@Component({
  selector: 'app-current-lists',
  standalone: true,
  imports: [],
  templateUrl: './current-lists.component.html',
  styleUrl: './current-lists.component.css'
})
export class CurrentListsComponent implements OnInit {
  listService = inject(ListService);
  currentLists: List[] = [];

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
