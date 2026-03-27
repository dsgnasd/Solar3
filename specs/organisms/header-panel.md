# Header Panel — Solar3 Design System

> Source: Figma → Components "Header Panel/1", "UI Bars", "Save_area"
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Мобильный хедер — набор из трёх слоёв, которые стекируются вертикально:

| Компонент | Высота | Описание |
|-----------|--------|----------|
| **UI Bars** (Status Bar) | `44px` | iOS status bar: время + иконки сети/батареи |
| **Header** | `68px` | Заголовок страницы + action-кнопки справа |
| **Save Area** | `40px` | Home indicator (нижний край экрана) |

Все компоненты имеют фиксированную ширину `375px`.

---

## 1. UI Bars (Status Bar)

Системный iOS-бар. Используется как верхний декоратор в мобильных мокапах.

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `wg_bg`, `no_bg`, `gr_bg` | `wg_bg` |

| State | Background |
|-------|------------|
| `wg_bg` | `var(--color-surface-raised, #ffffff)` |
| `no_bg` | `transparent` |
| `gr_bg` | `var(--color-surface-light, #f5f5f9)` |

### Размеры и анатомия

- **Размер**: `375×44px`
- **Backdrop filter**: `blur(5px)`
- **Время** ("9:41"): абсолютно позиционировано, `left: 47px`, центрировано вертикально. SF Pro Display / Semibold, 15px, `#333740`
- **Иконки** (батарея + Wi-Fi + сигнал): абсолютно, `right: 20px`, центрировано вертикально

### CSS

```css
.ui-bars {
  position: relative;
  width: 375px;
  height: 44px;
  backdrop-filter: blur(5px);
}

.ui-bars--wg-bg { background: var(--color-surface-raised, #ffffff); }
.ui-bars--no-bg { background: transparent; }
.ui-bars--gr-bg { background: var(--color-surface-light, #f5f5f9); }

.ui-bars__time {
  position: absolute;
  left: 47px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: normal;
  color: #333740;
  text-align: center;
  width: 54px;
}

.ui-bars__icons {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
}
```

---

## 2. Header

Строка с заголовком страницы и опциональными action-кнопками.

### Размеры и анатомия

- **Размер**: `375×68px`
- **Padding**: `14px 16px` (по горизонтали и вертикали)
- **Layout**: `display: flex; align-items: center; gap: 14px`
- **Title**: flex-grow, H4/SemiBold — 28px, weight 600, line-height 36px, letter-spacing -0.56px, `var(--color-text-primary, #1c1c1c)`, `text-overflow: ellipsis; white-space: nowrap; overflow: hidden`
- **Action Button**: `40×40px`, круглая (`border-radius: 100px`), bg: `var(--color-surface-raised, #ffffff)`, иконка 20×20px по центру
- **Badge на кнопке**: `16×16px`, `border-radius: 8px`, bg: `var(--color-badge-background, #f3404c)`. Счётчик: `Caption 2 / SemiBold`, 10px, `var(--color-text-on-brand, #ffffff)`, centered

### CSS

```css
.header {
  width: 375px;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
}

.header__title {
  flex: 1 0 0;
  font-family: var(--font-family-base);
  font-size: 28px; /* --typography/h4size */
  font-weight: var(--font-weight-semibold);
  line-height: 36px; /* --typography/h4line */
  letter-spacing: -0.56px;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header__action-btn {
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: var(--color-surface-raised);
  border-radius: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.header__action-btn svg {
  width: 20px;
  height: 20px;
}

.header__badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: var(--color-badge-background, #f3404c);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-base);
  font-size: 10px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
  line-height: 14px;
}
```

---

## 3. Header Panel (композит)

Полный мобильный хедер = Status Bar + Header.

```
┌─────────────────────────────────┐
│ UI Bars (44px)  — Status Bar    │
├─────────────────────────────────┤
│ Header (68px)   — Title + Icons │
└─────────────────────────────────┘
Total: 128px × 393px
```

### HTML

```html
<div class="header-panel">
  <!-- Status Bar -->
  <div class="ui-bars ui-bars--wg-bg">
    <span class="ui-bars__time">9:41</span>
    <div class="ui-bars__icons">
      <!-- signal / wifi / battery SVGs -->
    </div>
  </div>

  <!-- Header row -->
  <div class="header">
    <h1 class="header__title">Заголовок</h1>
    <button class="header__action-btn" aria-label="Уведомления">
      <svg width="20" height="20"><!-- notification-bing --></svg>
      <span class="header__badge">1</span>
    </button>
  </div>
</div>
```

```css
.header-panel {
  display: flex;
  flex-direction: column;
  width: 393px;
}
```

---

## 4. Save Area (Home Indicator)

Нижний элемент мобильного экрана с Home Indicator.

### Props

| Prop | Values | Default |
|------|--------|---------|
| `property1` | `no_bg`, `wh_bg` | `no_bg` |

### Размеры

- **Контейнер**: `375×40px`
- **Pill**: `134×5px`, centered по горизонтали, `bottom: 9px`, `border-radius: 100px`, bg: `#2e3241`

### CSS

```css
.save-area {
  position: relative;
  width: 375px;
  height: 40px;
}

.save-area--wh-bg { background: #ffffff; }
.save-area--no-bg { background: transparent; }

.save-area__indicator {
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  border-radius: 100px;
  background: #2e3241;
}
```

```html
<div class="save-area save-area--no-bg">
  <div class="save-area__indicator"></div>
</div>
```

---

## Rules for AI assistants

- ✅ `UI Bars` + `Header` всегда идут парой сверху; `Save Area` — снизу.
- ✅ Заголовок в `Header` — `text-overflow: ellipsis; white-space: nowrap` — не переносится.
- ✅ Badge на action-кнопке: `16×16px`, position absolute в правом верхнем углу кнопки.
- ✅ `UI Bars` — декоративный компонент, не интерактивный. Всегда `pointer-events: none` если нет реальной функции.
- ❌ Не путать `Header Panel` (мобильный) с `Toppanel` (десктопный) — разные компоненты.
- ❌ Не изменять высоту `UI Bars` (44px) — это системный размер iOS.
- ❌ Не использовать `font-family: Inter` для времени в `UI Bars` — там SF Pro Display.
