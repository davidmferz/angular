---
marp: true
theme: default
class: invert
paginate: true
size: 16:9
---

# Curso de Angular 21
## Semana 2 — Signals y reactividad

Prof. David Ferz

---

## Tema

**El modelo reactivo de Angular 21 basado en Signals**

- `signal()` — estado escribible
- `computed()` — estado derivado
- `effect()` — efectos secundarios reactivos
- Métodos `.set()` y `.update()`
- Sintaxis de control de flujo: `@if`

---

## Objetivo

Al finalizar la sesión, el alumno será capaz de:

1. Crear una **signal** numérica y mostrar su valor en el template.
2. Derivar valores con **`computed()`** sin escribir lógica duplicada.
3. Reaccionar a cambios con **`effect()`** (logging, sincronización, etc.).
4. Modificar el estado con `.set()` y `.update()` desde eventos `(click)`.
5. Mostrar contenido condicional con **`@if`** según el valor de una signal.

---

## Lo que vamos a ver corriendo en clase

- Misma app de Semana 1, ahora con un panel de **contador** interactivo.
- Botones **Incrementar** y **Decrementar** que cambian el valor.
- Etiqueta **"Doble"** que se actualiza sola al cambiar el contador.
- Mensaje **"¡Llegaste a 10!"** que aparece solo cuando el contador vale 10.
- Logs en la consola del navegador cada vez que el contador cambia.

> Código completo: rama `semana2`.

---

## Conceptos clave

- **Signal**: contenedor de un valor que notifica a quien lo consume.
- **Computed**: signal que se recalcula automáticamente.
- **Effect**: ejecuta código cuando cambian las signals que lee.
- **`@if`**: nueva sintaxis nativa de Angular para condicionales.

---

## Código — `app.ts` (nuevo estado reactivo)

```ts
import { Component, computed, effect, signal } from '@angular/core';

export class App {
  // … título y autor de Semana 1

  protected readonly contador = signal<number>(0);
  protected readonly doble    = computed<number>(() => this.contador() * 2);

  constructor() {
    effect(() => {
      console.log('[effect] contador cambió a:', this.contador());
    });
  }
}
```

- `computed()` se recalcula **solo** cuando cambia algo que lee.
- `effect()` se dispara automáticamente al cambiar `contador()`.

---

## Código — `app.ts` (mutadores)

```ts
protected incrementar(): void {
  this.contador.update(valor => valor + 1);
}

protected decrementar(): void {
  this.contador.set(this.contador() - 1);
}
```

### `set()` vs `update()`

| Método      | Cuándo usarlo                                                    |
| ----------- | ---------------------------------------------------------------- |
| `set(v)`    | Cuando ya tienes el **valor final**.                              |
| `update(f)` | Cuando el nuevo valor **depende del actual** (transformación).    |

---

## Código — `app.html` (panel del contador)

```html
<section class="contador-panel">
  <h3>Demo de Signals</h3>

  <p>Contador: <strong>{{ contador() }}</strong></p>
  <p>Doble:    <strong>{{ doble() }}</strong></p>

  <button (click)="incrementar()">Incrementar</button>
  <button (click)="decrementar()">Decrementar</button>

  @if (contador() === 10) {
    <p class="mensaje-meta">¡Llegaste a 10!</p>
  }
</section>
```

- `(click)` enlaza un evento del DOM a un método del componente.
- `@if` reemplaza a `*ngIf` — **bloque nativo**, sin asterisco ni directiva.

---

## Flujo reactivo en acción

```
click "Incrementar"
        │
        ▼
contador.update(v => v + 1)        ← cambia la signal
        │
   ┌────┴────────────────────┐
   ▼                         ▼
doble se recalcula      effect() registra
   │                         │
   ▼                         ▼
template re-renderiza   console.log(...)
```

> Tú solo declaras **qué depende de qué**. Angular se encarga del resto.

---

## ¿Qué llevarse de hoy?

1. `signal()` para estado **escribible**, `computed()` para **derivado**.
2. `effect()` para reaccionar a cambios (logs, side-effects, persistencia…).
3. `.set(v)` cuando ya tienes el valor; `.update(f)` cuando depende del actual.
4. `@if` es la nueva sintaxis nativa — sin `*ngIf` ni `CommonModule`.
5. Todo el grafo reactivo se actualiza **solo**: cero llamadas manuales.

---

# ¿Preguntas?

¡Hagamos clic en los botones!
