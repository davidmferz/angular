// Componente raíz standalone del proyecto semana01.
// Expone el título de la app como signal para demostrar reactividad
// desde la primera clase y se enlaza al template por interpolación.
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal<string>('Mi primera app Angular');
  protected readonly autor = signal<string>('Prof. David Ferz');
}
