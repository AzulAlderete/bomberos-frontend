import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoSiniestro } from '../../interfaces/tipo-siniestros.interface';
import { TipoSiniestrosServiceService } from '../../services/tipo-siniestros-service.service';

@Component({
  selector: 'app-tipo-siniestros-listado',
  templateUrl: './tipo-siniestros-listado.component.html',
  styles: [],
})
export class TipoSiniestrosListadoComponent implements OnInit {
  title: string = 'Tipos de Siniestros';
  tipos!: TipoSiniestro['data'];
  dtOptions: DataTables.Settings = {};
  reload: boolean = true;

  constructor(
    private tipoSiniestrosService: TipoSiniestrosServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
    };
    this.loadData();
  }

  loadData() {
    return this.tipoSiniestrosService.getTipoSiniestros().subscribe((resp) => {
      this.reload = false;
      this.tipos = resp.data;
    });
  }

  eliminar(tsid: any) {
    Swal.fire({
      title: 'Desea eliminar este registro?',
      text: 'Ya no se proda recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoSiniestrosService
          .deleteTipoSiniestro(tsid)
          .subscribe((resp) => {
            Swal.fire({
              icon: 'success',
              title: '👌',
              text: resp.message,
              timer: 1500,
              showConfirmButton: false,
            });
            this.reload = true;
            this.loadData();
            // this.router.navigateByUrl('/tipo-herramientas');
          });
      }
    });
  }
}
