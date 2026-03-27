# Toppanel — Solar3 Design System

> Source: Figma → Component "Toppanel Desktop" (Size=lg, Size=sm)
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Верхняя навигационная панель приложения. Существует в двух размерах под разные контексты:

| Size | Width | Height | Контекст |
|------|-------|--------|---------|
| `lg` | `fluid (100%)` | `81px` | Десктоп / планшет |
| `sm` | `375px` | `72px` | Мобильный |

---

## Props

| Prop | Values | Default | Описание |
|------|--------|---------|---------|
| `size` | `lg`, `sm` | `lg` | Брейкпоинт |
| `buttonLeft` | `true`, `false` | `true` | Показывать кнопку «Назад» (только `lg`) |
| `logOut` | `true`, `false` | `true` | Показывать кнопку выхода (только `lg`) |

---

## 1. Size = lg (Desktop)

### Размеры и отступы

| Property | Value | Token |
|----------|-------|-------|
| Height | `81px` | — |
| Padding X | `24px` | `--ui/header/px` |
| Padding Y | `16–17px` | `--ui/header/py` |
| Background | `var(--color-surface-default, #f2f2f2)` | `--background/primary` |
| Border-bottom | `1px solid var(--color-border-divider, #e6e6e6)` | `--border/divider` |

### Анатомия (слева направо)

```
[ ← Назад ]   ·····flex-grow·····   [ 🔔 ] [ 👤 ] | [ Avatar · OrgName · User ▾ ] | [ logout ]
```

#### Кнопка «Назад» (опциональная)

- Layout: `display: flex; align-items: center; gap: 12px` (`--ui/button/lg/gap-x`)
- Иконка: стрелка влево `20×20px`
- Текст: **H8 fix / SemiBold** — 16px, weight 600, line-height 22px, letter-spacing -0.16px, цвет `var(--color-text-accent-secondary, #7a6741)`
- Высота кнопки: `48px`, padding-x: `20px` (`--ui/button/lg/px`), border-radius: `12px` (`--ui/button/lg/rounded`)
- Background: нет (прозрачная, текстовая кнопка)

#### Action Buttons (иконки справа)

Два круглых icon-button:
- **Размер**: `48×48px`, `border-radius: 100px`
- **Background**: `var(--color-surface-raised, #ffffff)`
- **Иконки**: `20×20px` (notification-bing, profile)
- **Gap между кнопками**: `10px`

#### Разделитель (Divider)

- Вертикальная линия `1px × 26px`, цвет `var(--color-border-divider, #e6e6e6)`
- Margin: `0 24px` (gap от иконок до Account)

#### Account Block

- Layout: `display: flex; align-items: center; gap: 10px`
- **Avatar**: `48×48px`, `border-radius: 100px` (круг), bg: `var(--color-surface-dark, #1c1c1c)`, иконка организации `20×20px` белая по центру
- **Textbox** (`display: flex; flex-direction: column; gap: 0`):
  - **Название организации**: H7 / Medium — 18px, weight 500, line-height 24px, letter-spacing -0.18px, `var(--color-text-primary)`, `white-space: nowrap`
    - Рядом стрелка dropdown `arrow-down` `16×16px`
  - **Имя пользователя**: H8 / Regular — 16px, weight 400, line-height 22px, letter-spacing -0.16px, `var(--color-text-secondary, #676767)`

#### Logout (опциональный)

- Вертикальный divider `26px` + иконка `logout` `24×24px`
- Gap: `24px` между divider и иконкой
- Общий контейнер: `width: 48px`

---

## 2. Size = sm (Mobile)

### Размеры и отступы

| Property | Value |
|----------|-------|
| Height | `72px` |
| Padding | `16px` (все стороны) |
| Background | `var(--color-surface-default, #f2f2f2)` |
| Layout | `display: flex; justify-content: space-between; align-items: center` |

### Анатомия

```
[ Avatar · OrgName · User ▾ ]          [ 🔔 ] [ 👤 ]
```

#### Account Block (sm)

- Layout: `display: flex; align-items: center; gap: 8px`
- **Avatar**: `40×40px`, `border-radius: 100px`, bg: `var(--color-surface-dark, #1c1c1c)`, иконка `20×20px` по центру
- **Textbox** (`width: 161px`):
  - **Название организации**: H8 / Medium — 14px, weight 500, `var(--color-text-primary)`, `white-space: nowrap`, обрезается («ООО «Планета Зд...»»)
    - Рядом стрелка `arrow-down` `16×16px`
  - **Имя пользователя**: Body 1 / Regular — 13px, weight 400, line-height 18px, letter-spacing -0.13px, `var(--color-text-secondary)`

#### Action Buttons (sm)

- Layout: `display: flex; gap: 8px`
- **Размер**: `40×40px`, `border-radius: 100px`, bg: `var(--color-surface-raised, #ffffff)`
- **Иконки**: `20×20px` (notification-bing, profile)

---

## 3. CSS Implementation

```css
/* ─── Base ─────────────────────────────────────────────── */
.toppanel {
  display: flex;
  align-items: center;
  background: var(--color-surface-default, #f2f2f2);
}

/* ─── LG (Desktop) ──────────────────────────────────────── */
.toppanel--lg {
  width: 100%;
  height: 81px;
  padding: 16px 24px; /* --ui/header/py, --ui/header/px */
  border-bottom: 1px solid var(--color-border-divider, #e6e6e6);
  gap: 0;
  justify-content: flex-end;
  flex-wrap: wrap;
}

/* Back button */
.toppanel__back {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  border: none;
  background: transparent;
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-accent-secondary, #7a6741);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.toppanel__back svg {
  width: 20px;
  height: 20px;
}

/* Right section */
.toppanel__right {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  justify-content: flex-end;
  min-width: 0;
}

/* Icon buttons group */
.toppanel__icons {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.toppanel__icon-btn {
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: var(--color-surface-raised, #ffffff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity var(--duration-fast) var(--easing-default);
}

.toppanel__icon-btn:hover { opacity: 0.8; }

.toppanel__icon-btn svg {
  width: 20px;
  height: 20px;
}

/* Vertical divider */
.toppanel__divider {
  width: 1px;
  height: 26px;
  background: var(--color-border-divider, #e6e6e6);
  flex-shrink: 0;
}

/* Account block */
.toppanel__account {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.toppanel__avatar {
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: var(--color-surface-dark, #1c1c1c);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.toppanel__avatar svg {
  width: 20px;
  height: 20px;
  color: var(--color-text-inverse);
}

.toppanel__textbox {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex-shrink: 0;
}

.toppanel__org {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-family-base);
  font-size: 18px; /* --typography/h7size */
  font-weight: var(--font-weight-medium);
  line-height: 24px; /* --typography/h7line */
  letter-spacing: -0.18px;
  color: var(--color-text-primary);
  white-space: nowrap;
}

.toppanel__org svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-text-primary);
}

.toppanel__username {
  font-family: var(--font-family-base);
  font-size: 16px; /* --typography/h8size */
  font-weight: var(--font-weight-regular);
  line-height: 22px; /* --typography/h8line */
  letter-spacing: -0.16px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

/* Logout */
.toppanel__logout {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 48px;
  flex-shrink: 0;
}

.toppanel__logout-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── SM (Mobile) ──────────────────────────────────────── */
.toppanel--sm {
  width: 375px;
  height: 72px;
  padding: 16px;
  justify-content: space-between;
}

.toppanel--sm .toppanel__account {
  gap: 8px;
}

.toppanel--sm .toppanel__avatar {
  width: 40px;
  height: 40px;
}

.toppanel--sm .toppanel__org {
  font-size: var(--font-size-14);
  line-height: 20px;
  letter-spacing: -0.14px;
}

.toppanel--sm .toppanel__username {
  font-size: 13px; /* --typography/body1size */
  line-height: 18px;
  letter-spacing: -0.13px;
}

.toppanel--sm .toppanel__icons {
  gap: 8px;
}

.toppanel--sm .toppanel__icon-btn {
  width: 40px;
  height: 40px;
}
```

---

## 4. HTML Structure

```html
<!-- LG (Desktop) -->
<header class="toppanel toppanel--lg">
  <!-- Optional back button -->
  <button class="toppanel__back">
    <svg width="20" height="20"><!-- arrow-left --></svg>
    Назад
  </button>

  <div class="toppanel__right">
    <!-- Action icons -->
    <div class="toppanel__icons">
      <button class="toppanel__icon-btn" aria-label="Уведомления">
        <svg width="20" height="20"><!-- notification-bing --></svg>
      </button>
      <button class="toppanel__icon-btn" aria-label="Профиль">
        <svg width="20" height="20"><!-- profile --></svg>
      </button>
    </div>

    <div class="toppanel__divider"></div>

    <!-- Account -->
    <div class="toppanel__account">
      <div class="toppanel__avatar">
        <svg width="20" height="20"><!-- building --></svg>
      </div>
      <div class="toppanel__textbox">
        <button class="toppanel__org">
          ООО «Планета Здоровья»
          <svg width="16" height="16"><!-- arrow-down --></svg>
        </button>
        <span class="toppanel__username">Кузнецов Михаил</span>
      </div>
    </div>

    <!-- Optional logout -->
    <div class="toppanel__logout">
      <div class="toppanel__divider"></div>
      <button class="toppanel__logout-btn" aria-label="Выйти">
        <svg width="24" height="24"><!-- logout --></svg>
      </button>
    </div>
  </div>
</header>

<!-- SM (Mobile) -->
<header class="toppanel toppanel--sm">
  <div class="toppanel__account">
    <div class="toppanel__avatar">
      <svg width="20" height="20"><!-- building --></svg>
    </div>
    <div class="toppanel__textbox">
      <button class="toppanel__org">
        ООО «Планета Зд...»
        <svg width="16" height="16"><!-- arrow-down --></svg>
      </button>
      <span class="toppanel__username">Кузнецов Михаил</span>
    </div>
  </div>

  <div class="toppanel__icons">
    <button class="toppanel__icon-btn" aria-label="Уведомления">
      <svg width="20" height="20"><!-- notification-bing --></svg>
    </button>
    <button class="toppanel__icon-btn" aria-label="Профиль">
      <svg width="20" height="20"><!-- profile --></svg>
    </button>
  </div>
</header>
```

---

## Rules for AI assistants

- ✅ `lg` и `sm` — принципиально разная анатомия, не пытайся масштабировать один в другой через медиа-запросы без изменения структуры.
- ✅ Кнопка названия организации (Org) — интерактивная: открывает switcher. Оборачивай в `<button>`.
- ✅ Back button только в `lg`; в `sm` навигация «назад» решается иначе.
- ✅ Avatar всегда `border-radius: 100px` (полный круг), bg `--color-surface-dark`.
- ✅ В `lg` gap-x между divider и account — `24px`; между account textbox и logout divider — тоже `24px`.
- ✅ Название организации в `sm` обрезать через `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`.
- ❌ Не использовать `Header Panel` (мобильный) вместо `Toppanel` на десктопе — разные компоненты.
- ❌ Не добавлять `box-shadow` к `toppanel` — тень отсутствует в дизайне, только `border-bottom`.
- ❌ Logout и back button не показываются в `sm`.
