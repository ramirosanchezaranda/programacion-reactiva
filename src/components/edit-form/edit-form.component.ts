import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/models/alumno';
import { AlumnoEditado } from 'src/models/alumnoEditado';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  formulario: FormGroup;
  // nombre: string = ''
  // apellido: string = ''
  // curso: string = ''
  // profesor: string = ''
  // fechaInicio: Date = new Date()
  // fechaFin: Date = new Date()
  // notaActual: number = 1
  // aprobado: boolean = false

  constructor(
    private dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Alumno
  ){
    console.log(this.data);
    this.formulario = new FormGroup({
      nombre : new FormControl(this.data.nombre),
      apellido : new FormControl(this.data.apellido),
      curso : new FormControl(this.data.curso),
      profesor  : new FormControl(this.data.profesor),
      fechaInicio : new FormControl(this.data.fechaInicio),
      fechaFin : new FormControl(this.data.fechaFin),
      notaActual : new FormControl(this.data.notaActual),
      aprobado : new FormControl(this.data.aprobado)
    });
  }

  edit(){
    this.data.nombre = this.formulario.get('nombre')?.value
    this.data.apellido = this.formulario.get('apellido')?.value
    this.data.curso = this.formulario.get('curso')?.value
    this.data.profesor = this.formulario.get('profesor')?.value
    this.data.fechaInicio = this.formulario.get('fechaInicio')?.value
    this.data.fechaFin = this.formulario.get('fechaFin')?.value
    this.data.notaActual = this.formulario.get('notaActual')?.value
    this.data.aprobado = this.formulario.get('aprobado')?.value
  }
  cerrarModal(){
    this.dialogRef.close()
  }
}
