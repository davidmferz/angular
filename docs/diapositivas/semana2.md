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

> Código completo: tag `semana2`.

---

## Conceptos clave

- **Signal**: contenedor de un valor que notifica a quien lo consume.
- **Computed**: signal que se recalcula automáticamente.
- **Effect**: ejecuta código cuando cambian las signals que lee.
- **`@if`**: nueva sintaxis nativa de Angular para condicionales.

---

# ¿Preguntas?

¡Hagamos clic en los botones!
