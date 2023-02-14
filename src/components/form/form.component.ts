import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formInscripcion: FormGroup;

  constructor(){
    let controles: any = {
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      lastname: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      course: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      acceptTerms: new FormControl(true, [Validators.requiredTrue])
    }
    this.formInscripcion = new FormGroup(controles)
  }
  register(){
    console.log(this.formInscripcion);
  }
}
