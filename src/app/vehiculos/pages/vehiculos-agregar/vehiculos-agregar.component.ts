import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-agregar',
  templateUrl: './vehiculos-agregar.component.html',
  styles: [],
})
export class VehiculosAgregarComponent implements OnInit {
  title: string = 'Nuevo Vehiculo';
  tipoVehiculos!: any;
  constructor(
    private vehiculosService: VehiculosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vehiculosService
      .getTipoVehiculo()
      .subscribe((resp) => (this.tipoVehiculos = resp));
  }

  regresar() {
    this.router.navigate(['/vehiculos/listado']);
  }
}
