import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Herramienta } from '../../interfaces/herramientas.interface';
import { HerramientasService } from '../../services/herramientas.service';

@Component({
  selector: 'app-listado-herramientas',
  templateUrl: './listado-herramientas.component.html',
  styles: [],
})
export class ListadoHerramientasComponent implements OnInit {
  title: string = 'Herramientas';
  herramientas!: Herramienta['data'];
  dtOptions: DataTables.Settings = {};
  reload: boolean = true;

  constructor(private herramientasService: HerramientasService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
    };
    this.loadData();
  }

  loadData(): void {
    this.herramientasService.getHerramientas().subscribe((resp) => {
      this.reload = false;
      this.herramientas = resp.data;
    });
  }

  eliminar(hid: any) {
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
        this.herramientasService
          .deleteHerramienta(hid)
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
