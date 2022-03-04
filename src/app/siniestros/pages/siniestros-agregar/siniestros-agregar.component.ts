import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SiniestrosService } from '../../services/siniestros.service';

@Component({
  selector: 'app-siniestros-agregar',
  templateUrl: './siniestros-agregar.component.html',
  styles: [],
})
export class SiniestrosAgregarComponent implements OnInit {
  title: string = 'Nuevo Siniestro';
  tipoSiniestros!: any;
  solicitantes!: any;
  vehiculos!: any;

  siniestro = {
    descripcion: '',
    direccion: '',
    telefono: '',
    latitud: '',
    longitud: '',
    numero: '',
    estado_emergencia: '',
    fecha: Date.now,
    solicitante_id: '',
    vehiculo_id: '',
    tipo_siniestro_id: '',
  };

  constructor(
    private router: Router,
    private siniestrosService: SiniestrosService
  ) {}

  ngOnInit(): void {
    this.siniestrosService.getTipoSiniestros().subscribe((resp) => {
      this.tipoSiniestros = resp;
    });
    this.siniestrosService.getSolicitantes().subscribe((resp) => {
      this.solicitantes = resp;
    });
    this.siniestrosService.getVehiculos().subscribe((resp) => {
      this.vehiculos = resp;
    });
  }

  regresar() {
    this.router.navigate(['/siniestros/listado']);
  }

  guardar() {
    if (this.siniestro.descripcion.trim().length === 0) {
      return;
    }

    this.siniestrosService.addSiniestro(this.siniestro).subscribe((resp) => {
      Swal.fire({
        title: '👌',
        text: `${resp.message}`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/siniestros/listado']);
    });
  }
}
