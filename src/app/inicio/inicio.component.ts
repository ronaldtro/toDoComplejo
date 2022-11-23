import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{

  clienteId!: number;
  vecTareas: Tarea[];

  title = 'Rutas';

  constructor(private activatedRoute: ActivatedRoute){

    this.vecTareas = [];
    
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      this.clienteId = params['clienteId'];
      
      console.log('ngOnInit', this.clienteId);
    })

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
