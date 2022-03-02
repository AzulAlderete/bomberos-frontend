import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rangos-agregar',
  templateUrl: './rangos-agregar.component.html',
  styles: [],
})
export class RangosAgregarComponent implements OnInit {
  title: string = 'Nuevo Rango';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/rangos/listado']);
  }
}
