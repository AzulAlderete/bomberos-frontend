import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoVehiculo } from '../interfaces/tipo-vehiculos.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoVehiculosService {
  constructor(private http: HttpClient) {}

  getTipoVehiculos() {
    return this.http.get<TipoVehiculo>(`${environment.apiURL}/tipo-vehiculos`);
  }

  getTipoVehiculoById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/tipo-vehiculos/${id}`);
  }

  addTipoVehiculo(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/tipo-vehiculos`, data);
  }

  updateTipoVehiculo(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/tipo-vehiculos/${data.id}`,
      data
    );
  }

  deleteTipoVehiculo(id: number) {
    return this.http.delete<any>(
      `${environment.apiURL}/tipo-vehiculos/${id}`
    );
  }
}
