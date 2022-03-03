import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoHerramientasService } from '../../services/tipo-herramientas.service';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-tipo-herramientas.component.html',
  styles: [],
})
export class EditarTipoHerramientasComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private tipoHerramientasService: TipoHerramientasService,
    private router: Router
  ) {}
  title: string = 'Editar Tipo de Herramienta';
  tipoHerramienta = {
    descripcion: '',
  };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.tipoHerramientasService.getTipoHerramientaById(id)
        )
      )
      .subscribe((resp) => {
        this.tipoHerramienta = resp.data;
      });
  }

  actualizar() {
    console.log(this.tipoHerramienta);
    this.tipoHerramientasService
      .updateTipoHerramienta(this.tipoHerramienta)
      .subscribe((resp) => {
        console.log(resp);
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/tipo-herramientas/listado']);
      });
  }

  regresar() {
    this.router.navigate(['/tipo-herramientas/listado']);
  }
}
