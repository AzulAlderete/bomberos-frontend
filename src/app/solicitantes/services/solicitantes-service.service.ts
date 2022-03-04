import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Solicitante } from '../interfaces/solicitante.interface';

@Injectable({
  providedIn: 'root',
})
export class SolicitantesServiceService {
  constructor(private http: HttpClient, private router: Router){}
  getSolicitantes() {
    return this.http.get<Solicitante>(
      `${environment.apiURL}/solicitantes`
    );
  }

  getSolicitanteById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/solicitantes/${id}`);
  }

  addSolicitante(data: Object) {
    return this.http.post<any>(`${environment.apiURL}/solicitantes`, data);
  }

  updateSolicitante(data: any) {
    return this.http.put<any>(
      `${environment.apiURL}/solicitantes/${data.id}`,
      data
    );
  }

  deleteSolicitante(id: number) {
    return this.http.delete<any>(
      `${environment.apiURL}/solicitantes/${id}`
    );
  }
}
