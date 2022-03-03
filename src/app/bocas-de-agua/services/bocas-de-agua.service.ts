import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BocaDeAgua } from '../interfaces/bocas-de-agua.interface';

@Injectable({
  providedIn: 'root',
})
export class BocasDeAguaService {
  constructor(private http: HttpClient) {}

  getBocas() {
    return this.http.get<BocaDeAgua>(`${environment.apiURL}/bocas-de-aguas`);
  }

  getBocasById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/bocas-de-aguas/${id}`);
  }

  addBoca(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/bocas-de-aguas`, data);
  }

  updateBoca(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/bocas-de-aguas/${data.id}`,
      data
    );
  }

  deleteBoca(id: number) {
    return this.http.delete<any>(`${environment.apiURL}/bocas-de-aguas/${id}`);
  }
}
