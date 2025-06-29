import { StudentSchedule } from "./studentSchedule.interface";

export interface Student {
  studentName: number;
  studentId: string;
  schedule: StudentSchedule[];
}