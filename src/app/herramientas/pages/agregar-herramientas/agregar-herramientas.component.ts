import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoHerramienta } from '../../interfaces/herramientas.interface';
import { HerramientasService } from '../../services/herramientas.service';

@Component({
  selector: 'app-agregar-herramientas',
  templateUrl: './agregar-herramientas.component.html',
  styles: [],
})
export class AgregarHerramientasComponent implements OnInit {
  title: string = 'Nueva Herramienta';
  tipoHerramientas!: any;

  herramienta = {
    codigo: '',
    nombre: '',
    tipo_herramienta_id: '',
    estado: 'Activo',
  };

  constructor(
    private router: Router,
    private herramientasService: HerramientasService
  ) {}

  ngOnInit(): void {
    this.herramientasService.getTipoHerramientas().subscribe((resp) => {
      this.tipoHerramientas = resp;
      console.log(this.tipoHerramientas);
    });
  }

  guardar() {
    if (this.herramienta.nombre.trim().length === 0) return;

    this.herramientasService
      .addHerramienta(this.herramienta)
      .subscribe((resp) => {
        Swal.fire({
          title: '👌',
          text: `${resp.message}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
        this.router.navigate(['/herramientas/listado']);
      });
  }

  regresar() {
    this.router.navigate(['/herramientas/listado']);
  }
}
