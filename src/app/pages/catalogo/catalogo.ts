import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../../models/juego';
import { JuegosService } from '../../servicio/juegos.service';
import { JuegoCard } from '../../components/juego-card/juego-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, JuegoCard],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class Catalogo implements OnInit {

  juegos = signal<Juego[]>([]);
  cargando = signal<boolean>(true);

  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe({
      next: (data) => {
        this.juegos.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al traer juegos', err);
        this.cargando.set(false);
      }
    });
  }
}