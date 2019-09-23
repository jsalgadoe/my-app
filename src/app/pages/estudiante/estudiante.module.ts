import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { TableStudientComponent } from './table-studient/table-studient.component';
import { FormStudientComponent } from './form-studient/form-studient.component';


@NgModule({
  declarations: [EstudianteComponent,TableStudientComponent,FormStudientComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
