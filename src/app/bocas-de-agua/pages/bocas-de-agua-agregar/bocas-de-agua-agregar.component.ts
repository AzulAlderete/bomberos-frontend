import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BocasDeAguaService } from '../../services/bocas-de-agua.service';

@Component({
  selector: 'app-bocas-de-agua-agregar',
  templateUrl: './bocas-de-agua-agregar.component.html',
  styles: [],
})
export class BocasDeAguaAgregarComponent implements OnInit {
  title: string = 'Nueva Boca de Agua';
  bocaDeAgua = {
    direccion: '',
    numero: '',
    latitud: '',
    longitud: '', 
  };
  constructor(
    private router: Router,
    private bocaDeAguaService: BocasDeAguaService
  ) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/bocas-de-agua/listado']);
  }

  guardar() {
    this.bocaDeAguaService.addBoca(this.bocaDeAgua).subscribe((resp) => {
      Swal.fire({
        title: '👌',
        text: `${resp.message}`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/bocas-de-agua/listado']);
    });
  }
}
