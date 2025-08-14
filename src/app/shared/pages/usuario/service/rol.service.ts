import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Result } from '../../../../core/models/result';
import { map } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private http = inject(HttpClient)
  private API_URL = "http://localhost:5107/api/Rol/RolGetAll"

  state = signal({
    rol: new Map<number, Rol>()
  })

  getFormattedRol(){
    return Array.from(this.state().rol.values())
  }

  constructor(){
    this.rolGetAll()
  }


  rolGetAll(): void{
    this.http.get<Result>(`${this.API_URL}`).pipe(
      map(result => result.objects)
    ).subscribe({
      next: (roles: Rol[]) => {
        roles.forEach(rol => {
          this.state().rol.set(rol.idRol, rol)
        })
        this.state.set({rol: this.state().rol})
      }
    })
  }

  
}
