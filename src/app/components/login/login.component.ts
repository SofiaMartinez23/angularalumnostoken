import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(public _service: ServiceAlumnos,
    public _router: Router
  ){}

  loginAlumno(): void{
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    let user = new Login(userName, password);
    this._service.loginAlumnos(user).then(response =>{
      this._service.token = response.data.response;
      this._router.navigate(["/alumnoscurso"]);
    })
  }

  ngOnInit(): void {
      
  }
}
