import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent{

  //Output de nombre tareaCreada de tipo Tarea(Clase)
  @Output() tareaCreada: EventEmitter<Tarea>;

  //Variable tipo Clase
  nuevaTarea: Tarea;

  constructor(){
     
    //Inicializacion de variable de tipo clase
     this.nuevaTarea = new Tarea();

     //Inicializacion de variable de tipo Output
     this.tareaCreada = new EventEmitter();


     //Ademas, llenamos la variable nuevaTarea con ngModel desde la vista

  }

  onClick(){

    //Si damos click en el boton del html 

    //Enviamos al padre la variable nuevaTarea
    this.tareaCreada.emit(this.nuevaTarea);

    //Vaciamos la variable nuevaTarea
    this.nuevaTarea = new Tarea(); 

  }

}
