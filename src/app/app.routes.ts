import { Routes } from '@angular/router';

// app-routing.module.ts
export const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./features/student-module').then(m => m.StudentModule)
  },
  { path: '', redirectTo: 'student', pathMatch: 'full' }
];