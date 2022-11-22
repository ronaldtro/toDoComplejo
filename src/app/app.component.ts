import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  vecTareas: Tarea[];

  title = 'Rutas';

  constructor(){

    this.vecTareas = [];

  }

  //Capturamos info de la etiqueta que envio la peticion -> $event:any
  onTareaCreada($event:any){

    //console.log($event);

    //Ingresar elemento al vector tareas
    this.vecTareas.push($event);
    //Mostrar vector por consola
    console.log(this.vecTareas);
    
  }

}


