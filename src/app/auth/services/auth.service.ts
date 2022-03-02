import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: IAuth | undefined;
  constructor(private http: HttpClient, private router: Router) {}

  get auth() {
    return { ...this._auth };
  }

  verificarAuth(): Observable<boolean> {
    if (!localStorage.token) {
      return of(false);
    }
    return of(true);
  }

  login(data: any) {
    return this.http
      .post<IAuth>(`${environment.apiURL}/auth/login`, data)
      .pipe(tap((resp) => (this._auth = resp)));
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
