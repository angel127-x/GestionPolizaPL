import { Component, inject } from '@angular/core';
import { LoginFormComponent } from "./login-form/login-form.component";
import { FormArray, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ItemForm } from './models/item-form';
import { AuthService } from '../../core/services/auth.service';

export type CustomFormGroup = FormGroup<ItemForm>
@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  fb = inject(NonNullableFormBuilder)
  authService = inject(AuthService)

  form: FormGroup<{items: FormArray<CustomFormGroup>}> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([])
  })

  constructor(){
    const itemForm = this.fb.group<ItemForm>({
      correo: this.fb.control("", {validators: [Validators.required]}),
      contrasenia: this.fb.control("", {validators: [Validators.required]})
    })

    this.form.controls.items.push(itemForm)
  }

}
