import { Component, OnInit } from '@angular/core';
import { Rango } from '../../interfaces/rangos.interface';
import { RangosService } from '../../services/rangos.service';

@Component({
  selector: 'app-rangos-listado',
  templateUrl: './rangos-listado.component.html',
  styles: [],
})
export class RangosListadoComponent implements OnInit {
  title: string = 'Rangos';
  rangos!: Rango;
  dtOptions: any = {};
  constructor(private rangosService: RangosService) {}

  ngOnInit(): void {
    this.rangosService.getRangos().subscribe((resp) => (this.rangos = resp));
  }
}
