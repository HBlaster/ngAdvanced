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
  //optimizado
  AgregarLibro(datosLibro:any):Observable<any>{
    return this.clientHttp.post(this.API+"/libros/insertar_libro.php",datosLibro);
  }

  //optimizado
  obtenerDatosLibros(){
    return this.clientHttp.get(this.API);
  }

  //optimizado
  borrarLibro(id:any){
    return this.clientHttp.delete(`${this.API}/libros/borrar_libro.php?id=${id}`)
  }
  //optimizado
  obtenerLibro(id:any){
    return this.clientHttp.get(`${this.API}/libros/consultar_libro.php?id=${id}`)
  }
  //optimizado
  editarLibro(id:any, datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"/libros/actualizar_libro.php?id="+id,datosUsuario);
  }

  //usuarios
  //optimizado
  AgregarUsuario(datosLibro:any):Observable<any>{
    return this.clientHttp.post(this.API+"/usuarios/insertar_usuario.php",datosLibro);
  }

  //optimizado
  obtenerDatosUsuario(){
    return this.clientHttp.get(this.API+"/usuarios/get_usuarios.php");
  }
  //optimizado
  borrarUsuario(id:any){
    return this.clientHttp.get(`${this.API}/usuarios/borrar_usuario.php?id=${id}`)
  }
  //optimizado
  obtenerUsuario(id:any){
    return this.clientHttp.get(`${this.API}/usuarios/consultar_usuario.php?id=${id}`)
  }
  //optimizado
  editarUsuario(id:any, datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"/usuarios/actualizar_usuario.php?id="+id,datosUsuario);
  }

  //Prestamo libros
  prestarLibro(datosPrestamo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?prestamo=1",datosPrestamo);
  }

}
