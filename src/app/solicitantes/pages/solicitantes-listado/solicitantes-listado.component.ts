import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Solicitante } from '../../interfaces/solicitante.interface';
import { SolicitantesServiceService } from '../../services/solicitantes-service.service';

@Component({
  selector: 'app-solicitantes-listado',
  templateUrl: './solicitantes-listado.component.html',
  styles: [],
})
export class SolicitantesListadoComponent implements OnInit {
  title: string = 'Solicitantes';
  solicitantes!: Solicitante['data'];
  dtOptions: DataTables.Settings = {};
  reload: boolean = true;

  constructor(
    private solicitantesService: SolicitantesServiceService,
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
    return this.solicitantesService.getSolicitantes().subscribe((resp) => {
      this.reload = false;
      this.solicitantes = resp.data;
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
        this.solicitantesService.deleteSolicitante(sid).subscribe((resp) => {
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
