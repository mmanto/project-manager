import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {

  @Input() proyecto: Proyecto;
  //proyecto: Proyecto;

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProyecto();
  }

  getProyecto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.proyectoService.getProyecto(id)
      .subscribe(proyecto => this.proyecto = proyecto);
  }

  goBack(): void {
    this.location.back();
  }

}
