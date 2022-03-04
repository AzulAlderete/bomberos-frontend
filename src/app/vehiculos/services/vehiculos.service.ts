import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVehiculosService } from 'src/app/tipo-vehiculos/services/tipo-vehiculos.service';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../interfaces/vehiculos.interface';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  constructor(
    private http: HttpClient,
    private tipoVehiculosService: TipoVehiculosService
  ) {}

  getVehiculos() {
    return this.http.get<Vehiculo>(`${environment.apiURL}/vehiculos`);
  }

  getTipoVehiculo() {
    return this.tipoVehiculosService.getTipoVehiculos();
  }

  getVehiculoById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/vehiculos/${id}`);
  }

  addVehiculo(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/vehiculos`, data);
  }

  updateVehiculo(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/vehiculos/${data.id}`,
      data
    );
  }

  deleteVehiculo(id: number) {
    return this.http.delete<any>(
      `${environment.apiURL}/vehiculos/${id}`
    );
  }
}
