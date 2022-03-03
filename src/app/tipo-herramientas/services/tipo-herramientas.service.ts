import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoHerramienta } from '../interfaces/tipo-herramientas.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoHerramientasService {
  constructor(private http: HttpClient) {}

  getTipoHerramientas() {
    return this.http.get<TipoHerramienta>(
      `${environment.apiURL}/tipo-herramientas`
    );
  }

  getTipoHerramientaById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/tipo-herramientas/${id}`);
  }

  addTipoHerramienta(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/tipo-herramientas`, data);
  }

  updateTipoHerramienta(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/tipo-herramientas/${data.id}`,
      data
    );
  }

  deleteTipoHerramienta(id: number) {
    return this.http.delete<any>(
      `${environment.apiURL}/tipo-herramientas/${id}`
    );
  }
}
