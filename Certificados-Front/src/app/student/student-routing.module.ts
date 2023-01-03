import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSearchCursoComponent } from './student-dashboard/student-search-curso/student-search-curso.component';
import { StudentMainComponent } from './student-main/student-main.component';
const routes: Routes = [
  {path: '', component:StudentMainComponent,
    children: [
      {path: 'dashboard', component:StudentSearchCursoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
