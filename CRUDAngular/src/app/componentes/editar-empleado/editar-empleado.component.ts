import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  id:any;
  datosEmpleado:any;
  constructor(
    public formulario: FormBuilder,
    private activeRoute: ActivatedRoute,
    private crudServise: CrudService,
    private ruteador: Router
  ) {
    this.formularioDeEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    })
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log("id recibido: ", this.id);

    this.crudServise.obtenerEmpleado(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.formularioDeEmpleados.setValue({
          nombre:data[0]['nombre'],
          correo:data[0]['correo']
        })
        console.log("datos recibidos:" , this.formularioDeEmpleados.value );
      }
    );

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.id);
    console.log(this.formularioDeEmpleados.value);
    this.crudServise.editarEmpleado(this.id, this.formularioDeEmpleados.value).subscribe(
      (data)=>{
        console.log("data recibida", data);
        this.ruteador.navigateByUrl('/listar-empleado');
        
      }
    );
  }


}
