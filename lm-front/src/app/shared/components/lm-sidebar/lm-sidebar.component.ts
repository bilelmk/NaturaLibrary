import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-sidebar',
  templateUrl: './lm-sidebar.component.html',
  styleUrls: ['./lm-sidebar.component.scss']
})
export class LmSidebarComponent implements OnInit {

  opened: boolean;
  events: string[] = [];

  @Input() routes: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggleMenu() ;
  }

  constructor() {}

  ngOnInit() {
    this.toggleMenu() ;
  }

  toggleMenu(){
    this.opened = window.innerWidth > 990;
  }

}



