import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadService } from '../../services/facad/facad.service';
import { Student } from '../../../core/interfaces/student.interface';
import { StudentSchedule } from '../../../core/interfaces/studentSchedule.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  standalone:false
})
export class StudentComponent {

  constructor(private facadService: FacadService){}

  schedule$!: Observable<StudentSchedule[]>;

  onStudentReceived(student_Info:Student){
    this.schedule$ = this.facadService.getSchedule(student_Info)
  }
}
