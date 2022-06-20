import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:HomepageComponent, pathMatch: 'full' },
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'adminmessageboard',component:AdminMessagesComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
