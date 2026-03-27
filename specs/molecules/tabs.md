# Tabs — Solar3 Design System

> Source: Figma → Component «Tabs»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

| Компонент | Описание |
|-----------|---------|
| **Tab** | Базовый элемент вкладки — два варианта формы: `Underline` и `Filled` |
| **Tabs** | Горизонтальный ряд Tab-элементов |

---

## 1. Tab

### Props

| Prop | Values | Default |
|------|--------|---------|
| `form` | `Underline`, `Filled` | `Underline` |
| `colorFilled` | `Black`, `Accent` | `Black` |
| `bg` | `Secondary`, `White` | `Secondary` |
| `state` | `Default`, `Hovered`, `Disabled` | `Default` |
| `type` | `true` (active), `false` (inactive) | `false` |
| `badge` | `true`, `false` | `false` |
| `number` | `true`, `false` | `false` |
| `hasLeadingIcon` | `true`, `false` | `false` |
| `hasTrailingIcon` | `true`, `false` | `false` |

> **Примечание**: `colorFilled` применяется только при `form=Filled`. `bg` применяется только при `form=Filled` (определяет фон неактивного таба).

---

## 2. Размеры

### Underline

| Property | Value | Token |
|----------|-------|-------|
| Height | `46px` | `--ui/tabs/underline/h` |
| Padding X | `8px` | `--ui/tabs/underline/px` |
| Gap (иконка / текст / badge) | `6px` | `--ui/tabs/underline/gap-elements-x` |
| Gap (контент — underline) | `8px` | `--ui/tabs/underline/gap-elements-underline-y` |
| Underline height | `2px` | — |

### Filled

| Property | Value | Token |
|----------|-------|-------|
| Height | `40px` | `--ui/tabs/filled/h` |
| Padding X | `16px` | `--ui/tabs/filled/px` |
| Gap (иконка / текст / badge) | `6px` | `--ui/tabs/filled/gap-elements-x` |
| Border Radius | `100px` | — |

---

## 3. States

### Underline

| State | Type | Text color | Underline |
|-------|------|-----------|-----------|
| `Default` | Active (`true`) | `var(--color-text-primary, #1c1c1c)` weight 500 | `var(--color-bg-accent-primary, #bfa369)` |
| `Default` | Inactive (`false`) | `var(--color-text-secondary, #676767)` weight 400 | нет |
| `Hovered` | Inactive | `var(--color-text-primary, #1c1c1c)` weight 400 | нет |
| `Disabled` | Any | opacity `0.5` (весь компонент) | — |

> Disabled = те же визуальные состояния, что и Hovered, но с `opacity: 0.5` на весь компонент.

### Filled — Color: Black

| State | Type | Background | Text color |
|-------|------|-----------|-----------|
| `Default` | Active | `var(--color-surface-dark, #1c1c1c)` | `var(--color-text-inverse, #ffffff)` |
| `Default` | Inactive (bg=Secondary) | `var(--color-surface-primary, #f2f2f2)` | `var(--color-text-secondary, #676767)` |
| `Default` | Inactive (bg=White) | `var(--color-surface-raised, #ffffff)` | `var(--color-text-secondary, #676767)` |
| `Hovered` | Inactive | `var(--color-neutral-200, #e6e6e6)` | `var(--color-text-primary, #1c1c1c)` |
| `Disabled` | Any | opacity `0.5` (весь компонент) | — |

### Filled — Color: Accent

| State | Type | Background | Text color |
|-------|------|-----------|-----------|
| `Default` | Active | `var(--color-bg-accent-primary, #bfa369)` | `var(--color-text-inverse, #ffffff)` |
| `Default` | Inactive (bg=Secondary) | `var(--color-surface-primary, #f2f2f2)` | `var(--color-text-secondary, #676767)` |
| `Default` | Inactive (bg=White) | `var(--color-surface-raised, #ffffff)` | `var(--color-text-secondary, #676767)` |
| `Hovered` | Inactive (bg=Secondary) | `var(--color-primary-100, #efe5d1)` | `var(--color-text-primary, #1c1c1c)` |
| `Hovered` | Inactive (bg=White) | `var(--color-primary-100, #efe5d1)` | `var(--color-text-primary, #1c1c1c)` |
| `Disabled` | Any | opacity `0.5` (весь компонент) | — |

---

## 4. Типографика

| Element | Style | Size | Weight | Line-height |
|---------|-------|------|--------|-------------|
| Текст активного таба | H8 / Medium | `16px` | `500` | `22px` |
| Текст неактивного таба | H8 / Regular | `16px` | `400` | `22px` |
| Letter-spacing | — | — | — | `-0.16px` |

---

## 5. Badge / Number

| Property | Value |
|----------|-------|
| Height | `20px` |
| Padding X | `5px` |
| Border Radius | `10px` |
| Font | Caption 1 / SemiBold — 12px, weight 600, line-height 16px |
| BG (активный таб) | `var(--color-neutral-200, #e6e6e6)` |
| BG (неактивный таб) | `var(--color-surface-disabled, #b2b2b2)` |
| Text color | `var(--color-text-secondary, #676767)` |

---

## 6. Иконки

- **Leading icon** / **Trailing icon**: `20×20px`
- Цвет иконки = цвет текста таба (наследует через `currentColor`)

---

## 7. Tabs (container)

| Property | Value |
|----------|-------|
| Display | `flex` |
| Align | `align-items: flex-start` |
| Underline — разделитель снизу | `border-bottom: 1px solid var(--color-border-divider, #e6e6e6)` |
| Filled — gap между табами | `4px` |
| Filled — padding контейнера | `4px` (bg-обёртка таба `border-radius: 12px`) |

---

## 8. CSS Implementation

```css
/* ─── Tab Base ──────────────────────────────────────────── */
.tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  background: transparent;
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-secondary, #676767);
  transition:
    color var(--duration-fast) var(--easing-default),
    background var(--duration-fast) var(--easing-default),
    opacity var(--duration-fast) var(--easing-default);
  -webkit-appearance: none;
  appearance: none;
  position: relative;
}

.tab--active {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary, #1c1c1c);
}

.tab--disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}

/* ─── Underline Form ────────────────────────────────────── */
.tab--underline {
  height: 46px;
  padding: 0 8px;
  padding-bottom: 8px; /* gap-elements-underline-y */
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
}

/* Внутренняя обёртка для контента underline-таба */
.tab--underline .tab__inner {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* Underline indicator */
.tab--underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px 2px 0 0;
  background: transparent;
  transition: background var(--duration-fast) var(--easing-default);
}

.tab--underline.tab--active::after {
  background: var(--color-bg-accent-primary, #bfa369);
}

.tab--underline:not(.tab--active):hover,
.tab--underline:not(.tab--active).tab--hovered {
  color: var(--color-text-primary, #1c1c1c);
}

/* ─── Filled Form ───────────────────────────────────────── */
.tab--filled {
  height: 40px;
  padding: 0 16px;
  border-radius: 100px;
  gap: 6px;
  flex-direction: row;
  align-items: center;
}

/* Filled — Active: Black */
.tab--filled.tab--black.tab--active {
  background: var(--color-surface-dark, #1c1c1c);
  color: var(--color-text-inverse, #ffffff);
}

/* Filled — Active: Accent */
.tab--filled.tab--accent.tab--active {
  background: var(--color-bg-accent-primary, #bfa369);
  color: var(--color-text-inverse, #ffffff);
}

/* Filled — Inactive on Secondary bg */
.tab--filled.tab--bg-secondary:not(.tab--active) {
  background: var(--color-surface-primary, #f2f2f2);
}

/* Filled — Inactive on White bg */
.tab--filled.tab--bg-white:not(.tab--active) {
  background: var(--color-surface-raised, #ffffff);
}

/* Filled — Hover Inactive: Black */
.tab--filled.tab--black:not(.tab--active):hover,
.tab--filled.tab--black:not(.tab--active).tab--hovered {
  background: var(--color-neutral-200, #e6e6e6);
  color: var(--color-text-primary, #1c1c1c);
}

/* Filled — Hover Inactive: Accent */
.tab--filled.tab--accent:not(.tab--active):hover,
.tab--filled.tab--accent:not(.tab--active).tab--hovered {
  background: var(--color-primary-100, #efe5d1);
  color: var(--color-text-primary, #1c1c1c);
}

/* ─── Icon ──────────────────────────────────────────────── */
.tab__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: currentColor;
}

/* ─── Badge / Number ────────────────────────────────────── */
.tab__badge {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  font-family: var(--font-family-base);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-semibold);
  line-height: 16px;
  color: var(--color-text-secondary, #676767);
  background: var(--color-surface-disabled, #b2b2b2);
  flex-shrink: 0;
}

.tab--active .tab__badge {
  background: var(--color-neutral-200, #e6e6e6);
}

/* ─── Tabs Container ────────────────────────────────────── */
.tabs {
  display: flex;
  align-items: flex-start;
}

/* Underline container */
.tabs--underline {
  border-bottom: 1px solid var(--color-border-divider, #e6e6e6);
}

/* Filled container */
.tabs--filled {
  gap: 4px;
  padding: 4px;
  background: var(--color-surface-primary, #f2f2f2);
  border-radius: 12px;
}

.tabs--filled.tabs--bg-white {
  background: var(--color-surface-raised, #ffffff);
}
```

---

## 9. HTML

```html
<!-- Underline Tabs -->
<div class="tabs tabs--underline" role="tablist">

  <!-- Активная вкладка -->
  <button
    class="tab tab--underline tab--active"
    role="tab"
    aria-selected="true"
  >
    <span class="tab__inner">
      <!-- Опционально: leading icon -->
      <svg class="tab__icon" width="20" height="20"><!-- иконка --></svg>
      Вкладка 1
      <!-- Опционально: badge -->
      <span class="tab__badge">3</span>
    </span>
  </button>

  <!-- Неактивная вкладка -->
  <button
    class="tab tab--underline"
    role="tab"
    aria-selected="false"
  >
    <span class="tab__inner">Вкладка 2</span>
  </button>

  <!-- Disabled -->
  <button
    class="tab tab--underline tab--disabled"
    role="tab"
    aria-selected="false"
    aria-disabled="true"
    disabled
  >
    <span class="tab__inner">Вкладка 3</span>
  </button>

</div>

<!-- Filled Tabs, Black, Secondary bg -->
<div class="tabs tabs--filled tabs--bg-secondary" role="tablist">

  <button
    class="tab tab--filled tab--black tab--bg-secondary tab--active"
    role="tab"
    aria-selected="true"
  >
    Вкладка 1
  </button>

  <button
    class="tab tab--filled tab--black tab--bg-secondary"
    role="tab"
    aria-selected="false"
  >
    Вкладка 2
    <span class="tab__badge">5</span>
  </button>

</div>

<!-- Filled Tabs, Accent, White bg -->
<div class="tabs tabs--filled tabs--bg-white" role="tablist">

  <button
    class="tab tab--filled tab--accent tab--bg-white tab--active"
    role="tab"
    aria-selected="true"
  >
    Вкладка 1
  </button>

  <button
    class="tab tab--filled tab--accent tab--bg-white"
    role="tab"
    aria-selected="false"
  >
    Вкладка 2
  </button>

</div>
```

---

## Rules for AI assistants

- ✅ `role="tablist"` на контейнере, `role="tab"` + `aria-selected="true/false"` на каждой вкладке — обязательная семантика.
- ✅ Underline indicator реализуется через `::after` псевдоэлемент, не отдельный DOM-элемент.
- ✅ Disabled таб: `opacity: 0.5` на весь компонент целиком — не менять отдельные цвета.
- ✅ `font-weight: 500` у активного таба и `font-weight: 400` у неактивного — обязательное различие.
- ✅ Badge на активном табе: `#e6e6e6`; на неактивном: `#b2b2b2` — два разных уровня серого.
- ✅ Filled tabs wrapped в контейнер с `border-radius: 12px` и `padding: 4px` — контейнер формирует таб-бар.
- ✅ `tabs--filled` контейнер фон: `Secondary` = `var(--color-surface-primary, #f2f2f2)`, `White` = `var(--color-surface-raised, #ffffff)`.
- ✅ Иконки (leading/trailing) `20×20px`, цвет через `currentColor`.
- ✅ Letter-spacing `-0.16px` у текста вкладок.
- ❌ Не добавлять `border` к Filled табу — форма задаётся только `border-radius` и `background`.
- ❌ Не использовать `text-decoration: underline` для Underline формы — только `::after` псевдоэлемент.
- ❌ Не смешивать Underline и Filled в одном контейнере.
- ❌ Не указывать `tabindex` вручную без реализации keyboard navigation — aria-паттерн requires roving tabindex.
