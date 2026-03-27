# Tables — Solar3 Design System

> Source: Figma → Component «Table components» / «Table examples»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

| Компонент | Описание |
|-----------|---------|
| **Table Title** | Заголовок колонки (header cell) — `44px` |
| **Table Cell** | Ячейка тела таблицы — `72px`, 5 типов контента |
| **Action Button** | Иконка-кнопка `40×40px`, используется в ячейках и хедере |
| **Table Header** | Панель над таблицей — title, search, фильтры, кнопки |
| **Table Pagination** | Нижняя панель — «на странице», счётчик, навигация |

**Архитектура таблицы:**
```
Table Header (panel)
├── Table (grid)
│   ├── Column → Table Title + Table Cell × N
│   ├── Column → Table Title + Table Cell × N
│   └── …
└── Table Pagination
```

---

## 1. Table Title (колонка-заголовок)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `color` | `White`, `Grey` | `White` |
| `border` | `Down`, `All` | `Down` |
| `textStart` | `true`, `false` | `true` |
| `textEnd` | `true`, `false` | `true` |
| `checkbox` | `true`, `false` | `true` |
| `iconEnd` | `true`, `false` (pin) | `true` |

### Размеры

| Property | Value |
|----------|-------|
| Height | `44px` |
| Padding X | `24px` |
| Padding Y | `12px` |
| Gap (checkbox — текст) | `12px` |
| Gap (title — sort-icon) | `8px` |
| Sort icon | `16×16px` |
| Pin icon | `16×16px` |

### Цвета

| Prop | Background | Token |
|------|-----------|-------|
| `White` | `var(--color-surface-raised, #ffffff)` | `--background/secondary` |
| `Grey` | `var(--color-surface-primary, #f2f2f2)` | `--background/primary` |
| Border | `var(--color-border-divider, #e6e6e6)` | `--border/divider` |

### Типографика

- **Label**: Body 2 / SemiBold — `13px`, weight `600`, line-height `18px`, letter-spacing `-0.13px`
- **Цвет**: `var(--color-text-secondary, #676767)`

### Sort icon (иконка сортировки)

| Type | State | Direction | Описание |
|------|-------|-----------|---------|
| `1` | `Default` | Up/Down | Одна стрелка, серая (`--color-text-secondary`) |
| `1` | `Hover` | Up/Down | Серая, темнее (`--color-text-primary`) |
| `1` | `Active` | Up/Down | Акцентная (`--color-bg-accent-primary, #bfa369`) |
| `2` | `Default` | Neutral | Двойная стрелка ↕ , серая |
| `2` | `Hover` | Up/Down | Одна стрелка подсвечена |
| `2` | `Active` | Up/Down | Акцентная одна стрелка |

---

## 2. Table Cell (ячейка тела)

### Props

| Prop | Values | Default |
|------|--------|---------|
| `type` | `Cell`, `Chips`, `Status`, `Action icons`, `Input` | `Cell` |
| `color` | `White`, `Grey` | `White` |
| `border` | `Down`, `All` | `Down` |
| `checkbox` | `true`, `false` | `true` |
| `radio` | `true`, `false` | `true` |
| `switch` | `true`, `false` | `true` |
| `icon` | `true`, `false` (leading 20px) | `true` |
| `file` | `true`, `false` (FileTypeIcon 32px) | `true` |
| `avatar` | `true`, `false` (40px круг) | `true` |
| `title` | `true`, `false` | `true` |
| `subtitle` | `true`, `false` | `true` |
| `textRight` | `true`, `false` | `true` |
| `iconRight` | `true`, `false` (20px info-circle) | `true` |
| `actionButton` | `true`, `false` | `true` |

> Leading-элементы (`checkbox`, `radio`, `switch`, `icon`, `file`, `avatar`) — взаимоисключающие группы. Используется только один на ячейку.

### Размеры (type=Cell)

| Property | Value |
|----------|-------|
| Height | `72px` |
| Padding X | `24px` |
| Padding Y | `16px` |
| Gap | `12px` |

### Цвета

| Prop | Background |
|------|-----------|
| `White` | `var(--color-surface-raised, #ffffff)` |
| `Grey` | `var(--color-surface-primary, #f2f2f2)` |
| Border | `var(--color-border-divider, #e6e6e6)` |

### Типографика ячейки (type=Cell)

| Element | Style | Size | Weight | Color |
|---------|-------|------|--------|-------|
| Title | Body 1 / Medium | `14px` | `500` | `var(--color-text-primary, #1c1c1c)` |
| Subtitle | Body 1 / Regular | `14px` | `400` | `var(--color-text-secondary, #676767)` |
| Text Right | Body 1 / Medium | `14px` | `500` | `var(--color-text-primary, #1c1c1c)` |
| Letter-spacing | — | — | — | `-0.14px` |
| Line-height | — | `20px` | — | — |

### Состояния строки (row states)

| State | Background | Описание |
|-------|-----------|---------|
| `Default` | `var(--color-surface-raised, #ffffff)` | Обычная строка |
| `Hovered` | `var(--color-surface-light, #fafafa)` | Курсор над строкой |
| `Focused` | `var(--color-surface-light, #fafafa)` + focus ring | Клавиатурный фокус |
| `Selected` | `var(--color-bg-accent-secondary, #efe5d1)` | Строка выбрана |
| `Default with badge` | `var(--color-surface-raised, #ffffff)` | С бейджем уведомления |
| `Selected with badge` | `var(--color-bg-accent-secondary, #efe5d1)` | Выбрана + бейдж |

> Grey-строки (`color=Grey`) используют `var(--color-surface-primary, #f2f2f2)` вместо white для Default/Hovered.

### Типы ячеек

#### type=Status

- Width: `145px`
- Содержит статус-чип (Chip sm, `border-radius: 100px`, `h: 30px`)
- Цвет чипа зависит от статуса, пример: `bg: var(--color-bg-accent-secondary, #efe5d1)`, текст `var(--color-text-accent-secondary, #7a6741)`
- Типографика чипа: Body 2 fix / Medium — `13px`, weight `500`, line-height `18px`, letter-spacing `-0.13px`
- Gap между чипами: `4px`
- Padding чипа: `0 var(--ui/chip/sm/px, 6px)` + inner `px: 6px`

#### type=Chips

- Одна или несколько Chip-тегов в ряд, `gap: 4px`
- Те же размеры и типографика что у Status

#### type=Action icons

- Width: `248px` (содержит 2–3 action кнопки)
- Кнопки `40×40px`, прозрачный фон по умолчанию, hover = `var(--color-surface-primary, #f2f2f2)`

#### type=Input

- Width: `200px`
- Инлайн Input Outline sm (`h: 40px`, `px: 12px`, `rounded: 12px`)

---

## 3. Action Button

### Размеры и токены

| Property | Value | Token |
|----------|-------|-------|
| Size | `40×40px` | `--ui/action-button/sm/h` = `40px` |
| Border Radius | `12px` | `--ui/action-button/sm/rounded` = `12px` |
| Icon | `20×20px` | — |

### States

| State | Background |
|-------|-----------|
| `Default` (в хедере) | `var(--color-surface-primary, #f2f2f2)` |
| `Default` (в ячейке) | `transparent` |
| `Hover` | `var(--color-surface-primary, #f2f2f2)` |
| `Focused` | `var(--color-surface-primary, #f2f2f2)` + focus ring |
| `Active/Pressed` | `var(--color-neutral-200, #e6e6e6)` |
| `Disabled` | `transparent`, `opacity: 0.4` |

---

## 4. Table Header

### Props

| Prop | Default |
|------|---------|
| `title` | `true` |
| `subtitle` | `true` |
| `badge` | `true` |
| `search` | `true` |
| `quickFilters` | `true` |
| `quickFilter1` | `true` |
| `quickFilter2` | `true` |
| `buttons` | `true` |
| `primaryButton` | `true` |
| `secondaryButton` | `true` |
| `actionIcons` | `true` |

### Размеры и цвета

| Property | Value |
|----------|-------|
| Background | `var(--color-surface-raised, #ffffff)` |
| Border | `1px solid var(--color-border-divider, #e6e6e6)` |
| Border-radius | `16px 16px 0 0` (только верхние углы) |
| Content padding | `px: 24px`, `py: 20px` |
| Gap между строками (wrap) | `16px` |
| Divider снизу | `1px solid var(--color-border-divider, #e6e6e6)` |

### Title/Subtitle/Badge

| Element | Style | Size | Weight | Color |
|---------|-------|------|--------|-------|
| Title | H6 / SemiBold | `20px` | `600` | `var(--color-text-primary, #1c1c1c)` |
| Subtitle | Body 1 / Regular | `14px` | `400` | `var(--color-text-secondary, #676767)` |
| Letter-spacing Title | — | — | — | `-0.2px` |
| Line-height Title | — | `28px` | — | — |
| Badge bg | — | — | — | `var(--color-bg-accent-secondary, #efe5d1)` |
| Badge text | Body 1 / SemiBold | `14px` | `600` | `var(--color-text-accent-secondary, #7a6741)` |
| Badge size | `h: 24px`, `px: 6px`, `border-radius: 12px` | — | — | — |

### Search (Input Outline sm)

| Property | Value |
|----------|-------|
| Width | `240px` |
| Height | `40px` (`--ui/input-outline/sm`) |
| Padding X | `12px` (`--ui/input-outline/sm/px`) |
| Border Radius | `12px` (`--ui/input-outline/sm/rounded`) |
| Gap X | `8px` (`--ui/input-outline/sm/gap-x`) |
| Leading icon | `search`, `20×20px` |
| Placeholder | `var(--color-text-tertiary, #9a9a9a)` |

### Filter Item (Quick Filter)

| Property | Value |
|----------|-------|
| Width | `~240px` |
| Height | `40px` |
| Padding | `pl: 16px`, `pr: 12px`, `py: 9px` |
| Background | `var(--color-surface-light, #fafafa)` |
| Border | `1px solid var(--color-border-default, #cdcdcd)` |
| Border Radius | `12px` |
| Leading icon | `filter`, `20×20px`, `var(--color-text-secondary)` |
| Text | Body 1 / Medium, `14px`, `var(--color-text-secondary, #676767)` |
| Trailing icon | `arrow-down`, `20×20px` |

### Buttons

| Button | Style | Height | Padding X | Border Radius |
|--------|-------|--------|-----------|---------------|
| Primary | `bg: var(--color-bg-accent-primary, #bfa369)`, text white | `40px` | `16px` | `12px` |
| Secondary | `border: 1px solid var(--color-bg-accent-primary, #bfa369)`, text `var(--color-text-accent-secondary, #7a6741)` | `40px` | `16px` | `12px` |

Typography buttons: Body 1 fix / SemiBold — `14px`, weight `600`, line-height `20px`, letter-spacing `-0.14px`.

### Action Icons

- `40×40px`, `border-radius: 12px`, bg `var(--color-surface-primary, #f2f2f2)`
- Icon `20×20px`
- Типичные иконки: `filter`, `download-cloud`, `grid-5`, `maximize-2`

---

## 5. Table Pagination

### Размеры и цвета

| Property | Value |
|----------|-------|
| Height | `68px` |
| Background | `var(--color-surface-raised, #ffffff)` |
| Border | `1px solid var(--color-border-divider, #e6e6e6)` |
| Border-radius | `0 0 16px 16px` (только нижние углы) |
| Padding | `px: 24px`, `pt: 12px`, `pb: 16px` |
| Border-top | `1px solid var(--color-border-divider, #e6e6e6)` |

### Левая часть («на странице»)

| Element | Описание |
|---------|---------|
| Лейбл «На странице» | Body 2 / Medium, `13px`, `var(--color-text-secondary)` |
| Dropdown | Input Outline sm, `w: 80px`, значение по умолчанию `20` |
| Лейбл «1-20 из 250» | Body 2 / Medium, `13px`, `var(--color-text-secondary)` |

### Правая часть (навигация)

| Element | Описание |
|---------|---------|
| Action Button ← | `arrow_left`, `40×40px` |
| Input страницы | Input Outline sm, `w: 40px`, текущая страница |
| Лейбл «из 11» | Body 2 / Medium, `13px`, `var(--color-text-secondary)` |
| Action Button → | `arrow_right`, `40×40px` |

Typography Body 2 / Medium: `13px`, weight `500`, line-height `18px`, letter-spacing `-0.13px`.

### Horizontal scroll indicator

- `h: 8px`, `border-radius: 4px`
- Track: `var(--color-surface-primary, #f2f2f2)`
- Thumb: `var(--color-surface-disabled, #b2b2b2)`

---

## 6. CSS Implementation

```css
/* ═══════════════════════════════════════════════════════
   TABLE TITLE
═══════════════════════════════════════════════════════ */
.table-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 12px 24px;
  background: var(--color-surface-raised, #ffffff);
  border-bottom: 1px solid var(--color-border-divider, #e6e6e6);
  font-family: var(--font-family-base);
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-semibold);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
  user-select: none;
}

.table-title--grey {
  background: var(--color-surface-primary, #f2f2f2);
}

.table-title--border-all {
  border: 1px solid var(--color-border-divider, #e6e6e6);
}

.table-title__inner {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  min-width: 0;
}

.table-title__label {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.table-title__sort {
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-secondary, #676767);
  transition: color var(--duration-fast) var(--easing-default);
}

.table-title__sort:hover,
.table-title__sort--hover {
  color: var(--color-text-primary, #1c1c1c);
}

.table-title__sort--active {
  color: var(--color-bg-accent-primary, #bfa369);
}

.table-title__trailing {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.table-title__pin {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

/* ═══════════════════════════════════════════════════════
   TABLE CELL
═══════════════════════════════════════════════════════ */
.table-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 72px;
  padding: 16px 24px;
  background: var(--color-surface-raised, #ffffff);
  border-bottom: 1px solid var(--color-border-divider, #e6e6e6);
  transition: background var(--duration-fast) var(--easing-default);
}

.table-cell--grey {
  background: var(--color-surface-primary, #f2f2f2);
}

.table-cell--border-all {
  border: 1px solid var(--color-border-divider, #e6e6e6);
}

/* Row hover state */
.table-cell:hover,
.table-row:hover .table-cell,
.table-cell--hovered {
  background: var(--color-surface-light, #fafafa);
}

/* Row selected state */
.table-cell--selected,
.table-row--selected .table-cell {
  background: var(--color-bg-accent-secondary, #efe5d1);
}

/* Text content */
.table-cell__text {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  line-height: 20px;
  letter-spacing: -0.14px;
}

.table-cell__title {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary, #1c1c1c);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-cell__subtitle {
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary, #676767);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-cell__text-right {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary, #1c1c1c);
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Leading icon/avatar */
.table-cell__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

.table-cell__file {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.table-cell__avatar {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  flex-shrink: 0;
  overflow: hidden;
}

/* Trailing icon */
.table-cell__icon-right {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

/* Status / Chips cell */
.table-cell--status {
  gap: 4px;
}

.table-cell__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}

.table-cell__chip {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 6px;
  border-radius: 100px;
  background: var(--color-bg-accent-secondary, #efe5d1);
  font-family: var(--font-family-base);
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-text-accent-secondary, #7a6741);
  white-space: nowrap;
  flex-shrink: 0;
}

/* ═══════════════════════════════════════════════════════
   ACTION BUTTON
═══════════════════════════════════════════════════════ */
.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px; /* --ui/action-button/sm/h */
  border-radius: 12px; /* --ui/action-button/sm/rounded */
  flex-shrink: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--color-icon-secondary, #676767);
  transition:
    background var(--duration-fast) var(--easing-default),
    color var(--duration-fast) var(--easing-default);
  -webkit-appearance: none;
  appearance: none;
}

/* В хедере и пагинации — всегда с фоном */
.action-button--filled {
  background: var(--color-surface-primary, #f2f2f2);
}

.action-button:hover,
.action-button--hovered {
  background: var(--color-surface-primary, #f2f2f2);
}

.action-button:active {
  background: var(--color-neutral-200, #e6e6e6);
}

.action-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(191, 163, 105, 0.2);
}

.action-button--disabled,
.action-button:disabled {
  opacity: 0.4;
  pointer-events: none;
}

.action-button__icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}

/* ═══════════════════════════════════════════════════════
   TABLE HEADER
═══════════════════════════════════════════════════════ */
.table-header {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid var(--color-border-divider, #e6e6e6);
  border-radius: 16px 16px 0 0;
}

.table-header__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
}

.table-header__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.table-header__title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.table-header__title-text {
  font-family: var(--font-family-base);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-semibold);
  line-height: 28px;
  letter-spacing: -0.2px;
  color: var(--color-text-primary, #1c1c1c);
  white-space: nowrap;
}

.table-header__badge {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 6px;
  border-radius: 12px;
  background: var(--color-bg-accent-secondary, #efe5d1);
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-semibold);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-accent-secondary, #7a6741);
  flex-shrink: 0;
}

.table-header__subtitle {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  color: var(--color-text-secondary, #676767);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Controls group (right side) */
.table-header__controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

/* Search */
.table-header__search {
  width: 240px;
}

/* Quick filter item */
.table-header__filter {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 9px 12px 9px 16px;
  gap: 8px;
  background: var(--color-surface-light, #fafafa);
  border: 1px solid var(--color-border-default, #cdcdcd);
  border-radius: 12px;
  cursor: pointer;
  min-width: 200px;
}

.table-header__filter-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

.table-header__filter-text {
  flex: 1 0 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.table-header__filter-arrow {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
}

/* Divider under content */
.table-header__divider {
  height: 1px;
  background: var(--color-border-divider, #e6e6e6);
}

/* ═══════════════════════════════════════════════════════
   TABLE PAGINATION
═══════════════════════════════════════════════════════ */
.table-pagination {
  display: flex;
  align-items: center;
  height: 68px;
  padding: 12px 24px 16px;
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid var(--color-border-divider, #e6e6e6);
  border-top: none; /* разделитель даётся отдельно */
  border-radius: 0 0 16px 16px;
}

.table-pagination__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--color-border-divider, #e6e6e6);
  padding-top: 12px;
}

.table-pagination__left,
.table-pagination__right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.table-pagination__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-13);
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  letter-spacing: -0.13px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

.table-pagination__page-size {
  width: 80px;
}

.table-pagination__page-input {
  width: 40px;
  text-align: center;
}

/* ═══════════════════════════════════════════════════════
   TABLE LAYOUT (обёртка)
═══════════════════════════════════════════════════════ */
.table-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.table {
  display: flex; /* колонки горизонтально */
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-surface-disabled, #b2b2b2) var(--color-surface-primary, #f2f2f2);
}

.table::-webkit-scrollbar {
  height: 8px;
}

.table::-webkit-scrollbar-track {
  background: var(--color-surface-primary, #f2f2f2);
  border-radius: 4px;
}

.table::-webkit-scrollbar-thumb {
  background: var(--color-surface-disabled, #b2b2b2);
  border-radius: 4px;
}

.table__column {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
```

---

## 7. HTML

```html
<!-- ═══ TABLE TITLE (header cell) ═══════════════════ -->

<!-- Default, белый, border-bottom -->
<div class="table-title">
  <div class="table-title__inner">
    <input type="checkbox" class="table-title__checkbox" aria-label="Выбрать все" />
    <div class="table-title__label">
      <span>Company</span>
      <button class="table-title__sort" aria-label="Сортировать" type="button">
        <!-- sort icon SVG -->
      </button>
    </div>
  </div>
  <div class="table-title__trailing">
    <svg class="table-title__pin" width="16" height="16"><!-- pin --></svg>
    <div class="table-title__label">
      <span>Amount</span>
      <button class="table-title__sort table-title__sort--active" aria-label="Сортировать по убыванию" type="button">
        <!-- sort-active icon SVG -->
      </button>
    </div>
  </div>
</div>


<!-- ═══ TABLE CELL (body cell, type=Cell) ═══════════ -->

<!-- Default, White, border-bottom, с avatar+текст -->
<div class="table-cell" role="row">
  <input type="checkbox" class="table-cell__checkbox" aria-label="Выбрать строку" />
  <img class="table-cell__avatar" src="avatar.jpg" alt="User Name" />
  <div class="table-cell__text">
    <span class="table-cell__title">Название компании</span>
    <span class="table-cell__subtitle">user@email.com</span>
  </div>
  <span class="table-cell__text-right">$1 200</span>
  <svg class="table-cell__icon-right" width="20" height="20"><!-- info-circle --></svg>
  <button class="action-button" type="button" aria-label="Копировать">
    <svg class="action-button__icon" width="20" height="20"><!-- copy --></svg>
  </button>
</div>

<!-- type=Status -->
<div class="table-cell table-cell--status">
  <div class="table-cell__chips">
    <span class="table-cell__chip">В процессе</span>
  </div>
</div>

<!-- type=Chips -->
<div class="table-cell table-cell--status">
  <div class="table-cell__chips">
    <span class="table-cell__chip">React</span>
    <span class="table-cell__chip">TypeScript</span>
  </div>
</div>

<!-- Selected row (обёртка на строку) -->
<div class="table-row table-row--selected" role="row" aria-selected="true">
  <div class="table-cell table-cell--selected">…</div>
  <div class="table-cell table-cell--selected">…</div>
</div>


<!-- ═══ TABLE HEADER ════════════════════════════════ -->
<div class="table-header">
  <div class="table-header__content">
    <div class="table-header__text">
      <div class="table-header__title">
        <h2 class="table-header__title-text">Пользователи</h2>
        <span class="table-header__badge">22</span>
      </div>
      <p class="table-header__subtitle">Список всех пользователей</p>
    </div>
    <div class="table-header__controls">
      <!-- Search -->
      <div class="table-header__search">
        <!-- Input Outline sm с leading-icon search -->
      </div>
      <!-- Quick Filters -->
      <button class="table-header__filter" type="button">
        <svg class="table-header__filter-icon" width="20" height="20"><!-- filter --></svg>
        <span class="table-header__filter-text">Quick Filter 1</span>
        <svg class="table-header__filter-arrow" width="20" height="20"><!-- arrow-down --></svg>
      </button>
      <!-- Buttons -->
      <button class="btn btn--sm btn--outline-accent" type="button">
        <svg width="20" height="20"><!-- plus --></svg>
        Экспорт
      </button>
      <button class="btn btn--sm btn--primary" type="button">
        <svg width="20" height="20"><!-- plus --></svg>
        Добавить
      </button>
      <!-- Action icons -->
      <div style="display:flex;gap:8px">
        <button class="action-button action-button--filled" type="button" aria-label="Фильтры">
          <svg class="action-button__icon" width="20" height="20"><!-- filter --></svg>
        </button>
        <button class="action-button action-button--filled" type="button" aria-label="Скачать">
          <svg class="action-button__icon" width="20" height="20"><!-- download-cloud --></svg>
        </button>
        <button class="action-button action-button--filled" type="button" aria-label="Настройка колонок">
          <svg class="action-button__icon" width="20" height="20"><!-- grid-5 --></svg>
        </button>
      </div>
    </div>
  </div>
  <div class="table-header__divider"></div>
</div>


<!-- ═══ TABLE PAGINATION ═════════════════════════════ -->
<div class="table-pagination">
  <div class="table-pagination__inner">
    <div class="table-pagination__left">
      <span class="table-pagination__label">На странице</span>
      <!-- Dropdown sm, w=80px -->
      <div class="table-pagination__page-size">
        <!-- Input sm с dropdown -->
      </div>
      <span class="table-pagination__label">1–20 из 250</span>
    </div>
    <div class="table-pagination__right">
      <button class="action-button action-button--filled" type="button" aria-label="Предыдущая страница">
        <svg class="action-button__icon" width="20" height="20"><!-- arrow-left --></svg>
      </button>
      <!-- Input sm w=40px (номер страницы) -->
      <div class="table-pagination__page-input">
        <!-- Input sm -->
      </div>
      <span class="table-pagination__label">из 11</span>
      <button class="action-button action-button--filled" type="button" aria-label="Следующая страница">
        <svg class="action-button__icon" width="20" height="20"><!-- arrow-right --></svg>
      </button>
    </div>
  </div>
</div>


<!-- ═══ ПОЛНАЯ ТАБЛИЦА (сборка) ═════════════════════ -->
<section class="table-wrap" aria-label="Таблица пользователей">

  <!-- Хедер -->
  <div class="table-header">…</div>

  <!-- Тело таблицы -->
  <div class="table" role="table">
    <!-- Колонка 1 -->
    <div class="table__column" role="columnheader">
      <div class="table-title">…</div>
      <div class="table-cell" role="cell">…</div>
      <div class="table-cell" role="cell">…</div>
    </div>
    <!-- Колонка 2 -->
    <div class="table__column" role="columnheader">
      <div class="table-title">…</div>
      <div class="table-cell" role="cell">…</div>
      <div class="table-cell" role="cell">…</div>
    </div>
  </div>

  <!-- Пагинация -->
  <div class="table-pagination">…</div>

</section>
```

---

## Rules for AI assistants

- ✅ Высота Table Title — строго `44px`, Table Cell — строго `72px`, Table Pagination — строго `68px`.
- ✅ Padding ячеек — `px: 24px`, `py` — `12px` (title) / `16px` (cell).
- ✅ `border-radius` таблицы: хедер `16px 16px 0 0`, пагинация `0 0 16px 16px` — только крайние углы.
- ✅ Gap внутри ячейки — `12px`. Gap внутри заголовка — `12px` (checkbox-label), `8px` (label-sort).
- ✅ Sort-active цвет — `var(--color-bg-accent-primary, #bfa369)`, не `--color-text-primary`.
- ✅ Row hover — `var(--color-surface-light, #fafafa)`, Row selected — `var(--color-bg-accent-secondary, #efe5d1)`.
- ✅ Action Button `40×40px`, `border-radius: 12px`. В хедере/пагинации — всегда `.action-button--filled`. В ячейке — прозрачный, фон появляется только на hover строки.
- ✅ Status/Chips chip: `h: 30px`, `px: 6px`, `border-radius: 100px`, Body2fix/Medium `13px`.
- ✅ Table Header Badge: `h: 24px`, `px: 6px`, `border-radius: 12px`, Body1/SemiBold `14px`.
- ✅ Filter Item в хедере: bg `#fafafa` (`--background/light`), не white и не `#f2f2f2`.
- ✅ Кастомный скроллбар таблицы: `h: 8px`, thumb `#b2b2b2`, track `#f2f2f2`.
- ✅ `role="table"`, `role="columnheader"`, `role="cell"`, `role="row"`, `aria-selected` на выбранной строке — обязательная семантика.
- ❌ Не задавать `border-radius` всем четырём углам одновременно на Table Title/Cell — они flush внутри таблицы.
- ❌ Не анимировать высоту строки — только `background` и `box-shadow`.
- ❌ Не использовать нативный `<table>/<thead>/<tr>/<td>` — дизайн построен на flex-колонках. Если нужна семантика, добавлять `role` атрибуты к flex-элементам.
- ❌ Не менять `gap: 12px` в ячейке — расстояние между всеми элементами одинаковое.
- ❌ Не смешивать `Color=Grey` и `Color=White` ячейки в одной колонке без намерения — используйте одно значение на всю таблицу.
