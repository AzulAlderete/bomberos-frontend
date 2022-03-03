import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BocaDeAgua } from '../../interfaces/bocas-de-agua.interface';
import { BocasDeAguaService } from '../../services/bocas-de-agua.service';

@Component({
  selector: 'app-bocas-de-agua-listado',
  templateUrl: './bocas-de-agua-listado.component.html',
  styles: [],
})
export class BocasDeAguaListadoComponent implements OnInit {
  dtOptions: any = {};
  title: string = 'Bocas de Agua';
  bocas!: BocaDeAgua['data'];
  reload: boolean = true;

  constructor(private bocasDeAguaService: BocasDeAguaService) {}

  ngOnInit(): void {
    this.dtOptions = {
      responsive: true,
    };
    this.loadData();
  }

  loadData(): void {
    this.bocasDeAguaService
      .getBocas()
      .subscribe((resp) => {
        this.bocas = resp.data
        this.reload = false
      });
  }

  eliminar(bid: any) {
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
        this.bocasDeAguaService.deleteBoca(bid).subscribe((resp) => {
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
