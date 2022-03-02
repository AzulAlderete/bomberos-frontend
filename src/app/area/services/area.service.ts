import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from '../interfaces/area.interface';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor(private http: HttpClient) {}

  getAreas() {
    return this.http.get<Area>('http://bomberos-back.system/api/areas');
  }
}
