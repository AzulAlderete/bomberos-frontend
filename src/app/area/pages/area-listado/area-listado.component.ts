import { Component, OnInit } from '@angular/core';
import { Area } from '../../interfaces/area.interface';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-listado',
  templateUrl: './area-listado.component.html',
  styles: [],
})
export class AreaListadoComponent implements OnInit {
  dtOptions: any = {};
  title: string = 'Areas';
  areas!: Area;

  constructor(private areaService: AreaService) {}

  ngOnInit(): void {
    this.areaService.getAreas().subscribe((resp) => (this.areas = resp));
  }
}
