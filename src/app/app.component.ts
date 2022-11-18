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

  onTareaCreada($event:any){

    //console.log($event);
    this.vecTareas.push($event);
    console.log(this.vecTareas);
    
  }

}


