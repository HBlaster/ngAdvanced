import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  formularioUsuarios:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
    ) { 
      this.formularioUsuarios=this.formBuilder.group({
        nombre:[''],
        nombre_corto:[''],
        fecha_ingreso:['']
      })
    }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("presionaste enviar datos")
    console.log(this.formularioUsuarios.value);
    this.crudService.AgregarUsuario(this.formularioUsuarios.value).subscribe(
      data=>{
        console.log(data);
        this.formularioUsuarios.reset(); 
        this.ruteador.navigateByUrl('/listar-usuario');
      }
    );
  }

}

