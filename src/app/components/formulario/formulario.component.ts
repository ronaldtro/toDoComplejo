import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent{

  @Output() tareaCreada: EventEmitter<Tarea>;

  nuevaTarea: Tarea;

  constructor(){

     this.nuevaTarea = new Tarea();
     this.tareaCreada = new EventEmitter();

  }

  onClick(){
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea(); //Para vaciar el campo de texto
  }

}
