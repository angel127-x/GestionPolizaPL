import { Component, input } from '@angular/core';
import { InputComponent } from "../../../../components/input/input.component";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioForm } from '../../models/usuario-form';
import { Rol } from '../../models/rol';
import { Genero } from '../../models/genero';

@Component({
  selector: 'app-usuario-form-child',
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './usuario-form-child.component.html',
  styleUrl: './usuario-form-child.component.scss'
})
export class UsuarioFormChildComponent {
  formGroup = input.required<FormGroup<UsuarioForm>>()
  listaRoles = input.required<Rol[]>()
  listaGenero = input.required<Genero[]>()
  

  changeSelect(event: Event){
    const select = event.target as HTMLSelectElement
    const value = select.value
    this.formGroup().controls.rol.controls.idRol.setValue(Number(value))
    console.log(value)
  }

  enviarForm(){
    console.log(this.formGroup().value)
  }
}
