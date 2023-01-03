import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelCursoComponent } from './student-dashboard/student-panel-curso/student-panel-curso.component';
import { StudentSearchCursoComponent } from './student-dashboard/student-search-curso/student-search-curso.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { StudentModalComponent } from './student-modal/student-modal.component';


@NgModule({
  declarations: [
    StudentHeaderComponent,
    StudentMainComponent,
    StudentSidebarComponent,
    StudentPanelCursoComponent,
    StudentSearchCursoComponent,
    StudentModalComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
