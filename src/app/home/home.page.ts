import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  @ViewChild(IonInfiniteScroll, {static : false}) infiniteScroll: IonInfiniteScroll;

  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectoService) {


  }


  ngOnInit() {

    this.getProyectos();

  }

  getProyectos(): void {

    this.proyectoService.getProyectos()

        .subscribe(proyectos => this.proyectos = proyectos);

  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
     /* if (data.length == 1000) {
        event.target.disabled = true;
      }*/
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
