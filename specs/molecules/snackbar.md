# Snackbar — Solar3 Design System

> Source: Figma → Component «Snackbar»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Всплывающее уведомление-тост в нижней части экрана. Показывает короткое сообщение и опциональные действия. Автоматически скрывается или закрывается пользователем.

---

## Props

| Prop | Values | Default | Описание |
|------|--------|---------|---------|
| `color` | `Black`, `White` | `Black` | Цветовая схема |
| `showLeftIcon` | `true`, `false` | `true` | Иконка слева |
| `showTitle` | `true`, `false` | `true` | Заголовок |
| `showText` | `true`, `false` | `true` | Основной текст |
| `showDivider` | `true`, `false` | `true` | Вертикальный разделитель |
| `showButton1` | `true`, `false` | `true` | Primary-кнопка (filled gold) |
| `showButton2` | `true`, `false` | `true` | Secondary-кнопка (text) |
| `showRightIcon` | `true`, `false` | `true` | Иконка закрытия × справа |

---

## Размеры

| Property | Value | Token |
|----------|-------|-------|
| Width | `fluid` | — |
| Min height | `~48px` | — |
| Padding X | `16px` | `--sds-size-space-400` |
| Padding Y | `12px` | `--sds-size-space-300` |
| Gap (между секциями) | `16px` | — |
| Border Radius | `12px` | `--radius-md` |

---

## Цветовые схемы

### Black (default)

| Property | Value | Token |
|----------|-------|-------|
| Background | `#1c1c1c` | `var(--color-surface-dark, #1c1c1c)` |
| Text color | `#ffffff` | `var(--color-text-inverse, #ffffff)` |
| Shadow | `0px 1px 2px 0px rgba(68,83,115,0.1), 0px 1px 1px 0px rgba(68,83,115,0.06)` | `Shadow/Default` |
| Button2 text | `#ffffff` | `var(--color-text-inverse, #ffffff)` |
| Divider | `rgba(255,255,255,0.2)` | — |

### White

| Property | Value | Token |
|----------|-------|-------|
| Background | `#ffffff` | `var(--color-surface-raised, #ffffff)` |
| Text color | `#1c1c1c` | `var(--color-text-primary, #1c1c1c)` |
| Shadow | `0px 4px 8px 0px rgba(0,0,0,0.08)` | `Shadow/Dropdown` |
| Button2 text | `#7a6741` | `var(--color-text-accent-secondary, #7a6741)` |
| Divider | `var(--color-border-divider, #e6e6e6)` | — |

---

## Анатомия

```
┌─ .snackbar (flex row, gap 16px, px 16px, py 12px, r 12px) ───────────┐
│  ┌─ .snackbar__left (flex, gap 8px, shrink 0) ──────────────────────┐ │
│  │  [.snackbar__icon 24×24]   ← опционально                         │ │
│  │  ┌─ .snackbar__body (flex col, gap 3px) ──────────────────────┐  │ │
│  │  │  .snackbar__title   ← опционально (H8/SemiBold 16px)       │  │ │
│  │  │  .snackbar__text    ← опционально (Body2/Medium 13px)       │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│  .snackbar__divider (1px, h 35px)   ← опционально                      │
│  ┌─ .snackbar__actions (flex, shrink 0) ────────────────────────────┐  │
│  │  [Button2 text]   [Button1 filled gold]   ← оба опциональны      │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│  [.snackbar__close 20×20]   ← опционально                               │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Иконки (Left icon)

Тип иконки передаётся через `iconType` и влияет только на SVG-изображение.

| Тип (`iconType`) | Описание |
|------|---------|
| `success` | Зелёный круг с галочкой |
| `error-close` | Красный круг с × |
| `error-round` | Красный круг с ! |
| `error-danger` | Красный треугольник с ! |
| `attention-danger` | Жёлтый треугольник с ! |
| `info-accent` | Цветной круг с i |
| `info-grey` | Серый круг с i |
| `loading` | Spinner |

Размер иконки: `24×24px`.

---

## Типографика

| Элемент | Стиль | Размер | Weight | Line-height | Tracking |
|---------|-------|--------|--------|-------------|---------|
| Title | H8 / SemiBold | 16px | 600 | 22px | -0.16px |
| Text | Body2 / Medium | 13px | 500 | 18px | -0.13px |
| Button label | Body2 / SemiBold | 13px | 600 | 18px | -0.13px |

Gap между title и text: `3px`.

---

## Кнопки действий

Обе кнопки в `.snackbar__actions` имеют одинаковые размеры:
- Height: `32px`
- Padding X: `16px`
- Padding Y: `7px`
- Border Radius: `12px`

| Кнопка | Фон | Цвет текста |
|--------|-----|-------------|
| Button1 (Primary) | `var(--color-bg-accent-primary, #bfa369)` | `var(--color-text-inverse, #ffffff)` |
| Button2 (Text) на Black | `transparent` | `var(--color-text-inverse, #ffffff)` |
| Button2 (Text) на White | `transparent` | `var(--color-text-accent-secondary, #7a6741)` |

---

## Варианты контента

Через комбинацию булевых пропов собираются базовые варианты:

| Вариант | showTitle | showText | showButton1 | showButton2 | showRightIcon | showLeftIcon |
|---------|-----------|----------|-------------|-------------|---------------|-------------|
| Clean | ✗ | ✅ | ✗ | ✗ | ✅ | ✗ |
| Subtitle | ✗ | ✅ | ✗ | ✗ | ✅ | ✗ |
| Link Button | ✗ | ✅ | ✗ | ✅ | ✅ | ✗ |
| Left | ✗ | ✅ | ✗ | ✗ | ✅ | ✅ |
| Right | ✗ | ✅ | ✗ | ✗ | ✅ | ✗ |
| Full | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

> **Subtitle** и **кнопки** (`showButton1` / `showButton2`) не используются вместе.

---

## CSS Implementation

```css
/* ─── Base ─────────────────────────────────────────────── */
.snackbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: var(--radius-md, 12px);
  overflow: hidden;
  /* позиционирование — вне компонента (fixed bottom etc.) */
}

/* ─── Color: Black (default) ────────────────────────────── */
.snackbar--black {
  background: var(--color-surface-dark, #1c1c1c);
  box-shadow:
    0px 1px 2px 0px rgba(68, 83, 115, 0.10),
    0px 1px 1px 0px rgba(68, 83, 115, 0.06);
}

/* ─── Color: White ───────────────────────────────────────── */
.snackbar--white {
  background: var(--color-surface-raised, #ffffff);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
}

/* ─── Left section ───────────────────────────────────────── */
.snackbar__left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.snackbar__icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* ─── Body (title + text) ────────────────────────────────── */
.snackbar__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.snackbar__title {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-semibold);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-inverse, #ffffff);
}

.snackbar--white .snackbar__title {
  color: var(--color-text-primary, #1c1c1c);
}

.snackbar__text {
  font-family: var(--font-family-base);
  font-size: 13px; /* --typography/body2size */
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-text-inverse, #ffffff);
  white-space: nowrap;
}

.snackbar--white .snackbar__text {
  color: var(--color-text-primary, #1c1c1c);
}

/* ─── Divider ────────────────────────────────────────────── */
.snackbar__divider {
  width: 1px;
  height: 35px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.2);
}

.snackbar--white .snackbar__divider {
  background: var(--color-border-divider, #e6e6e6);
}

/* ─── Actions ────────────────────────────────────────────── */
.snackbar__actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0;
}

.snackbar__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 7px 16px;
  border-radius: var(--radius-md, 12px);
  border: none;
  cursor: pointer;
  font-family: var(--font-family-base);
  font-size: 13px;
  font-weight: var(--font-weight-semibold);
  line-height: 18px;
  letter-spacing: -0.13px;
  white-space: nowrap;
  overflow: hidden;
}

/* Button1 — Primary filled */
.snackbar__btn--primary {
  background: var(--color-bg-accent-primary, #bfa369);
  color: var(--color-text-inverse, #ffffff);
}

/* Button2 — Text only */
.snackbar__btn--text {
  background: transparent;
  color: var(--color-text-inverse, #ffffff);
}

.snackbar--white .snackbar__btn--text {
  color: var(--color-text-accent-secondary, #7a6741);
}

/* ─── Close button ───────────────────────────────────────── */
.snackbar__close {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--color-text-inverse, #ffffff);
  opacity: 0.6;
  transition: opacity var(--duration-fast) var(--easing-default);
}

.snackbar__close:hover { opacity: 1; }

.snackbar--white .snackbar__close {
  color: var(--color-icon-secondary, #676767);
  opacity: 1;
}

.snackbar__close svg {
  width: 20px;
  height: 20px;
}

/* ─── Wrapper (позиционирование) ─────────────────────────── */
.snackbar-wrapper {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-snackbar, 600);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  pointer-events: none;
}

.snackbar-wrapper .snackbar {
  pointer-events: all;
  min-width: 280px;
  max-width: 480px;
}

/* ─── Анимация появления ─────────────────────────────────── */
@keyframes snackbar-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.snackbar {
  animation: snackbar-in var(--duration-normal, 0.25s) var(--easing-default) both;
}
```

---

## HTML

```html
<!-- Black, Full (все элементы) -->
<div class="snackbar snackbar--black" role="status" aria-live="polite" aria-atomic="true">
  <div class="snackbar__left">
    <img class="snackbar__icon" src="..." alt="" aria-hidden="true" />
    <div class="snackbar__body">
      <span class="snackbar__title">Title</span>
      <span class="snackbar__text">Please check your network connection.</span>
    </div>
  </div>
  <div class="snackbar__divider" aria-hidden="true"></div>
  <div class="snackbar__actions">
    <button class="snackbar__btn snackbar__btn--text">Label</button>
    <button class="snackbar__btn snackbar__btn--primary">Label</button>
  </div>
  <button class="snackbar__close" aria-label="Закрыть">
    <svg width="20" height="20"><!-- close --></svg>
  </button>
</div>

<!-- White, Clean (только текст + закрытие) -->
<div class="snackbar snackbar--white" role="status" aria-live="polite" aria-atomic="true">
  <div class="snackbar__left">
    <div class="snackbar__body">
      <span class="snackbar__text">Загрузка завершена</span>
    </div>
  </div>
  <button class="snackbar__close" aria-label="Закрыть">
    <svg width="20" height="20"><!-- close --></svg>
  </button>
</div>

<!-- Black, с иконкой success, без кнопок -->
<div class="snackbar snackbar--black" role="status" aria-live="polite" aria-atomic="true">
  <div class="snackbar__left">
    <img class="snackbar__icon" src="..." alt="" aria-hidden="true" /><!-- success icon -->
    <div class="snackbar__body">
      <span class="snackbar__text">Письмо отправлено</span>
    </div>
  </div>
  <button class="snackbar__close" aria-label="Закрыть">
    <svg width="20" height="20"><!-- close --></svg>
  </button>
</div>

<!-- Wrapper для стекинга нескольких snackbar -->
<div class="snackbar-wrapper" aria-label="Уведомления">
  <div class="snackbar snackbar--black" role="status" aria-live="polite" aria-atomic="true">
    …
  </div>
</div>
```

---

## Rules for AI assistants

- ✅ `role="status"` + `aria-live="polite"` + `aria-atomic="true"` обязательны — скринридер объявляет уведомление.
- ✅ Цвет `Black` — тёмный фон `#1c1c1c`, текст белый. `White` — белый фон, текст тёмный.
- ✅ Кнопки внутри `.snackbar__actions` имеют фиксированную высоту `32px` — это компактный вариант кнопки (sm), не путать с lg-кнопкой `56px`.
- ✅ Разделитель `.snackbar__divider` — только когда есть кнопки действий. Высота `35px`.
- ✅ `showButton2` (text) на `Black` = белый текст; на `White` = gold secondary `#7a6741`.
- ✅ `Subtitle` и `showButton1`/`showButton2` взаимоисключающие — не использовать вместе.
- ✅ Анимация появления — `translateY(12px) → 0` + fade in через CSS keyframes, без JS.
- ✅ Позиционирование Snackbar-обёртки — `fixed bottom: 24px; left: 50%; transform: translateX(-50%)`.
- ✅ Left icon — только изображение/SVG 24×24px; не использовать `.spinner-icon` из Spinner-компонента — для loading используется отдельная SVG-иконка.
- ❌ Не добавлять `border` к snackbar — визуальная граница только через `box-shadow`.
- ❌ Не использовать `align-items: flex-start` в `.snackbar` — все секции по центру (`center`).
- ❌ Не ставить `max-width` на сам компонент — ширина fluid, ограничивается через `.snackbar-wrapper`.
- ❌ Не использовать нативный `<dialog>` или `<aside>` — только `<div role="status">`.
