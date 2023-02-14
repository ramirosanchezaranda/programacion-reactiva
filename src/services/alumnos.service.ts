import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Alumno } from 'src/models/alumno';
import { AlumnoEditado} from 'src/models/alumnoEditado';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  formulario!: FormGroup
    private alumnos : Alumno[] = [
        {
          index : 0,
          nombre : 'Agustina',
          apellido : 'Ferreira',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 7,
          aprobado : true
        },
        {
          index : 1,
          nombre : 'Federico',
          apellido : 'Rodriguez',
          curso : 'Python',
          profesor : 'Estefano Bodeant',
          fechaInicio : new Date(2021, 5 , 28),
          fechaFin : new Date(2023, 1, 8),
          notaActual : 4,
          aprobado : false
        },
        {
          index : 2,
          nombre : 'Valentina',
          apellido : 'Ferrari',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 3,
          nombre : 'Clara',
          apellido : 'Martinez',
          curso : 'React',
          profesor : 'Agustin Ferrari',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 6,
          aprobado : true
        },
        {
          index : 4,
          nombre : 'Santiago',
          apellido : 'Vidal',
          curso : 'Python',
          profesor : 'Estefano Bodeant',
          fechaInicio : new Date(2021, 5 , 28),
          fechaFin : new Date(2023, 1, 8),
          notaActual : 2,
          aprobado : false
        },
        {
          index : 5,
          nombre : 'Rodrigo',
          apellido : 'Ferreira',
          curso : 'React',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 6 , 15),
          fechaFin : new Date(2023, 3, 7),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 6,
          nombre : 'Patricia',
          apellido : 'Caceres',
          curso : 'Python',
          profesor : 'Estefano Bodeant',
          fechaInicio : new Date(2021, 5 , 28),
          fechaFin : new Date(2023, 1, 8),
          notaActual : 8,
          aprobado : true
        },
        {
          index : 7,
          nombre : 'Matias',
          apellido : 'Videla',
          curso : 'React',
          profesor : 'Agustin Ferrari',
          fechaInicio : new Date(2022, 6 , 15),
          fechaFin : new Date(2023, 3, 7),
          notaActual : 5,
          aprobado : false
        },
        {
          index : 8,
          nombre : 'Camila',
          apellido : 'Pascales',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 6 , 15),
          fechaFin : new Date(2023, 3, 7),
          notaActual : 8,
          aprobado : true
        },
        {
          index : 9,
          nombre : 'Tomas',
          apellido : 'Hernandez',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 9,
          aprobado : true
        },
        {
          index : 10,
          nombre : 'Linda',
          apellido : 'Martinez',
          curso : 'Java',
          profesor : 'Martina Ferreira',
          fechaInicio : new Date(2022, 5 , 2),
          fechaFin : new Date(2023, 2, 25),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 11,
          nombre : 'Melissa',
          apellido : 'Argento',
          curso : 'Javascript',
          profesor : 'Martin Delgado',
          fechaInicio : new Date(2023, 1 , 12),
          fechaFin : new Date(2023, 7, 8),
          notaActual : 4,
          aprobado : false
        },
        {
          index : 12,
          nombre : 'Agustin',
          apellido : 'Rodriguez',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 2,
          aprobado : false
        },
        {
          index : 13,
          nombre : 'Tomas',
          apellido : 'Figueredo',
          curso : 'Javascript',
          profesor : 'Martin Delgado',
          fechaInicio : new Date(2023, 1 , 12),
          fechaFin : new Date(2023, 7, 8),
          notaActual : 7,
          aprobado : true
        },
        {
          index : 14,
          nombre : 'Miranda',
          apellido : 'Del Moro',
          curso : 'NodeJs',
          profesor : 'Maximo Peres',
          fechaInicio : new Date(2023, 1 , 7),
          fechaFin : new Date(2023, 6, 24),
          notaActual : 8,
          aprobado : true
        },
        {
          index : 15,
          nombre : 'Abigail',
          apellido : 'Miranda',
          curso : 'Java',
          profesor : 'Martina Ferreira',
          fechaInicio : new Date(2022, 5 , 2),
          fechaFin : new Date(2023, 2, 25),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 16,
          nombre : 'Ernesto',
          apellido : 'Muller',
          curso : 'C++',
          profesor : 'Victoria Mendez',
          fechaInicio : new Date(2022, 6 , 12),
          fechaFin : new Date(2023, 3, 22),
          notaActual : 4,
          aprobado : false
        },
        {
          index : 17,
          nombre : 'Maria',
          apellido : 'Spinneta',
          curso : 'Python',
          profesor : 'Estefano Bodeant',
          fechaInicio : new Date(2021, 5 , 28),
          fechaFin : new Date(2023, 1, 8),
          notaActual : 6,
          aprobado : true
        },
        {
          index : 18,
          nombre : 'Jennifer',
          apellido : 'Miguez',
          curso : 'C++',
          profesor : 'Victoria Mendez',
          fechaInicio : new Date(2022, 6 , 12),
          fechaFin : new Date(2023, 3, 22),
          notaActual : 8,
          aprobado : true
        },
        {
          index : 19,
          nombre : 'Miguel',
          apellido : 'SanchezAranda',
          curso : 'React',
          profesor : 'Agustin Ferrari',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 6,
          aprobado : true
        },
        {
          index : 20,
          nombre : 'Martin',
          apellido : 'Venegas',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 7,
          aprobado : true
        },
        {
          index : 21,
          nombre : 'Tomas',
          apellido : 'Fernandez',
          curso : 'Java',
          profesor : 'Martina Ferreira',
          fechaInicio : new Date(2022, 5 , 2),
          fechaFin : new Date(2023, 2, 25),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 22,
          nombre : 'Micaela',
          apellido : 'Martinez',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 10,
          aprobado : true
        },
        {
          index : 23,
          nombre : 'Federico',
          apellido : 'Ribas',
          curso : 'Javascript',
          profesor : 'Martin Delgado',
          fechaInicio : new Date(2023, 1 , 12),
          fechaFin : new Date(2023, 7, 8),
          notaActual : 7,
          aprobado : true
        },
        {
          index : 24,
          nombre : 'Paola',
          apellido : 'Moya',
          curso : 'Angular',
          profesor : 'Luciano SanchezAranda',
          fechaInicio : new Date(2022, 7 , 24),
          fechaFin : new Date(2023, 6, 4),
          notaActual : 4,
          aprobado : false
        },
        {
          index : 25,
          nombre : 'Celina',
          apellido : 'Delgado',
          curso : 'NodeJs',
          profesor : 'Maximo Perez',
          fechaInicio : new Date(2023, 1 , 7),
          fechaFin : new Date(2023, 6, 24),
          notaActual : 6,
          aprobado : true
        }
      ]

  private alumnos$!: BehaviorSubject<Alumno[]>;
  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);
  }

  obtenerAlumnosObservable(): Observable<Alumno[]>{
    return this.alumnos$.asObservable();
  }

  obtenerAlumnos(){
    return this.alumnos
  }

  delete(index : number){
    this.alumnos.splice(index, 1)
    console.log(this.alumnos);
    console.log(`elemento con index ${index} eliminado`);
  }
}