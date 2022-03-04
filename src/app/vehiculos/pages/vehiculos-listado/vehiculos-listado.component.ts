import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculos.interface';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-listado',
  templateUrl: './vehiculos-listado.component.html',
  styles: [],
})
export class VehiculosListadoComponent implements OnInit {
  title: string = 'Vehiculos';
  vehiculos!: Vehiculo;
  dtOptions: any = {};
  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService
      .getVehiculos()
      .subscribe((resp) => (this.vehiculos = resp));
  }
}
