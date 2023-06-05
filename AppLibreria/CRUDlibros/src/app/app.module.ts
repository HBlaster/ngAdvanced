import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './componentes/listar-usuario/listar-usuario.component';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { ListarLibroComponent } from './componentes/listar-libro/listar-libro.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component'

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    AgregarLibroComponent,
    EditarLibroComponent,
    ListarLibroComponent,
    PrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
