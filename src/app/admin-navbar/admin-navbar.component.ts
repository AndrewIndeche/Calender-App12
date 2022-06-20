import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  currentDate = Date.now(); //Logic to add method for displaying present date

  navbarOpen = false;  //typescript logic for default Navbar is in a closed state

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;  //Logic for navbar open action when toggled/button is clicked
  }


  constructor() { }

  ngOnInit(): void {
  }

}
