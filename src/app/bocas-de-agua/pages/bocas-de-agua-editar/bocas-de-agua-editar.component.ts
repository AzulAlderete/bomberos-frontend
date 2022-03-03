import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BocasDeAguaService } from '../../services/bocas-de-agua.service';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bocas-de-agua-editar',
  templateUrl: './bocas-de-agua-editar.component.html',
  styles: [],
})
export class BocasDeAguaEditarComponent implements OnInit {
  title: string = 'Editar boca de agua';
  bocaDeAgua = {
    direccion: '',
    numero: '',
    latitud: '',
    longitud: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bocasService: BocasDeAguaService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({ id }) => this.bocasService.getBocasById(id)))
      .subscribe((resp) => (this.bocaDeAgua = resp.data));
  }

  regresar() {
    this.router.navigate(['/bocas-de-agua/listado']);
  }

  editar() {
    this.bocasService.updateBoca(this.bocaDeAgua).subscribe((resp) => {
      Swal.fire({
        title: '👌',
        text: `${resp.message}`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/bocas-de-agua/listado']);
    });
  }
}
