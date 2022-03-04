import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Siniestro } from '../../interfaces/siniestro.interface';
import { SiniestrosService } from '../../services/siniestros.service';

@Component({
  selector: 'app-siniestros-listado',
  templateUrl: './siniestros-listado.component.html',
  styles: [],
})
export class SiniestrosListadoComponent implements OnInit {
  title: string = 'Siniestros';
  siniestros!: Siniestro['data'];
  dtOptions: DataTables.Settings = {};
  reload: boolean = true;

  constructor(
    private siniestrosService: SiniestrosService,
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
    return this.siniestrosService.getSiniestros().subscribe((resp) => {
      this.reload = false;
      this.siniestros = resp.data;
    });
  }

  eliminar(sid: any) {
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
        this.siniestrosService.deleteSiniestro(sid).subscribe((resp) => {
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
