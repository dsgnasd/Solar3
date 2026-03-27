# Switch — Solar3 Design System

> Source: Figma → Component «Switch MAIN COMPONENTS (Variables ✅)»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

| Компонент | Описание |
|-----------|---------|
| **Switch** | Базовый атом — тогл `36×20px` |
| **SwitchLine** | Switch + лейбл, опциональные subtitle / chip / info-icon |

---

## 1. Switch (base atom)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `color` | `Accent`, `Black` | `Accent` |
| `pressed` | `true`, `false` | `false` |
| `state` | `Default`, `Hover`, `Focus`, `Disabled` | `Default` |

### Размеры

| Property | Value |
|----------|-------|
| Container | `36×20px` |
| Border Radius (container) | `12px` |
| Padding | `2px` |
| Thumb | `16×16px` |
| Border Radius (thumb) | `9999px` (круг) |
| Thumb background | `var(--color-surface-raised, #ffffff)` |
| Thumb shadow | `0px 4px 20px 0px rgba(0,0,0,0.03)` — `Shadow/SmallCard` |

### States — OFF (`pressed = false`)

| State | Background |
|-------|------------|
| `Default` | `var(--color-surface-disabled, #b2b2b2)` |
| `Hover` | `var(--color-neutral-600, #9a9a9a)` |
| `Focus` | `var(--color-surface-disabled, #b2b2b2)` + focus ring |
| `Disabled` | `var(--color-surface-sunken, #e6e6e6)` |

### States — ON (`pressed = true`)

| State | Color=Accent | Color=Black |
|-------|-------------|------------|
| `Default` | `var(--color-bg-accent-primary, #bfa369)` | `var(--color-surface-dark, #1c1c1c)` |
| `Hover` | `var(--color-primary-600, #aa9262)` | `var(--color-neutral-1000, #3d3d3d)` |
| `Focus` | `var(--color-bg-accent-primary, #bfa369)` + focus ring | `var(--color-surface-dark, #1c1c1c)` + focus ring |
| `Disabled` | `var(--color-primary-200, #e9ddc6)` | `var(--color-neutral-400, #cdcdcd)` |

> **Положение thumb**: OFF — прижат влево; ON — прижат вправо. Реализуется через `justify-content: flex-start/flex-end` на контейнере.

### Focus ring

| Color variant | Shadow |
|---|---|
| `Accent` | `box-shadow: 0 0 0 4px rgba(191, 163, 105, 0.2)` — `Focus/КИБ` |
| `Black` | `box-shadow: 0 0 0 4px rgba(152, 162, 179, 0.14)` — `Focus/Checkbox` |

### CSS

```css
/* ─── Base ─────────────────────────────────────────────── */
.switch {
  display: flex;
  align-items: center;
  width: 36px;
  height: 20px;
  padding: 2px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  border: none;
  background: var(--color-surface-disabled, #b2b2b2); /* OFF default */
  justify-content: flex-start;
  transition:
    background var(--duration-fast) var(--easing-default),
    justify-content 0s,
    box-shadow var(--duration-fast) var(--easing-default);
  -webkit-appearance: none;
  appearance: none;
}

/* ─── Thumb ─────────────────────────────────────────────── */
.switch::after {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background: var(--color-surface-raised, #ffffff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
  flex-shrink: 0;
  transition: transform var(--duration-fast) var(--easing-default);
}

/* ON — thumb справа */
.switch--on {
  justify-content: flex-end;
}

/* ─── Color: Accent, ON ─────────────────────────────────── */
.switch--accent.switch--on {
  background: var(--color-bg-accent-primary, #bfa369);
}

.switch--accent.switch--on:hover,
.switch--accent.switch--on.switch--hovered {
  background: var(--color-primary-600, #aa9262);
}

.switch--accent:focus-visible,
.switch--accent.switch--focused {
  outline: none;
  box-shadow: 0 0 0 4px rgba(191, 163, 105, 0.2);
}

/* ─── Color: Black, ON ──────────────────────────────────── */
.switch--black.switch--on {
  background: var(--color-surface-dark, #1c1c1c);
}

.switch--black.switch--on:hover,
.switch--black.switch--on.switch--hovered {
  background: var(--color-neutral-1000, #3d3d3d);
}

.switch--black:focus-visible,
.switch--black.switch--focused {
  outline: none;
  box-shadow: 0 0 0 4px rgba(152, 162, 179, 0.14);
}

/* ─── OFF Hover ─────────────────────────────────────────── */
.switch:not(.switch--on):hover,
.switch:not(.switch--on).switch--hovered {
  background: var(--color-neutral-600, #9a9a9a);
}

/* ─── Disabled ──────────────────────────────────────────── */
.switch--disabled {
  pointer-events: none;
  cursor: default;
}

/* Disabled OFF */
.switch--disabled:not(.switch--on) {
  background: var(--color-surface-sunken, #e6e6e6);
}

/* Disabled ON — Accent */
.switch--accent.switch--on.switch--disabled {
  background: var(--color-primary-200, #e9ddc6);
}

/* Disabled ON — Black */
.switch--black.switch--on.switch--disabled {
  background: var(--color-neutral-400, #cdcdcd);
}
```

### HTML

```html
<!-- OFF, Accent, Default -->
<button
  class="switch switch--accent"
  role="switch"
  aria-checked="false"
  aria-label="Включить уведомления"
></button>

<!-- ON, Accent, Default -->
<button
  class="switch switch--accent switch--on"
  role="switch"
  aria-checked="true"
  aria-label="Включить уведомления"
></button>

<!-- ON, Black, Default -->
<button
  class="switch switch--black switch--on"
  role="switch"
  aria-checked="true"
  aria-label="Тёмная тема"
></button>

<!-- OFF, Disabled -->
<button
  class="switch switch--accent switch--disabled"
  role="switch"
  aria-checked="false"
  aria-disabled="true"
  disabled
></button>
```

---

## 2. SwitchLine (Switch + Label)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Default`, `Disabled` | `Default` |
| `subtitle` | `true`, `false` | `true` |
| `status` | `true`, `false` | `false` |
| `trailingIcon` | `true`, `false` | `true` |
| `textbox` | `true`, `false` | `true` |

### Layout

- **Контейнер**: `display: flex; align-items: flex-start; gap: 10px` — `--ui/switch/line/gap-x`
- **Switch**: `flex-shrink: 0`
- **Textbox** (`flex: 1 0 0; flex-direction: column; gap: 4px` — `--ui/switch/line/textbox-gap-y`)
  - **Title**: Body 1 fix / Medium — 14px, weight 500, line-height 20px, tracking -0.14px
  - **Subtitle** (опц.): Caption 1 / Regular — 12px, weight 400, line-height 16px
- **Status Chip** (опц.): bg `var(--color-primary-100, #efe5d1)`, text `var(--color-text-accent-secondary, #7a6741)`, Body2/Medium 13px, `border-radius: 100px`, padding `3px` outer + `px: 6px` текст, min-height `24px`
- **Trailing icon** (опц.): info-circle `20×20px`, `var(--color-icon-secondary)`

### States

| State | Title color | Subtitle color | Switch | Chip opacity |
|-------|-------------|----------------|--------|-------------|
| `Default` | `var(--color-text-primary, #1c1c1c)` | `var(--color-text-secondary, #676767)` | штатный | 1 |
| `Disabled` | `var(--color-text-secondary, #676767)` | `var(--color-text-tertiary, #9a9a9a)` | Disabled | 0.5 |

### CSS

```css
.switch-line {
  display: flex;
  align-items: flex-start;
  gap: 10px; /* --ui/switch/line/gap-x */
  cursor: pointer;
}

.switch-line--disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.switch-line__textbox {
  display: flex;
  flex-direction: column;
  gap: 4px; /* --ui/switch/line/textbox-gap-y */
  flex: 1 0 0;
  min-width: 0;
  align-self: stretch;
}

.switch-line__title {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-primary, #1c1c1c);
  white-space: nowrap;
}

.switch-line__subtitle {
  font-family: var(--font-family-base);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-regular);
  line-height: 16px;
  color: var(--color-text-secondary, #676767);
}

.switch-line--disabled .switch-line__title {
  color: var(--color-text-secondary, #676767);
}

.switch-line--disabled .switch-line__subtitle {
  color: var(--color-text-tertiary, #9a9a9a);
}

/* Status chip */
.switch-line__chip {
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 100px;
  background: var(--color-primary-100, #efe5d1);
  flex-shrink: 0;
}

.switch-line__chip-label {
  padding: 0 6px;
  min-height: 24px;
  display: flex;
  align-items: center;
  font-family: var(--font-family-base);
  font-size: 13px;
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-text-accent-secondary, #7a6741);
  white-space: nowrap;
}

.switch-line--disabled .switch-line__chip {
  opacity: 0.5;
}

/* Trailing icon */
.switch-line__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

.switch-line--disabled .switch-line__icon {
  color: var(--color-icon-tertiary, #9a9a9a);
}
```

### HTML

```html
<!-- Default, все элементы -->
<label class="switch-line">
  <button
    class="switch switch--accent switch--on"
    role="switch"
    aria-checked="true"
  ></button>
  <span class="switch-line__textbox">
    <span class="switch-line__title">Title</span>
    <span class="switch-line__subtitle">Subtitle</span>
  </span>
  <!-- Опционально: статус-чип -->
  <span class="switch-line__chip">
    <span class="switch-line__chip-label">In progress</span>
  </span>
  <!-- Опционально: info-иконка -->
  <svg class="switch-line__icon" width="20" height="20"><!-- info-circle --></svg>
</label>

<!-- Disabled -->
<label class="switch-line switch-line--disabled">
  <button
    class="switch switch--accent switch--disabled"
    role="switch"
    aria-checked="false"
    aria-disabled="true"
    disabled
  ></button>
  <span class="switch-line__textbox">
    <span class="switch-line__title">Title</span>
    <span class="switch-line__subtitle">Subtitle</span>
  </span>
  <svg class="switch-line__icon" width="20" height="20"><!-- info-circle --></svg>
</label>
```

---

## Rules for AI assistants

- ✅ `role="switch"` + `aria-checked="true/false"` обязательны — это семантический тогл, не чекбокс.
- ✅ Положение thumb управляется через `justify-content: flex-start` (OFF) / `justify-content: flex-end` (ON) на контейнере — без абсолютного позиционирования.
- ✅ Thumb реализуется через `::after` псевдоэлемент — не отдельный DOM-элемент.
- ✅ `overflow: hidden` на контейнере обязателен — thumb не должен выходить за пределы.
- ✅ Padding `2px` со всех сторон — thumb `16px` + `2+2px` = контейнер `20px` по высоте.
- ✅ Focus ring на `focus-visible` (не `:focus`) — `0 0 0 4px` для обоих цветовых вариантов.
- ✅ SwitchLine использует `align-items: flex-start` — subtitle может переноситься.
- ✅ Disabled chip в SwitchLine: `opacity: 0.5`, не изменять цвет.
- ✅ Gap между Switch и Textbox строго `10px` (`--ui/switch/line/gap-x`).
- ✅ Gap между Title и Subtitle строго `4px` (`--ui/switch/line/textbox-gap-y`).
- ❌ Не использовать нативный `<input type="checkbox">` — использовать `<button role="switch">`.
- ❌ Не добавлять `border` к контейнеру switch — только фон меняется по состояниям.
- ❌ Не путать Disabled OFF (`#e6e6e6`) и Default OFF (`#b2b2b2`) — разные уровни серого.
- ❌ Не анимировать `justify-content` — браузер не поддерживает; анимировать через `transform: translateX` на thumb если нужна плавность (альтернативная реализация).
