import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Student } from '../../../core/interfaces/student.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentSchedule } from '../../../core/interfaces/studentSchedule.interface';
import { DataSourceStrategy } from '../../../core/abstracts/DataSourceStrategy';

@Injectable()

export class StrategyService implements DataSourceStrategy{

  constructor(private http: HttpClient) { }

   getSchedule(student_Info: Student): Observable<StudentSchedule[]> {
    const sessionID = btoa(`${new Date().toISOString()}[${student_Info.studentId}]`);
    const headers = new HttpHeaders().set('sessionID', sessionID);
    return this.http.post<Student>(
      'https://8c3a6f80-03c0-406a-af34-cd9be0f153d6.mock.pstmn.io/student-schedule',
       student_Info,
      { headers }
    ).pipe(
    map(student => student.schedule)
  );
  }
}
