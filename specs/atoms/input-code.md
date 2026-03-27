# Input Code — Solar3 Design System

> Source: Figma → Components "Input Code", "PIN"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Two related components для ввода кодов (OTP, PIN, SMS):

| Component | Description |
|-----------|-------------|
| **Input Code** | Одиночная ячейка ввода одного символа |
| **PIN** | Группа из 6 ячеек Input Code с helper message |

---

## 1. Input Code (single cell)

### Размеры

| Property | Value |
|----------|-------|
| Width | `40px` |
| Height | `56px` |
| Border Radius | `12px` (`--radius-md`) |
| Background | `var(--color-surface-raised, #ffffff)` |

### Props / States

| State | Border | Content | Content color |
|-------|--------|---------|---------------|
| `Default` | none | пусто | — |
| `Filled` | none | `•` (bullet) | `var(--color-primary-500, #bfa369)` |
| `Focused` | `1px solid var(--color-primary-500, #bfa369)` | `\|` cursor | `var(--color-primary-500, #bfa369)` |
| `Focused Filled` | `1px solid var(--color-primary-500, #bfa369)` | цифра + `\|` cursor | цифра: `#333740`, cursor: `var(--color-primary-500)` |
| `Error` | `1px solid var(--color-border-error, #e32f43)` | цифра + `\|` cursor | цифра: `#333740`, cursor: `var(--color-primary-500)` |

### Типографика содержимого

- **Bullet `•` (Filled)**: Cera Pro / Bold, 16px, line-height 18px, letter-spacing -0.31px. Цвет: `var(--color-primary-500, #bfa369)`.
- **Цифра (Focused Filled / Error)**: Inter / SemiBold, 16px (`--typography/h8size`), line-height 22px (`--typography/h8line`), letter-spacing -0.16px. Цвет: `#333740`.
- **Cursor `|`**: Inter / SemiBold, 16px. Цвет: `var(--color-primary-500, #bfa369)`. Анимируется (`opacity` blink).

### CSS Implementation

```css
/* ─── Одна ячейка ────────────────────────────────────────── */
.input-code {
  width: 40px;
  height: 56px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: border-color var(--duration-fast) var(--easing-default);
  flex-shrink: 0;
}

/* States */
.input-code--focused,
.input-code--focused-filled {
  border-color: var(--color-primary-500, #bfa369);
}

.input-code--error {
  border-color: var(--color-border-error, #e32f43);
}

/* ─── Контент внутри ─────────────────────────────────────── */
.input-code__value {
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.16px;
  color: #333740;
  display: flex;
  align-items: center;
  gap: 0;
}

/* Bullet для Filled */
.input-code__bullet {
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.05px;
  color: var(--color-primary-500, #bfa369);
}

/* Cursor */
.input-code__cursor {
  color: var(--color-primary-500, #bfa369);
  font-weight: 600;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
```

### HTML Structure

```html
<!-- Default -->
<div class="input-code input-code--default"></div>

<!-- Filled -->
<div class="input-code input-code--filled">
  <span class="input-code__bullet">•</span>
</div>

<!-- Focused -->
<div class="input-code input-code--focused">
  <span class="input-code__value">
    <span class="input-code__cursor">|</span>
  </span>
</div>

<!-- Focused Filled -->
<div class="input-code input-code--focused-filled">
  <span class="input-code__value">
    1<span class="input-code__cursor">|</span>
  </span>
</div>

<!-- Error -->
<div class="input-code input-code--error">
  <span class="input-code__value">
    1<span class="input-code__cursor">|</span>
  </span>
</div>
```

---

## 2. PIN (group of 6 cells)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Default`, `Filling`, `Filled` | `Default` |
| `helperText` | `False`, `Info`, `Error` | `False` |

### Состояния группы

| State | Описание |
|-------|----------|
| `Default` | Все 6 ячеек пустые (`Default`) |
| `Filling` | Первые 5 ячеек заполнены (`Filled`), последняя в фокусе с цифрой (`Focused Filled`) |
| `Filled` | Все 6 ячеек заполнены (`Filled`) |

### Helper Text

| helperText | Icon | Icon size | Текст | Цвет текста |
|------------|------|-----------|-------|-------------|
| `False` | нет | — | нет | — |
| `Info` | нет | — | «Осталось попыток ввода: 2» | `var(--color-text-secondary, #676767)` |
| `Error` | `danger` | `16×16px` | «Неверный ПИН-ключ» | `var(--color-text-danger, #bd132b)` |

### Layout

- **Ширина группы ячеек**: `320px` = 6 × 40px + 5 × 16px gap
- **Gap между ячейками**: `16px`
- **Gap между строкой ячеек и helper text**: `16px`
- **Выравнивание строки ячеек**: `justify-content: center`
- **Gap внутри helper (иконка + текст)**: `6px`

### Типографика Helper Text

- **Body 1 fix / Regular**: Inter, 14px (`--typography/body1fixsize`), weight 400, line-height 20px (`--typography/body1fixline`), letter-spacing -0.14px

### CSS Implementation

```css
/* ─── Группа PIN ─────────────────────────────────────────── */
.pin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 320px;
}

.pin__cells {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* ─── Helper message ─────────────────────────────────────── */
.pin__helper {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-secondary);
}

.pin__helper-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.pin__helper--error {
  color: var(--color-text-danger, #bd132b);
}
```

### HTML Structure

```html
<!-- Default, no helper -->
<div class="pin">
  <div class="pin__cells">
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
  </div>
</div>

<!-- Filling state -->
<div class="pin">
  <div class="pin__cells">
    <div class="input-code input-code--filled"><span class="input-code__bullet">•</span></div>
    <div class="input-code input-code--filled"><span class="input-code__bullet">•</span></div>
    <div class="input-code input-code--filled"><span class="input-code__bullet">•</span></div>
    <div class="input-code input-code--filled"><span class="input-code__bullet">•</span></div>
    <div class="input-code input-code--filled"><span class="input-code__bullet">•</span></div>
    <div class="input-code input-code--focused-filled">
      <span class="input-code__value">1<span class="input-code__cursor">|</span></span>
    </div>
  </div>
</div>

<!-- Default + Error helper -->
<div class="pin">
  <div class="pin__cells">
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
  </div>
  <div class="pin__helper pin__helper--error">
    <svg class="pin__helper-icon" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 5v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor"/>
    </svg>
    Неверный ПИН-ключ
  </div>
</div>

<!-- Default + Info helper -->
<div class="pin">
  <div class="pin__cells">
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
    <div class="input-code input-code--default"></div>
  </div>
  <div class="pin__helper">
    Осталось попыток ввода: 2
  </div>
</div>
```

---

## Rules for AI assistants

- ✅ Каждая ячейка — отдельный `div` с классом `input-code--{state}`. Реальный `<input>` один, невидимый, за пределами визуальных ячеек (или `position: absolute; opacity: 0`).
- ✅ Bullet `•` в заполненной ячейке — Cera Pro Bold, цвет `--color-primary-500`. Не использовать Unicode `●` вместо `•`.
- ✅ Cursor `|` всегда gold (`--color-primary-500`), анимируется blink.
- ✅ Цифра в `Focused Filled` / `Error` — Inter SemiBold, цвет `#333740` (не `--color-text-primary`).
- ✅ Gap между ячейками строго `16px`.
- ✅ Helper text gap от строки ячеек — `16px`.
- ✅ Error icon в helper — `16×16px` (не 12, не 20).
- ❌ Не рендерить border у `Default` и `Filled` состояний — только `border: 1px solid transparent`.
- ❌ Не использовать `<input type="text">` как визуальную ячейку — только как скрытый элемент ввода.
- ❌ Не менять ширину ячейки при разных состояниях — всегда `40px`.
