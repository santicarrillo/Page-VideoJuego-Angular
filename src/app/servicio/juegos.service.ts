import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../models/juego';

@Injectable({
    providedIn: 'root'
})
export class JuegosService {

    private apiUrl = 'https://www.freetogame.com/api/games';

    // signal con la lista de favoritos, compartido por toda la app
    favoritos = signal<Juego[]>([]);

    constructor(private http: HttpClient) { }

    obtenerJuegos(): Observable<Juego[]> {
        return this.http.get<Juego[]>(this.apiUrl);
    }

    agregarFavorito(juego: Juego): void {
        const actuales = this.favoritos();
        const yaExiste = actuales.some(j => j.id === juego.id);
        if (!yaExiste) {
            this.favoritos.set([...actuales, juego]);
        }
    }

    quitarFavorito(id: number): void {
        this.favoritos.set(this.favoritos().filter(j => j.id !== id));
    }

    esFavorito(id: number): boolean {
        return this.favoritos().some(j => j.id === id);
    }
}