import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
formularioprestamos:FormGroup
 id:any;
 usuario:any;
 libros:any;

 constructor(
   public formulario: FormBuilder,
   private activeRoute: ActivatedRoute,
   private crudService: CrudService,
   private ruteador: Router
 ) {
   this.formularioprestamos=this.formulario.group({
     nombre_usuario:[''],
     nombre_libro:[''],
     fecha_prestamo:['']
   })
   this.id=this.activeRoute.snapshot.paramMap.get('id');
   console.log("id recibido: ", this.id);

   this.crudService.obtenerDatosUsuario().subscribe(data=>{
    this.usuario=data;
    console.log("datos recibidos: ",data);
  });

  this.crudService.obtenerDatosLibros().subscribe((data:any)=>{
    this.libros = data;
    console.log("datarecibida en variable libros: ",this.libros);
  });

  }

 ngOnInit(): void {
 }

 enviarDatos():any{
  console.log(this.formularioprestamos.value);
  this.crudService.prestarLibro(this.formularioprestamos.value).subscribe(
    (data:any)=>{
      console.log(data)
    }
  );
   
 }


}

