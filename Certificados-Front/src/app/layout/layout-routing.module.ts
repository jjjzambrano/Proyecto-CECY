import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCursoComponent } from './dashboard/search-curso/search-curso.component';
import { MainComponent } from './main/main.component';
import { SolicitudCertificadoListaComponent } from '../feature/solicitud-certificado/solicitud-certificado-lista/solicitud-certificado-lista.component';
import { CodigosCertificadoListaComponent } from '../feature/codigos-certificado/lista/codigos-certificado-lista.component';
const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: 'dashboard', component:SearchCursoComponent},
      {path: 'certificado-lista', component:SolicitudCertificadoListaComponent},
      {path: 'codigo-lista', component:CodigosCertificadoListaComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
