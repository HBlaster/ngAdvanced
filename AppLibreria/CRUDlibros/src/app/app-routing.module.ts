import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Usuarios
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';

//Libros
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { ListarLibroComponent } from './componentes/listar-libro/listar-libro.component';

//prestamo
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';

const routes: Routes = [
  
  {path:'', pathMatch:'full', redirectTo:'listar-libro'},
  {path:'agregar-libro', component:AgregarLibroComponent},
  {path:'listar-libro', component:ListarLibroComponent},
  {path:'editar-libro/:id', component:EditarLibroComponent},
  //Rutas nuevas: usuarios
  {path:'agregar-usuario', component:AgregarUsuarioComponent},
  {path:'listar-usuario', component:ListarUsuarioComponent},
  {path:'editar-usuario/:id', component:EditarUsuarioComponent},

  //Prestamo libros
  {path:'prestamo-libro', component:PrestamoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
