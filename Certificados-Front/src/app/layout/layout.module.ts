import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelCursoComponent } from './dashboard/panel-curso/panel-curso.component';
import { SearchCursoComponent } from './dashboard/search-curso/search-curso.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    PanelCursoComponent,
    SearchCursoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
