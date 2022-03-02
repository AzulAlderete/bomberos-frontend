import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-agregar',
  templateUrl: './area-agregar.component.html',
  styles: [],
})
export class AreaAgregarComponent implements OnInit {
  title: string = 'Nueva Area';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  regresar() {
    this.router.navigate(['/areas/listado']);
  }
}
