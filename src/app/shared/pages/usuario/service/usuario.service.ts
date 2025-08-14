import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Result } from '../../../../core/models/result';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private http = inject(HttpClient);
  private API_URL = "http://localhost:5107/api/Usuario/"

  state = signal({
    usuario: new Map<number, Usuario>()
  })

  getFormattedProducto(){
    return Array.from(this.state().usuario.values())
  }

  constructor(){
    this.usuarioGetAll()
  }

  // usuarioGetAll(): Observable<Usuario[]>{
  //   return this.http.get<Result>(`${this.API_URL}UsuarioGetAll`).pipe(
  //     map(result => result.objects)
  //   )
  // }

  usuarioGetAll(): void{
    this.http.get<Result>(`${this.API_URL}UsuarioGetAll`).pipe(
      map(result => result.objects)
    ).subscribe({
      next: (usuarios: Usuario[]) => {
        usuarios.forEach(usuario => {
          this.state().usuario.set(usuario.idUsuario, usuario)
        })
        this.state.set({usuario: this.state().usuario})
      }
    })
  }

  // usuarioAdd(){
  //   this.http.post<Result>(`${this.API_URL}UsuarioAdd`)
  // }

}
