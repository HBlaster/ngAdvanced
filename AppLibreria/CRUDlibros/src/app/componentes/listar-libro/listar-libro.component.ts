import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit {
  libros:any;

  constructor(
    private crudService : CrudService,
  ) { }

  ngOnInit(): void {
    this.crudService.obtenerDatosLibros().subscribe((data:any)=>{
      if(data.length>0){
        this.libros =data;
      }
      else{
        console.log("no se recibieron datos");
      }
    });
  }

  borrarRegistro(idLibro:any, index:any){
    if(window.confirm("Desea borrar el registro?")){
    this.crudService.borrarLibro(idLibro)
    .subscribe((data:any)=>{
      console.log(data);
      if(data.success===1){
        console.log(data.success);
      this.libros.splice(index,1);
      }
      else{console.log("Error al eliminar el registro")}

    });
  }
  }



}
