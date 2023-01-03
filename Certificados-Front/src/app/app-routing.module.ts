import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},
{path: 'feature', loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)},
{path: 'student', loadChildren:() => import('./student/student.module').then(m => m.StudentModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
