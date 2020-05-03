import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AppCreadasComponent } from './home/app-creadas/app-creadas.component';
import { EstudiosComponent } from './home/estudios/estudios.component';
import { TooltipComponent } from '../components/comunes/tooltip/tooltip.component';
import { TecnologiasComponent } from './home/tecnologias/tecnologias.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppCreadasComponent,
    EstudiosComponent,
    TooltipComponent,
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
