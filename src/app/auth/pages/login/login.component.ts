import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  auth = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const username = document.getElementById('username');
    username!.focus();
  }

  login() {
    this.authService.login(this.auth).subscribe(
      (resp) => {
        localStorage.setItem('token', JSON.stringify(resp.access_token));
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.router.navigate(['/tipo-herramientas/listado']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Los datos no coinciden',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
