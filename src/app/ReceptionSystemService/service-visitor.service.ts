import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Visitor } from '../Interfaces/Visitor';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllVisitors() {
    return this.httpClient.get<Visitor[]>(
      'https://localhost:7098/api/Visitors'
    );
  }
  getVisitorById(id: number) {
    return this.httpClient.get<Visitor>(
      'https://localhost:7098/api/Visitors/' + id
    );
  }
  DeleteVisitor(id: number) {
    return this.httpClient.delete('https://localhost:7098/api/Visitors/' + id);
  }
  UpdateVisitor(id: number, visitor: Visitor) {
    return this.httpClient
      .put<Visitor>(`https://localhost:7098/api/Visitors/${id}`, visitor)
      .pipe(
        catchError((error) => {
          console.error('Error updating visitor:', error);
          throw new Error('Failed to update visitor');
        })
      );
  }
  create(visitor: Visitor) {
    return this.httpClient.post<Visitor>(
      'https://localhost:7098/api/Visitors',
      visitor
    );
  }
}
