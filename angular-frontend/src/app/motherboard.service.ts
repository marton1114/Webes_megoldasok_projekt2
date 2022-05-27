import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Motherboard } from './motherboard';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {

  private baseURL = "http://localhost:8080/api/v1/motherboards";

  constructor(private httpClient: HttpClient) { }

  getMotherboardsList(): Observable<Motherboard[]>{
    return this.httpClient.get<Motherboard[]>(`${this.baseURL}`);
  }

  createMotherboard(motherboard: Motherboard): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, motherboard);
  }

  getMotherboardById(id: number): Observable<Motherboard>{
    return this.httpClient.get<Motherboard>(`${this.baseURL}/${id}`);
  }

  updateMotherboard(id: number, motherboard: Motherboard): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, motherboard);
  }

  deleteMotherboard(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
