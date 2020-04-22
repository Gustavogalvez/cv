import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppCreadasComponent } from './home/app-creadas/app-creadas.component';
import { EstudiosComponent } from './home/estudios/estudios.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aplicaciones', component: AppCreadasComponent},
  {path: 'estudios', component: EstudiosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
