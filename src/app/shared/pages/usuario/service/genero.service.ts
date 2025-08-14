import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Genero } from '../models/genero';
import { Result } from '../../../../core/models/result';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:5107/api/Genero/GeneroGetAll';

  state = signal({
    genero: new Map<number, Genero>(),
  });

  constructor() {
    this.generoGetAll();
  }

  getFormattedGenero() {
    return Array.from(this.state().genero.values());
  }

  generoGetAll(): void {
    this.http
      .get<Result>(`${this.API_URL}`)
      .pipe(map((result) => result.objects))
      .subscribe({
        next: (generos: Genero[]) => {
          generos.forEach((genero) => {
            this.state().genero.set(genero.idGenero, genero);
          });
          this.state.set({ genero: this.state().genero });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
