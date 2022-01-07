import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-main',
  templateUrl: './lm-main.component.html',
  styleUrls: ['./lm-main.component.scss']
})
export class LmMainComponent implements OnInit {

  routes = [
    {
      route : "admins" ,
      name : "Administrateurs" ,
      icon : "manage_accounts" ,
      role : 'ADMIN'
    },
    {
      route : "users" ,
      name : "Etudiants" ,
      icon : "people" ,
      role : 'ADMIN'
    },
    {
      route : "books" ,
      name : "Listes des Livres",
      icon : "book",
      role : 'ALL'
    },
    {
      route : "my-books" ,
      name : "Mes Livres",
      icon : "auto_stories" ,
      role : 'USER'
    },
    {
      route : "history" ,
      name : "Historique" ,
      icon : "history_toggle_off" ,
      role : 'ADMIN'
    },
    {
      route : "stats" ,
      name : "Statistiques" ,
      icon : "equalizer" ,
      role : 'ADMIN'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.routes = this.routes.filter(route => {
      return route.role == sessionStorage.getItem('role') ||  route.role == 'ALL'
    })
  }

}
