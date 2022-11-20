import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bomberos-front';
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      responsive: true,
    };
  }
}