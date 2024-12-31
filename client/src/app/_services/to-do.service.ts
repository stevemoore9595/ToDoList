import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ToDoItemDto {
  id?: number;
  item: string;
  isDeleted?: boolean;
  isCompleted?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiUrl = environment.apiBaseUrl + '/todolist';
  
  constructor(private http: HttpClient) {}

  GetToDoItems(): Observable<ToDoItemDto[]> {
    return this.http.get<ToDoItemDto[]>(this.apiUrl);
  }

  addItem(newItem: ToDoItemDto): Observable<ToDoItemDto[]> {
    return this.http.post<ToDoItemDto[]>(this.apiUrl, newItem);
  }

  updateCompletedStatus(updatedItem: ToDoItemDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${updatedItem.id}`, updatedItem);
  }

  removeItem(id: number): Observable<ToDoItemDto[]> {
    return this.http.delete<ToDoItemDto[]>(`${this.apiUrl}/${id}`);
  }
}