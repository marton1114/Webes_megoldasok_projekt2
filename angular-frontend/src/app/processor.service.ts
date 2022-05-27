import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Processor } from './processor';

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  private baseURL = "http://localhost:8080/api/v1/processors";

  constructor(private httpClient: HttpClient) { }

  getProcessorsList(): Observable<Processor[]>{
    return this.httpClient.get<Processor[]>(`${this.baseURL}`);
  }

  createProcessor(processor: Processor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, processor);
  }

  getProcessorById(id: number): Observable<Processor>{
    return this.httpClient.get<Processor>(`${this.baseURL}/${id}`);
  }

  updateProcessor(id: number, processor: Processor): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, processor);
  }

  deleteProcessor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
