import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TipoSiniestrosServiceService } from '../../services/tipo-siniestros-service.service';

@Component({
  selector: 'app-tipo-siniestros-editar',
  templateUrl: './tipo-siniestros-editar.component.html',
  styles: [],
})
export class TipoSiniestrosEditarComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private tipoSiniestrosService: TipoSiniestrosServiceService,
    private router: Router
  ) {}
  title: string = 'Editar Tipo de Siniestro';
  tipoSiniestro = {
    descripcion: '',
  };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.tipoSiniestrosService.getTipoSiniestroById(id)
        )
      )
      .subscribe((resp) => {
        this.tipoSiniestro = resp.data;
      });
  }

  actualizar() {
    this.tipoSiniestrosService
      .updateTipoSiniestro(this.tipoSiniestro)
      .subscribe((resp) => {
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/tipo-siniestros/listado']);
      });
  }

  regresar() {
    this.router.navigate(['/tipo-siniestros/listado']);
  }
}
