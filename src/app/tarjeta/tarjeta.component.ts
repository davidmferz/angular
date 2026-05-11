// TarjetaComponent - Semana 3.
// Componente standalone que recibe nombre y edad como signal-based inputs
// (input.required<T>()) y muestra una etiqueta calculada con @switch según
// el rango de edad. Sirve para enseñar composición de componentes y la
// nueva sintaxis de control de flujo en templates.
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  readonly nombre = input.required<string>();
  readonly edad = input.required<number>();
}
