import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lm-sidebar',
  templateUrl: './lm-sidebar.component.html',
  styleUrls: ['./lm-sidebar.component.scss']
})
export class LmSidebarComponent implements OnInit {

  opened: boolean;
  events: string[] = [];
  user;

  @Input() routes: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleMenu() ;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.toggleMenu() ;
    this.user = JSON.parse(sessionStorage.getItem('user'))
  }

  toggleMenu(){
    this.opened = window.innerWidth > 990;
  }

  logout() {
    sessionStorage.clear() ;
    this.router.navigate(['/'])
  }
}



