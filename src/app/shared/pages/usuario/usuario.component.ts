import { Component, computed, inject, Signal } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { Usuario } from './models/usuario';
import { UsuarioListaComponent } from "./usuario-lista/usuario-lista.component";

@Component({
  selector: 'app-usuario',
  imports: [UsuarioListaComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
})
export class UsuarioComponent {
  usuarioService = inject(UsuarioService);

  listaUsuario: Signal<Usuario[] | undefined> = computed(() =>
    this.usuarioService.getFormattedProducto()
  );

}
