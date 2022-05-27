import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HardDriveDisk } from './harddrivedisk';

@Injectable({
  providedIn: 'root'
})
export class HardDriveDiskService {

  private baseURL = "http://localhost:8080/api/v1/harddrivedisks";

  constructor(private httpClient: HttpClient) { }

  getHardDriveDisksList(): Observable<HardDriveDisk[]>{
    return this.httpClient.get<HardDriveDisk[]>(`${this.baseURL}`);
  }

  createHardDriveDisk(harddrivedisk: HardDriveDisk): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, harddrivedisk);
  }

  getHardDriveDiskById(id: number): Observable<HardDriveDisk>{
    return this.httpClient.get<HardDriveDisk>(`${this.baseURL}/${id}`);
  }

  updateHardDriveDisk(id: number, harddrivedisk: HardDriveDisk): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, harddrivedisk);
  }

  deleteHardDriveDisk(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
