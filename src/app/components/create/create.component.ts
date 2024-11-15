import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  @ViewChild('cajaidAlumno') cajaidAlumno!: ElementRef;
  @ViewChild('cajaNombre') cajaNombre!: ElementRef;
  @ViewChild('cajaApellido') cajaApellido!: ElementRef;
  @ViewChild('cajaImagen') cajaImagen!: ElementRef;
  @ViewChild('cajaActivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidCurso') cajaidCurso!: ElementRef;

  public alumnos!: Array<Alumno>;

  constructor(public _service: ServiceAlumnos,
    private _router: Router
  ){}


  insertAlumno(): void{
    const id = parseInt(this.cajaidAlumno.nativeElement.value);
    const nom = this.cajaNombre.nativeElement.value;
    const ape = this.cajaApellido.nativeElement.value;
    const img = this.cajaImagen.nativeElement.value;
    const act = parseInt(this.cajaActivo.nativeElement.value);
    const idcurso = parseInt(this.cajaidCurso.nativeElement.value);

    let newAlumno = new Alumno(id, nom, ape, img, act, idcurso);
    console.log(newAlumno)
    this._service.postAlumnosNuevos(newAlumno).then(response =>{
      this.alumnos = response.data.response;
      this._router.navigate(['/alumnoscurso']);
    })
  }

  ngOnInit(): void {

  }
}
