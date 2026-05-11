---
marp: true
theme: default
class: invert
paginate: true
size: 16:9
---

# Curso de Angular 21
## Semana 3 — Componentes y nueva sintaxis de templates

Prof. David Ferz

---

## Tema

**Composición de componentes y control de flujo moderno**

- Segundo componente standalone: `TarjetaComponent`
- **Signal-based inputs**: `input.required<T>()`
- Iteración con `@for` y `track`
- Selección múltiple con `@switch`
- Carga diferida con `@defer (on viewport)`

---

## Objetivo

Al finalizar la sesión, el alumno será capaz de:

1. Crear un **componente standalone hijo** y consumirlo desde otro componente.
2. Pasar datos al hijo usando **`input.required`** (signal-based).
3. Renderizar una colección con **`@for`** y entender por qué `track` es obligatorio.
4. Mostrar contenido condicional múltiple con **`@switch`** según rangos de edad.
5. Diferir la carga de una sección con **`@defer`** y reducir el bundle inicial.

---

## Lo que vamos a ver corriendo en clase

- Lista de **5 personas** definida como `signal<Persona[]>` en `app.ts`.
- Grid de tarjetas, una por persona, generadas con `@for`.
- Cada tarjeta muestra una **etiqueta** según la edad:
  - **Joven** (menor de 18)
  - **Adulto** (18 a 60)
  - **Senior** (mayor de 60)
- El grid solo se carga al hacer **scroll** hasta él (`@defer (on viewport)`).
- En DevTools veremos un **chunk lazy** para el TarjetaComponent.

> Código completo: rama `semana3`.

---

## Conceptos clave

- **Standalone component**: no necesita `NgModule`; se importa directo.
- **Signal input**: el padre pasa el valor, el hijo lo lee como `nombre()`.
- **`@for ... track`**: identifica cada elemento para reconciliación eficiente.
- **`@switch`**: equivalente moderno a `*ngSwitch`, sin directiva estructural.
- **`@defer`**: carga diferida nativa, sin librerías externas.

---

## Código — `app.ts` (padre)

```ts
import { Component, signal } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

interface Persona { nombre: string; edad: number; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaComponent],          // ← se importa el hijo
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly personas = signal<Persona[]>([
    { nombre: 'Lucía Ramírez',  edad: 15 },
    { nombre: 'Carlos Mendoza', edad: 27 },
    { nombre: 'Ana Torres',     edad: 42 },
    { nombre: 'Pedro Salinas',  edad: 65 },
    { nombre: 'Mariana López',  edad: 19 }
  ]);
}
```

- En **standalone**, los componentes hijos van en `imports`.
- `signal<Persona[]>([...])` mantiene la colección reactiva.

---

## Código — `tarjeta.component.ts` (hijo)

```ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  readonly nombre = input.required<string>();
  readonly edad   = input.required<number>();
}
```

- `input.required<T>()` → **input obligatorio** basado en signals.
- En el hijo se leen como `nombre()` y `edad()` (con paréntesis).

---

## Código — `app.html` (grid con `@for` y `@defer`)

```html
<section class="personas-panel">
  <h3>Personas</h3>

  @defer (on viewport) {
    <div class="grid-tarjetas">
      @for (persona of personas(); track persona.nombre) {
        <app-tarjeta
          [nombre]="persona.nombre"
          [edad]="persona.edad" />
      }
    </div>
  } @placeholder {
    <p>Desplázate para cargar las tarjetas…</p>
  } @loading (minimum 200ms) {
    <p>Cargando tarjetas…</p>
  }
</section>
```

- `track persona.nombre` es **obligatorio** en `@for`.
- `@defer (on viewport)` carga el bloque cuando entra en pantalla.

---

## Código — `tarjeta.component.html` (`@switch`)

```html
<article class="tarjeta">
  <h4>{{ nombre() }}</h4>
  <p>Edad: {{ edad() }} años</p>

  @switch (true) {
    @case (edad() < 18) {
      <span class="etiqueta etiqueta-joven">Joven</span>
    }
    @case (edad() >= 18 && edad() <= 60) {
      <span class="etiqueta etiqueta-adulto">Adulto</span>
    }
    @case (edad() > 60) {
      <span class="etiqueta etiqueta-senior">Senior</span>
    }
  }
</article>
```

- Truco didáctico: `@switch (true)` permite usar **rangos** como `@case`.

---

## `@defer` en DevTools

Lo que pueden ver los alumnos abriendo **Network** en Chrome:

1. Al cargar la página → **NO** se descarga el JS de `TarjetaComponent`.
2. Al hacer scroll y llegar al panel → aparece un **chunk lazy** nuevo.
3. La página inicial pesa menos → **Largest Contentful Paint** mejora.

> `@defer` es **una sola línea** y reemplaza configuración compleja de lazy-loading.

---

## ¿Qué llevarse de hoy?

1. Componer apps en **componentes pequeños** y reutilizables.
2. `input.required<T>()` para inputs **tipados y obligatorios**.
3. `@for ... track` para listas eficientes (¡el `track` es obligatorio!).
4. `@switch` para condicionales múltiples, incluso por **rangos**.
5. `@defer (on viewport)` para **lazy-load nativo** sin configuración extra.

---

# ¿Preguntas?

¡Hagamos scroll y veamos el lazy-load!
