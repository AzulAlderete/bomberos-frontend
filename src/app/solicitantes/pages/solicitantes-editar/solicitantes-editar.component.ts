import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { SolicitantesServiceService } from '../../services/solicitantes-service.service';

@Component({
  selector: 'app-solicitantes-editar',
  templateUrl: './solicitantes-editar.component.html',
  styles: [],
})
export class SolicitantesEditarComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private solicitantesService: SolicitantesServiceService,
    private router: Router
  ) {}
  title: string = 'Editar Solicitante';
  solicitante = {
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    documento: '',
  };

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.solicitantesService.getSolicitanteById(id))
      )
      .subscribe((resp) => {
        this.solicitante = resp.data;
      });
  }

  actualizar() {
    console.log(this.solicitante);
    this.solicitantesService
      .updateSolicitante(this.solicitante)
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

  regresar() {
    this.router.navigate(['/solicitantes/listado']);
  }
}
