import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/models/alumno';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoService } from 'src/services/alumnos.service';
import { Observable, Subscription } from 'rxjs';
import {Router} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  alumnos! : Alumno[]
  suscripcion!: Subscription;



  constructor(private alumnoService : AlumnoService, private dialog : MatDialog, private router : Router){
  }

  ngOnInit() {
    this.suscripcion = this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos : Alumno[]) => {
      this.alumnos = alumnos
    })
  }

  delete(index : number){
    this.alumnoService.delete(index)
  }

  edit(alumno : Alumno){
    const dialogRef = this.dialog.open(EditFormComponent, {
      data: alumno
    })
  }
  add(){
    this.router.navigate(['/addAlumn'])
  }
  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }
}
