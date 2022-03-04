import { Component, OnInit } from '@angular/core';
import { TipoVehiculo } from '../../interfaces/tipo-vehiculos.interface';
import { TipoVehiculosService } from '../../services/tipo-vehiculos.service';

@Component({
  selector: 'app-tipo-vehiculos-listado',
  templateUrl: './tipo-vehiculos-listado.component.html',
  styles: [],
})
export class TipoVehiculosListadoComponent implements OnInit {
  title: string = 'Tipos de Vehiculos';
  tipos!: TipoVehiculo;
  dtOptions: any = {};
  constructor(private tipoVehiculosService: TipoVehiculosService) {}

  ngOnInit(): void {
    this.tipoVehiculosService
      .getTipoVehiculos()
      .subscribe((resp) => (this.tipos = resp));
  }
}
