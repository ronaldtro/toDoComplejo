import { Component, Input } from '@angular/core';
import { Tarea } from '../../models/tarea.model'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent {

  @Input() tareas: Tarea[];

  
  constructor(){

    this.tareas = [];

  }

  onClick(tarea: Tarea){

    tarea.completa = !tarea.completa;

  }

  onClickBorrar(indice:any){

    this.tareas.splice(indice, 1);

  }

}
