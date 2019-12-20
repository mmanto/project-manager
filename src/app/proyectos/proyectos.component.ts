import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectoSeleccionado: Proyecto;

  proyectos: Proyecto[];

  
  constructor( private proyectoService: ProyectoService ) { }

  ngOnInit() {

    this.getProyectos();

  }

  getProyectos(): void {

    this.proyectoService.getProyectos()

        .subscribe(proyectos => this.proyectos = proyectos);

  }

  /* Ejemplo inicial síncrono
  getProyectos(): void{

    this.proyectos = this.proyectoService.getProyectos();

  }
*/
  
  onSelect(proyecto: Proyecto): void {

    this.proyectoSeleccionado = proyecto;

  }

}
