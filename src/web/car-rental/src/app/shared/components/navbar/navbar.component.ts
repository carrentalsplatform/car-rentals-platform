import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.isUserLogged = true;
  }

  isUserLogged: boolean;

  isUserLoggedIn(): boolean{
    return this.isUserLogged;
  }

  logoff(){
    this.isUserLogged = false;
  }

  login(){
    this.isUserLogged = true;
  }
}
