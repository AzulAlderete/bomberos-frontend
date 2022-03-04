import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoSiniestro } from '../interfaces/tipo-siniestros.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoSiniestrosServiceService {
  constructor(private http: HttpClient) {}

  getTipoSiniestros() {
    return this.http.get<TipoSiniestro>(
      `${environment.apiURL}/tipo-siniestros`
    );
  }

  getTipoSiniestroById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/tipo-siniestros/${id}`);
  }

  addTipoSiniestro(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/tipo-siniestros`, data);
  }

  updateTipoSiniestro(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/tipo-siniestros/${data.id}`,
      data
    );
  }

  deleteTipoSiniestro(id: number) {
    return this.http.delete<any>(`${environment.apiURL}/tipo-siniestros/${id}`);
  }
}
