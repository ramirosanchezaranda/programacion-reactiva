import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/services/curso.service';
import { Curso } from 'src/models/curso';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{

  cursos$!: Observable<Curso[]>;
  constructor(private cursoService : CursoService){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursosObservable();
  }

}
