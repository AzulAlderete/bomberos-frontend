import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  userOnline: any = null;
  usernameOnline: any = null;

  ngOnInit(): void {
    // this.userOnline = this.authService.auth.user?.username
    this.userOnline = JSON.parse(localStorage.getItem('user')!);
    this.usernameOnline = this.userOnline.username;
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar?.classList.toggle('active');
    main?.classList.toggle('full');
  }

  logout() {
    this.authService.logout();
  }
}
