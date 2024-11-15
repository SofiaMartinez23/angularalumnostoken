import { Component, OnInit } from '@angular/core';
import { ServiceAlumnos } from '../../services/service.alumnos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public _service: ServiceAlumnos){}

}
