import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'crearRegistro', component: CrearRegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
