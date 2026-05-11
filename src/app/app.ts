// Componente raíz - Semana 3.
// Mantiene la demo de signals de la Semana 2 y agrega una lista de
// personas como signal<Persona[]> que se renderiza con @for usando
// TarjetaComponent. La lista se carga de forma diferida con @defer.
import { Component, computed, effect, signal } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

interface Persona {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal<string>('Mi primera app Angular');
  protected readonly autor = signal<string>('Prof. David Ferz');

  protected readonly contador = signal<number>(0);
  protected readonly doble = computed<number>(() => this.contador() * 2);

  protected readonly personas = signal<Persona[]>([
    { nombre: 'Lucía Ramírez', edad: 15 },
    { nombre: 'Carlos Mendoza', edad: 27 },
    { nombre: 'Ana Torres', edad: 42 },
    { nombre: 'Pedro Salinas', edad: 65 },
    { nombre: 'Mariana López', edad: 19 }
  ]);

  constructor() {
    effect(() => {
      console.log('[effect] contador cambió a:', this.contador());
    });
  }

  protected incrementar(): void {
    this.contador.update(valor => valor + 1);
  }

  protected decrementar(): void {
    this.contador.set(this.contador() - 1);
  }
}
