import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyecto } from './proyecto';
import { proyectos } from './mocks-provider';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor( private messageService: MessageService) { }

  /* un ejemplo síncorno
  getProyectos(): Proyecto[] {
    return proyectos;
  }
  */

  getProyectos(): Observable<Proyecto[]> {
    
    // TODO: send the message _after_ fetching the heroes
    
    this.messageService.add('HeroService: fetched heroes');
    
    return of(proyectos);

  }

  getProyecto(id: number): Observable<Proyecto> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ProyectoService: fetched proyecto id=${id}`);
    return of(proyectos.find(proyecto => proyecto.id === id));
  }

}
