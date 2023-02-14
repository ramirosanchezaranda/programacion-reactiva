import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      nombre: 'Angular',
      profesor : 'Luciano SanchezAranda',
      inscripcionAbierta: true,
      img : 'https://i0.wp.com/www.comsoft-mexico.com/wp-content/uploads/2020/03/AngularLogo.jpg?fit=1200%2C675&ssl=1'
    },
    {
      nombre: 'Python',
      profesor: 'Estefano Bodeant',
      inscripcionAbierta: false,
      img : 'https://nodd3r.com/media/blog/python_portada_ZBL6qDK.png'
    },
    {
      nombre: 'React', 
      profesor: 'Agustin Ferrari',
      inscripcionAbierta: false,
      img : 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg'
    },
    {
      nombre: 'Java', 
      profesor: 'Martina Ferreira',
      inscripcionAbierta: true,
      img : 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png'
    },
    {
      nombre: 'Javascript', 
      profesor: 'Martin Delgado',
      inscripcionAbierta: true,
      img : 'https://ih1.redbubble.net/image.316760221.5828/st,small,507x507-pad,600x600,f8f8f8.u1.jpg'
    },
    {
      nombre: 'MySQL', 
      profesor: 'Tomas Valverde',
      inscripcionAbierta: true,
      img : 'https://t1.uc.ltmcdn.com/es/posts/2/2/8/como_instalar_mysql_en_windows_23822_orig.jpg'
    },
    {
      nombre: 'NodeJs', 
      profesor: 'Maximo Perez',
      inscripcionAbierta: false,
      img : 'data:image/png;base64,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'
    },
    {
      nombre: 'C++', 
      profesor: 'Victoria Mendez',
      inscripcionAbierta: true,
      img : 'https://2.bp.blogspot.com/-DrHDBZWMWC0/WyLLvXElCpI/AAAAAAAAACg/BpyMuVGLcaQJ3ur3HgsVqcgZ_di2-Qb1QCLcBGAs/s1600/c-plus-plus-logo.png'
    },


  ];
  private cursos$!: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }

  obtenerCursosPromise(): Promise<Curso[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject([]);
      }
    });
  }
  
  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

}