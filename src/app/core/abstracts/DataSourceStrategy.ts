import { Observable } from "rxjs";
import { Student } from "../interfaces/student.interface";
import { StudentSchedule } from "../interfaces/studentSchedule.interface";

export abstract class DataSourceStrategy {
  abstract getSchedule(student_Info: Student): Observable<StudentSchedule[]>;
}