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
      name : "Admins" ,
      icon : "manage_accounts" ,
    },
    {
      route : "users" ,
      name : "Students" ,
      icon : "people"
    },
    {
      route : "books" ,
      name : "Books",
      icon : "book"
    },
    {
      route : "profile" ,
      name : "Profile" ,
      icon : "chat"
    },
    {
      route : "stats" ,
      name : "Statistiques" ,
      icon : "equalizer"
    },
    {
      route : "requests" ,
      name : "Request" ,
      icon : "equalizer"
    },
    {
      handler : this.logout.bind(this) ,
      name : "Se déconnecter" ,
      icon : "logout"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    // this.authenticationService.logout()
  }
}
