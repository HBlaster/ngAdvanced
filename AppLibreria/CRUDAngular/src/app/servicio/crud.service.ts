import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Registros } from './Registros';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string="http://localhost/libreria/";
  constructor(
    private clientHttp: HttpClient
  ) {}

  //Libros
  AgregarLibro(datosLibro:any):Observable<any>{
    return this.clientHttp.post(this.API+"?insertarl=1",datosLibro);
  }
  obtenerDatosLibros(){
    return this.clientHttp.get(this.API+"?libros=1");
  }
  borrarLibro(id:any){
    return this.clientHttp.get(this.API+"?borrarl="+id)
  }
  obtenerLibro(id:any){
    return this.clientHttp.get(this.API+"?consultarl="+id)
  }
  editarLibro(id:any, datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosUsuario);
  }

  //usuarios
  AgregarUsuario(datosLibro:any):Observable<any>{
    return this.clientHttp.post(this.API+"?insertaru=1",datosLibro);
  }
  obtenerDatosUsuario(){
    return this.clientHttp.get(this.API+"?usuarios=1");
  }
  borrarUsuario(id:any){
    return this.clientHttp.get(this.API+"?borraru="+id)
  }
  obtenerUsuario(id:any){
    return this.clientHttp.get(this.API+"?consultaru="+id)
  }
  editarUsuario(id:any, datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizaru="+id,datosUsuario);
  }

  //Prestamo libros
  prestarLibro(datosPrestamo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?prestamo=1",datosPrestamo);
  }

}
