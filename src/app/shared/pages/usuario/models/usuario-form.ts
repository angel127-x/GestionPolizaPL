import { FormControl, FormGroup } from '@angular/forms';
import { DireccionForm } from './direccion-form';

export interface UsuarioForm {
  idUsuario: FormControl<number>;
  nombre: FormControl<string>;
  apellidoPaterno: FormControl<string>;
  apellidoMaterno: FormControl<string>;
  imagenByte: FormControl<string>;
  correo: FormControl<string>;
  contrasena: FormControl<string>;
  telefono: FormControl<string>;
  fechaDeNacimiento: FormControl<string>;
  rol: FormGroup<Rol>;
  genero: FormGroup<Genero>;
  direccion: FormGroup<DireccionForm>;
}

export interface Rol {
  idRol: FormControl<number>;
  nombreRol: FormControl<string>;
}

export interface Genero {
  idGenero: FormControl<number>;
  nombreGenero: FormControl<string>;
}
