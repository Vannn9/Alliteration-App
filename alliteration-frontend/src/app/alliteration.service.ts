import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlliterationsService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRandomAlliteration(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  getAlliterationById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/entry/${id}`);
  }

  getNextAlliterationId(currentId: number): number {
    return currentId === 100 ? 1 : currentId + 1;
  }

  getPreviousAlliterationId(currentId: number): number {
    return currentId === 1 ? 100 : currentId - 1;
  }
}