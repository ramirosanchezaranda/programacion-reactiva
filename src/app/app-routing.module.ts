import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaCursosComponent } from 'src/components/lista-cursos/lista-cursos.component';
import { ListComponent } from 'src/components/list/list.component';
import { FormComponent } from 'src/components/form/form.component';
import { ListProfesoresComponent } from 'src/components/lista-profesores/list-profesores.component';
import { AddAlumnFormComponent } from 'src/components/add-alumn-form/add-alumn-form.component';

const routes: Routes = [
    {path: '', component: ListaCursosComponent},
    {path: 'alumnos', component: ListComponent},
    {path: 'profesores', component: ListProfesoresComponent},
    {path: 'inscripcion', component: FormComponent},
    {path: 'addAlumn', component : AddAlumnFormComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }
  