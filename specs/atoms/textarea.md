# Textarea — Solar3 Design System

> Source: Figma → Component «Textarea (Variables ✅)»
> Last updated: 2026-03-27
> Status: ✅ Complete — verified from Figma

---

## Overview

Многострочное текстовое поле. Два размера (`lg` / `sm`), пять состояний, четыре варианта help-сообщения, опциональные иконки и счётчик символов.

---

## Props

| Prop | Values | Default |
|------|--------|---------|
| `size` | `lg`, `sm` | `lg` |
| `state` | `Default`, `Hover`, `Focus`, `Disable` | `Default` |
| `text` | `False`, `Placeholder`, `Text`, `Scrolled`, `LongText (Hug)` | `False` |
| `helpMessage` | `Default`, `Success`, `Warning`, `Error` | `Default` |
| `label` | `true`, `false` | `true` |
| `leadingIcon` | `true`, `false` | `true` |
| `trailingIcon` | `true`, `false` | `true` |
| `helperText` | `true`, `false` | `true` |
| `symbols` | `true`, `false` | `true` |
| `messageArea` | `true`, `false` | `true` |

---

## Размеры

### Outer container

| Property | `lg` | `sm` |
|----------|------|------|
| Gap (label — input) | `6px` | `6px` |
| Gap (input — message) | `4px` | `4px` |

### Input field

| Property | `lg` | Token | `sm` | Token |
|----------|------|-------|------|-------|
| Height (фикс.) | `72px` | — | `60px` | — |
| Padding X | `16px` | `--ui/input-outline/lg/px` | `12px` | `--ui/input-outline/sm/px` |
| Padding Y | `14px` | — | `10px` | — |
| Gap (icon — text) | `8px` | `--ui/input-outline/lg/gap-x` | `8px` | `--ui/input-outline/sm/gap-x` |
| Border Radius | `12px` | `--ui/input-outline/lg/rounded` | `12px` | `--ui/input-outline/sm/rounded` |
| Leading icon | `20×20px` | — | `20×20px` | — |
| Trailing icon | `20×20px` | — | `20×20px` | — |

> Высота `72px`/`60px` — минимальная (фиксированная). При `text=LongText (Hug)` textarea растягивается по контенту (`height: auto`, `min-height`).
> При `text=Scrolled` высота зафиксирована, внутри появляется вертикальный скролл.

---

## Типографика

| Element | Size | Weight | Line-height | Letter-spacing | Token |
|---------|------|--------|-------------|----------------|-------|
| Label | `14px` | `400` | `20px` | `0` | Body 1 fix / Regular |
| Input text (`lg`) | `16px` | `500` | `22px` | `-0.16px` | H8 fix / Medium |
| Input text (`sm`) | `14px` | `500` | `20px` | `-0.14px` | Body 1 fix / Medium |
| Placeholder | `14px` (`lg`: `16px`) | `500` | — | — | H8 fix / Medium |
| Help message | `12px` | `400` | `16px` | `0` | Caption 1 / Regular |
| Symbols counter | `12px` | `400` | `16px` | `0` | Caption 1 / Regular |

---

## States

### Цвета рамки и фона

| State | Border | Background |
|-------|--------|-----------|
| `Default` | `var(--color-border-default, #cdcdcd)` | `var(--color-surface-raised, #ffffff)` |
| `Hover` | `var(--color-bg-accent-primary, #bfa369)` | `var(--color-surface-raised, #ffffff)` |
| `Focus` | `var(--color-bg-accent-primary, #bfa369)` + focus ring | `var(--color-surface-raised, #ffffff)` |
| `Disable` | `var(--color-border-default, #cdcdcd)` | `rgba(28, 28, 28, 0.05)` |
| `Error` | `var(--color-border-error-default, #e32f43)` | `var(--color-surface-raised, #ffffff)` |

**Focus ring (Focus/КИБ):**
```
box-shadow: 0 0 0 4px rgba(191, 163, 105, 0.2)
```

### Цвета текста

| State | Input text | Label text | Placeholder |
|-------|-----------|-----------|-------------|
| `Default` | `var(--color-text-primary, #1c1c1c)` | `var(--color-text-secondary, #676767)` | `var(--color-text-tertiary, #9a9a9a)` |
| `Hover` | `var(--color-text-primary, #1c1c1c)` | `var(--color-text-secondary, #676767)` | `var(--color-text-tertiary, #9a9a9a)` |
| `Focus` | `var(--color-text-primary, #1c1c1c)` | `var(--color-text-secondary, #676767)` | `var(--color-text-tertiary, #9a9a9a)` |
| `Disable` | `var(--color-text-secondary, #676767)` | `var(--color-text-secondary, #676767)` | `var(--color-text-tertiary, #9a9a9a)` |
| `Error` | `var(--color-text-primary, #1c1c1c)` | `var(--color-text-error-default, #bd132b)` | `var(--color-text-tertiary, #9a9a9a)` |

---

## Help Message

| `helpMessage` | Icon | Icon size | Text color | Token |
|---------------|------|-----------|-----------|-------|
| `Default` | нет | — | `var(--color-text-secondary, #676767)` | — |
| `Success` | `tick` (галочка) | `12×12px` | `var(--color-text-success-default, #307359)` | `--text/success-default` |
| `Warning` | `danger` (треугольник) | `12×12px` | `var(--color-text-warning-default, #93531f)` | `--text/warning-default` |
| `Error` | `danger` (треугольник) | `12×12px` | `var(--color-text-error-default, #bd132b)` | `--text/error-default` |

Gap icon — текст: `4px`.

---

## Symbols Counter (счётчик символов)

- Позиция: правая часть строки Message, `text-align: right`
- Цвет: `var(--color-text-secondary, #676767)` во всех состояниях (кроме disabled — `opacity: 0.5` на весь компонент)
- Формат: `«текущее/максимальное»` — `0/100`, `4/100`

---

## Анатомия компонента

```
.textarea-wrapper                 ← flex-col, gap 4px
  ├── .textarea-label             ← Label (опц.)
  └── .textarea-field-group       ← flex-col, gap 6px
        ├── .textarea-label-text  ← текст лейбла
        └── .textarea-input       ← нативный <textarea> обёрнутый в div
              ├── leading-icon    ← 20×20px (опц.)
              ├── <textarea>      ← flex: 1
              └── trailing-icon   ← 20×20px (опц.)
  └── .textarea-message           ← flex-row justify-between (опц.)
        ├── .textarea-help        ← icon + текст
        └── .textarea-symbols     ← счётчик
```

---

## CSS Implementation

```css
/* ─── Wrapper ───────────────────────────────────────────── */
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  width: 100%; /* fluid — Figma показывает 320px/280px как пример */
}

/* ─── Label ─────────────────────────────────────────────── */
.textarea-label-text {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

.textarea-wrapper--error .textarea-label-text {
  color: var(--color-text-error-default, #bd132b);
}

.textarea-wrapper--disabled .textarea-label-text {
  color: var(--color-text-secondary, #676767);
  opacity: 0.5;
}

/* ─── Field group (label + input) ───────────────────────── */
.textarea-field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  width: 100%;
}

/* ─── Input container ───────────────────────────────────── */
.textarea-input {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  background: var(--color-surface-raised, #ffffff);
  border: 1px solid var(--color-border-default, #cdcdcd);
  border-radius: 12px;
  overflow: hidden;
  transition:
    border-color var(--duration-fast) var(--easing-default),
    box-shadow var(--duration-fast) var(--easing-default),
    background var(--duration-fast) var(--easing-default);
}

/* Size: lg */
.textarea-input--lg {
  min-height: 72px;
  padding: 14px 16px; /* --ui/input-outline/lg/px */
}

/* Size: sm */
.textarea-input--sm {
  min-height: 60px;
  padding: 10px 12px; /* --ui/input-outline/sm/px */
}

/* ─── States ─────────────────────────────────────────────── */
.textarea-input:hover,
.textarea-input--hover {
  border-color: var(--color-bg-accent-primary, #bfa369);
}

.textarea-input:focus-within,
.textarea-input--focus {
  border-color: var(--color-bg-accent-primary, #bfa369);
  box-shadow: 0 0 0 4px rgba(191, 163, 105, 0.2); /* Focus/КИБ */
  outline: none;
}

.textarea-input--error {
  border-color: var(--color-border-error-default, #e32f43);
}

.textarea-input--disabled,
.textarea-wrapper--disabled .textarea-input {
  background: rgba(28, 28, 28, 0.05);
  pointer-events: none;
}

/* ─── Нативный <textarea> ───────────────────────────────── */
.textarea-input textarea {
  flex: 1 0 0;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  resize: none; /* resize управляется через CSS или JS */
  font-family: var(--font-family-base);
  color: var(--color-text-primary, #1c1c1c);
  -webkit-appearance: none;
  appearance: none;
}

/* lg */
.textarea-input--lg textarea {
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  line-height: 22px;
  letter-spacing: -0.16px;
}

/* sm */
.textarea-input--sm textarea {
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-medium);
  line-height: 20px;
  letter-spacing: -0.14px;
}

.textarea-input textarea::placeholder {
  color: var(--color-text-tertiary, #9a9a9a);
  font-weight: var(--font-weight-medium);
}

.textarea-input--disabled textarea,
.textarea-wrapper--disabled textarea {
  color: var(--color-text-secondary, #676767);
}

/* LongText (Hug) — авторасширение */
.textarea-input--hug {
  height: auto;
}

.textarea-input--hug textarea {
  overflow: hidden; /* прячем скроллбар при auto-height */
}

/* Scrolled — зафиксированная высота со скроллом */
.textarea-input--scrolled textarea {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-surface-disabled, #b2b2b2) var(--color-surface-primary, #f2f2f2);
}

/* ─── Иконки ─────────────────────────────────────────────── */
.textarea-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-icon-secondary, #676767);
  margin-top: 1px; /* выравнивание с первой строкой текста */
}

/* ─── Message (help + symbols) ──────────────────────────── */
.textarea-message {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.textarea-help {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-regular);
  line-height: 16px;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
}

.textarea-help__icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Success */
.textarea-wrapper--success .textarea-help {
  color: var(--color-text-success-default, #307359);
}

/* Warning */
.textarea-wrapper--warning .textarea-help {
  color: var(--color-text-warning-default, #93531f);
}

/* Error */
.textarea-wrapper--error .textarea-help {
  color: var(--color-text-error-default, #bd132b);
}

.textarea-symbols {
  flex: 1 0 0;
  font-family: var(--font-family-base);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-regular);
  line-height: 16px;
  text-align: right;
  color: var(--color-text-secondary, #676767);
  white-space: nowrap;
  flex-shrink: 0;
}

/* ─── Disabled — весь компонент ─────────────────────────── */
.textarea-wrapper--disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

---

## HTML

```html
<!-- lg, Default, пустой -->
<div class="textarea-wrapper">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-1">Label</label>
    <div class="textarea-input textarea-input--lg">
      <svg class="textarea-icon" width="20" height="20"><!-- search --></svg>
      <textarea
        id="ta-1"
        class=""
        placeholder="Введите текст..."
        rows="3"
      ></textarea>
      <svg class="textarea-icon" width="20" height="20"><!-- x-close --></svg>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">Help message</span>
    <span class="textarea-symbols">0/100</span>
  </div>
</div>

<!-- lg, Hover -->
<div class="textarea-wrapper">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-2">Label</label>
    <div class="textarea-input textarea-input--lg textarea-input--hover">
      <textarea id="ta-2" rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">Help message</span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- lg, Focus -->
<div class="textarea-wrapper">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-3">Label</label>
    <div class="textarea-input textarea-input--lg textarea-input--focus">
      <textarea id="ta-3" rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">Help message</span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- lg, Disabled -->
<div class="textarea-wrapper textarea-wrapper--disabled">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-4">Label</label>
    <div class="textarea-input textarea-input--lg textarea-input--disabled">
      <textarea id="ta-4" disabled rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">Help message</span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- lg, Error -->
<div class="textarea-wrapper textarea-wrapper--error">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-5">Label</label>
    <div class="textarea-input textarea-input--lg textarea-input--error">
      <textarea id="ta-5" aria-invalid="true" aria-describedby="ta-5-error" rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help" id="ta-5-error" role="alert">
      <svg class="textarea-help__icon" width="12" height="12"><!-- danger --></svg>
      Error message
    </span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- lg, Success -->
<div class="textarea-wrapper textarea-wrapper--success">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-6">Label</label>
    <div class="textarea-input textarea-input--lg">
      <textarea id="ta-6" rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">
      <svg class="textarea-help__icon" width="12" height="12"><!-- tick --></svg>
      Success message
    </span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- lg, Warning -->
<div class="textarea-wrapper textarea-wrapper--warning">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-7">Label</label>
    <div class="textarea-input textarea-input--lg">
      <textarea id="ta-7" rows="3">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">
      <svg class="textarea-help__icon" width="12" height="12"><!-- danger --></svg>
      Warning message
    </span>
    <span class="textarea-symbols">4/100</span>
  </div>
</div>

<!-- sm, Default -->
<div class="textarea-wrapper">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-8">Label</label>
    <div class="textarea-input textarea-input--sm">
      <textarea id="ta-8" rows="2">Text</textarea>
    </div>
  </div>
  <div class="textarea-message">
    <span class="textarea-help">Help message</span>
    <span class="textarea-symbols">0/100</span>
  </div>
</div>

<!-- LongText (Hug) — авторасширение -->
<div class="textarea-wrapper">
  <div class="textarea-field-group">
    <label class="textarea-label-text" for="ta-9">Label</label>
    <div class="textarea-input textarea-input--lg textarea-input--hug">
      <textarea
        id="ta-9"
        rows="3"
        oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'"
      >Длинный текст который переносится на несколько строк...</textarea>
    </div>
  </div>
</div>
```

---

## Rules for AI assistants

- ✅ Нативный `<textarea>` — не `<div contenteditable>`. Только нативный элемент обеспечивает корректный UX и accessibility.
- ✅ `<label for="id">` + `id` на `<textarea>` — обязательная семантическая связь.
- ✅ `aria-invalid="true"` + `aria-describedby="[error-id]"` при Error-состоянии; `role="alert"` на сообщении об ошибке.
- ✅ Padding на контейнере `.textarea-input`, НЕ на самом `<textarea>` — так иконки выровнены по паддингу.
- ✅ Высота контейнера: `min-height: 72px` (lg) / `60px` (sm). Для LongText — `height: auto` + JS `scrollHeight`.
- ✅ Hover и Focus меняют `border-color` на `var(--color-bg-accent-primary, #bfa369)` — одинаковый цвет границы.
- ✅ Focus добавляет shadow `0 0 0 4px rgba(191,163,105,0.2)` (Focus/КИБ) поверх акцентной границы.
- ✅ Disabled: bg `rgba(28,28,28,0.05)`, `opacity: 0.5` на весь wrapper — не менять цвета индивидуально.
- ✅ Error label цвет: `var(--color-text-error-default, #bd132b)` — меняется только лейбл, НЕ фон input.
- ✅ Help message icon: `12×12px` (`tick` для success, `danger` для warning/error), gap `4px`.
- ✅ Symbols counter выровнен по правому краю (`text-align: right`, `flex-shrink: 0`).
- ✅ `resize: none` на `<textarea>` — кастомный resize-хэндл если нужен.
- ✅ `overflow-y: auto` + кастомный скроллбар при `text=Scrolled`.
- ❌ Не добавлять `border` на сам `<textarea>` — только на контейнер `.textarea-input`.
- ❌ Не использовать `focus:` на контейнере — использовать `:focus-within`.
- ❌ Не путать sm `14px` текст (Body 1 fix) и lg `16px` текст (H8 fix) — разные токены.
- ❌ Не убирать `min-height` при LongText — textarea должна начинаться от минимальной высоты.
