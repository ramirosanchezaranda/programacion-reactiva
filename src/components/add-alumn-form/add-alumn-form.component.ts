import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/models/alumno';
import { AlumnoService } from 'src/services/alumnos.service';

@Component({
  selector: 'app-add-alumn-form',
  templateUrl: './add-alumn-form.component.html',
  styleUrls: ['./add-alumn-form.component.css']
})
export class AddAlumnFormComponent implements OnInit{
  formulario!: any;
  nombre!: string 
  apellido!: string 
  curso!: string 
  profesor!: string 
  fechaInicio!: Date
  fechaFin!: Date 
  notaActual!: number 
  aprobado!: boolean 
  alumnos! : Alumno[] 
  nuevoAlumno! : Alumno
  constructor(private alumnoService : AlumnoService){

    this.formulario = new FormGroup({
      nombre : new FormControl(''),
      apellido : new FormControl(''),
      curso : new FormControl(''),
      profesor  : new FormControl(''),
      fechaInicio : new FormControl(''),
      fechaFin : new FormControl(''),
      notaActual : new FormControl(''),
      aprobado : new FormControl('')
    });
  }
  ngOnInit() {
    this.alumnos = this.alumnoService.obtenerAlumnos()
  }
  
  add() {
    if(this.formulario.get('aprobado').value == 'true'){
      this.formulario.get('aprobado').value = true
    }else if(this.formulario.get('aprobado').value == 'false'){
      this.formulario.get('aprobado').value = false
    }
    this.nuevoAlumno = {
      index : this.alumnos.length + 1,
      nombre : this.formulario.get('nombre').value,
      apellido : this.formulario.get('apellido').value,
      curso : this.formulario.get('curso').value,
      profesor : this.formulario.get('profesor').value,
      fechaInicio : new Date(this.formulario.get('fechaInicio').value),
      fechaFin : new Date(this.formulario.get('fechaFin').value),
      notaActual : this.formulario.get('notaActual').value,
      aprobado : this.formulario.get('aprobado').value
    }
    this.alumnos.push(this.nuevoAlumno)
    console.log(this.alumnos);
    console.log(this.nuevoAlumno);
  }
}
