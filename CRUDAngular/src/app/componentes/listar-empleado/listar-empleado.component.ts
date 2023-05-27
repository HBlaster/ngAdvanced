import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';



@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  empleados:any;

  constructor(
    private crudService : CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerEmpleados().subscribe(data=>{
      this.empleados=data;
      console.log("datos recibidos: ",data);
    });
  }

  borrarRegistro(idEmpleado:any, index:any){
    if(window.confirm("Desea borrar el registro?")){
    this.crudService.borrarEmpleado(idEmpleado)
    .subscribe((data:any)=>{
      if(data.success===1){
        console.log(data.success);
      this.empleados.splice(index,1);
      }
      else{console.log("Error al eliminar el registro")}
      
    });
  }
  }

  

}
