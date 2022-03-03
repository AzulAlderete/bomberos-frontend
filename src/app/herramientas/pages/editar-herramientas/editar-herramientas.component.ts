import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoHerramienta } from '../../interfaces/herramientas.interface';
import { HerramientasService } from '../../services/herramientas.service';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-herramientas',
  templateUrl: './editar-herramientas.component.html',
  styles: [],
})
export class EditarHerramientasComponent implements OnInit {
  title: string = 'Editar Herramienta';
  herramienta = {
    codigo: '',
    nombre: '',
    tipo_herramienta_id: '',
    estado: '',
  };

  tipoHerramientas!: TipoHerramienta[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private herramientasService: HerramientasService
  ) {}

  ngOnInit(): void {
    this.herramientasService
      .getTipoHerramientas()
      .subscribe((resp) => (this.tipoHerramientas = resp.data));

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.herramientasService.getHerramientaById(id))
      )
      .subscribe((resp) => (this.herramienta = resp.data));
  }

  regresar() {
    this.router.navigate(['/herramientas/listado']);
  }

  editar() {
    this.herramientasService
      .updateHerramienta(this.herramienta)
      .subscribe((resp) => {
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/herramientas/listado']);
      });
  }
}
