import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos(): void {
    this.proyectoService.getProyectos()
      .subscribe(proyectos => this.proyectos = proyectos.slice(1, 5));
  }
}