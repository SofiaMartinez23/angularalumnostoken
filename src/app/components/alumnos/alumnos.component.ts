import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{

  public alumnos!: Array<Alumno>;

  constructor(public _service: ServiceAlumnos,
    public _router: Router
  ){}

  loadAlumno(): void{
    this._service.getTablaAlumnos().then(response =>{
      this.alumnos = response.data;
      console.log(this.alumnos)
    })
  }

  ngOnInit(): void {
    this.loadAlumno();
  }
}
