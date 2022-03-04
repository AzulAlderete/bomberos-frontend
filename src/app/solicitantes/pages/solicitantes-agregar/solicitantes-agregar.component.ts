import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SolicitantesServiceService } from '../../services/solicitantes-service.service';

@Component({
  selector: 'app-solicitantes-agregar',
  templateUrl: './solicitantes-agregar.component.html',
  styles: [],
})
export class SolicitantesAgregarComponent implements OnInit {
  title: string = 'Nuevo Solicitante';
  descripcion: string = '';

  solicitante = {
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    documento: '',
  };

  constructor(
    private router: Router,
    private solicitantesService: SolicitantesServiceService
  ) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/solicitantes/listado']);
  }

  guardar() {
    if (this.solicitante.nombre.trim().length === 0) {
      return;
    }

    this.solicitantesService
      .addSolicitante(this.solicitante)
      .subscribe((resp) => {
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/solicitantes/listado']);
      });
  }
}
