import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

@Component({
  selector: 'app-dashboard-faq',
  templateUrl: './dashboard-faq.component.html',
  styleUrls: ['../../../../assets/model.css']
})
export class DashboardFaqComponent  {

  constructor(
    private router:Router
  ) { }

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.router.navigate(['../../']);
  }

}