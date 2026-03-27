# Spinner — Solar3 Design System

> Source: Figma → Component "Spinner" (Screen Spinner)
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Индикатор загрузки. Пять вариантов комбинаций типа, фона и размера.

---

## Props

| Prop | Values | Default |
|------|--------|---------|
| `type` | `Icon`, `Icon+Text` | `Icon` |
| `bg` | `White`, `Black`, `False` | `White` |
| `size` | `lg`, `sm` | `lg` |

---

## Варианты и размеры

| type | bg | size | Контейнер | Иконка | Текст |
|------|----|------|-----------|--------|-------|
| `Icon` | `White` | `lg` | `80×80px`, radius `16px`, белый фон | `48×48px` | — |
| `Icon` | `False` | `lg` | нет контейнера | `48×48px` | — |
| `Icon` | `False` | `sm` | `24×24px`, radius `4.8px` | `20×20px` | — |
| `Icon+Text` | `White` | `lg` | `h: 56px`, `px: 16px`, radius `12px`, белый фон | `28×28px` | «Загрузка...» тёмный |
| `Icon+Text` | `Black` | `lg` | `h: 56px`, `px: 16px`, radius `12px`, чёрный фон | `28×28px` | «Загрузка...» белый |

---

## Тени (Box Shadow)

Все варианты используют тройную мягкую тень:

| Вариант | Shadow |
|---------|--------|
| `Icon, lg` (с bg) | `0px 5.067px 10.133px rgba(28,28,28,0.06), 0px 0px 5.067px rgba(28,28,28,0.06), 0px 0px 1.689px rgba(28,28,28,0.06)` |
| `Icon+Text, lg` | `0px 3.733px 7.467px rgba(28,28,28,0.06), 0px 0px 3.733px rgba(28,28,28,0.06), 0px 0px 1.244px rgba(28,28,28,0.06)` |
| `Icon, sm` | `0px 1.52px 3.04px rgba(28,28,28,0.06), 0px 0px 1.52px rgba(28,28,28,0.06), 0px 0px 0.507px rgba(28,28,28,0.06)` |
| `bg=False` | нет тени |

---

## Анимация иконки

Spinner — дуга (arc), вращающаяся бесконечно по часовой стрелке.

- **Длительность**: `0.8s`
- **Easing**: `linear`
- **Итерации**: `infinite`
- **Цвет дуги на белом/прозрачном фоне**: `var(--color-primary-500, #bfa369)` (gold accent)
- **Цвет дуги на чёрном фоне**: `var(--color-text-inverse, #ffffff)`

---

## Icon+Text типографика

- **Текст**: H8 / Medium — 16px, weight 500, line-height 22px, letter-spacing -0.16px
- **Цвет на `bg=White`**: `var(--color-text-primary, #1c1c1c)`
- **Цвет на `bg=Black`**: `var(--color-text-inverse, #ffffff)`
- **Gap** (иконка — текст): `10px`

---

## CSS Implementation

```css
/* ─── Анимация ──────────────────────────────────────────── */
@keyframes spinner-rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ─── Базовая иконка (дуга) ─────────────────────────────── */
.spinner-icon {
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--color-primary-500, #bfa369);
  animation: spinner-rotate 0.8s linear infinite;
  flex-shrink: 0;
}

/* Размеры иконки */
.spinner-icon--48 { width: 48px; height: 48px; border-width: 4px; }
.spinner-icon--28 { width: 28px; height: 28px; border-width: 3px; }
.spinner-icon--20 { width: 20px; height: 20px; border-width: 2.5px; }

/* Цвет иконки на тёмном фоне */
.spinner--black .spinner-icon {
  border-top-color: var(--color-text-inverse, #ffffff);
}

/* ─── Контейнер Icon, lg, White ─────────────────────────── */
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.spinner--icon-lg-white {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: var(--color-surface-raised, #ffffff);
  box-shadow:
    0px 5.067px 10.133px rgba(28, 28, 28, 0.06),
    0px 0px   5.067px   rgba(28, 28, 28, 0.06),
    0px 0px   1.689px   rgba(28, 28, 28, 0.06);
}

/* ─── Контейнер Icon, sm, False (no bg) ─────────────────── */
.spinner--icon-sm-false {
  width: 24px;
  height: 24px;
  border-radius: 4.8px;
}

/* ─── Контейнер Icon+Text, lg ───────────────────────────── */
.spinner--text {
  height: 56px;
  padding: 0 16px;
  border-radius: 12px;
  gap: 10px;
  box-shadow:
    0px 3.733px 7.467px rgba(28, 28, 28, 0.06),
    0px 0px   3.733px   rgba(28, 28, 28, 0.06),
    0px 0px   1.244px   rgba(28, 28, 28, 0.06);
}

.spinner--text-white {
  background: var(--color-surface-raised, #ffffff);
}

.spinner--text-black,
.spinner--black {
  background: var(--color-surface-dark, #1c1c1c);
}

/* ─── Текст ─────────────────────────────────────────────── */
.spinner__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  line-height: 22px;
  letter-spacing: -0.16px;
  white-space: nowrap;
  color: var(--color-text-primary);
}

.spinner--black .spinner__label {
  color: var(--color-text-inverse, #ffffff);
}
```

---

## HTML

```html
<!-- Icon, lg, White (80×80, карточка) -->
<div class="spinner spinner--icon-lg-white" role="status" aria-label="Загрузка">
  <span class="spinner-icon spinner-icon--48"></span>
</div>

<!-- Icon, lg, False (без фона) -->
<div class="spinner" role="status" aria-label="Загрузка">
  <span class="spinner-icon spinner-icon--48"></span>
</div>

<!-- Icon, sm, False (24×24) -->
<div class="spinner spinner--icon-sm-false" role="status" aria-label="Загрузка">
  <span class="spinner-icon spinner-icon--20"></span>
</div>

<!-- Icon+Text, lg, White -->
<div class="spinner spinner--text spinner--text-white" role="status" aria-label="Загрузка">
  <span class="spinner-icon spinner-icon--28"></span>
  <span class="spinner__label">Загрузка...</span>
</div>

<!-- Icon+Text, lg, Black -->
<div class="spinner spinner--text spinner--text-black spinner--black" role="status" aria-label="Загрузка">
  <span class="spinner-icon spinner-icon--28"></span>
  <span class="spinner__label">Загрузка...</span>
</div>
```

---

## Rules for AI assistants

- ✅ `role="status"` + `aria-label="Загрузка"` обязательны на контейнере — скринридер объявит состояние загрузки.
- ✅ Анимация — CSS `@keyframes` `rotate`, `0.8s linear infinite`. Не использовать JS-анимацию.
- ✅ Spinner-иконка реализуется через `border + border-top-color` (CSS arc trick) или как SVG с `stroke-dasharray`. Оба варианта корректны.
- ✅ `bg=False` — контейнер прозрачный, тени нет.
- ✅ Текст в `Icon+Text` всегда `white-space: nowrap` — строка не переносится.
- ✅ Тройная тень у всех вариантов с фоном — три `box-shadow` через запятую.
- ❌ Не добавлять border к контейнеру — визуальная граница только через тень.
- ❌ Не анимировать сам контейнер — только внутреннюю иконку `.spinner-icon`.
- ❌ Не использовать `border-radius: 50%` для контейнера Icon lg — он квадратный с `border-radius: 16px`.
- ❌ Не уменьшать `animation-duration` ниже `0.8s` — это соответствует дизайну.
