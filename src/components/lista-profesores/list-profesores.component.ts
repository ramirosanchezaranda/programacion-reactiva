import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/models/profesor';
import { ProfesorService } from 'src/services/profesor.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-profesores',
  templateUrl: './list-profesores.component.html',
  styleUrls: ['./list-profesores.component.css']
})
export class ListProfesoresComponent implements OnInit {

  profesores!: Profesor[];
  constructor(private profesorService : ProfesorService){}

  ngOnInit() {
    this.profesorService.obtenerProfesores().then((profesores : Profesor[]) => {
      this.profesores = profesores
    }).catch((error: string) => {
      console.log("Promesa fallida", error)
    })
  }
}
