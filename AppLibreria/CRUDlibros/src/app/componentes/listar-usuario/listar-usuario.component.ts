import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios:any;

  constructor(
    private crudService : CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerDatosUsuario().subscribe(data=>{
      this.usuarios=data;
      console.log("datos recibidos: ",data);
    });
  }

  borrarRegistro(idEmpleado:any, index:any){
    if(window.confirm("Desea borrar el registro?")){
    this.crudService.borrarUsuario(idEmpleado)
    .subscribe((data:any)=>{
      if(data.success===1){
        console.log(data.success);
      this.usuarios.splice(index,1);
      }
      else{console.log("Error al eliminar el registro")}
      
    });
  }
  }

  

}

