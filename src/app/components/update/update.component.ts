import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service.alumnos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  @ViewChild('cajaidAlumno') cajaidAlumno!: ElementRef;
  @ViewChild('cajaNombre') cajaNombre!: ElementRef;
  @ViewChild('cajaApellido') cajaApellido!: ElementRef;
  @ViewChild('cajaImagen') cajaImagen!: ElementRef;
  @ViewChild('cajaActivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidCurso') cajaidCurso!: ElementRef;

  public alumno!: Alumno;

  constructor(public _service: ServiceAlumnos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ){}


  updateAlumno(): void{
    const id = parseInt(this.cajaidAlumno.nativeElement.value);
    const nom = this.cajaNombre.nativeElement.value;
    const ape = this.cajaApellido.nativeElement.value;
    const img = this.cajaImagen.nativeElement.value;
    const act = parseInt(this.cajaActivo.nativeElement.value);
    const idcurso = parseInt(this.cajaidCurso.nativeElement.value);

    let editAlumno = new Alumno(id, nom, ape, img, act, idcurso);
    this._service.updateAlumno(editAlumno).then(response =>{
      this.alumno = response.data.response;
      this._router.navigate(['/alumnoscurso']);
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) =>{
      let idAlumno = params["idAlumno"];
      this._service.findAlumno(idAlumno).then(response =>{
        this.alumno = response.data.response;
      })
    })
  }
}
