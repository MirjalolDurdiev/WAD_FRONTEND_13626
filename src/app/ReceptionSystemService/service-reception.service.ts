import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Reception } from '../Interfaces/Reception';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceptionService {
  httpClient = inject(HttpClient);

  getAllReception() {
    return this.httpClient.get<Reception[]>(
      'https://localhost:7098/api/Receptions'
    );
  }
  getReceptionById(id: number) {
    return this.httpClient.get<Reception>(
      'https://localhost:7098/api/Receptions/' + id
    );
  }
  DeleteReception(id: number) {
    return this.httpClient.delete(
      'https://localhost:7098/api/Receptions/' + id
    );
  }
  create(reception: Reception) {
    return this.httpClient.post<Reception>(
      'https://localhost:7098/api/Receptions/',
      reception
    );
  }
  UpdateVisitor(id: number, reception: Reception) {
    return this.httpClient
      .put<Reception>(`https://localhost:7098/api/Receptions/${id}`, reception)
      .pipe(
        catchError((error) => {
          console.error('Error updating reception:', error);
          throw new Error('Failed to update reception');
        })
      );
  }
}
