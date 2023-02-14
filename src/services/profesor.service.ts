import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Profesor } from 'src/models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private profesores: Profesor[] = [
    {
      nombre: 'Luciano SanchezAranda',
      cursoADictar : 'Angular',
      email : 'lucianoSanchezAranda@gmail.com',
      img : 'https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg?w=2000'
    },
    {
        nombre: 'Estefano Bodeant',
        cursoADictar : 'Python',
        email : 'estefanobodeant@gmail.com',
        img : 'https://img.freepik.com/fotos-premium/hombre-feliz-brazos-cruzados_23-2148221706.jpg'
    },
    {
        nombre: 'Agustin Ferrari',
        cursoADictar : 'React',
        email : 'lucianoSanchezAranda@gmail.com',
        img : 'https://media.istockphoto.com/id/980122992/es/foto/retrato-de-joven-mirando-a-cámara-estudio-en-el-fondo-gris.jpg?s=612x612&w=0&k=20&c=LtA9fpcgxPS3rL3NpUg8Nu59cw-hsTxeQf6siFsi1IY='
    },
    {
        nombre: 'Martina Ferreira',
        cursoADictar : 'Java',
        email : 'martinaferreira@gmail.com',
        img : 'https://static01.nyt.com/images/2017/05/07/arts/07GAL-GADOTweb/07GAL-GADOTweb-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    },
    {
        nombre: 'Martin Delgado',
        cursoADictar : 'Javascript',
        email : 'martindelgado@gmail.com',
        img : 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwZXNwYSVDMyVCMW9sfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        nombre: 'Tomas Valverde',
        cursoADictar : 'Angular',
        email : 'tomasvalverde@gmail.com',
        img : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg'
    },
    {
        nombre: 'Maximo Perez',
        cursoADictar : 'NodeJs',
        email : 'maximoperez@gmail.com',
        img : 'https://img.freepik.com/fotos-premium/retrato-joven-guapo-irani-blanco_251136-79676.jpg'
    },
    {
        nombre: 'Victoria Mendez',
        cursoADictar : 'C++',
        email : 'victoriamendez@gmail.com',
        img : 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },


  ];
  private profesores$!: BehaviorSubject<Profesor[]>;

  constructor() {}


  obtenerProfesores(): Promise<Profesor[]>{
    return new Promise((resolve, reject) => {
      if(this.profesores.length > 0){
        resolve(this.profesores);
      }else{
        reject([]);
      }
    });
  }

}