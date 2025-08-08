import { Component, input } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario-lista',
  imports: [],
  templateUrl: './usuario-lista.component.html',
  styleUrl: './usuario-lista.component.scss'
})
export class UsuarioListaComponent {
  listaUsuario = input<Usuario[]>()
}
