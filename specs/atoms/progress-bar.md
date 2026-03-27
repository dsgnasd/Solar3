# Progress Bar — Solar3 Design System

> Source: Figma → Component "Progress bar"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Горизонтальная полоса прогресса с градиентным индикатором. Пять семантических состояний, каждое с уникальным цветом градиента.

---

## Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Accent`, `Success`, `In progress`, `Error`, `Disabled` | `Accent` |
| `value` | `0–100` (%) | — |

---

## Размеры

| Property | Value | Token |
|----------|-------|-------|
| Height | `10px` | — |
| Width | `fluid (100%)` | — |
| Border Radius | `9999px` | `--radius-full` |

---

## Анатомия

```
┌─ .progress-bar (wrapper, 10px, pill) ─────────────────────┐
│  ┌─ .progress-bar__track (абс. фон #f2f2f2) ─────────────┐│
│  │  ┌─ .progress-bar__indicator (градиент, ширина value%) ┐││
│  │  └──────────────────────────────────────────────────────┘││
│  │  (inset shadow overlay поверх всего)                    ││
│  └─────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────--┘
```

- **Track** — фоновый слой, цвет `var(--color-surface-default, #f2f2f2)`
- **Indicator** — заливка шириной `value%`, вертикальный градиент (top → bottom)
- **Inset shadow** — поверх всего: `inset 0px 0px 4px 0px rgba(0,0,0,0.06)` — даёт глубину

---

## States & Indicator Gradients

| State | Gradient from (top) | Gradient to (bottom) | Stop |
|-------|---------------------|----------------------|------|
| `Accent` | `var(--color-primary-300, #d9c8a5)` | `var(--color-primary-600, #aa9262)` | `115%` |
| `Success` | `var(--color-success-300, #90c5ac)` | `var(--color-success-700, #307359)` | `200%` |
| `In progress` | `var(--color-warning-200, #edd79b)` | `var(--color-warning-400, #e3bb61)` | `115%` |
| `Error` | `var(--color-error-300, #fca5a6)` | `var(--color-error-500, #f3404c)` | `195%` |
| `Disabled` | `var(--color-neutral-200, #e6e6e6)` | `var(--color-neutral-500, #b2b2b2)` | `115%` |

> Направление градиента — `to bottom` (вертикальный). Второй стоп выходит за 100% — это намеренно, создаёт мягкое нарастание цвета.

---

## Info строка (опционально)

Над баром может располагаться строка с подписями — левый текст (процент) и правый (статус).

| Элемент | Типографика | Цвет |
|---------|-------------|------|
| Левый текст (процент) | Body 1 fix / Medium, 14px, 500 | `var(--color-text-primary)` |
| Правый текст (статус) | Body 1 fix / Regular, 14px, 400 | `var(--color-text-secondary)` |

---

## CSS Implementation

```css
/* ─── Wrapper ───────────────────────────────────────────── */
.progress-bar {
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: var(--radius-full, 9999px);
  overflow: hidden;
}

/* ─── Track (фон) ───────────────────────────────────────── */
.progress-bar__track {
  position: absolute;
  inset: 0;
  background: var(--color-surface-default, #f2f2f2);
  border-radius: inherit;
}

/* ─── Indicator (заливка) ────────────────────────────────── */
.progress-bar__indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--progress, 0%); /* управляется через inline style или CSS var */
  border-radius: inherit;
  transition: width var(--duration-slow) var(--easing-default);
}

/* ─── Inset shadow overlay ───────────────────────────────── */
.progress-bar::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.06);
  pointer-events: none;
}

/* ─── State gradients ────────────────────────────────────── */
.progress-bar--accent .progress-bar__indicator {
  background: linear-gradient(
    to bottom,
    var(--color-primary-300, #d9c8a5) 0%,
    var(--color-primary-600, #aa9262) 115%
  );
}

.progress-bar--success .progress-bar__indicator {
  background: linear-gradient(
    to bottom,
    var(--color-success-300, #90c5ac) 0%,
    var(--color-success-700, #307359) 200%
  );
}

.progress-bar--in-progress .progress-bar__indicator {
  background: linear-gradient(
    to bottom,
    var(--color-warning-200, #edd79b) 0%,
    var(--color-warning-400, #e3bb61) 115%
  );
}

.progress-bar--error .progress-bar__indicator {
  background: linear-gradient(
    to bottom,
    var(--color-error-300, #fca5a6) 0%,
    var(--color-error-500, #f3404c) 195%
  );
}

.progress-bar--disabled .progress-bar__indicator {
  background: linear-gradient(
    to bottom,
    var(--color-neutral-200, #e6e6e6) 0%,
    var(--color-neutral-500, #b2b2b2) 115%
  );
}

/* ─── Info строка ────────────────────────────────────────── */
.progress-bar-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.progress-bar-info__left {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  color: var(--color-text-primary);
}

.progress-bar-info__right {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  color: var(--color-text-secondary);
}
```

---

## HTML

```html
<!-- Простой (без info) -->
<div
  class="progress-bar progress-bar--accent"
  role="progressbar"
  aria-valuenow="20"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Прогресс"
>
  <div class="progress-bar__track"></div>
  <div class="progress-bar__indicator" style="--progress: 20%"></div>
</div>

<!-- С info строкой -->
<div>
  <div class="progress-bar-info">
    <span class="progress-bar-info__left">20%</span>
    <span class="progress-bar-info__right">In progress</span>
  </div>
  <div
    class="progress-bar progress-bar--in-progress"
    role="progressbar"
    aria-valuenow="20"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-bar__track"></div>
    <div class="progress-bar__indicator" style="--progress: 20%"></div>
  </div>
</div>

<!-- Success -->
<div class="progress-bar progress-bar--success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar__track"></div>
  <div class="progress-bar__indicator" style="--progress: 75%"></div>
</div>

<!-- Error -->
<div class="progress-bar progress-bar--error" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar__track"></div>
  <div class="progress-bar__indicator" style="--progress: 40%"></div>
</div>

<!-- Disabled -->
<div class="progress-bar progress-bar--disabled" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" aria-disabled="true">
  <div class="progress-bar__track"></div>
  <div class="progress-bar__indicator" style="--progress: 30%"></div>
</div>
```

---

## Rules for AI assistants

- ✅ Ширина индикатора управляется через CSS-переменную `--progress` или `width` в `style` — не через классы.
- ✅ Inset shadow (`rgba(0,0,0,0.06)`) применяется через `::after` поверх всего — создаёт эффект вдавленности.
- ✅ Градиент всегда вертикальный (`to bottom`), даже если бар горизонтальный.
- ✅ Второй стоп градиента может выходить за `100%` (115%, 195%, 200%) — это намеренно для плавности.
- ✅ Всегда добавлять `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- ✅ `Disabled` — добавить `aria-disabled="true"`, убрать анимацию перехода если нужно.
- ❌ Не использовать нативный `<progress>` элемент — стилизовать кастомный div.
- ❌ Не добавлять border к компоненту — визуальная граница достигается только через inset shadow.
- ❌ Не менять направление градиента на `to right` — градиент строго вертикальный.
