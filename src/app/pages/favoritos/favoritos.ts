import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosService } from '../../servicio/juegos.service';
import { JuegoCard } from '../../components/juego-card/juego-card';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, JuegoCard],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.scss'
})
export class Favoritos {

  constructor(private juegosService: JuegosService) { }

  get favoritos() {
    return this.juegosService.favoritos();
  }
}