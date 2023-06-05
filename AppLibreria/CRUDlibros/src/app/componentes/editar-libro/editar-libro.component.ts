import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  // formularioDeEmpleados:FormGroup;
  formularioLibros:FormGroup;
  id:any;
  datosEmpleado:any;
  constructor(
    public formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private crudServise: CrudService,
    private ruteador: Router
  ) {
    this.formularioLibros=this.formulario.group({
      nombre:[''],
      nombre_corto:[''],
      fecha_ingreso:['']
    })
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log("id recibido: ", this.id);

    this.crudServise.obtenerLibro(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.formularioLibros.setValue({
          nombre:data[0]['nombre'],
          nombre_corto:data[0]['nombre_corto'],
          fecha_ingreso:data[0]['fecha_ingreso']
        })
        console.log("datos recibidos:" , this.formularioLibros.value );
      }
    );

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.id);
    console.log(this.formularioLibros.value);
    this.crudServise.editarLibro(this.id, this.formularioLibros.value).subscribe(
      (data)=>{
        console.log("data recibida", data);
        this.ruteador.navigateByUrl('/listar-libro');

      }
    );
  }


}
