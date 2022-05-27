import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseURL = "http://localhost:8080/api/v1/configs";

  constructor(private httpClient: HttpClient) { }

  getConfigsList(): Observable<Config[]>{
    return this.httpClient.get<Config[]>(`${this.baseURL}`);
  }

  createConfig(config: Config): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, config);
  }

  getConfigById(id: number): Observable<Config>{
    return this.httpClient.get<Config>(`${this.baseURL}/${id}`);
  }

  deleteConfig(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
