import { Component, inject, input } from '@angular/core';
import { InputComponent } from "../../../shared/components/input/input.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemForm } from '../models/item-form';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  formGroup = input.required<FormGroup<ItemForm>>()
  private authService = inject(AuthService)
  private router = inject(Router)


  enviarForm(){
    const {correo, contrasenia} = this.formGroup().value
    if(correo != null && contrasenia != null){
      this.authService.login(correo, contrasenia).subscribe({
        next: result => {
          console.log(result)
          this.router.navigate(['/page'])
        },
        error: error => console.log(error)
      })
    }
  }

  // enviarForm(){
  //   console.log(this.formGroup().value)
  // }
}
