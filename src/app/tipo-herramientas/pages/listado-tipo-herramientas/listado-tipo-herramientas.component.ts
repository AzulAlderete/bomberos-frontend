import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoHerramienta } from '../../interfaces/tipo-herramientas.interface';
import { TipoHerramientasService } from '../../services/tipo-herramientas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado-tipo-herramientas.component.html',
  styles: [],
})
export class ListadoTipoHerramientasComponent implements OnInit {
  title: string = 'Tipos de Herramientas';
  tipos!: TipoHerramienta['data'];
  dtOptions: DataTables.Settings = {};
  reload: boolean = true;

  constructor(
    private tipoHerramientasService: TipoHerramientasService,
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
    return this.tipoHerramientasService
      .getTipoHerramientas()
      .subscribe((resp) => {
        this.reload = false;
        this.tipos = resp.data;
      });
  }

  eliminar(thid: any) {
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
        this.tipoHerramientasService
          .deleteTipoHerramienta(thid)
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
