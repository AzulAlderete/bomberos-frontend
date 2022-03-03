import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoHerramienta } from '../../interfaces/tipo-herramientas.interface';
import { TipoHerramientasService } from '../../services/tipo-herramientas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar-tipo-herramientas.component.html',
  styles: [],
})
export class AgregarTipoHerramientasComponent implements OnInit {
  title: string = 'Nuevo Tipo de Herramienta';
  descripcion: string = '';

  tipoHerramienta = {
    descripcion: '',
  };

  constructor(
    private router: Router,
    private tipoHerramientasService: TipoHerramientasService
  ) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/tipo-herramientas/listado']);
  }

  guardar() {
    if (this.tipoHerramienta.descripcion.trim().length === 0) {
      return;
    }

    this.tipoHerramientasService
      .addTipoHerramienta(this.tipoHerramienta)
      .subscribe(
        (resp) => {
          Swal.fire({
            title: '👌',
            text: `${resp.message}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          this.router.navigate(['/tipo-herramientas/listado']);
        },
        (err) => console.log(err)
      );
  }
}
