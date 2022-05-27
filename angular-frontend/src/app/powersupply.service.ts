import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PowerSupply } from './powersupply';

@Injectable({
  providedIn: 'root'
})
export class PowerSupplyService {

  private baseURL = "http://localhost:8080/api/v1/powersupplies";

  constructor(private httpClient: HttpClient) { }

  getPowerSuppliesList(): Observable<PowerSupply[]>{
    return this.httpClient.get<PowerSupply[]>(`${this.baseURL}`);
  }

  createPowerSupply(powersupply: PowerSupply): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, powersupply);
  }

  getPowerSupplyById(id: number): Observable<PowerSupply>{
    return this.httpClient.get<PowerSupply>(`${this.baseURL}/${id}`);
  }

  updatePowerSupply(id: number, powersupply: PowerSupply): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, powersupply);
  }

  deletePowerSupply(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
