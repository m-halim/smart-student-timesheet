import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing-module';
import { FacadService } from './services/facad/facad.service';
import { StudentComponent } from './pages/student.component/student.component';
import { StudentFormComponent } from './pages/student-form.component/student-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ScheduleTableComponent } from './pages/schedule-table.component/schedule-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DataSourceStrategy } from '../core/abstracts/DataSourceStrategy';
import { StrategyService } from './services/strategy/strategy.service';

@NgModule({
  declarations: [
    StudentFormComponent,
    StudentComponent,
    ScheduleTableComponent
  ],
  imports: [
    FormsModule, 
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    StudentRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers:[
    StrategyService,
    FacadService,
    { provide: DataSourceStrategy, useClass: StrategyService } 
  ]
})
export class StudentModule { }
