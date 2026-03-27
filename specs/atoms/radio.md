# Radio — Solar3 Design System

> Source: Figma → Components "Radio", "RadioLine", "RadioGroup"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

| Компонент | Описание |
|-----------|---------|
| **Radio** | Базовый атом — круглая кнопка выбора 20×20px |
| **RadioLine** | Radio + лейбл, опциональные subtitle / chip / info-icon |
| **RadioGroup** | Вертикальная или горизонтальная группа RadioLine с заголовком |

---

## 1. Radio (base atom)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `checked` | `true`, `false` | `false` |
| `color` | `Accent`, `Black` | `Accent` |
| `state` | `Default`, `Hovered`, `Focused`, `Disabled` | `Default` |

### Размеры

| Property | Value |
|----------|-------|
| Size | `20×20px` |
| Border Radius | `9999px` (полный круг) |
| Inner dot (checked) | `8×8px` — `inset: 30%` от родителя |

### States — Unchecked

| State | Border | Background | Extra |
|-------|--------|------------|-------|
| Default | `1px solid var(--color-border-hover, #9a9a9a)` | transparent | — |
| Hovered | `1px solid var(--color-border-pressed, #676767)` | transparent | — |
| Focused | `1px solid var(--color-icon-secondary, #676767)` | `var(--color-surface-raised, #fff)` | focus ring `box-shadow: 0 0 0 4px rgba(152,162,179,0.14)` |
| Disabled | `1px solid var(--color-border-disabled, #9a9a9a)` | `var(--color-surface-sunken, #e6e6e6)` | — |

### States — Checked

| State | Background | Inner dot |
|-------|------------|-----------|
| Default + Accent | `var(--color-primary-500, #bfa369)` | white `border-radius: 9999px` |
| Hovered + Accent | `var(--color-primary-600, #aa9262)` | white |
| Focused + Accent | `var(--color-primary-500, #bfa369)` | white + focus ring |
| Default + Black | `var(--color-neutral-black, #1c1c1c)` | white |
| Hovered + Black | `var(--color-neutral-1000, #3d3d3d)` | white |
| Focused + Black | `var(--color-neutral-black, #1c1c1c)` | white + focus ring |
| Disabled (any color) | `var(--color-neutral-500, #b2b2b2)` | white |

### CSS

```css
/* ─── Base ─────────────────────────────────────────────── */
.radio {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  border: 1px solid var(--color-border-hover, #9a9a9a);
  background: transparent;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  transition:
    border-color var(--duration-fast) var(--easing-default),
    background-color var(--duration-fast) var(--easing-default),
    box-shadow var(--duration-fast) var(--easing-default);
  cursor: pointer;
}

/* ─── Unchecked states ──────────────────────────────────── */
.radio:hover,
.radio--hovered {
  border-color: var(--color-border-pressed, #676767);
}

.radio:focus-visible,
.radio--focused {
  border-color: var(--color-icon-secondary, #676767);
  background: var(--color-surface-raised, #ffffff);
  box-shadow: 0 0 0 4px rgba(152, 162, 179, 0.14);
  outline: none;
}

.radio--disabled {
  border-color: var(--color-border-disabled);
  background: var(--color-surface-sunken);
  pointer-events: none;
  cursor: default;
}

/* ─── Checked ───────────────────────────────────────────── */
.radio--checked {
  border: none;
  background: var(--color-primary-500, #bfa369);
}

.radio--checked::after {
  content: '';
  position: absolute;
  inset: 30%; /* 6px каждая сторона → dot 8×8px */
  border-radius: 9999px;
  background: var(--color-surface-raised, #ffffff);
}

.radio--checked:hover,
.radio--checked.radio--hovered {
  background: var(--color-primary-600, #aa9262);
}

.radio--checked:focus-visible,
.radio--checked.radio--focused {
  box-shadow: 0 0 0 4px rgba(152, 162, 179, 0.14);
}

/* ─── Color=Black ───────────────────────────────────────── */
.radio--black.radio--checked {
  background: var(--color-neutral-black, #1c1c1c);
}

.radio--black.radio--checked:hover,
.radio--black.radio--checked.radio--hovered {
  background: var(--color-neutral-1000, #3d3d3d);
}

/* ─── Disabled checked ──────────────────────────────────── */
.radio--checked.radio--disabled {
  background: var(--color-neutral-500, #b2b2b2);
  border: none;
  pointer-events: none;
}
```

### HTML

```html
<!-- Unchecked default -->
<input type="radio" class="radio" name="group" />

<!-- Checked accent -->
<input type="radio" class="radio radio--checked" name="group" checked />

<!-- Checked black -->
<input type="radio" class="radio radio--checked radio--black" name="group" checked />

<!-- Disabled -->
<input type="radio" class="radio radio--disabled" name="group" disabled />
```

> В реальной реализации `<input type="radio">` скрывается (`sr-only`), а визуальный элемент — кастомный `<span class="radio">`, синхронизированный через JS или `:checked` CSS-псевдоклассы.

---

## 2. RadioLine (Radio + Label)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Default`, `Hovered`, `Disabled` | `Default` |
| `subtitle` | `true`, `false` | `true` |
| `status` | `true`, `false` | `false` |
| `trailingIcon` | `true`, `false` | `false` |
| `textbox` | `true`, `false` | `true` |

### Layout

- **Контейнер**: `display: flex; align-items: flex-start; gap: 10px` (`--ui/radio/line/gap-x`)
- **Radio**: `flex-shrink: 0`
- **Textbox** (`flex: 1 0 0; flex-direction: column; gap: 4px` — `--ui/radio/line/textbox-gap-y`):
  - **Title**: Body 1 fix / Medium — 14px, weight 500, line-height 20px, letter-spacing -0.14px, `var(--color-text-primary)`
  - **Subtitle** (опц.): Caption 1 / Regular — 12px, weight 400, line-height 16px, `var(--color-text-secondary)`
- **Status Chip** (опц.): bg `var(--color-primary-100, #efe5d1)`, текст `var(--color-primary-800, #7a6741)`, Body 2/Medium 13px, `border-radius: 100px`, padding `3px` (контейнер) + `px: 6px` (текст)
- **Trailing icon** (опц.): info-circle, `20×20px`, `var(--color-text-tertiary)`

### States

| State | Title color | Subtitle color | Radio |
|-------|-------------|----------------|-------|
| Default | `--color-text-primary` | `--color-text-secondary` | штатный |
| Hovered | `--color-text-primary` | `--color-text-secondary` | Hovered |
| Disabled | `--color-text-disabled` | `--color-text-disabled` | Disabled |

### CSS

```css
.radio-line {
  display: flex;
  align-items: flex-start;
  gap: 10px; /* --ui/radio/line/gap-x */
  cursor: pointer;
}

.radio-line--disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.radio-line__textbox {
  display: flex;
  flex-direction: column;
  gap: 4px; /* --ui/radio/line/textbox-gap-y */
  flex: 1 0 0;
  min-width: 0;
  align-self: stretch;
}

.radio-line__title {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-primary);
  white-space: nowrap;
}

.radio-line__subtitle {
  font-family: var(--font-family-base);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-regular);
  line-height: 16px;
  color: var(--color-text-secondary);
}

.radio-line--disabled .radio-line__title,
.radio-line--disabled .radio-line__subtitle {
  color: var(--color-text-disabled);
}

/* Status chip */
.radio-line__chip {
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 100px;
  background: var(--color-primary-100, #efe5d1);
  flex-shrink: 0;
}

.radio-line__chip-label {
  padding: 0 6px;
  min-height: 24px;
  display: flex;
  align-items: center;
  font-family: var(--font-family-base);
  font-size: 13px;
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-primary-800, #7a6741);
  white-space: nowrap;
}

/* Trailing icon */
.radio-line__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-text-tertiary);
}
```

### HTML

```html
<label class="radio-line">
  <input type="radio" class="sr-only" name="group" />
  <span class="radio radio--checked" aria-hidden="true"></span>
  <span class="radio-line__textbox">
    <span class="radio-line__title">Title</span>
    <span class="radio-line__subtitle">Subtitle</span>
  </span>
  <!-- Опционально: статус-чип -->
  <span class="radio-line__chip">
    <span class="radio-line__chip-label">In progress</span>
  </span>
  <!-- Опционально: info-иконка -->
  <svg class="radio-line__icon" width="20" height="20"><!-- info-circle --></svg>
</label>
```

---

## 3. RadioGroup

### Props

| Prop | Values | Default |
|------|--------|---------|
| `type` | `Vertical`, `Horizontal` | `Vertical` |
| `heading` | `true`, `false` | `true` |

### Layout

**Vertical:**
- `flex-direction: column`
- Gap (heading → группа): `16px` (`--ui/radio/group/vertical-heading-radiolines-gap-y`)
- Gap между RadioLine: `24px` (`--ui/radio/group/vertical-radiolines-gap-y`)

**Horizontal:**
- `flex-direction: row`
- Gap между RadioLine: `16px`

**Heading**: H8 / SemiBold — 16px, weight 600, line-height 22px, letter-spacing -0.16px, `var(--color-text-primary)`

### CSS

```css
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px; /* heading → group gap */
  align-items: flex-start;
}

.radio-group__heading {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-semibold);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-primary);
}

.radio-group__items {
  display: flex;
  flex-direction: column;
  gap: 24px; /* --ui/radio/group/vertical-radiolines-gap-y */
  align-items: flex-start;
}

/* Horizontal */
.radio-group--horizontal .radio-group__items {
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
```

### HTML

```html
<!-- Vertical -->
<fieldset class="radio-group">
  <legend class="radio-group__heading">Heading</legend>
  <div class="radio-group__items">
    <label class="radio-line">
      <input type="radio" class="sr-only" name="g1" checked />
      <span class="radio radio--checked" aria-hidden="true"></span>
      <span class="radio-line__textbox">
        <span class="radio-line__title">Select all</span>
      </span>
    </label>
    <label class="radio-line">
      <input type="radio" class="sr-only" name="g1" />
      <span class="radio" aria-hidden="true"></span>
      <span class="radio-line__textbox">
        <span class="radio-line__title">Title 1</span>
      </span>
    </label>
    <label class="radio-line">
      <input type="radio" class="sr-only" name="g1" />
      <span class="radio" aria-hidden="true"></span>
      <span class="radio-line__textbox">
        <span class="radio-line__title">Title 2</span>
      </span>
    </label>
  </div>
</fieldset>

<!-- Horizontal -->
<fieldset class="radio-group radio-group--horizontal">
  <legend class="radio-group__heading">Heading</legend>
  <div class="radio-group__items">
    <label class="radio-line">…</label>
    <label class="radio-line">…</label>
    <label class="radio-line">…</label>
  </div>
</fieldset>
```

---

## Rules for AI assistants

- ✅ Нативный `<input type="radio">` всегда присутствует (`sr-only`) — для доступности. Визуальный атом — кастомный `<span class="radio">`.
- ✅ Inner dot (белая точка внутри checked-кружка) — через `::after` с `inset: 30%`, не SVG и не отдельный элемент.
- ✅ Focus ring: `box-shadow: 0 0 0 4px rgba(152,162,179,0.14)` — применяется и к checked, и к unchecked Focused.
- ✅ Группа RadioLine обязательно обёртывается в `<fieldset>` с `<legend>` — семантически это группа взаимоисключающих вариантов.
- ✅ `RadioLine` — кликабельна вся строка (через `<label>`), не только круглый элемент.
- ✅ Gap между Radio и Textbox строго `10px` (`--ui/radio/line/gap-x`).
- ✅ Gap между Title и Subtitle строго `4px` (`--ui/radio/line/textbox-gap-y`).
- ❌ Не использовать `align-items: center` в `.radio-line` — всегда `flex-start` (subtitle может переноситься).
- ❌ Не добавлять border к checked Radio — фон заменяет border целиком (`border: none`).
- ❌ Не путать `color=Accent` (gold) и `color=Black` — разные цвета фона checked-состояния.
- ❌ Disabled Radio и RadioLine: `pointer-events: none` + `aria-disabled="true"` на `<label>`.
