import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoSiniestrosServiceService } from '../../services/tipo-siniestros-service.service';

@Component({
  selector: 'app-tipo-siniestros-agregar',
  templateUrl: './tipo-siniestros-agregar.component.html',
  styles: [],
})
export class TipoSiniestrosAgregarComponent implements OnInit {
  title: string = 'Nuevo Tipo de Siniestro';
  descripcion: string = '';

  tipoSiniestro = {
    descripcion: '',
  };

  constructor(
    private router: Router,
    private tipoSiniestrosService: TipoSiniestrosServiceService
  ) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/tipo-siniestros/listado']);
  }

  guardar() {
    if (this.tipoSiniestro.descripcion.trim().length === 0) {
      return;
    }

    this.tipoSiniestrosService.addTipoSiniestro(this.tipoSiniestro).subscribe(
      (resp) => {
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/tipo-siniestros/listado']);
      },
      (err) => console.log(err)
    );
  }
}
