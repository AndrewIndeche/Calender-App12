import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentDate = Date.now(); //Logic to add method for displaying present date

  navbarOpen = false;  //typescript logic for default Navbar is in a closed state

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;  //Logic for navbar open action when toggled/button is clicked
  }

  constructor() { }

  ngOnInit(): void {
  }

}
