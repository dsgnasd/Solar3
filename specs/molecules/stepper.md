# Stepper — Solar3 Design System

> Source: Figma → Components «StepElements», «Stepper (Variables ✅)»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Вертикальный индикатор многошагового процесса. Строится из двух атомов и одного составного блока:

| Суб-компонент | Описание |
|---|---|
| **stepPoint** | Круглый индикатор шага `48×48px` — 4 состояния |
| **Line** | Вертикальная линия-коннектор между шагами, `2px` |
| **stepStage** | Полная строка шага: stepPoint + линия + контент |
| **Stepper** | Вертикальный список stepStage |

---

## 1. stepPoint

### Props

| Prop | Values | Default |
|------|--------|---------|
| `state` | `Not Started`, `Active`, `Success`, `Error` | `Not Started` |

### Размеры

| Property | Value | Token |
|----------|-------|-------|
| Size | `48×48px` | `--ui/stepper/steppoint/w: 48px` |
| Border Radius | `9999px` (круг) | `--ui/stepper/steppoint/rounded: 9999px` |
| Icon inside | `24×24px` | — |
| Number font size | `16px` | `--ui/stepper/steppoint/number: 16px` |

### States

| State | Background | Border | Контент |
|-------|------------|--------|---------|
| `Not Started` | `transparent` | `2px solid var(--color-border-default, #cdcdcd)` | Цифра, SemiBold 16px, `var(--color-text-tertiary, #9a9a9a)` |
| `Active` | `var(--color-surface-dark, #1c1c1c)` | нет | Цифра, SemiBold 16px, `var(--color-text-inverse, #ffffff)` |
| `Success` | `var(--color-bg-success, #dcefe4)` | нет | Иконка `tick` `24×24px`, зелёная |
| `Error` | `var(--color-bg-error, #ffe5e4)` | нет | Иконка `close` `24×24px`, красная |

### Status Chip цвета (в stepStage)

Chip в строке шага отражает текущее состояние:

| State | Chip BG | Chip text | Текст |
|-------|---------|-----------|-------|
| `Not Started` | `var(--color-surface-default, #f2f2f2)` | `var(--color-text-secondary, #676767)` | «Не начато» |
| `Active` | `var(--color-primary-100, #efe5d1)` | `var(--color-text-accent-secondary, #7a6741)` | «В процессе» |
| `Success` | `var(--color-bg-success, #dcefe4)` | `var(--color-text-success, #307359)` | «Завершено» |
| `Error` | `var(--color-bg-error, #ffe5e4)` | `var(--color-text-error, #e32f43)` | «Ошибка» |

---

## 2. Line (коннектор)

Вертикальная линия между шагами.

| Property | Value |
|----------|-------|
| Width | `2px` |
| Height | `flex-grow` (растягивается на высоту секции) |
| Color | `var(--color-border-divider, #e6e6e6)` |
| Gap от stepPoint до Line | `6px` |

---

## 3. stepStage

### Props

| Prop | Values | Default | Описание |
|------|--------|---------|---------|
| `type` | `Opened`, `Closed` | `Opened` | Раскрытый или свёрнутый шаг |
| `stepPoint` | `true`, `false` | `true` | Показывать stepPoint |
| `line` | `true`, `false` | `true` | Показывать линию-коннектор |
| `status` | `true`, `false` | `true` | Показывать строку со статусом |
| `icon` | `true`, `false` | `true` | Показывать стрелку collapse/expand |
| `comment` | `true`, `false` | `true` | Показывать блок с комментарием (только Opened) |

### Размеры и отступы

| Property | Value | Token |
|----------|-------|-------|
| Gap (stepPoint – stepInfo) | `24px` | `--ui/stepper/stepstage/steppoint-stepinfo-gap-x` |
| Gap (statusFrame – textbox – comment) | `12px` | `--ui/stepper/stepstage/statusframe-stepvalue-comment-gap-y` |
| Padding bottom stepInfo | `32px` | `--ui/stepper/stepstage/pb` |
| Comment padding X | `20px` | `--ui/stepper/stepstage/comment-px` |
| Comment padding Y | `12px` | `--ui/stepper/stepstage/comment-py` |

---

### 3a. stepStage — Opened

```
┌─ .step-stage (flex row, gap 24px) ──────────────────────────────────────┐
│  ┌─ .step-stage__point-col (flex col, gap 6px, w:48px) ──────────────┐  │
│  │  [stepPoint 48×48]                                                  │  │
│  │  [Line 2px × flex-grow]                                             │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│  ┌─ .step-stage__info (flex col, gap 12px, pb 32px, flex-grow) ───────┐  │
│  │  ┌─ .step-stage__status (h 48px, justify-between) ───────────────┐ │  │
│  │  │  [Chip «В процессе»]         [arrow-up 20×20]                  │ │  │
│  │  └────────────────────────────────────────────────────────────────┘ │  │
│  │  ┌─ .step-stage__textbox (flex col, gap 4px) ────────────────────┐ │  │
│  │  │  .step-stage__title + [arrow-down 16×16]  (H7/Medium 18px)    │ │  │
│  │  │  .step-stage__desc                         (H8/Regular 16px)   │ │  │
│  │  └────────────────────────────────────────────────────────────────┘ │  │
│  │  ┌─ .step-stage__comment (bg #f2f2f2, px 20, py 12, r 12) ──────┐ │  │
│  │  │  Текст комментария (H8/Regular 16px)                           │ │  │
│  │  └────────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 3b. stepStage — Closed

Свёрнутая строка. Показывает только заголовок с кнопкой раскрытия.

```
┌─ .step-stage .step-stage--closed (flex row, gap 24px) ──────────────────┐
│  ┌─ .step-stage__point-col (w:48px) ─────────────────────────────────┐  │
│  │  [stepPoint Success 48×48]                                          │  │
│  │  [Line 2px × flex-grow]                                             │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│  ┌─ .step-stage__info (flex col, gap 0, pb 32px) ─────────────────────┐  │
│  │  ┌─ .step-stage__status (h 48px, justify-between) ───────────────┐ │  │
│  │  │  «Завершённые этапы» (H7/Medium 18px)   [arrow-down 20×20]     │ │  │
│  │  └────────────────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Типографика

| Элемент | Стиль | Размер | Weight | Line-height | Tracking |
|---------|-------|--------|--------|-------------|---------|
| Chip label | H8 / Medium | 16px | 500 | 22px | -0.16px |
| Title (stepValue) | H7 / Medium | 18px | 500 | 24px | -0.18px |
| Description | H8 / Regular | 16px | 400 | 22px | -0.16px |
| Comment text | H8 / Regular | 16px | 400 | 22px | -0.16px |
| stepPoint number | H8 / SemiBold | 16px | 600 | 22px | -0.16px |

---

## CSS Implementation

```css
/* ─── stepPoint ─────────────────────────────────────────── */
.step-point {
  width: var(--ui-stepper-steppoint-w, 48px);
  height: var(--ui-stepper-steppoint-w, 48px);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* Not Started — дефолт */
  border: 2px solid var(--color-border-default, #cdcdcd);
  background: transparent;
}

.step-point__number {
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  line-height: 22px;
  letter-spacing: -0.16px;
  text-align: center;
  color: var(--color-text-tertiary, #9a9a9a);
}

.step-point__icon {
  width: 24px;
  height: 24px;
}

/* Active */
.step-point--active {
  background: var(--color-surface-dark, #1c1c1c);
  border: none;
}
.step-point--active .step-point__number {
  color: var(--color-text-inverse, #ffffff);
}

/* Success */
.step-point--success {
  background: var(--color-bg-success, #dcefe4);
  border: none;
}

/* Error */
.step-point--error {
  background: var(--color-bg-error, #ffe5e4);
  border: none;
}

/* ─── Line ───────────────────────────────────────────────── */
.step-line {
  width: 2px;
  flex: 1;
  min-height: 0;
  background: var(--color-border-divider, #e6e6e6);
}

/* ─── stepStage ──────────────────────────────────────────── */
.step-stage {
  display: flex;
  gap: var(--ui-stepper-stepstage-gap-x, 24px);
  align-items: flex-start;
  width: 100%;
}

/* ─── Left column (point + line) ─────────────────────────── */
.step-stage__point-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 48px;
  flex-shrink: 0;
  align-self: stretch;
}

/* ─── Right column (info) ────────────────────────────────── */
.step-stage__info {
  display: flex;
  flex-direction: column;
  gap: var(--ui-stepper-stepstage-inner-gap-y, 12px);
  flex: 1;
  min-width: 0;
  padding-bottom: var(--ui-stepper-stepstage-pb, 32px);
}

.step-stage--closed .step-stage__info {
  gap: 0;
}

/* ─── Status frame ───────────────────────────────────────── */
.step-stage__status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  flex-shrink: 0;
  width: 100%;
  cursor: pointer;
}

.step-stage__arrow {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
  transition: transform var(--duration-fast) var(--easing-default);
}

/* ─── Chip (status badge) ────────────────────────────────── */
.step-chip {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 8px;
  border-radius: 100px;
  flex-shrink: 0;
  overflow: hidden;
}

.step-chip__label {
  padding: 0 6px;
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  line-height: 22px;
  letter-spacing: -0.16px;
  white-space: nowrap;
}

/* Chip variants */
.step-chip--not-started {
  background: var(--color-surface-default, #f2f2f2);
}
.step-chip--not-started .step-chip__label {
  color: var(--color-text-secondary, #676767);
}

.step-chip--active {
  background: var(--color-primary-100, #efe5d1);
}
.step-chip--active .step-chip__label {
  color: var(--color-text-accent-secondary, #7a6741);
}

.step-chip--success {
  background: var(--color-bg-success, #dcefe4);
}
.step-chip--success .step-chip__label {
  color: var(--color-text-success, #307359);
}

.step-chip--error {
  background: var(--color-bg-error, #ffe5e4);
}
.step-chip--error .step-chip__label {
  color: var(--color-text-error, #e32f43);
}

/* ─── Textbox ────────────────────────────────────────────── */
.step-stage__textbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.step-stage__title-row {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.step-stage__title {
  font-family: var(--font-family-base);
  font-size: 18px; /* --typography/h7size */
  font-weight: var(--font-weight-medium);
  line-height: 24px;
  letter-spacing: -0.18px;
  color: var(--color-text-primary, #1c1c1c);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-stage__title-arrow {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
  transition: transform var(--duration-fast) var(--easing-default);
}

.step-stage__desc {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

/* ─── Comment ────────────────────────────────────────────── */
.step-stage__comment {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: var(--radius-md, 12px);
  background: var(--color-surface-default, #f2f2f2);
}

.step-stage__comment-text {
  font-family: var(--font-family-base);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  line-height: 22px;
  letter-spacing: -0.16px;
  color: var(--color-text-primary, #1c1c1c);
  white-space: nowrap;
}

/* ─── Stepper (список шагов) ─────────────────────────────── */
.stepper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Последний шаг — без линии вниз */
.stepper .step-stage:last-child .step-line {
  display: none;
}
```

---

## HTML

```html
<!-- Stepper: 3 шага -->
<div class="stepper" role="list" aria-label="Шаги процесса">

  <!-- Шаг 1 — Success, Closed (свёрнутый) -->
  <div class="step-stage step-stage--closed" role="listitem">
    <div class="step-stage__point-col">
      <div class="step-point step-point--success" aria-label="Шаг 1: завершён">
        <svg class="step-point__icon" width="24" height="24"><!-- tick --></svg>
      </div>
      <div class="step-line"></div>
    </div>
    <div class="step-stage__info">
      <button class="step-stage__status" aria-expanded="false" aria-controls="step-1-content">
        <span class="step-stage__title">Завершённые этапы</span>
        <svg class="step-stage__arrow" width="20" height="20"><!-- arrow-down --></svg>
      </button>
    </div>
  </div>

  <!-- Шаг 2 — Active, Opened -->
  <div class="step-stage" role="listitem" id="step-2-content">
    <div class="step-stage__point-col">
      <div class="step-point step-point--active" aria-label="Шаг 2: в процессе">
        <span class="step-point__number">2</span>
      </div>
      <div class="step-line"></div>
    </div>
    <div class="step-stage__info">
      <!-- Статус + кнопка свернуть -->
      <div class="step-stage__status">
        <div class="step-chip step-chip--active">
          <span class="step-chip__label">В процессе</span>
        </div>
        <svg class="step-stage__arrow" style="transform: rotate(180deg)" width="20" height="20"><!-- arrow-up --></svg>
      </div>
      <!-- Заголовок + описание -->
      <div class="step-stage__textbox">
        <div class="step-stage__title-row">
          <span class="step-stage__title">Формирование пакета документов</span>
          <svg class="step-stage__title-arrow" width="16" height="16"><!-- arrow-down --></svg>
        </div>
        <span class="step-stage__desc">дата завершения: 18.07.2025</span>
      </div>
      <!-- Комментарий (опциональный) -->
      <div class="step-stage__comment">
        <span class="step-stage__comment-text">После согласования предварительных условий проведения операции</span>
      </div>
    </div>
  </div>

  <!-- Шаг 3 — Not Started, Opened, без комментария -->
  <div class="step-stage" role="listitem">
    <div class="step-stage__point-col">
      <div class="step-point" aria-label="Шаг 3: не начат">
        <span class="step-point__number">3</span>
      </div>
      <!-- Последний шаг — линии нет (управляется через CSS :last-child) -->
    </div>
    <div class="step-stage__info">
      <div class="step-stage__status">
        <div class="step-chip step-chip--not-started">
          <span class="step-chip__label">Не начато</span>
        </div>
        <svg class="step-stage__arrow" width="20" height="20"><!-- arrow-down --></svg>
      </div>
      <div class="step-stage__textbox">
        <div class="step-stage__title-row">
          <span class="step-stage__title">Оформление договора</span>
          <svg class="step-stage__title-arrow" width="16" height="16"><!-- arrow-down --></svg>
        </div>
        <span class="step-stage__desc">плановая дата: 25.07.2025</span>
      </div>
    </div>
  </div>

</div>
```

---

## Rules for AI assistants

- ✅ stepPoint всегда `border-radius: 9999px` (полный круг), строго `48×48px`.
- ✅ `Not Started` — только border `2px solid`, без фона. `Active/Success/Error` — без border, только фон.
- ✅ Линия-коннектор (`step-line`) занимает всё оставшееся пространство левой колонки через `flex: 1`.
- ✅ Gap между stepPoint и line — `6px` (внутри `.step-stage__point-col`).
- ✅ Последний шаг в Stepper: `step-line` скрывается через `.stepper .step-stage:last-child .step-line { display: none }`.
- ✅ `Closed` тип: только строка с заголовком и `arrow-down`, без chip, textbox, comment.
- ✅ `Opened` тип: chip со статусом (цвет зависит от state шага) + textbox (title + desc) + опциональный comment.
- ✅ `role="list"` на Stepper, `role="listitem"` на каждом stepStage.
- ✅ `aria-expanded` на кнопке collapse/expand в `.step-stage__status`.
- ✅ Comment блок — `border-radius: 12px`, не `9999px`.
- ❌ Не использовать `align-items: center` в `.step-stage` — всегда `flex-start`, чтобы левая колонка тянулась по высоте.
- ❌ Не добавлять `border` к comment блоку — только `background: #f2f2f2`.
- ❌ Не путать `gap` Opened (`12px`) и Closed (`0`) в `.step-stage__info`.
- ❌ Не использовать фиксированную высоту для Line — только `flex: 1`.
