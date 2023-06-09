import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
    ) { 
      this.formularioDeEmpleados=this.formBuilder.group({
        nombre:[''],
        correo:['']
      })
    }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("presionaste enviar datos")
    console.log(this.formularioDeEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(
      data=>{
        console.log(data);
        this.formularioDeEmpleados.reset(); 
        this.ruteador.navigateByUrl('/listar-empleado');
      }
    );
  }

}
