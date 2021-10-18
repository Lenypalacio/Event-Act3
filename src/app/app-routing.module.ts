import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { PersonalComponent } from './page/personal/personal.component';
import { GallaryComponent } from './page/gallary/gallary.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'profile', component: PersonalComponent},
  { path: 'gallery', component: GallaryComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
