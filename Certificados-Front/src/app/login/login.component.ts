import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credenciales } from './credenciales';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  credential: Credenciales = { username: "", password: "" };

  loggedIn: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  ingresar(): void {
    if (this.credential.username == "admin" && this.credential.password == "123") {
      this.router.navigate(["layout/dashboard"]);
    }
    if (this.credential.username == "student" && this.credential.password == "123") {
      this.router.navigate(["student/dashboard"]);
    }
  }
}
  /* singIn(): void{
   this.loginService.singIn(this.credential).subscribe(
     (response: HttpResponse<Credenciales>) => {
       if (response.headers.get('Authorization')!=null){
         sessionStorage.setItem("seguridad_token", String(response.headers.get('Authorization')));
         sessionStorage.setItem("username", this.credential.username);
       }
     }
   )
   this.loggedIn = true;
   sessionStorage.setItem("loggedIn","true");
   this.router.navigate(["layout"]);
 }*/

