# Diapositivas — Curso Angular 21

Las diapositivas están escritas en **Markdown con front-matter de [Marp](https://marp.app/)**. Cada archivo corresponde a una semana del curso y contiene únicamente **tema** y **objetivo**; el código se muestra en vivo en Visual Studio Code desde la rama correspondiente del repositorio.

## Cómo presentar

### Opción A: VS Code (recomendado)

1. Instala la extensión **Marp for VS Code** (`marp-team.marp-vscode`).
2. Abre el archivo `semanaN.md`.
3. Pulsa el botón **"Open Preview to the Side"** o usa el icono de Marp para entrar en modo presentación / exportar a PDF/HTML/PPTX.

### Opción B: CLI

```bash
npx @marp-team/marp-cli docs/diapositivas/semana1.md --html
npx @marp-team/marp-cli docs/diapositivas/semana2.md --pdf
npx @marp-team/marp-cli docs/diapositivas/semana3.md --pptx
```

## Cómo navegar el código en clase

```bash
git checkout semana1   # estado al finalizar la Semana 1
git checkout semana2   # estado al finalizar la Semana 2
git checkout semana3   # estado al finalizar la Semana 3
```

Para volver a la rama de trabajo:

```bash
git checkout claude/angular-course-code-generation-QStVy
```

## Coherencia diapositiva ↔ código

| Diapositiva                    | Archivos clave en el repo                                    | Rama git   |
| ------------------------------ | ------------------------------------------------------------ | ---------- |
| Semana 1 — primer componente   | `src/app/app.ts`, `app.html`, `app.css`                      | `semana1`  |
| Semana 2 — signals y reactividad | + contador / doble / effect en los mismos archivos          | `semana2`  |
| Semana 3 — componentes + control de flujo | + `src/app/tarjeta/tarjeta.component.{ts,html,css}` | `semana3`  |
