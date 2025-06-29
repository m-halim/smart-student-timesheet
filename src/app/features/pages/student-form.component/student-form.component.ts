import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../../../core/interfaces/student.interface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
  standalone:false
})
export class StudentFormComponent {

  @Output() student_Info = new EventEmitter<Student>();

  onSubmit(form:NgForm) {
    this.student_Info.emit(form.value)
  }

}
