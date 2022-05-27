import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Memory } from './memory';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private baseURL = "http://localhost:8080/api/v1/memories";

  constructor(private httpClient: HttpClient) { }

  getMemoriesList(): Observable<Memory[]>{
    return this.httpClient.get<Memory[]>(`${this.baseURL}`);
  }

  createMemory(memory: Memory): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, memory);
  }

  getMemoryById(id: number): Observable<Memory>{
    return this.httpClient.get<Memory>(`${this.baseURL}/${id}`);
  }

  updateMemory(id: number, memory: Memory): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, memory);
  }

  deleteMemory(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
