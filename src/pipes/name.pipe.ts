import { Input, Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/models/alumno';

@Pipe({
  name: 'name'
})

export class NamePipe implements PipeTransform {

  transform(alumno : Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`
  }

}
