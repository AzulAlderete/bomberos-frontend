import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const links = document.querySelectorAll('.sidebar__menu-a');
    const dropMenu = document.querySelectorAll('#drop-menu');
    const dropMenuContent = document.getElementById('drop-menu-content');

    const mediaqueryList = window.matchMedia('(max-width: 576px)');

    if (mediaqueryList.matches) {
      sidebar?.classList.remove('active');
      main?.classList.add('full');
    } else {
      sidebar?.classList.add('active');
      main?.classList.remove('full');
    }

    links.forEach((link) => {
      // console.log(link);
      link.classList.remove('active');
      link.addEventListener('click', () => {
        link.classList.toggle('active');
      });
    });

    dropMenu.forEach((item) => {
      item.addEventListener('click', () => {
        // console.log(item.nextElementSibling);
        this.toggleDropMenu(item);
      });
    });
  }

  toggleDropMenu(item: any) {
    item.nextElementSibling.classList.toggle('display');
  }
}
