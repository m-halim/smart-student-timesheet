import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentSchedule } from '../../../core/interfaces/studentSchedule.interface';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrl: './schedule-table.component.css',
  standalone:false
})
export class ScheduleTableComponent implements OnInit{

  displayedColumns: string[] = ['subject', 'day', 'startTime', 'endTime'];
  dayName!:string;
  @Input() schedule$!: Observable<StudentSchedule[]>;

  ngOnInit(): void {
    const today = new Date();
    this.dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  }
   
}
