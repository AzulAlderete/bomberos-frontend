import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-vehiculos-agregar',
  templateUrl: './tipo-vehiculos-agregar.component.html',
  styles: [],
})
export class TipoVehiculosAgregarComponent implements OnInit {
  title: string = 'Nuevo tipo de vehiculo';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/tipo-vehiculos/listado']);
  }
}
