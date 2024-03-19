import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Reception } from '../Interfaces/Reception';

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
}
