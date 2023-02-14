import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from 'src/components/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from 'src/components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ListComponent } from 'src/components/list/list.component';
import { DateFormatPipe } from 'src/pipes/date-format.pipe';
import { NotePipe } from 'src/pipes/note.pipe';
import { StyleDirective } from 'src/directives/style.directive';
import { StyleNoteDirective } from 'src/directives/style-note.directive';
import { NamePipe } from 'src/pipes/name.pipe';
import { TitleDirective } from 'src/directives/title.directive';
import { FormComponent } from 'src/components/form/form.component';
import { EditFormComponent } from 'src/components/edit-form/edit-form.component';
import { ListaCursosComponent } from 'src/components/lista-cursos/lista-cursos.component';
import { AppRoutingModule } from './app-routing.module';
import { ListProfesoresComponent } from 'src/components/lista-profesores/list-profesores.component';
import { AddAlumnFormComponent } from 'src/components/add-alumn-form/add-alumn-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ListComponent,
    DateFormatPipe,
    NotePipe,
    StyleDirective,
    StyleNoteDirective,
    NamePipe,
    TitleDirective,
    FormComponent,
    EditFormComponent,
    ListaCursosComponent,
    ListProfesoresComponent,
    AddAlumnFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
