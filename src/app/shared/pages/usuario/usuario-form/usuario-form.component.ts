import { Component, computed, inject, Signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsuarioForm } from '../models/usuario-form';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioFormChildComponent } from "./usuario-form-child/usuario-form-child.component";
import { RolService } from '../service/rol.service';
import { Rol } from '../models/rol';

export type CustomFormGroup = FormGroup<UsuarioForm>

@Component({
  selector: 'app-usuario-form',
  imports: [ReactiveFormsModule, UsuarioFormChildComponent],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {
  athService = inject(UsuarioService)
  rolService = inject(RolService)

  fb = inject(NonNullableFormBuilder)

  listaRol: Signal<Rol[] | undefined> = computed(() => this.rolService.getFormattedRol())

  form: FormGroup<{items: FormArray<CustomFormGroup>}> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([])
  })

  constructor(){
    const itemForm = this.fb.group<UsuarioForm>({
      idUsuario: this.fb.control(0),
      nombre: this.fb.control(''),
      apellidoPaterno: this.fb.control(''),
      apellidoMaterno: this.fb.control(''),
      imagenByte: this.fb.control(''),
      correo: this.fb.control(''),
      contrasena: this.fb.control(''),
      telefono: this.fb.control(''),
      fechaDeNacimiento: this.fb.control(''),
      rol: this.fb.group({
        idRol: this.fb.control(0),
        nombreRol: this.fb.control('')
      }),
      genero: this.fb.group({
        idGenero: this.fb.control(0),
        nombreGenero: this.fb.control('')
      }),
      direccion: this.fb.group({
        idDireccion: this.fb.control(0),
        calle: this.fb.control(''),
        numeroInterior: this.fb.control(''),
        numeroExterior: this.fb.control(''),
        colonia: this.fb.group({
          idColonia: this.fb.control(0),
          nombreColonia: this.fb.control(''),
          codigoPostal: this.fb.control(''),
          municipio: this.fb.group({
            idMunicipio: this.fb.control(0),
            nombreMunicipio: this.fb.control(''),
            estado: this.fb.group({
              idEstado: this.fb.control(0),
              nombreEstado: this.fb.control(''),
              pais: this.fb.group({
                idPais: this.fb.control(0),
                nombrePais: this.fb.control('')
              })
            })
          })
        })
      })
    })

    this.form.controls.items.push(itemForm)
  }
}
