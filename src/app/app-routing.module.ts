import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  //Ruta por defecto si se ingresa a localhost:4200
  {path: '', pathMatch: 'full' , redirectTo: 'toDoComplejo'},
  //Rutas definidas
  {path: 'toDoComplejo', component: InicioComponent},
  //Para colocarle una restriccion a la ruta, si no se cumple, no deja acceder a la ruta
  {path: 'sobreMi', component: InicioComponent, canActivate: [RandomGuard]},
  {path: 'sobreLaPagina', component: InicioComponent},
  {path: 'sobreNosotros', component: InicioComponent},
  //Ruta dinamica con hijos/children
  {path: 'clientes/:clienteId', component: InicioComponent, children: [ {path: 'sobreNosotros', component: InicioComponent }, {path: 'sobreMi', component: InicioComponent } ] },
  //Para redireccionar rutas
  {path: 'redirect', redirectTo: 'toDoComplejo'},
  //Si no llega una ruta valida, redireccionar a ruta por defecto
  {path: '**', redirectTo: 'toDoComplejo'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule {

}

/*

Rutas dinamicas:

Ejemplo: localhost:4200/clientes/1


*/
