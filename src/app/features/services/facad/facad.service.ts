import { Injectable } from '@angular/core';
import { DataSourceStrategy } from '../../../core/abstracts/DataSourceStrategy';
import { Student } from '../../../core/interfaces/student.interface';

@Injectable()
export class FacadService {

 constructor(private dataSourceStrategy: DataSourceStrategy) {}

  getSchedule(student_Info: Student) {
    return this.dataSourceStrategy.getSchedule(student_Info);
  }
  
}
