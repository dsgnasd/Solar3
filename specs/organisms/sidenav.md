# Sidenav — Solar3 Design System

> Source: Figma → Component «Меню»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Левая навигационная панель приложения. Поддерживает разворачивание/сворачивание и вложенные подменю.

| Суб-компонент | Описание |
|---|---|
| **Nav Item** | Строка верхнего уровня с иконкой, лейблом и опциональной стрелкой |
| **Nav Submenu** | Раскрываемая секция вложенной навигации |
| **Nav Submenu Item** | Строка внутри подменю |
| **Sidenav Panel** | Контейнер-панель с лого и кнопкой сворачивания |

---

## Props

| Prop | Values | Default | Описание |
|------|--------|---------|---------|
| `collapsed` | `true`, `false` | `false` | Свёрнуто ли боковое меню |

---

## Размеры панели

| Property | Expanded | Collapsed | Token |
|----------|----------|-----------|-------|
| Width | `288px` | `84px` | `--sidebar-expanded-width` / `--sidebar-collapsed-width` |
| Height | `fluid (100%)` | — | — |
| Padding Top | `24px` | `24px` | — |
| Padding X | `24px` | `12px` | — |
| Background | `#f7f8fc` | `#f7f8fc` | `--color-surface-app` ¹ |

> ¹ `--color-surface-app: #f7f8fc` — новый токен, добавить в `tokens.css`. Светло-голубой фон приложения, отличается от `--color-surface-default (#f2f2f2)`.

---

## Цветовые токены навигации

Цвета навигации не входят в текущий `tokens.css` — их нужно добавить в раздел `:root`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface-app` | `#f7f8fc` | Фон панели |
| `--color-nav-item-active-bg` | `rgba(59, 121, 255, 0.8)` | Фон активного пункта |
| `--color-nav-item-active-text` | `#ffffff` | Текст/иконка активного пункта |
| `--color-nav-item-default-text` | `#2c2d2e` | Текст пункта по умолчанию |
| `--color-nav-item-hover-bg` | `rgba(59, 121, 255, 0.06)` | Ховер на неактивном пункте |
| `--color-nav-submenu-active-bg` | `rgba(59, 121, 255, 0.15)` | Фон активного подпункта |
| `--color-nav-submenu-active-text` | `#1c62fa` | Текст активного подпункта |
| `--color-nav-connector-active` | `rgba(59, 121, 255, 0.8)` | Линия-коннектор активной ветки |
| `--color-nav-connector-default` | `#d9dee8` | Линия-коннектор по умолчанию |
| `--color-nav-footer-bg` | `rgba(59, 121, 255, 0.05)` | Фон нижней секции |
| `--color-nav-footer-text` | `#57595b` | Текст кнопки «Свернуть» |

---

## 1. Nav Item

### Размеры

| Property | Value |
|----------|-------|
| Height | `40px` |
| Padding X | `12px` |
| Padding Y | `8px` |
| Gap (icon – label) | `8px` |
| Gap (label-group – trailing arrow) | `4px` |
| Border Radius | `8px` |
| Leading icon | `20×20px` |
| Trailing arrow container | `20×20px` |
| Trailing arrow icon (inner) | `16×16px` |

### States

| State | Background | Text & icon | Trailing arrow |
|-------|------------|-------------|----------------|
| `Default` (без подменю) | `transparent` | `#2c2d2e` | — |
| `Default` (с подменю, свёрнуто) | `transparent` | `#2c2d2e` | `arrow-down` |
| `Hovered` | `rgba(59,121,255,0.06)` | `#2c2d2e` | без изменений |
| `Active` (без подменю) | `rgba(59,121,255,0.8)` | `#ffffff` | — |
| `Active` (с подменю, раскрыто) | `rgba(59,121,255,0.8)` | `#ffffff` | `arrow-up` |

### Типографика

- Font: Manrope / Medium — `14px`, weight `500`, line-height `18px`
- Цвет Default: `var(--color-nav-item-default-text, #2c2d2e)`
- Цвет Active: `var(--color-nav-item-active-text, #ffffff)`

### Анатомия

```
┌─ .sidenav-item (flex row, h:40px, px:12px, py:8px, r:8px) ─┐
│  ┌─ .sidenav-item__inner (flex, gap 8px, flex-grow) ────────┐│
│  │  [icon 20×20]                                             ││
│  │  .sidenav-item__label                                     ││
│  └───────────────────────────────────────────────────────────┘│
│  [.sidenav-item__arrow 20×20]   ← опционально                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 2. Nav Submenu

Секция подменю раскрывается под родительским Nav Item. Содержит вертикальный коннектор-линию и список подпунктов.

### Отступы

| Property | Value |
|----------|-------|
| Padding Left (от края панели) | `12px` |
| Ширина колонки коннектора | `20px` |
| Padding X коннектора | `10px` (линия центрирована) |
| Gap между подпунктами | `4px` |

### Коннектор-линия

| Часть | Ширина | Цвет |
|-------|--------|------|
| Активная ветка (высота первого подпункта, 40px) | `2px` | `rgba(59,121,255,0.8)` |
| Остальная ветка | `1px` | `#d9dee8` |

> Если ни один подпункт не активен — вся линия `1px #d9dee8`.

---

## 3. Nav Submenu Item

### Размеры

| Property | Value |
|----------|-------|
| Height | `40px` |
| Padding Left | `12px` |
| Padding Right | `10px` |
| Padding Y | `8px` |
| Border Radius | `8px` |

### States

| State | Background | Text |
|-------|------------|------|
| `Default` | `transparent` | `var(--color-nav-item-default-text, #2c2d2e)` |
| `Active` | `rgba(59,121,255,0.15)` | `#1c62fa` |
| `Hovered` | `rgba(59,121,255,0.06)` | `#2c2d2e` |

### Типографика

- Font: Manrope / Medium — `13px`, weight `500`, line-height `18px`

---

## 4. Нижняя секция (Collapse control)

| Property | Value |
|----------|-------|
| Background | `rgba(59,121,255,0.05)` |
| Padding | `24px 32px` |
| Icon | `sidebar-left` `20×20px`, цвет `#57595b` |
| Text | «Свернуть», Manrope Regular `14px`, `#57595b` |
| Gap (icon – text) | `8px` |

> В свёрнутом состоянии текст «Свернуть» скрывается, остаётся только иконка.

---

## CSS Implementation

```css
/* ─── Новые токены (добавить в tokens.css :root) ─────── */
:root {
  --color-surface-app:               #f7f8fc;
  --color-nav-item-active-bg:        rgba(59, 121, 255, 0.8);
  --color-nav-item-active-text:      #ffffff;
  --color-nav-item-default-text:     #2c2d2e;
  --color-nav-item-hover-bg:         rgba(59, 121, 255, 0.06);
  --color-nav-submenu-active-bg:     rgba(59, 121, 255, 0.15);
  --color-nav-submenu-active-text:   #1c62fa;
  --color-nav-connector-active:      rgba(59, 121, 255, 0.8);
  --color-nav-connector-default:     #d9dee8;
  --color-nav-footer-bg:             rgba(59, 121, 255, 0.05);
  --color-nav-footer-text:           #57595b;
}

/* ─── Панель ─────────────────────────────────────────── */
.sidenav {
  display: flex;
  flex-direction: column;
  width: var(--sidebar-expanded-width, 288px);
  height: 100%;
  background: var(--color-surface-app, #f7f8fc);
  transition: width var(--duration-normal, 0.3s) var(--easing-default);
  overflow: hidden;
  flex-shrink: 0;
}

.sidenav--collapsed {
  width: var(--sidebar-collapsed-width, 84px);
}

/* ─── Верхняя секция ─────────────────────────────────── */
.sidenav__top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
}

/* ─── Лого ───────────────────────────────────────────── */
.sidenav__logo {
  width: 56px;
  height: 32px;
  flex-shrink: 0;
}

/* ─── Список пунктов ─────────────────────────────────── */
.sidenav__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* ─── Nav Item ───────────────────────────────────────── */
.sidenav-item {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--duration-fast) var(--easing-default);
  flex-shrink: 0;
}

.sidenav-item__inner {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.sidenav-item__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-nav-item-default-text, #2c2d2e);
}

.sidenav-item__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  color: var(--color-nav-item-default-text, #2c2d2e);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

.sidenav-item__arrow {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-nav-item-default-text, #2c2d2e);
  transition: transform var(--duration-fast) var(--easing-default);
}

.sidenav-item__arrow svg {
  width: 16px;
  height: 16px;
}

/* ─── Nav Item: Hover ────────────────────────────────── */
.sidenav-item:not(.sidenav-item--active):hover {
  background: var(--color-nav-item-hover-bg, rgba(59, 121, 255, 0.06));
}

/* ─── Nav Item: Active ───────────────────────────────── */
.sidenav-item--active {
  background: var(--color-nav-item-active-bg, rgba(59, 121, 255, 0.8));
}

.sidenav-item--active .sidenav-item__icon,
.sidenav-item--active .sidenav-item__label,
.sidenav-item--active .sidenav-item__arrow {
  color: var(--color-nav-item-active-text, #ffffff);
}

/* ─── Submenu ────────────────────────────────────────── */
.sidenav-submenu {
  display: flex;
  align-items: flex-start;
  padding-left: 12px;
}

.sidenav-submenu__connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  padding: 0 9px; /* центрирует 2px линию в 20px колонке */
  flex-shrink: 0;
  align-self: stretch;
}

/* Верхняя (активная) часть коннектора */
.sidenav-submenu__line-top {
  width: 2px;
  height: 40px; /* высота одного пункта */
  flex-shrink: 0;
  background: var(--color-nav-connector-active, rgba(59, 121, 255, 0.8));
}

/* Нижняя (дефолтная) часть коннектора */
.sidenav-submenu__line-rest {
  flex: 1;
  width: 1px;
  background: var(--color-nav-connector-default, #d9dee8);
}

/* Если нет активного подпункта — одна линия на всю высоту */
.sidenav-submenu--no-active .sidenav-submenu__connector {
  padding: 0 9.5px;
}

.sidenav-submenu--no-active .sidenav-submenu__line-rest {
  width: 1px;
}

.sidenav-submenu__items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

/* ─── Submenu Item ───────────────────────────────────── */
.sidenav-subitem {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 10px 8px 12px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  transition: background var(--duration-fast) var(--easing-default);
}

.sidenav-subitem__label {
  font-family: var(--font-family-base);
  font-size: 13px; /* --typography/body2size */
  font-weight: var(--font-weight-medium);
  line-height: 18px;
  color: var(--color-nav-item-default-text, #2c2d2e);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

.sidenav-subitem:not(.sidenav-subitem--active):hover {
  background: var(--color-nav-item-hover-bg, rgba(59, 121, 255, 0.06));
}

.sidenav-subitem--active {
  background: var(--color-nav-submenu-active-bg, rgba(59, 121, 255, 0.15));
}

.sidenav-subitem--active .sidenav-subitem__label {
  color: var(--color-nav-submenu-active-text, #1c62fa);
}

/* ─── Нижняя секция ──────────────────────────────────── */
.sidenav__bottom {
  flex-shrink: 0;
  background: var(--color-nav-footer-bg, rgba(59, 121, 255, 0.05));
}

.sidenav__collapse-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 24px 32px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.sidenav__collapse-btn svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-nav-footer-text, #57595b);
}

.sidenav__collapse-label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 18px;
  color: var(--color-nav-footer-text, #57595b);
  white-space: nowrap;
  overflow: hidden;
}

/* В свёрнутом состоянии скрываем тексты */
.sidenav--collapsed .sidenav-item__label,
.sidenav--collapsed .sidenav-item__arrow,
.sidenav--collapsed .sidenav__collapse-label,
.sidenav--collapsed .sidenav-submenu {
  display: none;
}

.sidenav--collapsed .sidenav__top {
  padding: 24px 12px;
}

.sidenav--collapsed .sidenav__collapse-btn {
  padding: 24px;
  justify-content: center;
}
```

---

## HTML Structure

```html
<nav class="sidenav" aria-label="Основная навигация">
  <div class="sidenav__top">
    <!-- Лого -->
    <div class="sidenav__logo">
      <img src="..." alt="БелВЭБ Страхование" />
    </div>

    <!-- Навигационный список -->
    <ul class="sidenav__nav" role="list">

      <!-- Пункт с подменю (активный) -->
      <li>
        <button class="sidenav-item sidenav-item--active" aria-expanded="true">
          <span class="sidenav-item__inner">
            <svg class="sidenav-item__icon" width="20" height="20"><!-- icon --></svg>
            <span class="sidenav-item__label">Контакты</span>
          </span>
          <span class="sidenav-item__arrow">
            <svg width="16" height="16"><!-- arrow-up --></svg>
          </span>
        </button>
        <!-- Submenu (expanded) -->
        <div class="sidenav-submenu" aria-label="Подменю Контакты">
          <div class="sidenav-submenu__connector">
            <div class="sidenav-submenu__line-top"></div>
            <div class="sidenav-submenu__line-rest"></div>
          </div>
          <ul class="sidenav-submenu__items" role="list">
            <li>
              <a class="sidenav-subitem sidenav-subitem--active" href="/contacts/individuals" aria-current="page">
                <span class="sidenav-subitem__label">Физические лица</span>
              </a>
            </li>
            <li>
              <a class="sidenav-subitem" href="/contacts/legal">
                <span class="sidenav-subitem__label">Юридические лица</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <!-- Пункт без подменю (дефолтный) -->
      <li>
        <a class="sidenav-item" href="/agent-network">
          <span class="sidenav-item__inner">
            <svg class="sidenav-item__icon" width="20" height="20"><!-- icon --></svg>
            <span class="sidenav-item__label">Агентская сеть</span>
          </span>
        </a>
      </li>

      <!-- Пункт с подменю (свёрнутый, дефолтный) -->
      <li>
        <button class="sidenav-item" aria-expanded="false">
          <span class="sidenav-item__inner">
            <svg class="sidenav-item__icon" width="20" height="20"><!-- icon --></svg>
            <span class="sidenav-item__label">Договоры</span>
          </span>
          <span class="sidenav-item__arrow">
            <svg width="16" height="16"><!-- arrow-down --></svg>
          </span>
        </button>
        <!-- Submenu hidden (collapsed) — добавь hidden или display:none -->
      </li>

    </ul>
  </div>

  <!-- Нижняя секция: кнопка свернуть -->
  <div class="sidenav__bottom">
    <button class="sidenav__collapse-btn" aria-label="Свернуть меню">
      <svg width="20" height="20"><!-- sidebar-left --></svg>
      <span class="sidenav__collapse-label">Свернуть</span>
    </button>
  </div>
</nav>
```

---

## Rules for AI assistants

- ✅ `--color-nav-*` и `--color-surface-app` — новые токены, которые нужно добавить в `tokens.css` перед использованием компонента.
- ✅ Цвет текста пунктов навигации `#2c2d2e` (`--color-nav-item-default-text`) ≠ `--color-text-primary (#1c1c1c)` — не заменять.
- ✅ Кнопки с подменю используют `aria-expanded="true/false"` для доступности.
- ✅ Активный пункт страницы получает `aria-current="page"` на ссылке/кнопке.
- ✅ `<nav aria-label="...">` — обёртка обязательно семантическая.
- ✅ В свёрнутом состоянии (`collapsed`) скрывать тексты через `display: none` — они недоступны для скринридеров при collapsed → добавить `aria-label` к иконкам.
- ✅ Коннектор-линия реализуется через CSS div-элементы, а не SVG — проще контролировать высоту.
- ✅ Ширина панели управляется CSS-переменными `--sidebar-expanded-width` и `--sidebar-collapsed-width`.
- ❌ Не использовать `--color-text-primary` для текста навигации — цвет другой.
- ❌ Не добавлять `border` к пунктам навигации — разделение только через фон.
- ❌ Не использовать `font-size: 16px` для лейблов навигации — строго `14px` для верхнего уровня и `13px` для подменю.
- ❌ Не применять `align-items: center` к `.sidenav-submenu` — `flex-start` позволяет коннектору тянуться по высоте списка.
