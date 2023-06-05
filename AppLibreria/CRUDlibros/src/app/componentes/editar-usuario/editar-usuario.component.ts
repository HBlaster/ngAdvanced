import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  // formularioDeEmpleados:FormGroup;
  formulariousuarios:FormGroup
  id:any;
  datosEmpleado:any;
  constructor(
    public formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private crudServise: CrudService,
    private ruteador: Router
  ) {
    this.formulariousuarios=this.formulario.group({
      nombre:[''],
      nombre_corto:[''],
      fecha_ingreso:['']
    })
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log("id recibido: ", this.id);

    this.crudServise.obtenerUsuario(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.formulariousuarios.setValue({
          nombre:data[0]['nombre'],
          nombre_corto:data[0]['nombre_corto'],
          fecha_ingreso:data[0]['fecha_ingreso']
        })
        console.log("datos recibidos:" , this.formulariousuarios.value );
      }
    );

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.id);
    console.log(this.formulariousuarios.value);
    this.crudServise.editarUsuario(this.id, this.formulariousuarios.value).subscribe(
      (data)=>{
        console.log("data recibida", data);
        this.ruteador.navigateByUrl('/listar-usuario');
        
      }
    );
  }


}

