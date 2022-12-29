import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCursoComponent } from './dashboard/search-curso/search-curso.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:SearchCursoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
