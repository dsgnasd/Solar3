# Tooltip — Solar3 Design System

> Source: Figma → Component «Tooltip»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Всплывающая подсказка с опциональным заголовком, субтитром и стрелкой (tip). Два цветовых варианта (White/Black), 13 позиций стрелки.

---

## Props

| Prop | Values | Default |
|------|--------|---------|
| `color` | `White`, `Black` | `White` |
| `tipPosition` | `None`, `Top Left`, `Top Center`, `Top Right`, `Left Top`, `Left Center`, `Left Bottom`, `Right Top`, `Right Center`, `Right Bottom`, `Bottom Left`, `Bottom Center`, `Bottom Right` | `None` |
| `title` | `true`, `false` | `true` |
| `subtitle` | `true`, `false` | `true` |
| `hasLeadingIcon` | `true`, `false` | `true` |
| `hasTrailingIcon` | `true`, `false` | `true` |

---

## Размеры

| Property | Value |
|----------|-------|
| Width (`None`, `Top*`, `Bottom*`) | `200px` |
| Width (`Left*`, `Right*`) | `210px` |
| Padding X | `12px` |
| Padding Y | `10px` |
| Border Radius | `8px` |
| Gap (title — subtitle) | `2px` |
| Gap (icon — subtitle text) | `6px` |
| Tip (стрелка) | `20×8px` |

---

## Цвета

| `color` | Background | Title/Subtitle | Token bg |
|---------|-----------|---------------|---------|
| `White` | `var(--color-surface-raised, #ffffff)` | `var(--color-text-primary, #1c1c1c)` | `--background/secondary` |
| `Black` | `var(--color-surface-dark, #1c1c1c)` | `var(--color-text-inverse, #ffffff)` | `--background/dark` |

---

## Типографика

| Element | Style | Size | Weight | Line-height | Letter-spacing |
|---------|-------|------|--------|-------------|----------------|
| Title | H8 / Medium | `16px` | `500` | `22px` | `-0.16px` |
| Subtitle text | Body 1 / Regular | `14px` | `400` | `20px` | `-0.14px` |
| Leading/Trailing icon | — | `20×20px` | — | — | — |

---

## Shadow

**Shadow/Tooltip** — тройная мягкая тень:

```
box-shadow:
  0px 6px 12px 0px rgba(28, 28, 28, 0.06),
  0px 0px  6px 0px rgba(28, 28, 28, 0.06),
  0px 0px  2px 0px rgba(28, 28, 28, 0.06)
```

Тень применяется к корневому контейнеру `.tooltip` (не к Layout-блоку).

---

## Tip (стрелка) — позиции и DOM-порядок

### Вертикальные позиции (Top* / Bottom*)

Tip-фрейм — `8px` высота, полная ширина контейнера. Внутри — SVG треугольник `20×8px`.

| tipPosition | Tip | DOM-порядок |
|-------------|-----|------------|
| `Top Left` | `left: 12px` | Tip Frame → Layout |
| `Top Center` | `left: 50%; transform: translateX(-50%)` | Tip Frame → Layout |
| `Top Right` | `right: 12px` | Tip Frame → Layout |
| `Bottom Left` | `left: 12px`, перевёрнут (`scaleY(-1)`) | Layout → Tip Frame |
| `Bottom Center` | `left: 50%; translateX(-50%)`, перевёрнут | Layout → Tip Frame |
| `Bottom Right` | `right: 12px`, перевёрнут | Layout → Tip Frame |

### Горизонтальные позиции (Left* / Right*)

Tip-фрейм — `8px` ширина, полная высота контейнера. SVG повёрнут `rotate(-90deg)`.

| tipPosition | Tip | DOM-порядок |
|-------------|-----|------------|
| `Left Top` | `top: 0`, повёрнут `-90deg` | Tip Frame → Layout |
| `Left Center` | `top: 50%; translateY(-50%)`, повёрнут | Tip Frame → Layout |
| `Left Bottom` | `bottom: 0`, повёрнут | Tip Frame → Layout |
| `Right Top` | `top: 0`, повёрнут `-90deg + scaleY(-1)` | Layout → Tip Frame |
| `Right Center` | `top: 50%; translateY(-50%)`, повёрнут | Layout → Tip Frame |
| `Right Bottom` | `bottom: 0`, повёрнут | Layout → Tip Frame |

### Tip SVG (форма стрелки)

Треугольник-стрелка `20×8px`, острым концом вниз (смотрит к целевому элементу):

```html
<!-- White tip (острый конец смотрит вверх — для Top* вариантов) -->
<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0L20 8H0L10 0Z" fill="white"/>
</svg>

<!-- Black tip -->
<svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0L20 8H0L10 0Z" fill="#1c1c1c"/>
</svg>
```

---

## CSS Implementation

```css
/* ─── Base ──────────────────────────────────────────────── */
.tooltip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 200px;
  box-shadow:
    0px 6px 12px 0px rgba(28, 28, 28, 0.06),
    0px 0px  6px 0px rgba(28, 28, 28, 0.06),
    0px 0px  2px 0px rgba(28, 28, 28, 0.06);
  /* border-radius задаётся на .tooltip__layout */
  pointer-events: none; /* тултип не перехватывает события */
}

/* Left/Right варианты — шире из-за горизонтальной стрелки */
.tooltip--left,
.tooltip--right {
  width: 210px;
  flex-direction: row;
}

/* ─── Layout (содержимое) ───────────────────────────────── */
.tooltip__layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 8px;
  width: 100%;
  background: var(--color-surface-raised, #ffffff);
}

.tooltip--black .tooltip__layout {
  background: var(--color-surface-dark, #1c1c1c);
}

/* Left/Right — layout занимает оставшееся место */
.tooltip--left .tooltip__layout,
.tooltip--right .tooltip__layout {
  flex: 1 0 0;
  width: auto;
}

/* ─── Текст ─────────────────────────────────────────────── */
.tooltip__title {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-primary, #1c1c1c);
  width: 100%;
}

.tooltip--black .tooltip__title {
  color: var(--color-text-inverse, #ffffff);
}

.tooltip__subtitle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.tooltip__subtitle-text {
  flex: 1 0 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  letter-spacing: -0.14px;
  color: var(--color-text-primary, #1c1c1c);
  min-width: 0;
}

.tooltip--black .tooltip__subtitle-text {
  color: var(--color-text-inverse, #ffffff);
}

/* Иконки субтитра */
.tooltip__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: currentColor;
}

/* ─── Tip Frame (контейнер стрелки) ─────────────────────── */

/* Вертикальный tip (Top / Bottom) */
.tooltip__tip-frame {
  position: relative;
  height: 8px;
  width: 100%;
  flex-shrink: 0;
}

/* Горизонтальный tip (Left / Right) */
.tooltip--left .tooltip__tip-frame,
.tooltip--right .tooltip__tip-frame {
  position: relative;
  width: 8px;
  height: 100%;
  flex-shrink: 0;
}

/* ─── Tip SVG ───────────────────────────────────────────── */
.tooltip__tip {
  position: absolute;
  width: 20px;
  height: 8px;
}

/* Top — стрелка над контентом, острый конец вниз (к цели) */
/* Bottom — стрелка под контентом, перевёрнута */

/* Top Left */
.tooltip--top-left .tooltip__tip {
  top: 0;
  left: 12px;
}
/* Top Center */
.tooltip--top-center .tooltip__tip {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
/* Top Right */
.tooltip--top-right .tooltip__tip {
  top: 0;
  right: 12px;
}

/* Bottom Left */
.tooltip--bottom-left .tooltip__tip {
  top: 0;
  left: 12px;
  transform: scaleY(-1);
}
/* Bottom Center */
.tooltip--bottom-center .tooltip__tip {
  top: 0;
  left: 50%;
  transform: translateX(-50%) scaleY(-1);
}
/* Bottom Right */
.tooltip--bottom-right .tooltip__tip {
  top: 0;
  right: 12px;
  transform: scaleY(-1);
}

/* Left — tip сбоку слева, горизонтальный (-90deg) */
.tooltip--left-top .tooltip__tip,
.tooltip--left-center .tooltip__tip,
.tooltip--left-bottom .tooltip__tip {
  width: 8px;
  height: 20px;
  transform: rotate(-90deg);
}
.tooltip--left-top .tooltip__tip    { top: 8px; left: 50%; transform: translateX(-50%) rotate(-90deg); }
.tooltip--left-center .tooltip__tip { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-90deg); }
.tooltip--left-bottom .tooltip__tip { bottom: 8px; left: 50%; transform: translateX(-50%) rotate(-90deg); }

/* Right — tip сбоку справа, повёрнут на -90deg + отражён */
.tooltip--right-top .tooltip__tip    { top: 8px; left: 50%; transform: translateX(-50%) rotate(-90deg) scaleY(-1); }
.tooltip--right-center .tooltip__tip { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-90deg) scaleY(-1); }
.tooltip--right-bottom .tooltip__tip { bottom: 8px; left: 50%; transform: translateX(-50%) rotate(-90deg) scaleY(-1); }

/* ─── Позиционирование самого тултипа (через JS/CSS vars) ── */
/* Используйте CSS custom properties или data-атрибуты:       */
/* position: absolute; z-index: var(--z-index-tooltip, 1000)  */
```

---

## HTML

```html
<!-- None, White (без стрелки) -->
<div class="tooltip" role="tooltip" id="tooltip-1">
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <svg class="tooltip__icon" width="20" height="20"><!-- link --></svg>
      <span class="tooltip__subtitle-text">Click to learn more</span>
      <svg class="tooltip__icon" width="20" height="20"><!-- link --></svg>
    </div>
  </div>
</div>

<!-- None, Black -->
<div class="tooltip tooltip--black" role="tooltip" id="tooltip-2">
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
</div>

<!-- Top Left, White (стрелка сверху, у левого края) -->
<div class="tooltip tooltip--top-left" role="tooltip">
  <div class="tooltip__tip-frame">
    <svg class="tooltip__tip" viewBox="0 0 20 8" fill="none">
      <path d="M10 0L20 8H0L10 0Z" fill="white"/>
    </svg>
  </div>
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
</div>

<!-- Top Center, Black -->
<div class="tooltip tooltip--black tooltip--top-center" role="tooltip">
  <div class="tooltip__tip-frame">
    <svg class="tooltip__tip" viewBox="0 0 20 8" fill="none">
      <path d="M10 0L20 8H0L10 0Z" fill="#1c1c1c"/>
    </svg>
  </div>
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
</div>

<!-- Bottom Right, White (стрелка снизу, у правого края) -->
<div class="tooltip tooltip--bottom-right" role="tooltip">
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
  <div class="tooltip__tip-frame">
    <svg class="tooltip__tip" viewBox="0 0 20 8" fill="none">
      <path d="M10 0L20 8H0L10 0Z" fill="white"/>
    </svg>
  </div>
</div>

<!-- Left Center, White (стрелка слева по центру) -->
<div class="tooltip tooltip--left tooltip--left-center" role="tooltip">
  <div class="tooltip__tip-frame">
    <svg class="tooltip__tip" viewBox="0 0 20 8" fill="none">
      <path d="M10 0L20 8H0L10 0Z" fill="white"/>
    </svg>
  </div>
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
</div>

<!-- Right Top, Black (стрелка справа сверху) -->
<div class="tooltip tooltip--black tooltip--right tooltip--right-top" role="tooltip">
  <div class="tooltip__layout">
    <p class="tooltip__title">Заголовок</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Click to learn more</span>
    </div>
  </div>
  <div class="tooltip__tip-frame">
    <svg class="tooltip__tip" viewBox="0 0 20 8" fill="none">
      <path d="M10 0L20 8H0L10 0Z" fill="#1c1c1c"/>
    </svg>
  </div>
</div>

<!-- Пример: тултип на кнопке с ARIA-связью -->
<button type="button" aria-describedby="tooltip-help">
  Кнопка
</button>
<div class="tooltip" role="tooltip" id="tooltip-help">
  <div class="tooltip__layout">
    <p class="tooltip__title">Помощь</p>
    <div class="tooltip__subtitle">
      <span class="tooltip__subtitle-text">Нажмите, чтобы продолжить</span>
    </div>
  </div>
</div>
```

---

## Rules for AI assistants

- ✅ `role="tooltip"` + `id` на контейнере; `aria-describedby="[id]"` на trigger-элементе — обязательная семантика.
- ✅ Ширина: `200px` для `None` / `Top*` / `Bottom*`; `210px` для `Left*` / `Right*` (дополнительные 10px под стрелку).
- ✅ Shadow/Tooltip — тройная тень, применяется на корневой `.tooltip`, не на `.tooltip__layout`.
- ✅ `border-radius: 8px` — только на `.tooltip__layout`, не на всём контейнере (чтобы стрелка не обрезалась).
- ✅ DOM-порядок: Top* — Tip Frame первый, Layout второй. Bottom* — Layout первый, Tip Frame второй. Left* — Tip Frame первый. Right* — Tip Frame последний.
- ✅ Tip SVG `20×8px` — острый конец (вершина треугольника) всегда смотрит **к целевому элементу**.
- ✅ Bottom* тип: стрелка перевёрнута через `scaleY(-1)` — острый конец смотрит вниз.
- ✅ Left/Right тип: стрелка повёрнута `rotate(-90deg)`; Right дополнительно `scaleY(-1)`.
- ✅ `pointer-events: none` на `.tooltip` — тултип не должен перехватывать клики.
- ✅ Позиционирование через `position: absolute` / `position: fixed` + JS или CSS Anchoring API; `z-index` должен быть задан через токен `--z-index-tooltip`.
- ✅ Цвет стрелки SVG = цвет фона тултипа: White → `fill="white"`, Black → `fill="#1c1c1c"`.
- ✅ Gap title → subtitle: `2px`. Gap внутри subtitle-строки (icon-text): `6px`.
- ❌ Не добавлять `overflow: hidden` на корневой `.tooltip` — стрелка выходит за пределы layout-блока.
- ❌ Не задавать `border` на контейнер — только тень, без видимой границы.
- ❌ Не анимировать стрелку отдельно от контейнера — анимация (fade/scale) применяется на весь `.tooltip`.
- ❌ Не использовать `title` HTML-атрибут вместо кастомного тултипа — нет стилизации и плохой accessibility.
- ❌ Не смешивать `color=White` фон с `color=Black` стрелкой — цвет стрелки всегда соответствует фону блока.
