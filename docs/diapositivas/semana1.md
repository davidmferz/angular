---
marp: true
theme: default
class: invert
paginate: true
size: 16:9
---

# Curso de Angular 21
## Semana 1 — Estructura y primer componente

Prof. David Ferz

---

## Tema

**Fundamentos de Angular 21 y tu primer componente standalone**

- ¿Qué es Angular y por qué usarlo?
- Anatomía de un proyecto generado con Angular CLI
- Componentes standalone (sin NgModules)
- Interpolación `{{ }}` y primer contacto con `signal()`

---

## Objetivo

Al finalizar la sesión, el alumno será capaz de:

1. Entender la estructura de un proyecto Angular 21 generado con la CLI.
2. Identificar los archivos clave de un componente: `.ts`, `.html`, `.css`.
3. Modificar el `AppComponent` para mostrar título, subtítulo y descripción.
4. Declarar su primera propiedad reactiva con `signal()` y enlazarla al template.
5. Aplicar estilos básicos con CSS puro (sin frameworks).

---

## Lo que vamos a ver corriendo en clase

- Proyecto **`semana01`** abierto en Visual Studio Code.
- App ejecutándose en `http://localhost:4200` con `ng serve`.
- Página con fondo oscuro, título destacado y descripción centrada.

> El código completo de esta sesión está en la rama `semana1` del repositorio.

---

## Anatomía del proyecto

```
semana01/
├── angular.json          ← configuración del workspace
├── package.json          ← dependencias y scripts (ng serve…)
├── tsconfig.json         ← compilador TypeScript
└── src/
    ├── main.ts           ← bootstrap de la app
    ├── index.html        ← HTML raíz
    ├── styles.css        ← estilos globales
    └── app/
        ├── app.ts        ← componente raíz (clase + decorador)
        ├── app.html      ← template
        └── app.css       ← estilos del componente
```

> Un componente Angular = **tres archivos** que viven juntos.

---

## Código — `app.ts`

```ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal<string>('Mi primera app Angular');
  protected readonly autor  = signal<string>('Prof. David Ferz');
}
```

- `standalone: true` → **sin NgModule**, se importa directo donde se use.
- `signal<T>(valor)` → estado reactivo desde el día 1.

---

## Código — `app.html`

```html
<main class="contenedor">
  <h1>{{ titulo() }}</h1>
  <h2>Por {{ autor() }}</h2>

  <p>
    Angular es un framework de desarrollo web... basado en
    <strong>Signals</strong>.
  </p>
</main>
```

- Para **leer** una signal en el template se usan **paréntesis**: `titulo()`.
- Es interpolación clásica `{{ }}`, sin magia adicional.

---

## Código — `app.css` (lo esencial)

```css
:host {
  display: block;
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
}

.contenedor {
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;
}

h1 { color: #dd0031; }   /* rojo Angular */
```

- `:host` aplica al **host** del componente raíz.
- Los estilos son **scoped**: no se filtran a otros componentes.

---

## ¿Qué llevarse de hoy?

1. Un proyecto Angular CLI organiza el código por **componentes**.
2. Cada componente tiene su `.ts` + `.html` + `.css`.
3. `standalone: true` reemplaza a los antiguos `NgModule`.
4. `signal()` es la nueva forma idiomática de declarar estado.
5. En el template, una signal se **lee con paréntesis**: `titulo()`.

---

## Recursos

- Documentación oficial: <https://angular.dev>
- CLI: <https://angular.dev/tools/cli>
- Signals: <https://angular.dev/guide/signals>

---

# ¿Preguntas?

¡Vamos al editor!
