import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoHerramienta } from 'src/app/tipo-herramientas/interfaces/tipo-herramientas.interface';
import { TipoHerramientasService } from 'src/app/tipo-herramientas/services/tipo-herramientas.service';
import { environment } from 'src/environments/environment';
import { Herramienta } from '../interfaces/herramientas.interface';

@Injectable({
  providedIn: 'root',
})
export class HerramientasService {
  constructor(
    private http: HttpClient,
    private tipoHerramientasService: TipoHerramientasService
  ) {}

  getHerramientas() {
    return this.http.get<Herramienta>(
      'http://bomberos-back.system/api/herramientas'
    );
  }

  getTipoHerramientas(): Observable<TipoHerramienta> {
    return this.tipoHerramientasService.getTipoHerramientas();
  }

  getHerramientaById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/herramientas/${id}`);
  }

  addHerramienta(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/herramientas`, data);
  }

  updateHerramienta(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/herramientas/${data.id}`,
      data
    );
  }

  deleteHerramienta(id: number) {
    return this.http.delete<any>(`${environment.apiURL}/herramientas/${id}`);
  }
}
