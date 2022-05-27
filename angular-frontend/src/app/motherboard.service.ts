import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PowerSupply } from './motherboard';

@Injectable({
  providedIn: 'root'
})
export class PowerSupplyService {

  private baseURL = "http://localhost:8080/api/v1/motherboards";

  constructor(private httpClient: HttpClient) { }

  getMotherboardsList(): Observable<PowerSupply[]>{
    return this.httpClient.get<PowerSupply[]>(`${this.baseURL}`);
  }

  createPowerSupply(motherboard: PowerSupply): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, motherboard);
  }

  getPowerSupplyById(id: number): Observable<PowerSupply>{
    return this.httpClient.get<PowerSupply>(`${this.baseURL}/${id}`);
  }

  updatePowerSupply(id: number, motherboard: PowerSupply): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, motherboard);
  }

  deletePowerSupply(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
