import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {
  formularioLibros:FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService,
    private ruteador: Router
    ) { 
      this.formularioLibros=this.formBuilder.group({
        nombre:[''],
      nombre_corto:[''],
      fecha_ingreso:['']
      })
    }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("presionaste enviar datos")
    console.log(this.formularioLibros.value);
    this.crudService.AgregarLibro(this.formularioLibros.value).subscribe(
      data=>{
        console.log(data);
        this.formularioLibros.reset(); 
        this.ruteador.navigateByUrl('/listar-libro');
      }
    );
  }

}
