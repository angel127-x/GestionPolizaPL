import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { UsuarioAuth } from '../models/usuario-auth';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:5107/api/Auth/Login';

  private currentUser = signal<UsuarioAuth | null>(null);
  private token = signal<string | null>(null);

  user = this.currentUser.asReadonly();
  isAutenticated = computed(() => !!this.currentUser());

  constructor() {
    this.loadAuthState();
    
    effect(() => {
      const user = this.currentUser();
      const token = this.token();

      if(user && token){
        localStorage.setItem('auth_user', JSON.stringify(user));
        localStorage.setItem('auth_token', token);
      }else{
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
      }
    })
  }

  login(correo: string, contraseña: string):Observable<UsuarioAuth> {
    return this.http.post<any>(`${this.API_URL}`, { correo, contraseña }).pipe(
      map( result => result as UsuarioAuth),
      tap(result => {
        this.currentUser.set(result);
        this.token.set(result.token);
      })
    )
  }

  private loadAuthState() {
    try {
      const storedUser = localStorage.getItem('auth_user');
      const storedToken = localStorage.getItem('auth_token');

      if (storedUser) {
        this.currentUser.set(JSON.parse(storedUser));
        this.token.set(storedToken);
      }
    } catch (error) {
      console.log('no se encontro ningun usuario');
    }
  }
}
