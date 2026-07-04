import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../../models/juego';
import { JuegosService } from '../../servicio/juegos.service';

@Component({
  selector: 'app-juego-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego-card.html',
  styleUrl: './juego-card.scss',
})
export class JuegoCard {
  @Input() juego!: Juego;
  @Input() modoFavoritos: boolean = false; // true = viene de la página Favoritos

  mostrarModal = signal(false);

  constructor(private juegosService: JuegosService) { }

  esFavorito(): boolean {
    return this.juegosService.esFavorito(this.juego.id);
  }

  toggleFavorito(): void {
    if (this.esFavorito()) {
      this.juegosService.quitarFavorito(this.juego.id);
    } else {
      this.juegosService.agregarFavorito(this.juego);
    }
  }

  abrirModal(): void {
    this.mostrarModal.set(true);
  }

  cerrarModal(): void {
    this.mostrarModal.set(false);
  }
}