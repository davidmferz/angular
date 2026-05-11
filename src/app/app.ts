// Componente raíz - Semana 2.
// Se agrega reactividad con signals: contador (estado), doble (derivado)
// y un effect() que reacciona a cambios. Los botones modifican el estado
// con set() y update().
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal<string>('Mi primera app Angular');
  protected readonly autor = signal<string>('Prof. David Ferz');

  protected readonly contador = signal<number>(0);
  protected readonly doble = computed<number>(() => this.contador() * 2);

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
