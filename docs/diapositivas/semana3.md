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

> Código completo: tag `semana3`.

---

## Conceptos clave

- **Standalone component**: no necesita `NgModule`; se importa directo.
- **Signal input**: el padre pasa el valor, el hijo lo lee como `nombre()`.
- **`@for ... track`**: identifica cada elemento para reconciliación eficiente.
- **`@switch`**: equivalente moderno a `*ngSwitch`, sin directiva estructural.
- **`@defer`**: carga diferida nativa, sin librerías externas.

---

# ¿Preguntas?

¡Hagamos scroll y veamos el lazy-load!
