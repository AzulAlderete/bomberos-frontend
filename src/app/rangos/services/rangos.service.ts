import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rango } from '../interfaces/rangos.interface';

@Injectable({
  providedIn: 'root',
})
export class RangosService {
  constructor(private http: HttpClient) {}

  getRangos() {
    return this.http.get<Rango>('http://bomberos-back.system/api/rangos');
  }
}
