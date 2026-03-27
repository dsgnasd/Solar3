# Menu Item & Menu — Solar3 Design System

> Source: Figma → Components "Menu Item", "Menu Header", "Menu"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Три связанных компонента для построения контекстных меню и выпадающих панелей:

| Компонент | Описание |
|-----------|---------|
| **Menu Item** | Одна строка меню с иконками и текстом |
| **Menu Header** | Заголовочный блок над списком пунктов |
| **Menu** | Контейнер-обёртка с тенью и бордером |

---

## 1. Menu Item

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Default`, `Hovered`, `Disabled` | `Default` |
| `iconStart` | `true`, `false` | `true` |
| `iconEnd` | `true`, `false` | `true` |
| `title` | `true`, `false` | `true` |
| `subtitle` | `true`, `false` | `true` |

### Размеры

| Property | Value | Token |
|----------|-------|-------|
| Width | `fluid (100%)` | — |
| Padding X | `16px` | `--sds-size-space-400` |
| Padding Y | `12px` | `--sds-size-space-300` |
| Gap (icon – body) | `12px` | `--sds-size-space-300` |
| Gap (title – subtitle) | `2px` | — |
| Border Radius | `12px` | `--radius-md` |
| Min height без subtitle | `44px` | — |
| Min height с subtitle | `64px` | — |

### States

| State | Background | Title color | Subtitle color | Icon color |
|-------|------------|-------------|----------------|------------|
| `Default` | `var(--color-surface-raised, #ffffff)` | `#1e1e1e` | `#757575` | normal |
| `Hovered` | `var(--color-surface-default, #f2f2f2)` | `#1e1e1e` | `#757575` | normal |
| `Disabled` | `var(--color-surface-raised, #ffffff)` | `var(--color-text-tertiary, #9a9a9a)` | `var(--color-text-tertiary, #9a9a9a)` | tertiary |

### Типографика

| Элемент | Стиль | Размер | Weight | Line-height | Tracking |
|---------|-------|--------|--------|-------------|---------|
| Title | Body 1 fix / Medium | 14px | 500 | 20px | -0.14px |
| Subtitle | Body 2 / Regular | 13px | 400 | 18px | -0.13px |

### Анатомия

```
┌─ .menu-item (flex row, gap 12px, px 16px, py 12px) ──────┐
│  [iconStart 20×20]   ← опционально                        │
│  ┌─ .menu-item__body (flex col, gap 2px, flex-grow) ─────┐│
│  │  ┌─ .menu-item__row (flex, justify-between) ──────────┐││
│  │  │  .menu-item__title  (flex-grow)                    │││
│  │  │  [iconEnd 20×20]    ← опционально                  │││
│  │  └────────────────────────────────────────────────────┘││
│  │  .menu-item__subtitle  ← опционально                   ││
│  └─────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────-─┘
```

### CSS

```css
.menu-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-surface-raised, #ffffff);
  cursor: pointer;
  transition: background var(--duration-fast) var(--easing-default);
  overflow: hidden;
  width: 100%;
}

/* States */
.menu-item:hover,
.menu-item--hovered {
  background: var(--color-surface-default, #f2f2f2);
}

.menu-item--disabled {
  background: var(--color-surface-raised, #ffffff);
  pointer-events: none;
  cursor: default;
}

/* Icons */
.menu-item__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary);
}

.menu-item--disabled .menu-item__icon {
  color: var(--color-text-tertiary, #9a9a9a);
}

/* Body */
.menu-item__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 0 0;
  min-width: 0;
  min-height: 1px;
}

.menu-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
}

/* Title */
.menu-item__title {
  flex: 1 0 0;
  min-width: 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: #1e1e1e;
}

.menu-item--disabled .menu-item__title {
  color: var(--color-text-tertiary, #9a9a9a);
}

/* Subtitle */
.menu-item__subtitle {
  font-family: var(--font-family-base);
  font-size: 13px; /* --typography/body2size */
  font-weight: var(--font-weight-regular);
  line-height: 18px; /* --typography/body2line */
  letter-spacing: -0.13px;
  color: #757575;
  width: 100%;
}

.menu-item--disabled .menu-item__subtitle {
  color: var(--color-text-tertiary, #9a9a9a);
}
```

### HTML

```html
<!-- Default, все элементы -->
<div class="menu-item" role="menuitem">
  <svg class="menu-item__icon" width="20" height="20"><!-- leading icon --></svg>
  <div class="menu-item__body">
    <div class="menu-item__row">
      <span class="menu-item__title">Title</span>
      <svg class="menu-item__icon" width="20" height="20"><!-- trailing icon --></svg>
    </div>
    <span class="menu-item__subtitle">Subtitle</span>
  </div>
</div>

<!-- Hovered -->
<div class="menu-item menu-item--hovered" role="menuitem">…</div>

<!-- Disabled -->
<div class="menu-item menu-item--disabled" role="menuitem" aria-disabled="true">…</div>

<!-- Без иконок и subtitle -->
<div class="menu-item" role="menuitem">
  <div class="menu-item__body">
    <div class="menu-item__row">
      <span class="menu-item__title">Title</span>
    </div>
  </div>
</div>
```

---

## 2. Menu Header

Заголовочный блок вверху меню: надпись-ярлык + основной заголовок.

### Размеры

| Property | Value |
|----------|-------|
| Padding top | `8px` |
| Padding bottom | `4px` |
| Padding X | `16px` |
| Gap (label – heading) | `0px` |

### Типографика

| Элемент | Стиль | Размер | Weight | Line-height | Цвет |
|---------|-------|--------|--------|-------------|------|
| Label (верхний) | Body 1 / Regular | 14px | 400 | 20px | `#757575` |
| Heading (нижний) | H8 / Medium | 16px | 500 | 22px | `#1e1e1e` |

### CSS и HTML

```css
.menu-header {
  display: flex;
  flex-direction: column;
  padding: 8px 16px 4px;
  background: var(--color-surface-raised, #ffffff);
  width: 100%;
}

.menu-header__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: #757575;
}

.menu-header__heading {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16); /* --typography/h8size */
  font-weight: var(--font-weight-medium);
  line-height: 22px; /* --typography/h8line */
  letter-spacing: -0.16px;
  color: #1e1e1e;
  white-space: nowrap;
}
```

```html
<div class="menu-header">
  <span class="menu-header__label">Heading</span>
  <span class="menu-header__heading">Heading</span>
</div>
```

---

## 3. Menu Separator

Горизонтальный разделитель между секциями меню.

- **Высота контейнера**: `16px`
- **Линия**: `1px` высота, горизонтальная, вертикально центрирована (top: 8px)
- **Отступы линии**: `px: 16px` от краёв контейнера
- **Цвет**: `var(--color-border-divider, #e6e6e6)`

```css
.menu-separator {
  position: relative;
  width: 100%;
  height: 16px;
  flex-shrink: 0;
}

.menu-separator::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 16px;
  right: 16px;
  height: 1px;
  background: var(--color-border-divider, #e6e6e6);
}
```

```html
<div class="menu-separator" role="separator"></div>
```

---

## 4. Menu (контейнер)

### Стили контейнера

| Property | Value | Token |
|----------|-------|-------|
| Background | `#ffffff` | `--color-surface-raised` |
| Border | `1px solid var(--color-border-divider, #e6e6e6)` | `--border/divider` |
| Border Radius | `16px` | `--radius-lg` |
| Shadow | `0px 4px 20px 0px rgba(0,0,0,0.03)` | `Shadow/SmallCard` |
| Padding | `8px` | — |
| Display | `flex; flex-direction: column` | — |

### Menu Section

Группировка нескольких `Menu Item` без визуального оформления — просто `flex column`.

```css
.menu {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid var(--color-border-divider, #e6e6e6);
  border-radius: var(--radius-lg, 16px);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03);
  padding: 8px;
  overflow: hidden;
}

.menu-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}
```

### HTML — полная структура

```html
<div class="menu" role="menu">
  <!-- Заголовок -->
  <div class="menu-header">
    <span class="menu-header__label">Категория</span>
    <span class="menu-header__heading">Действия</span>
  </div>

  <!-- Разделитель -->
  <div class="menu-separator" role="separator"></div>

  <!-- Секция 1 -->
  <div class="menu-section">
    <div class="menu-item" role="menuitem">
      <svg class="menu-item__icon" width="20" height="20">…</svg>
      <div class="menu-item__body">
        <div class="menu-item__row">
          <span class="menu-item__title">Пункт меню</span>
        </div>
      </div>
    </div>
    <div class="menu-item" role="menuitem">
      <svg class="menu-item__icon" width="20" height="20">…</svg>
      <div class="menu-item__body">
        <div class="menu-item__row">
          <span class="menu-item__title">Пункт меню</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Разделитель -->
  <div class="menu-separator" role="separator"></div>

  <!-- Секция 2 -->
  <div class="menu-section">
    <div class="menu-item menu-item--disabled" role="menuitem" aria-disabled="true">
      <svg class="menu-item__icon" width="20" height="20">…</svg>
      <div class="menu-item__body">
        <div class="menu-item__row">
          <span class="menu-item__title">Недоступный пункт</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Rules for AI assistants

- ✅ `Menu Item` использует `align-items: flex-start` — иконка выравнивается по первой строке текста, не по центру.
- ✅ Hover-состояние меняет только `background` на `--color-surface-default (#f2f2f2)`. Цвет текста не меняется.
- ✅ `Disabled` — `pointer-events: none` + `aria-disabled="true"`. Цвет всего содержимого становится `--color-text-tertiary`.
- ✅ `Menu` всегда имеет `overflow: hidden` — дочерние `border-radius` ячеек работают через clip от родителя.
- ✅ `Menu Separator` реализуется через `::after` псевдоэлемент, а не через отдельный `<hr>` с margin — чтобы сохранить точную высоту `16px`.
- ✅ `role="menu"` на контейнере, `role="menuitem"` на каждом пункте, `role="separator"` на разделителе.
- ❌ Не добавлять `border` напрямую на `Menu Item` — визуальное разделение только через `Menu Separator`.
- ❌ Не использовать `align-items: center` в `.menu-item` — при наличии subtitle иконка должна прижиматься к верхней строке.
- ❌ Не делать shadow на `Menu Item` — тень только на `Menu` контейнере.
