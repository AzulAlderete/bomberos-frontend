import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SolicitantesServiceService } from 'src/app/solicitantes/services/solicitantes-service.service';
import { TipoSiniestrosServiceService } from 'src/app/tipo-siniestros/services/tipo-siniestros-service.service';
import { VehiculosService } from 'src/app/vehiculos/services/vehiculos.service';
import { environment } from 'src/environments/environment';
import { Siniestro, TipoSiniestro } from '../interfaces/siniestro.interface';

@Injectable({
  providedIn: 'root',
})
export class SiniestrosService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private solicitantesService: SolicitantesServiceService,
    private vehiculosService: VehiculosService,
    private tipoSiniestrosService: TipoSiniestrosServiceService
  ) {}
  getSiniestros() {
    return this.http.get<Siniestro>(`${environment.apiURL}/siniestros`);
  }

  getTipoSiniestros() {
    return this.tipoSiniestrosService.getTipoSiniestros();
  }
  getSolicitantes() {
    return this.solicitantesService.getSolicitantes();
  }
  getVehiculos() {
    return this.vehiculosService.getVehiculos();
  }

  getSiniestroById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/siniestros/${id}`);
  }

  addSiniestro(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/siniestros`, data);
  }

  updateSiniestro(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/siniestros/${data.id}`,
      data
    );
  }

  deleteSiniestro(id: number) {
    return this.http.delete<any>(`${environment.apiURL}/siniestros/${id}`);
  }
}
