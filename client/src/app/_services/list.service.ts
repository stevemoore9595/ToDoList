import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface List {
  id: number;
  name: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:5001/api/list';

  constructor(private http: HttpClient) {}

  getCurrentLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}/current`);
  }

  getCompletedLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}/completed`);
  }

  addList(name: string): Observable<any> {
    return this.http.post(this.apiUrl, { name, isCompleted: false });
  }

  markAsCompleted(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, {});
  }
}
